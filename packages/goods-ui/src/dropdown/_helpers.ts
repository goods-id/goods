import { BoxProps } from '@pomona/goods-core'
import { toCssValue } from '../_utils'
import { DropdownProps, OptionItem } from './_types'

export function findOption<K extends keyof OptionItem>(
  optionItems: OptionItem[],
  searched: { key: K; value: OptionItem[K] }
): OptionItem {
  const { key, value } = searched
  const searchResult = optionItems.find(opt => opt[key] === value) || {
    value: '',
  }
  return {
    ...searchResult,
    ...(!searchResult.label && { label: searchResult.value }),
  }
}

export function getFocusedElement(
  menuEl: HTMLElement | null,
  focusedVal?: string
): HTMLDivElement | null {
  if (!menuEl || !focusedVal) return null
  return menuEl.querySelector<HTMLDivElement>(`div[data-value="${focusedVal}"]`)
}

interface InputAndMenuRadius<V = '0px' | undefined> {
  inputTopLeft: V
  inputTopRight: V
  inputBotLeft: V
  inputBotRight: V
  menuTopLeft: V
  menuTopRight: V
  menuBotRight: V
  menuBotLeft: V
}

interface InputRect {
  top: number
  right: number
  bottom: number
  left: number
}

export const initialInputAndMenuRadius: InputAndMenuRadius = {
  inputBotLeft: undefined,
  inputBotRight: undefined,
  inputTopLeft: undefined,
  inputTopRight: undefined,
  menuBotLeft: undefined,
  menuBotRight: undefined,
  menuTopLeft: undefined,
  menuTopRight: undefined,
}

function getRadiusOnBottomPlacement(
  menuLeft: number,
  menuRight: number,
  inputLeft: number,
  inputRight: number
): InputAndMenuRadius {
  const result = { ...initialInputAndMenuRadius }

  if (menuLeft === inputLeft) {
    result.inputBotLeft = '0px'
    result.menuTopLeft = '0px'
  } else if (menuLeft < inputLeft || menuRight === inputLeft) {
    result.inputBotLeft = '0px'
  } else {
    result.menuTopLeft = '0px'
  }

  if (menuRight === inputRight) {
    result.inputBotRight = '0px'
    result.menuTopRight = '0px'
  } else if (menuRight > inputRight || menuLeft === inputRight) {
    result.inputBotRight = '0px'
  } else {
    result.menuTopRight = '0px'
  }

  return result
}

function getRadiusOnTopPlacement(
  menuLeft: number,
  menuRight: number,
  inputLeft: number,
  inputRight: number
): InputAndMenuRadius {
  const result = { ...initialInputAndMenuRadius }

  if (menuLeft === inputLeft) {
    result.inputTopLeft = '0px'
    result.menuBotLeft = '0px'
  } else if (menuLeft < inputLeft || menuRight === inputLeft) {
    result.inputTopLeft = '0px'
  } else {
    result.menuBotLeft = '0px'
  }

  if (menuRight === inputRight) {
    result.inputTopRight = '0px'
    result.menuBotRight = '0px'
  } else if (menuRight > inputRight || menuLeft === inputRight) {
    result.inputTopRight = '0px'
  } else {
    result.menuBotRight = '0px'
  }

  return result
}

function getRadiusOnRightPlacement(
  menuTop: number,
  menuBot: number,
  inputTop: number,
  inputBot: number
): InputAndMenuRadius {
  const result = { ...initialInputAndMenuRadius }

  if (menuTop === inputTop) {
    result.inputTopRight = '0px'
    result.menuTopLeft = '0px'
  } else if (menuTop < inputTop) {
    result.inputTopRight = '0px'
  } else {
    result.menuTopLeft = '0px'
  }

  if (menuBot === inputBot) {
    result.inputBotRight = '0px'
    result.menuBotLeft = '0px'
  } else if (menuBot > inputBot) {
    result.inputBotRight = '0px'
  } else {
    result.menuBotLeft = '0px'
  }

  return result
}

function getRadiusOnLeftPlacement(
  menuTop: number,
  menuBot: number,
  inputTop: number,
  inputBot: number
): InputAndMenuRadius {
  const result = { ...initialInputAndMenuRadius }

  if (menuTop === inputTop) {
    result.inputTopLeft = '0px'
    result.menuTopRight = '0px'
  } else if (menuTop < inputTop) {
    result.inputTopLeft = '0px'
  } else {
    result.menuTopRight = '0px'
  }

  if (menuBot === inputBot) {
    result.inputBotLeft = '0px'
    result.menuBotRight = '0px'
  } else if (menuBot > inputBot) {
    result.inputBotLeft = '0px'
  } else {
    result.menuBotRight = '0px'
  }

  return result
}

