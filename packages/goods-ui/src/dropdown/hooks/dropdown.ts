import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { DropdownProps, OptionItemWithHidden } from '../_types'
import {
  findOption,
  getFocusedElement,
  getInputAndMenuRadius,
  initialInputAndMenuRadius,
} from '../_helpers'
import {
  handleMouseDown,
  scrollIntoView,
  useDerivedStateFromProp,
  useRect,
} from '../../_utils'
import { ChangeEventInput } from '../../@types/global'

interface DropdownHookProps
  extends Pick<
    DropdownProps,
    | 'name'
    | 'readOnly'
    | 'disabled'
    | 'value'
    | 'options'
    | 'isMenuOpen'
    | 'onFocus'
    | 'onBlur'
    | 'onChange'
    | 'onKeyDown'
    | 'onSearch'
  > {
  ref?: Parameters<React.ForwardRefRenderFunction<HTMLInputElement>>[1]
}

interface DropdownHookState {
  isMenuOpen: boolean
  inputAndMenuRadius: typeof initialInputAndMenuRadius
  focusedValue: string
  selectedValue: string
  selectedLabel: string
  searchedValue: string
  filteredOptions: OptionItemWithHidden[]
  inputRef: React.RefObject<HTMLInputElement>
  inputRect: DOMRect
  menuRef: React.RefObject<HTMLDivElement>
}

interface DropdownHookAction {
  onClick(e: React.MouseEvent<HTMLInputElement>): void
  onFocus(e: React.FocusEvent<HTMLInputElement>): void | Promise<void>
  onBlur(e: React.FocusEvent<HTMLInputElement>): void | Promise<void>
  onSearch(e: ChangeEventInput): void | Promise<void>
  onSelect(e: React.MouseEvent<HTMLDivElement>): void
  onItemHover(e: React.MouseEvent<HTMLDivElement>): void
  onClear(e: React.MouseEvent): void
  onClearIconMouseDown(e: React.MouseEvent): void
  onMenuMouseDown(e: React.MouseEvent<HTMLDivElement>): void
  onMenuMouseMove(e: React.MouseEvent): void
  onKeyDown(e: React.KeyboardEvent): void
}

