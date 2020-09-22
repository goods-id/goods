import { Property as CSS } from 'csstype'
import { system } from '@styled-system/core'
import { Config, ResponsiveValue } from '../@types/global'
import { ThemeType } from '../theme'

export interface ListProps<Theme extends ThemeType = ThemeType> {
  /**
   * **List Style**
   *
   * The list-style CSS shorthand property allows you set all the list style properties at once.
   *
   * **Syntax**: `<'list-style-type'> || <'list-style-position'> || <'list-style-image'>`
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style)
   * */
  list?: ResponsiveValue<CSS.ListStyle, Theme>
  /**
   * **List Style Position**
   *
   * The list-style-position CSS property sets the position of the ::marker relative to a list item.
   *
   * **Syntax**: `inside | outside`
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position)
   * */
  listPosi?: ResponsiveValue<CSS.ListStylePosition, Theme>
  /**
   * **List Style Image**
   *
   * The list-style-image CSS property sets an image to be used as the list item marker.
   *
   * **Syntax**: `<url> | none`
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image)
   * */
  listImage?: ResponsiveValue<CSS.ListStyleImage, Theme>
  /**
   * **List Style Type**
   *
   * The list-style-type CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.
   *
   * **Syntax**: `<counter-style> | <string> | none`
   *
   * where: `<counter-style> = <counter-style-name> | symbols()`
   *
   * where: `<counter-style-name> = <custom-ident>`
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type)
   * */
  listType?: ResponsiveValue<CSS.ListStyleType, Theme>
}

const config: Config<ListProps> = {
  list: { property: 'listStyle' },
  listPosi: { property: 'listStylePosition' },
  listImage: { property: 'listStyleImage' },
  listType: { property: 'listStyleType' },
}

export const list = system(config)
