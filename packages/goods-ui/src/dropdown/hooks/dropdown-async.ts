import { useCallback, useEffect, useReducer } from 'react'
import produce from 'immer'
import isEqual from 'react-fast-compare'
import { useInfiniteScroll } from '@pomona/goods-helper'
import { DropdownAsyncProps, OptionItem } from '../_types'
import { DropdownHookAction, DropdownHookState, useDropdown } from './dropdown'

interface DropdownAsyncState {
  loading: boolean
  page: number
  options: OptionItem[]
}

interface DropdownAsyncAction {
  type: 'AFTER_FIRST_FETCH' | 'AFTER_FETCH_MORE' | 'BEFORE_FIRST_FETCH'
  payload?: Partial<DropdownAsyncState>
}

const initialState: DropdownAsyncState = {
  loading: false,
  page: 0,
  options: [],
}

const reducer = produce(
  (draft: DropdownAsyncState, action: DropdownAsyncAction) => {
    const { type, payload = {} } = action
    const { options } = payload
    switch (type) {
      case 'BEFORE_FIRST_FETCH':
        draft.loading = true
        break
      case 'AFTER_FIRST_FETCH':
        draft.page = 1
        draft.loading = false
        if (Array.isArray(options) && !isEqual(options, draft.options)) {
          draft.options = options
        }
        break
      case 'AFTER_FETCH_MORE':
        draft.page += 1
        draft.loading = false
        if (Array.isArray(options)) {
          draft.options = [...draft.options, ...options]
        }
        break
      default:
        break
    }
  }
)

interface DropdownAsyncHookProps
  extends Pick<
    DropdownAsyncProps,
    | 'name'
    | 'readOnly'
    | 'disabled'
    | 'value'
    | 'isMenuOpen'
    | 'onFocus'
    | 'onBlur'
    | 'onChange'
    | 'onKeyDown'
    | 'onSearch'
    | 'fetchOptions'
    | 'fetchDeps'
    | 'fetchLimit'
    | 'autoFilter'
  > {
  ref?: Parameters<React.ForwardRefRenderFunction<HTMLInputElement>>[1]
}

interface DropdownAsyncHookState extends DropdownHookState {
  isLoading: boolean
}

export function useDropdownAsync({
  name = '',
  value = '',
  readOnly = false,
  disabled = false,
  isMenuOpen = false,
  onFocus,
  onBlur,
  onSearch,
  onKeyDown,
  onChange,
  autoFilter = false,
  fetchDeps = [],
  fetchLimit = 10,
  fetchOptions = () => Promise.resolve([]),
  ref,
}: DropdownAsyncHookProps = {}): [DropdownAsyncHookState, DropdownHookAction] {
  const [{ page, options, loading }, dispatch] = useReducer(
    reducer,
    initialState
  )

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (typeof onSearch === 'function') onSearch(e)
      if (!autoFilter) {
        dispatch({ type: 'BEFORE_FIRST_FETCH' })
        fetchOptions({
          page: 0,
          search: e.target.value,
          limit: fetchLimit,
        }).then(newOptions => {
          dispatch({
            type: 'AFTER_FIRST_FETCH',
            payload: { options: newOptions },
          })
        })
      }
    },
    [onSearch]
  )

  const [{ menuRef, searchedValue, ...state }, action] = useDropdown({
    ref,
    name,
    value,
    readOnly,
    disabled,
    isMenuOpen,
    onFocus,
    onBlur,
    onKeyDown,
    onChange,
    onSearch: handleSearch,
    options: options as OptionItem[],
    disabledAutoFilter: !autoFilter,
  })

  const fetchMore = useCallback(async () => {
    if (searchedValue && autoFilter) return [{ value: '', label: '' }]
    try {
      const newOptions = await fetchOptions({
        page,
        search: searchedValue,
        limit: fetchLimit,
      })
      dispatch({ type: 'AFTER_FETCH_MORE', payload: { options: newOptions } })
      return newOptions
    } catch {
      return []
    }
  }, [page, searchedValue, fetchOptions])

  const { scrollTargetRef, isLoading } = useInfiniteScroll({
    scrollTargetRef: menuRef,
    fetchMore,
  })

  useEffect(() => {
    dispatch({ type: 'BEFORE_FIRST_FETCH' })
    fetchOptions({ page: 0, search: '', limit: fetchLimit }).then(
      newOptions => {
        dispatch({
          type: 'AFTER_FIRST_FETCH',
          payload: { options: newOptions },
        })
      }
    )
  }, [...fetchDeps])

  return [
    {
      searchedValue,
      menuRef: scrollTargetRef,
      isLoading: isLoading || loading,
      ...state,
    },
    action,
  ]
}
