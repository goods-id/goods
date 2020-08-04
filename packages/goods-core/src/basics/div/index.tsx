import React from 'react'
import styled from 'styled-components'
import {
  WidthProperty,
  HeightProperty,
  MarginProperty,
  PaddingProperty,
  MinWidthProperty,
  MinHeightProperty,
  MaxWidthProperty,
  MaxHeightProperty,
  BackgroundColorProperty,
  ColorProperty,
  ZIndexProperty,
  PositionProperty,
  TopProperty,
  LeftProperty,
  RightProperty,
  BottomProperty,
  BoxShadowProperty,
  BorderRadiusProperty,
  CursorProperty,
  TransformProperty,
  OverflowProperty,
  OverflowWrapProperty,
  DisplayProperty,
  FlexProperty,
  FlexDirectionProperty,
  JustifyContentProperty,
  JustifySelfProperty,
  AlignItemsProperty,
  AlignSelfProperty,
  BorderProperty,
  BorderColorProperty,
  BorderTopProperty,
  BorderTopWidthProperty,
  BorderTopColorProperty,
  BorderLeftProperty,
  BorderLeftWidthProperty,
  BorderLeftColorProperty,
  BorderRightProperty,
  BorderRightWidthProperty,
  BorderRightColorProperty,
  BorderBottomProperty,
  BorderBottomWidthProperty,
  BorderBottomColorProperty,
  GlobalsNumber,
} from 'csstype'
import { BaseProps } from '../../@types/global'
import colors from '../../color'

export interface DivCssProps<TLength = string | 0> {
  /**
   * Width
   */
  w?: WidthProperty<TLength>
  /**
   * Height
   */
  h?: HeightProperty<TLength>
  /**
   * Margin
   */
  m?: MarginProperty<TLength>
  /**
   * Padding
   */
  p?: PaddingProperty<TLength>
  /**
   * Min Width
   */
  minW?: MinWidthProperty<TLength>
  /**
   * Max Width
   */
  maxW?: MaxWidthProperty<TLength>
  /**
   * Min Height
   */
  minH?: MinHeightProperty<TLength>
  /**
   * Max Height
   */
  maxH?: MaxHeightProperty<TLength>
  /**
   * Background Color
   */
  bg?: BackgroundColorProperty
  /**
   *  Color
   */
  c?: ColorProperty
  /**
   * Z Index
   */
  z?: ZIndexProperty
  /**
   * Position
   */
  position?: PositionProperty
  /**
   * Top
   */
  top?: TopProperty<TLength>
  /**
   * Left
   */
  left?: LeftProperty<TLength>
  /**
   * Right
   */
  right?: RightProperty<TLength>
  /**
   * Bottom
   */
  bottom?: BottomProperty<TLength>
  /**
   * Shadow
   */
  shadow?: BoxShadowProperty
  /**
   * Radius
   */
  radius?: BorderRadiusProperty<TLength>
  /**
   * Cursor
   */
  cursor?: CursorProperty
  /**
   * Transform
   */
  transform?: TransformProperty
  /**
   * Overflow
   */
  overflow?: OverflowProperty
  /**
   * Overflow Wrap
   */
  overflowWrap?: OverflowWrapProperty
  /**
   * Display
   */
  d?: DisplayProperty
  /**
   * Flex
   */
  f?: FlexProperty<TLength>
  /**
   * Flex Direction
   */
  fDir?: FlexDirectionProperty
  /**
   * Flex Grow
   */
  fGrow?: GlobalsNumber
  /**
   * Flex Shrink
   */
  fShrink?: GlobalsNumber
  /**
   * Justify Content
   */
  fJustify?: JustifyContentProperty
  /**
   * Justify Self
   */
  fJSelf?: JustifySelfProperty
  /**
   * Align Items
   */
  fAlign?: AlignItemsProperty
  /**
   * Align Self
   */
  fASelf?: AlignSelfProperty
  /**
   * Border
   */
  b?: BorderProperty<TLength>
  /**
   * Border Color
   */
  bColor?: BorderColorProperty
  /**
   * Border Top
   */
  bTop?: BorderTopProperty<TLength>
  /**
   * Border Top Color
   */
  bTopColor?: BorderTopColorProperty
  /**
   * Border Top Width
   */
  bTopWidth?: BorderTopWidthProperty<TLength>
  /**
   * Border Left
   */
  bLeft?: BorderLeftProperty<TLength>
  /**
   * Border Left Color
   */
  bLeftColor?: BorderLeftColorProperty
  /**
   * Border Left Width
   */
  bLeftWidth?: BorderLeftWidthProperty<TLength>
  /**
   * Border Right
   */
  bRight?: BorderRightProperty<TLength>
  /**
   * Border Right Color
   */
  bRightColor?: BorderRightColorProperty
  /**
   * Border Right Width
   */
  bRightWidth?: BorderRightWidthProperty<TLength>
  /**
   * Border Bottom
   */
  bBottom?: BorderBottomProperty<TLength>
  /**
   * Border Bottom Color
   */
  bBottomColor?: BorderBottomColorProperty
  /**
   * Border Bottom Width
   */
  bBottomWidth?: BorderBottomWidthProperty<TLength>
  /**
   * Hover Background Color
   */
  hoverBg?: BackgroundColorProperty
  /**
   * Hover Border Color
   */
  hoverBorderColor?: BorderColorProperty
  /**
   * Hover Text Color
   */
  hoverTextColor?: ColorProperty
  /**
   * Hover Box Shadow Color
   */
  hoverShadowColor?: BoxShadowProperty
  /**
   * ScrollBar Width
   */
  scrollBarWidth?: WidthProperty<TLength>
  /**
   * ScrollBar Height
   */
  scrollBarHeight?: HeightProperty<TLength>
  /**
   * ScrollBar Color
   */
  scrollBarColor?: ColorProperty
  /**
   * ScrollBar Background Color
   */
  scrollBarBackgroundColor?: BackgroundColorProperty
  /**
   * ScrollBar Radius
   */
  scrollBarRadius?: BorderRadiusProperty<TLength>
}

