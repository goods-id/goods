import { Property as CSS } from 'csstype'
import {
  system,
  ThemeType,
  Config,
  ResponsiveValue,
  ShadowName,
} from '@styled-system/core'
import shadowConstant from '../shadow'

export interface ShadowProps<Theme extends ThemeType = ThemeType> {
  /**
   * **Box Shadow**
   *
   * The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
   * */
  shadow?: ResponsiveValue<ShadowName<Theme> | CSS.BoxShadow, Theme>
  /**
   * **Text Shadow**
   *
   * The text-shadow CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its decorations. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
   * */
  tShadow?: ResponsiveValue<ShadowName<Theme> | CSS.TextShadow, Theme>
}

const config: Config<ShadowProps> = {
  shadow: {
    property: 'boxShadow',
    scale: 'shadows',
    defaultScale: shadowConstant,
  },
  tShadow: {
    property: 'textShadow',
    scale: 'shadows',
    defaultScale: shadowConstant,
  },
}

export const shadow = system(config)