export function useDropdown({
  name = '',
  value = '',
  readOnly: readOnlyProps = false,
  disabled: disabledProps = false,
  options = [],
  isMenuOpen: isMenuOpenProps = false,
  onFocus: onFocusProps,
  onBlur: onBlurProps,
  onSearch: onSearchProps,
  onKeyDown: onKeyDownProps,
  onChange,
  ref,
}: DropdownHookProps = {}): [DropdownHookState, DropdownHookAction] {
  const [isBlockedItemHover, setBlockedItemHover] = useState(false)
  const [inputAndMenuRadius, setInputAndMenuRadius] = useState(
    initialInputAndMenuRadius
  )

  const [readOnly] = useDerivedStateFromProp(readOnlyProps)
  const [disabled] = useDerivedStateFromProp(disabledProps)
  const [isMenuOpen, setMenuOpen] = useDerivedStateFromProp(
    isMenuOpenProps && !readOnly
  )

  const { ref: inputRef, rect: inputRect } = useRect<HTMLInputElement>([
    isMenuOpen,
  ])
  const { top, right, bottom, left } = inputRect
  const menuRef = useRef<HTMLDivElement>(null)

  const [filteredOptions, setFilteredOptions] = useDerivedStateFromProp<
    OptionItemWithHidden[]
  >(options)

  const [focusedValue, setFocusedValue] = useState('')
  const [searchedValue, setSearchedValue] = useState('')
  const [selectedLabel, setSelectedLabel] = useState('')
  const [selectedValue, setSelectedValue] = useDerivedStateFromProp(value)

  const openMenu = useCallback(() => {
    if (readOnly) return
    setMenuOpen(true)
  }, [readOnly])

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    setSearchedValue('')
    setFocusedValue('')
  }, [])

  const focusToItem = useCallback(
    (dir?: 'up' | 'down') => {
      const focusableOptions = filteredOptions.filter(
        opt => !opt.hidden && !opt.disabled && opt.value !== selectedValue
      )

      const totalOptions = focusableOptions.length
      if (!totalOptions) return

      openMenu()
      if (!dir) {
        setFocusedValue(focusableOptions[0].value)
        return
      }

      setFocusedValue(prevFocused => {
        const focusedIndex = focusableOptions.findIndex(
          opt => opt.value === prevFocused
        )

        let nextFocusedIndex = 0
        if (dir === 'up') {
          nextFocusedIndex =
            focusedIndex > 0 ? focusedIndex - 1 : totalOptions - 1
        } else {
          nextFocusedIndex = (focusedIndex + 1) % totalOptions
        }

        return focusableOptions[nextFocusedIndex]?.value || ''
      })
    },
    [filteredOptions, selectedValue, openMenu]
  )

  const onFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (typeof onFocusProps === 'function') onFocusProps(e)
      openMenu()
    },
    [openMenu]
  )

  const onBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const { activeElement } = document
    if (menuRef.current?.contains(activeElement)) {
      inputRef.current?.focus()
      return
    }

    if (typeof onBlurProps === 'function') onBlurProps(e)

    closeMenu()
  }, [])

  const onSearch = useCallback((e: ChangeEventInput) => {
    if (e.target.readOnly) return
    if (typeof onSearchProps === 'function') onSearchProps(e)
    setMenuOpen(true)
    setSearchedValue(e.target.value)
  }, [])

  const onSelect = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const { title, dataset } = e.currentTarget
    const { value: val = '', disabled: dataDisabled, selected } = dataset
    const isDisabled = dataDisabled === 'true'
    if (isDisabled || selected === 'true') return
    if (typeof onChange === 'function') {
      onChange({
        name,
        value: val,
        label: title,
        disabled: isDisabled,
        event: e,
      })
    }
    setSelectedValue(val)
    setSelectedLabel(title)
    closeMenu()
  }, [])

  const onItemHover = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { value: hovered = '' } = e.currentTarget.dataset
      if (isBlockedItemHover || hovered === focusedValue) {
        return
      }
      setFocusedValue(hovered)
    },
    [focusedValue, isBlockedItemHover]
  )

  const onClear = useCallback(() => {
    setSelectedValue('')
    setSelectedLabel('')
    setSearchedValue('')
  }, [])

  const onClearIconMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (e.button !== 0) return
      handleMouseDown(e)
      if (inputRef.current === document.activeElement) {
        openMenu()
      }
    },
    [openMenu]
  )

  const onMenuMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return
    handleMouseDown(e)
    inputRef.current?.focus()
  }, [])

  const onMenuMouseMove = useCallback(() => {
    setBlockedItemHover(false)
  }, [])

  function onKeyDown(e: React.KeyboardEvent) {
    if (disabled || readOnly) return

    if (typeof onKeyDownProps === 'function') {
      onKeyDownProps(e)
      if (e.defaultPrevented) return
    }

    switch (e.key) {
      case 'Delete':
      case 'Backspace':
        if (searchedValue) return
        onClear()
        openMenu()
        break
      case 'ArrowUp':
        focusToItem('up')
        break
      case 'ArrowDown':
        focusToItem('down')
        break
      case 'Enter':
        if (readOnly) return
        if (!isMenuOpen) {
          openMenu()
          break
        }
        if (!focusedValue) {
          closeMenu()
          break
        }
        getFocusedElement(menuRef.current, focusedValue)?.click()
        break
      case 'Escape':
        closeMenu()
        inputRef.current?.blur()
        break
      default:
        return
    }

    setBlockedItemHover(true)
    e.preventDefault()
  }

  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement, [
    inputRef,
  ])

  useEffect(() => {
    const searchedRegExp = new RegExp(searchedValue, 'i')
    setFilteredOptions(prevOptions => {
      return prevOptions.map(item => ({
        ...item,
        hidden: !searchedRegExp.test(item.label || item.value),
      }))
    })
  }, [searchedValue])

  useEffect(() => {
    const menuEl = menuRef.current
    if (menuEl) {
      const focusedEl = getFocusedElement(menuEl, focusedValue)
      if (focusedEl) {
        scrollIntoView(menuEl, focusedEl)
      }
    }
  }, [focusedValue, menuRef])

  useEffect(() => {
    const { label = '' } = findOption(options, {
      key: 'value',
      value,
    })
    setSelectedLabel(label)
    if (label) setSearchedValue('')
  }, [value, options])

  useEffect(() => {
    const menuElement = menuRef.current
    if (!isMenuOpen || !menuElement) {
      setInputAndMenuRadius(initialInputAndMenuRadius)
    } else {
      getInputAndMenuRadius(menuElement, { top, right, bottom, left }).then(
        setInputAndMenuRadius
      )
    }
  }, [isMenuOpen, top, right, bottom, left])

  return [
    {
      isMenuOpen,
      inputAndMenuRadius,
      focusedValue,
      searchedValue,
      selectedValue,
      selectedLabel,
      filteredOptions,
      inputRef,
      inputRect,
      menuRef,
    },
    {
      onClick: openMenu,
      onFocus,
      onSearch,
      onBlur,
      onSelect,
      onItemHover,
      onClear,
      onClearIconMouseDown,
      onMenuMouseDown,
      onMenuMouseMove,
      onKeyDown,
    },
  ]
}
