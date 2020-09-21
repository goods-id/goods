import { Property as CSS } from 'csstype'
import { system, get } from '@styled-system/core'

import { ThemeType } from '../theme'
import { Config, ResponsiveValue } from '../@types/global'

export interface PositionProps<
  Theme extends ThemeType = ThemeType,
  TLength = string | number
> {
  /**
   * **Position**
   *
   * CSS property specifies the type of positioning method used for an element
   *
   * **Syntax**: `static | absolute | fixed | relative | sticky | initial | inherit`
   * */
  posi?: ResponsiveValue<CSS.Position, Theme>
  /**
   * **Z-index**
   *
   * CSS property specifies the stack order of an element. An element with greater stack order is always in front of an element with a lower stack order.
   *
   * **Syntax**: `auto | number | initial | inherit`
   * */
  z?: ResponsiveValue<CSS.ZIndex, Theme>
  /**
   * **Top**
   *
   * CSS property affects the vertical position of a positioned element.
   *
   * **Syntax**: `auto | length | y% | initial | inherit`
   * */
  top?: ResponsiveValue<CSS.Top<TLength>, Theme>
  /**
   * **Right**
   *
   * CSS property affects the horizontal position of a positioned element.
   *
   * **Syntax**: `auto | length | x% | initial | inherit`
   * */
  right?: ResponsiveValue<CSS.Right<TLength>, Theme>
  /**
   * **Bottom**
   *
   * CSS property affects the vertical position of a positioned element.
   *
   * **Syntax**: `auto | length | y% | initial | inherit`
   * */
  bottom?: ResponsiveValue<CSS.Bottom<TLength>, Theme>
  /**
   * **Left**
   *
   * CSS property affects the horizontal position of a positioned element.
   *
   * **Syntax**: `auto | length | x% | initial | inherit`
   * */
  left?: ResponsiveValue<CSS.Left<TLength>, Theme>
}

const isNumber = n => typeof n === 'number' && !Number.isNaN(n)
const getPosition = (n, scale) =>
  get(scale, n, !isNumber(n) || n > 1 ? n : `${n * 100}%`)

const config: Config<PositionProps> = {
  posi: { property: 'position' },
  z: { property: 'zIndex' },
  top: { property: 'top', transform: getPosition },
  right: { property: 'right', transform: getPosition },
  bottom: { property: 'bottom', transform: getPosition },
  left: { property: 'left', transform: getPosition },
}

export const position = system(config)