function getInputAndMenuRadiusSync(
  menuEl: HTMLElement,
  { top, right, bottom, left }: InputRect
): InputAndMenuRadius {
  let menuElement = menuEl
  const parent = menuElement.parentElement
  if (parent && getComputedStyle(parent).position === 'absolute') {
    menuElement = parent
  }

  const menuRect = menuElement.getBoundingClientRect()
  const {
    left: menuLeft,
    right: menuRight,
    top: menuTop,
    bottom: menuBottom,
  } = menuRect

  if (
    menuTop > bottom ||
    menuLeft > right ||
    menuBottom < top ||
    menuRight < left
  ) {
    return initialInputAndMenuRadius
  }

  if (top < menuTop && menuTop <= bottom) {
    if (menuTop === bottom) {
      return getRadiusOnBottomPlacement(menuLeft, menuRight, left, right)
    }
    return {
      ...initialInputAndMenuRadius,
      ...(menuLeft === left
        ? { menuTopLeft: '0px', inputBotLeft: '0px' }
        : menuLeft === right && { menuTopLeft: '0px', inputBotRight: '0px' }),
      ...(menuRight === right
        ? { menuTopRight: '0px', inputBotRight: '0px' }
        : menuRight === left && { menuTopRight: '0px', inputBotLeft: '0px' }),
    }
  }

  if (bottom > menuBottom && menuBottom >= top) {
    if (menuBottom === top) {
      return getRadiusOnTopPlacement(menuLeft, menuRight, left, right)
    }
    return {
      ...initialInputAndMenuRadius,
      ...(menuLeft === left
        ? { menuBotLeft: '0px', inputTopLeft: '0px' }
        : menuLeft === right && { menuBotLeft: '0px', inputTopRight: '0px' }),
      ...(menuRight === right
        ? { menuBotRight: '0px', inputTopRight: '0px' }
        : menuRight === left && { menuBotRight: '0px', inputTopLeft: '0px' }),
    }
  }

  if (menuLeft === right) {
    return getRadiusOnRightPlacement(menuTop, menuBottom, top, bottom)
  }

  if (menuRight === left) {
    return getRadiusOnLeftPlacement(menuTop, menuBottom, top, bottom)
  }

  return initialInputAndMenuRadius
}

let timeout: number

export function getInputAndMenuRadius(
  menuEl: HTMLElement,
  inputRect: InputRect
): Promise<InputAndMenuRadius> {
  return new Promise(res => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      const result = getInputAndMenuRadiusSync(menuEl, inputRect)
      res(result)
    }, 100)
  })
}

interface GetDefaultInputAndMenuPropsParam
  extends Pick<
    DropdownProps,
    'focusProps' | 'hoverProps' | 'errorProps' | 'menuOffsetTop' | 'isError'
  > {
  inputRect: DOMRect
}

interface GetDefaultInputAndMenuPropsReturn
  extends Pick<BoxProps, 'bW' | 'bS' | 'bC'> {
  bgHover: BoxProps['bg']
  bWError: BoxProps['bW']
  bSError: BoxProps['bS']
  bCError: BoxProps['bC']
  bgError: BoxProps['bg']
  menuTop: string
}

export function getDefaultInputAndMenuProps({
  focusProps,
  hoverProps,
  errorProps,
  isError,
  menuOffsetTop,
  inputRect,
}: GetDefaultInputAndMenuPropsParam): GetDefaultInputAndMenuPropsReturn {
  let { bW, bS, bC } = focusProps || {}
  let { bg: bgHover } = hoverProps || {}
  const {
    bW: bWError = '1px',
    bS: bSError = 'solid',
    bC: bCError = 'red60',
    bg: bgError = 'red10',
  } = errorProps || {}

  if (isError) {
    bW = bWError
    bS = bSError
    bC = bCError
    bgHover = bgError
  }

  const { height } = inputRect
  const menuOffsetTopValue = toCssValue(menuOffsetTop)
  const menuTop = menuOffsetTopValue
    ? `calc(${height - 1}px + ${menuOffsetTopValue})`
    : `${height - 1}px`

  return { bCError, bSError, bWError, bgError, bgHover, menuTop, bC, bS, bW }
}