const DivStyled = styled.div<DivCssProps>(
  ({
    w,
    h,
    m,
    p,
    minW,
    maxW,
    minH,
    maxH,
    bg,
    c,
    z,
    position,
    top,
    left,
    right,
    bottom,
    shadow,
    radius,
    cursor,
    overflow,
    overflowWrap,
    transform,
    d = 'flex',
    f,
    fDir,
    fGrow,
    fShrink,
    fJustify,
    fJSelf,
    fAlign,
    fASelf,
    b,
    bColor,
    bTop,
    bTopColor,
    bTopWidth,
    bLeft,
    bLeftColor,
    bLeftWidth,
    bRight,
    bRightColor,
    bRightWidth,
    bBottom,
    bBottomColor,
    bBottomWidth,
    hoverBg,
    hoverBorderColor,
    hoverShadowColor,
    hoverTextColor,
    scrollBarWidth = 8,
    scrollBarHeight = 24,
    scrollBarColor = colors.blue50,
    scrollBarBackgroundColor = colors.black10,
    scrollBarRadius = 8,
  }) => {
    return {
      width: w,
      height: h,
      padding: p,
      margin: m,
      minWidth: minW,
      maxWidth: maxW,
      minHeight: minH,
      maxHeight: maxH,
      backgroundColor: bg,
      color: c,
      zIndex: z,
      position,
      top,
      left,
      right,
      bottom,
      boxShadow: shadow,
      borderRadius: radius,
      cursor,
      overflow,
      overflowWrap,
      transform,
      display: d,
      flex: f,
      flexDirection: fDir,
      flexGrow: fGrow,
      flexShrink: fShrink,
      justifyContent: fJustify,
      justifySelf: fJSelf,
      alignItems: fAlign,
      alignSelf: fASelf,
      border: b,
      borderColor: bColor,
      borderTop: bTop,
      borderTopColor: bTopColor,
      borderTopWidth: bTopWidth,
      borderLeft: bLeft,
      borderLeftColor: bLeftColor,
      borderLeftWidth: bLeftWidth,
      borderRight: bRight,
      borderRightColor: bRightColor,
      borderRightWidth: bRightWidth,
      borderBottom: bBottom,
      borderBottomColor: bBottomColor,
      borderBottomWidth: bBottomWidth,
      ':hover': {
        backgroundColor: hoverBg,
        color: hoverTextColor,
        boxShadow: hoverShadowColor,
        borderColor: hoverBorderColor,
      },
      ...(overflow === 'scroll' && {
        '::-webkit-scrollbar': {
          width: scrollBarWidth,
        },
        '::-webkit-scrollbar-track': {
          backgroundColor: scrollBarBackgroundColor,
          borderRadius: scrollBarRadius,
        },
        '::-webkit-scrollbar-thumb': {
          height: scrollBarHeight,
          backgroundColor: scrollBarColor,
          borderRadius: scrollBarRadius,
        },
      }),
    }
  }
)

export interface DivProps extends DivCssProps, BaseProps<HTMLDivElement> {}

export const Div: React.MemoExoticComponent<React.ForwardRefExoticComponent<
  DivProps & React.RefAttributes<HTMLDivElement>
>> = React.memo(
  React.forwardRef((props, ref) => <DivStyled ref={ref} {...props} />)
)

export default Div
