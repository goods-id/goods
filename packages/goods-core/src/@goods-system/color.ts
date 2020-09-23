import { system, ConfigStyle, get } from '@styled-system/core'
import { ThemeType } from '../theme'
import { Config, ResponsiveValue, GlobalsNumber } from '../@types/global'
import colors, { hexToRgba } from '../color'

export interface ColorProps<Theme extends ThemeType = ThemeType> {
  /**
   * **Text Color**
   *
   * The **color** CSS property sets the foreground color value of an element's text and text decorations, and sets the currentcolor value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.
   *
   * Can use color name defined in theme, color hex, color rgb, color rgba, or css globals
   *
   * **Syntax**: `'black30' | '#333333' | 'rgba(100, 100, 100, 0.4)' | 'rgb(100, 100, 100)' | 'inherit' | 'black'`
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
   * */
  c?: ResponsiveValue<
    keyof Required<Theme>['colors'] | GlobalsNumber | 'transparent',
    Theme
  >
  /**
   * **Alpha value for text color**
   *
   * If `cAlpha` is a number from 0 to 1, it will convert `c` (text color) to rgba value.
   * It works when text color is color name from goods theme or color hex.
   * */
  cAlpha?: number
  /**
   * **Background Color**
   *
   * The **background-color** CSS property sets the background color of an element.
   *
   * Can use color name defined in theme, color hex, color rgb, color rgba, or css globals
   *
   * **Syntax**: `'blue50' | '#0000ff' | 'rgba(0, 0, 255, 0.4)' | 'rgb(0, 0, 255)' | 'inherit' | 'blue'`
   * */
  bg?: ResponsiveValue<
    keyof Required<Theme>['colors'] | GlobalsNumber | 'transparent',
    Theme
  >
  /**
   * **Alpha value for background color**
   *
   * If `bgAlpha` is a number from 0 to 1,
   * it will convert `bg` (background color) to rgba value.
   * It works when background color is color name from goods theme or color hex.
   * */
  bgAlpha?: number
  /**
   * **Opacity**
   *
   * The **opacity** CSS property sets the transparency of an element or the degree to which content
   * behind an element is visible.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
   */
  opacity?: ResponsiveValue<number, Theme>
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
