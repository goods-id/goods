import { Property as CSS } from 'csstype'
import {
  system,
  get,
  Config,
  ResponsiveValue,
  ThemeType,
  TransformFn,
} from '@styled-system/core'

import { isNumber } from './core'

export interface LayoutProps<
  Theme extends ThemeType = ThemeType,
  TLength = string | number
> {
  /**
   * **Width**
   *
   * The **width** CSS property sets an element's width.
   * By default, it sets the width of the content area, but if box-sizing is set to border-box,
   * it sets the width of the border area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/width)
   *
   *   - Numbers from 0-1 are converted to percentage widths.
   *   - Numbers greater than 1 are converted to pixel values.
   *   - String values are passed as raw CSS values.
   *   - And object with keys `xs`, `sm`, `md`, `lg`, or `xl` are converted to responsive width styles.
   */
  w?: ResponsiveValue<CSS.Width<TLength> | boolean, Theme>
  /**
   * **Min Width**
   *
   * The **min-width** CSS property sets the minimum width of an element.
   * It prevents the used value of the width property from becoming smaller than the value specified for min-width.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width)
   *
   *   - Numbers from 0-1 are converted to percentage widths.
   *   - Numbers greater than 1 are converted to pixel values.
   *   - String values are passed as raw CSS values.
   *   - And object with keys `xs`, `sm`, `md`, `lg`, or `xl` are converted to responsive min-width styles.
   */
  minW?: ResponsiveValue<CSS.MinWidth<TLength>, Theme>
  /**
   * **Max Width**
   *
   * The **max-width** CSS property sets the maximum width of an element.
   * It prevents the used value of the width property from becoming larger than the value specified by max-width.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)
   *
   *   - Numbers from 0-1 are converted to percentage widths.
   *   - Numbers greater than 1 are converted to pixel values.
   *   - String values are passed as raw CSS values.
   *   - And object with keys `xs`, `sm`, `md`, `lg`, or `xl` are converted to responsive max-width styles.
   */
  maxW?: ResponsiveValue<CSS.MaxWidth<TLength>, Theme>
  /**
   * **Height**
   *
   *  The **height** CSS property specifies the height of an element.
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
  h?: ResponsiveValue<CSS.Height<TLength> | boolean, Theme>
  /**
   *  **Min Height**
   *
   *  The **min-height** CSS property sets the minimum height of an element.
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
  minH?: ResponsiveValue<CSS.MinHeight<TLength>, Theme>
  /**
   *  **Max Height**
   *
   *  The **max-height** CSS property sets the maximum height of an element.
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
  maxH?: ResponsiveValue<CSS.MaxHeight<TLength>, Theme>
  /**
   *   **Width** and **Height**
   *
   *   - Numbers from 0-1 are converted to both percentage widths and heights.
   *   - Numbers greater than 1 are converted to pixel values.
   *   - String values are passed as raw CSS values.
   *   - And object with keys `xs`, `sm`, `md`, `lg`, or `xl` are converted to responsive width and height styles.
   */
  s?: ResponsiveValue<CSS.Height<TLength>, Theme>
  /**
   * **Display**
   *
   * The **display** CSS property defines the display type of an element, which consists of the two basic qualities
   * of how an element generates boxes — the outer display type defining how the box participates in flow layout,
   * and the inner display type defining how the children of the box are laid out.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
   *
   * - String values are passed as raw CSS values.
   * - And object with keys `xs`, `sm`, `md`, `lg`, or `xl` are converted to responsive display styles.
   */
  d?: ResponsiveValue<CSS.Display, Theme>
  /**
   * **Vertical Align**
   *
   * The **vertical-align** CSS property specifies sets vertical alignment of an inline or table-cell box.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align)
   *
   * - String values are passed as raw CSS values.
   * - And object with keys `xs`, `sm`, `md`, `lg`, or `xl` are converted to responsive vertical-align styles.
   */
  vAlign?: ResponsiveValue<CSS.VerticalAlign<TLength>, Theme>
  /**
   * **Overflow**
   *
   * The **overflow** CSS property sets what to do when an element's content is too big to fit in its block
   * formatting context. It is a shorthand for overflow-x and overflow-y.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)
   *
   * - String values are passed as raw CSS values.
   * - And object with keys `xs`, `sm`, `md`, `lg`, or `xl` are converted to responsive overflow styles.
   */
  overflow?: ResponsiveValue<CSS.Overflow, Theme>
  /**
   * **Overflow X**
   *
   * The **overflow-x** CSS property sets what shows when content overflows a block-level element's left
   * and right edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x)
   *
   * - String values are passed as raw CSS values.
   * - And object with keys `xs`, `sm`, `md`, `lg`, or `xl` are converted to responsive overflow-x styles.
   */
  overflowX?: ResponsiveValue<CSS.OverflowX, Theme>
  /**
   * **Overflow Y**
   *
   * The **overflow-y** CSS property sets what shows when content overflows a block-level element's top
   * and bottom edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y)
   *
   * - String values are passed as raw CSS values.
   * - And object with keys `xs`, `sm`, `md`, `lg`, or `xl` are converted to responsive overflow-y styles.
   */
  overflowY?: ResponsiveValue<CSS.OverflowY, Theme>
}

const getSize: TransformFn<LayoutProps> = (n, scale) =>
  get(
    scale,
    n,
    n === true ? '100%' : !isNumber(n) || n > 1 || n < -1 ? n : `${n * 100}%`
  )

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

export const layout = system<LayoutProps>(config)
