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
  type: 'AFTER_FIRST_FETCH' | 'AFTER_FETCH_MORE' | 'SET_LOADING' | 'RESET_PAGE'
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
    const { options, loading } = payload
    const isLoading = Boolean(loading)
    switch (type) {
      case 'SET_LOADING':
        if (isLoading !== draft.loading) {
          draft.loading = isLoading
        }
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
        if (isLoading !== draft.loading) {
          draft.loading = isLoading
        }
        if (Array.isArray(options)) {
          draft.options = [...draft.options, ...options]
        }
        break
      case 'RESET_PAGE':
        draft.page = 0
        draft.loading = false
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
    | 'initialSearch'
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
  initialSearch = '',
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
        dispatch({ type: 'SET_LOADING', payload: { loading: true } })
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

  const [
    { menuRef, searchedValue, selectedLabel, isMenuOpen: isOpen, ...state },
    action,
  ] = useDropdown({
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

  const fetchMore = useCallback(
    async (newLoading = false) => {
      if (searchedValue && autoFilter) return [{ value: '', label: '' }]
      try {
        const newOptions = await fetchOptions({
          page,
          search: searchedValue || initialSearch,
          limit: fetchLimit,
        })
        dispatch({
          type: 'AFTER_FETCH_MORE',
          payload: { options: newOptions, loading: newLoading },
        })
        return newOptions
      } catch {
        return []
      }
    },
    [page, searchedValue, fetchOptions, initialSearch]
  )

  const { scrollTargetRef, isLoading } = useInfiniteScroll({
    scrollTargetRef: menuRef,
    fetchMore,
  })

  useEffect(() => {
    dispatch({ type: 'SET_LOADING', payload: { loading: true } })
    fetchOptions({ page: 0, search: initialSearch, limit: fetchLimit }).then(
      newOptions => {
        dispatch({
          type: 'AFTER_FIRST_FETCH',
          payload: { options: newOptions },
        })
      }
    )
  }, [...fetchDeps])

  const target = scrollTargetRef.current

  useEffect(() => {
    let isBottom = false
    if (target && isOpen) {
      const { scrollTop, clientHeight, scrollHeight } = target
      isBottom = scrollTop + clientHeight >= scrollHeight
    }
    if (autoFilter && initialSearch) {
      if (
        !isBottom &&
        page > 0 &&
        page <= 500 &&
        !selectedLabel &&
        !searchedValue
      ) {
        dispatch({ type: 'SET_LOADING', payload: { loading: true } })
        fetchMore(true).then(result => {
          if (!result.length) {
            dispatch({ type: 'RESET_PAGE' })
          }
        })
      } else {
        dispatch({ type: 'SET_LOADING', payload: { loading: false } })
      }
    }
  }, [page, initialSearch, selectedLabel, searchedValue, target, isOpen])

  return [
    {
      searchedValue,
      selectedLabel,
      isMenuOpen: isOpen,
      menuRef: scrollTargetRef,
      isLoading: isLoading || loading,
      ...state,
    },
    action,
  ]
}
