import { color, ColorProps } from '@pomona/goods-core'
import { DefaultTheme } from 'styled-components'
import { IconButtonProps } from '../@types/global'

export const isIconButtonProps = (
  params?: React.ReactNode | IconButtonProps
): params is IconButtonProps => {
  if (!params) return false
  return typeof params === 'object' && 'icName' in params
}

export const getColor = (col: ColorProps['c'], theme: DefaultTheme): string => {
  const colorConst = color({ c: col, theme })?.color
  return colorConst || ''
}

export const cssUnitRegExp = /(%|ch|r?em|ex|vh|vw|vmin|vmax|px|cm|mm|in|pc|pt)$/

/**
 * To check and convert an arbitrary string to css length value
 * @param [str] an arbitrary string
 * @returns if `str` is not a valid css length, it will return **empty string**, otherwise it will return css length value
 *
 * @example
 * ```
 * toCssValue() // ''
 * toCssValue('10px') // '10px'
 * toCssValue('-1.2rem') // '-1.2rem'
 * toCssValue('10.6pxem') // '10.6em'
 * toCssValue('foo') // ''
 * toCssValue('abcd50vw') // ''
 * toCssValue('- 40px') // ''
 * ```
 */
export function toCssValue(str = ''): string {
  const float = parseFloat(str)
  const units = cssUnitRegExp.exec(str)
  return Number.isNaN(float) || !units ? '' : `${float}${units[0]}`
}
