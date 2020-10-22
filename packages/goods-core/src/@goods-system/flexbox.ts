import { Property as CSS } from 'csstype'
import { system, Config, ResponsiveValue, ThemeType } from '@styled-system/core'

export interface FlexboxProps<Theme extends ThemeType = ThemeType> {
  /**
   * **Flex**
   *
   * The flex CSS shorthand property sets how a flex item will grow or shrink to fit the space available in its flex container.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
   * */
  f?: ResponsiveValue<CSS.Flex, Theme>
  /**
   * **Flex Direction**
   *
   * The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
   * */
  fDir?: ResponsiveValue<CSS.FlexDirection, Theme>
  /**
   * **Flex Grow**
   *
   * The flex-grow CSS property sets the flex grow factor of a flex item main size.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)
   * */
  fGrow?: ResponsiveValue<CSS.FlexGrow, Theme>
  /**
   * **Flex Shrink**
   *
   * The flex-shrink CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to flex-shrink.
   *
   * In use, flex-shrink is used alongside the other flex properties flex-grow and flex-basis, and normally defined using the flex shorthand.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
   * */
  fShrink?: ResponsiveValue<CSS.FlexShrink, Theme>
  /**
   * **Justify Content**
   *
   * The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
   * */
  fJustify?: ResponsiveValue<CSS.JustifyContent, Theme>
  /**
   * **Justify Items**
   *
   * The CSS **`justify-items`** property defines the default
   * `justify-self` for all items of the box, giving them all a
   * default way of justifying each box along the appropriate axis.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items)
   */
  fJustifyItems?: ResponsiveValue<CSS.JustifyItems, Theme>
  /**
   * **Justify Self**
   *
   * The CSS justify-self property sets the way a box is justified inside its alignment container along the appropriate axis.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justiy-self)
   * */
  fJSelf?: ResponsiveValue<CSS.JustifySelf, Theme>
  /**
   * **Align Items**
   *
   * The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
   * */
  fAlign?: ResponsiveValue<CSS.AlignItems, Theme>
  /**
   * **Align Self**
   *
   * The align-self CSS property overrides a grid or flex item's align-items value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
   * */
  fASelf?: ResponsiveValue<CSS.AlignSelf, Theme>
  /**
   * **Flex Wrap**
   *
   * The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)
   * */
  fWrap?: ResponsiveValue<CSS.FlexWrap, Theme>
  /**
   * **Order**
   *
   * The order CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending order value and then by their source code order.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/order)
   * */
  order?: ResponsiveValue<CSS.Order, Theme>
}

const config: Config<FlexboxProps> = {
  f: { property: 'flex' },
  fDir: { property: 'flexDirection' },
  fGrow: { property: 'flexGrow' },
  fShrink: { property: 'flexShrink' },
  fJustify: { property: 'justifyContent' },
  fJustifyItems: { property: 'justifyItems' },
  fJSelf: { property: 'justifySelf' },
  fAlign: { property: 'alignItems' },
  fASelf: { property: 'alignSelf' },
  fWrap: { property: 'flexWrap' },
  order: true,
}

export const flexbox = system<FlexboxProps>(config)
