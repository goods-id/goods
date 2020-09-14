import * as CSS from 'csstype'
import { system, ConfigStyle, get } from 'styled-system'

import { ThemeType } from '../theme'
import { Config, ResponsiveValue } from '../@types/global'
import colors, { hexToRgba } from '../color'

export interface ColorProps<Theme extends ThemeType = ThemeType> {
  /**
   * Text Color.
   * Can use color name defined in theme, color hex, color rgb, color rgba, or css globals
   * */
  c?: ResponsiveValue<keyof Required<Theme>['colors'] | CSS.Globals, Theme>
  /**
   * Alpha value for text color.
   * If `cAlpha` is a number from 0 to 1, it will convert `c` (text color) to rgba value.
   * It works when text color is color name from goods theme or color hex.
   * */
  cAlpha?: number
  /**
   * Background Color.
   * Can use color name defined in theme, color hex, color rgb, color rgba, or css globals
   * */
  bg?: ResponsiveValue<keyof Required<Theme>['colors'] | CSS.Globals, Theme>
  /**
   * Alpha value for background color.
   * If `bgAlpha` is a number from 0 to 1,
   * it will convert `bg` (background color) to rgba value.
   * It works when background color is color name from goods theme or color hex.
   * */
  bgAlpha?: number
  /**
   * The opacity CSS property sets the transparency of an element or the degree to which content
   * behind an element is visible.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
   */
  opacity?: ResponsiveValue<CSS.GlobalsNumber, Theme>
}

const addAlpha = (alphaKey: 'cAlpha' | 'bgAlpha') =>
  ((n, scale, props: ColorProps) => {
    const value = get(scale, n, n)
    const alpha = props[alphaKey]
    return alpha && alpha >= 0 && alpha <= 1 ? hexToRgba(value, alpha) : value
  }) as ConfigStyle['transform']

const config: Config<Omit<ColorProps, 'cAlpha' | 'bgAlpha'>> = {
  c: {
    property: 'color',
    scale: 'colors',
    defaultScale: colors,
    transform: addAlpha('cAlpha'),
  },
  bg: {
    property: 'backgroundColor',
    scale: 'colors',
    defaultScale: colors,
    transform: addAlpha('bgAlpha'),
  },
  opacity: true,
}

export const color = system(config)
