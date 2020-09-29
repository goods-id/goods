import { Property as CSS } from 'csstype'
import { system, Config, ResponsiveValue, ThemeType } from '@styled-system/core'

export interface BackgroundProps<Theme extends ThemeType = ThemeType> {
  /**
   * **Background**
   *
   * The background shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.
   * */
  bgs?: ResponsiveValue<CSS.Background, Theme>
  /**
   * **Background Image**
   *
   * The **`background-image`** CSS property sets one or more background images on an element.
   */
  bgImage?: ResponsiveValue<CSS.BackgroundImage, Theme>
  /**
   * **Background Size**
   *
   * CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
   * */
  bgSize?: ResponsiveValue<CSS.BackgroundSize, Theme>
  /**
   * **Background Posistion**
   *
   * CSS property sets the initial horizontal position for each background image. The position is relative to the position layer set by `background-origin`.
   *
   * **Syntax**: `[ center | [ [ left | right | x-start | x-end ]? <length-percentage>? ]! ]#`
   * */
  bgPosi?: ResponsiveValue<CSS.BackgroundPosition, Theme>
  /**
   * **Background Repeat**
   *
   * CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.
   *
   * **Syntax**: `repeat | repeat-x | repeat-y | no-repeat | initial | inherit`
   * */
  bgRepeat?: ResponsiveValue<CSS.BackgroundRepeat, Theme>
  /**
   * **Background Clip**
   *
   * CSS property sets whether an element's background `<color>` or `<image>` extends underneath its border.
   *
   * **Syntax**: `border-box | padding-box | content-box | initial | inherit`
   * */
  bgClip?: ResponsiveValue<CSS.BackgroundClip, Theme>
  /**
   * Background Attachment
   *
   * CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.
   *
   * **Syntax**: `scroll | fixed | local | initial | inherit`
   * */
  bgAttach?: ResponsiveValue<CSS.BackgroundAttachment, Theme>
}

const config: Config<BackgroundProps> = {
  bgs: { property: 'background' },
  bgImage: { property: 'backgroundImage' },
  bgSize: { property: 'backgroundSize' },
  bgPosi: { property: 'backgroundPosition' },
  bgRepeat: { property: 'backgroundRepeat' },
  bgClip: { property: 'backgroundClip' },
  bgAttach: { property: 'backgroundAttachment' },
}

export const background = system<BackgroundProps>(config)
