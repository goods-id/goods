import * as CSS from 'csstype'
import { system, get } from 'styled-system'

import { ThemeType } from '../theme'
import { Config, ResponsiveValue } from '../@types/global'

export interface LayoutProps<
  Theme extends ThemeType = ThemeType,
  TLength = string | number
> {
  /**
   * Converted it into a CSS width declaration.
   *
   *   - Numbers from 0-1 are converted to percentage widths.
   *   - Numbers greater than 1 are converted to pixel values.
   *   - String values are passed as raw CSS values.
   *   - And object with keys `xs`, `sm`, `md`, `lg`, or `xl` are converted to responsive width styles.
   */
  w?: ResponsiveValue<CSS.WidthProperty<TLength> | boolean, Theme>
  /**
   * Converted it into a CSS min-width declaration.
   *
   * The min-width CSS property sets the minimum width of an element.
   * It prevents the used value of the width property from becoming smaller than the value specified for min-width.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width)
   *
   *   - Numbers from 0-1 are converted to percentage widths.
   *   - Numbers greater than 1 are converted to pixel values.
   *   - String values are passed as raw CSS values.
   *   - And object with keys `xs`, `sm`, `md`, `lg`, or `xl` are converted to responsive min-width styles.
   */
  minW?: ResponsiveValue<CSS.MinWidthProperty<TLength>, Theme>
  /**
   * Converted into a CSS max-width declaration.
   *
   * The max-width CSS property sets the maximum width of an element.
   * It prevents the used value of the width property from becoming larger than the value specified by max-width.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)
   *
   *   - Numbers from 0-1 are converted to percentage widths.
   *   - Numbers greater than 1 are converted to pixel values.
   *   - String values are passed as raw CSS values.
   *   - And object with keys `xs`, `sm`, `md`, `lg`, or `xl` are converted to responsive max-width styles.
   */
  maxW?: ResponsiveValue<CSS.MaxWidthProperty<TLength>, Theme>
  /**
   * Converted into a CSS height declaration.
   *
   *  The height CSS property specifies the height of an element.
   *  By default, the property defines the height of the content area.
   *  If box-sizing is set to border-box, however, it instead determines the height of the border area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/height)
   *
   *   - Numbers from 0-1 are converted to percentage heights.
   *   - Numbers greater than 1 are converted to pixel values.
   *   - String values are passed as raw CSS values.
   *   - And object with keys `xs`, `sm`, `md`, `lg`, or `xl` are converted to responsive height styles.
   */
  h?: ResponsiveValue<CSS.HeightProperty<TLength> | boolean, Theme>
  /**
   *  Converted into a CSS min-height declaration.
   *
   *  The min-height CSS property sets the minimum height of an element.
   *  It prevents the used value of the height property from becoming smaller
   *  than the value specified for min-height.
   *
   *  [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
   *
   *   - Numbers from 0-1 are converted to percentage heights.
   *   - Numbers greater than 1 are converted to pixel values.
   *   - String values are passed as raw CSS values.
   *   - And object with keys `xs`, `sm`, `md`, `lg`, or `xl` are converted to responsive min-height styles.
   */
  minH?: ResponsiveValue<CSS.MinHeightProperty<TLength>, Theme>
  /**
   *  Converted into a CSS max-height declaration.
   *
   *  The max-height CSS property sets the maximum height of an element.
   *  It prevents the used value of the height property from becoming larger than
   *  the value specified for max-height.
   *
   *  [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height)
   *
   *   - Numbers from 0-1 are converted to percentage heights.
   *   - Numbers greater than 1 are converted to pixel values.
   *   - String values are passed as raw CSS values.
   *   - And object with keys `xs`, `sm`, `md`, `lg`, or `xl` are converted to responsive max-height styles.
   */
  maxH?: ResponsiveValue<CSS.MaxHeightProperty<TLength>, Theme>
  /**
   *   Converted into CSS height and width declarations.
   *
   *   - Numbers from 0-1 are converted to both percentage widths and heights.
   *   - Numbers greater than 1 are converted to pixel values.
   *   - String values are passed as raw CSS values.
   *   - And object with keys `xs`, `sm`, `md`, `lg`, or `xl` are converted to responsive width and height styles.
   */
  s?: ResponsiveValue<CSS.HeightProperty<TLength>, Theme>
  /**
   * Converted into a CSS display declaration
   *
   * The display CSS property defines the display type of an element, which consists of the two basic qualities
   * of how an element generates boxes — the outer display type defining how the box participates in flow layout,
   * and the inner display type defining how the children of the box are laid out.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
   *
   * - String values are passed as raw CSS values.
   * - And object with keys `xs`, `sm`, `md`, `lg`, or `xl` are converted to responsive display styles.
   */
  d?: ResponsiveValue<CSS.DisplayProperty, Theme>
  /**
   * Converted into a CSS vertical-align declaration
   *
   * The vertical-align CSS property specifies sets vertical alignment of an inline or table-cell box.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align)
   *
   * - String values are passed as raw CSS values.
   * - And object with keys `xs`, `sm`, `md`, `lg`, or `xl` are converted to responsive vertical-align styles.
   */
  vAlign?: ResponsiveValue<CSS.VerticalAlignProperty<TLength>, Theme>
  /**
   * The overflow CSS property sets what to do when an element's content is too big to fit in its block
   * formatting context. It is a shorthand for overflow-x and overflow-y.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)
   *
   * - String values are passed as raw CSS values.
   * - And object with keys `xs`, `sm`, `md`, `lg`, or `xl` are converted to responsive overflow styles.
   */
  overflow?: ResponsiveValue<CSS.OverflowProperty, Theme>
  /**
   * The overflow-x CSS property sets what shows when content overflows a block-level element's left
   * and right edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x)
   *
   * - String values are passed as raw CSS values.
   * - And object with keys `xs`, `sm`, `md`, `lg`, or `xl` are converted to responsive overflow-x styles.
   */
  overflowX?: ResponsiveValue<CSS.OverflowXProperty, Theme>
  /**
   * The overflow-y CSS property sets what shows when content overflows a block-level element's top
   * and bottom edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y)
   *
   * - String values are passed as raw CSS values.
   * - And object with keys `xs`, `sm`, `md`, `lg`, or `xl` are converted to responsive overflow-y styles.
   */
  overflowY?: ResponsiveValue<CSS.OverflowYProperty, Theme>
}

const isNumber = n => typeof n === 'number' && !Number.isNaN(n)
const getSize = (n, scale) =>
  get(scale, n, n === true ? '100%' : !isNumber(n) || n > 1 ? n : `${n * 100}%`)

const config: Config<LayoutProps> = {
  w: { property: 'width', transform: getSize },
  minW: { property: 'minWidth', transform: getSize },
  maxW: { property: 'maxWidth', transform: getSize },
  h: { property: 'height', transform: getSize },
  minH: { property: 'minHeight', transform: getSize },
  maxH: { property: 'maxHeight', transform: getSize },
  s: { properties: ['width', 'height'], transform: getSize },
  d: { property: 'display' },
  vAlign: { property: 'verticalAlign' },
  overflow: true,
  overflowX: true,
  overflowY: true,
}

export const layout = system(config)
