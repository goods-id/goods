import React from 'react'
import styled from 'styled-components'
import { compose } from '@styled-system/core'
import { Property as CSS } from 'csstype'
import {
  BaseProps,
  StyledComponentProps,
  GlobalsNumber,
} from '../../@types/global'
import {
  color,
  layout,
  spacing,
  flexbox,
  position,
  background,
  border,
  shadow,
  grid,
  BackgroundProps,
  PositionProps,
  ColorProps,
  SpacingProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  ShadowProps,
  GridProps,
} from '../../@goods-system'

export interface DivCssProps<TLength = string | 0> {
  /**
   * Width
   */
  w?: CSS.Width<TLength>
  /**
   * Height
   */
  h?: CSS.Height<TLength>
  /**
   * Margin
   */
  m?: CSS.Margin<TLength>
  /**
   * Padding
   */
  p?: CSS.Padding<TLength>
  /**
   * Min Width
   */
  minW?: CSS.MinWidth<TLength>
  /**
   * Max Width
   */
  maxW?: CSS.MaxWidth<TLength>
  /**
   * Min Height
   */
  minH?: CSS.MinHeight<TLength>
  /**
   * Max Height
   */
  maxH?: CSS.MaxHeight<TLength>
  /**
   * Background Color
   */
  bg?: CSS.BackgroundColor
  /**
   *  Color
   */
  c?: CSS.Color
  /**
   * Z Index
   */
  z?: CSS.ZIndex
  /**
   * Position
   */
  posi?: CSS.Position
  /**
   * Top
   */
  top?: CSS.Top<TLength>
  /**
   * Left
   */
  left?: CSS.Left<TLength>
  /**
   * Right
   */
  right?: CSS.Right<TLength>
  /**
   * Bottom
   */
  bottom?: CSS.Bottom<TLength>
  /**
   * Shadow
   */
  boxShadow?: CSS.BoxShadow
  /**
   * Radius
   */
  radius?: CSS.BorderRadius<TLength>
  /**
   * Cursor
   */
  cursor?: CSS.Cursor
  /**
   * Transform
   */
  transform?: CSS.Transform
  /**
   * Overflow
   */
  overflow?: CSS.Overflow
  /**
   * Overflow Wrap
   */
  overflowWrap?: CSS.OverflowWrap
  /**
   * Display
   * @default "flex"
   */
  d?: CSS.Display
  /**
   * Flex
   */
  f?: CSS.Flex<TLength>
  /**
   * Flex Direction
   * @default "column"
   */
  fDir?: CSS.FlexDirection
  /**
   * Flex Grow
   */
  fGrow?: GlobalsNumber
  /**
   * Flex Shrinkx
   */
  fShrink?: GlobalsNumber
  /**
   * Justify Content
   */
  fJustify?: CSS.JustifyContent
  /**
   * Justify Self
   */
  fJSelf?: CSS.JustifySelf
  /**
   * Align Items
   */
  fAlign?: CSS.AlignItems
  /**
   * Align Self
   */
  fASelf?: CSS.AlignSelf
  /**
   * Flex Wrap
   */
  fWrap?: CSS.FlexWrap
  /**
   * Border
   */
  b?: CSS.Border<TLength>
  /**
   * Border Color
   */
  bColor?: CSS.BorderColor
  /**
   * Border Top
   */
  bTop?: CSS.BorderTop<TLength>
  /**
   * Border Top Color
   */
  bTopColor?: CSS.BorderTopColor
  /**
   * Border Top Width
   */
  bTopWidth?: CSS.BorderTopWidth<TLength>
  /**
   * Border Left
   */
  bLeft?: CSS.BorderLeft<TLength>
  /**
   * Border Left Color
   */
  bLeftColor?: CSS.BorderLeftColor
  /**
   * Border Left Width
   */
  bLeftWidth?: CSS.BorderLeftWidth<TLength>
  /**
   * Border Right
   */
  bRight?: CSS.BorderRight<TLength>
  /**
   * Border Right Color
   */
  bRightColor?: CSS.BorderRightColor
  /**
   * Border Right Width
   */
  bRightWidth?: CSS.BorderRightWidth<TLength>
  /**
   * Border Bottom
   */
  bBottom?: CSS.BorderBottom<TLength>
  /**
   * Border Bottom Color
   */
  bBottomColor?: CSS.BorderBottomColor
  /**
   * Border Bottom Width
   */
  bBottomWidth?: CSS.BorderBottomWidth<TLength>
  /**
   * Hover Background Color
   */
  hoverBg?: CSS.BackgroundColor
  /**
   * Hover Border Color
   */
  hoverBorderColor?: CSS.BorderColor
  /**
   * Hover Text Color
   */
  hoverTextColor?: CSS.Color
  /**
   * Hover Box Shadow Color
   */
  hoverShadowColor?: CSS.BoxShadow
  /**
   * Use custom scroll bar.
   * If `overflow === 'scroll'`, custom scroll bar is auto shown.
   * @default false
   */
  isScrollBarOn?: boolean
  /**
   * ScrollBar Width
   * @default 8
   */
  scrollBarWidth?: CSS.Width<TLength>
  /**
   * ScrollBar Height
   * @default 24
   */
  scrollBarHeight?: CSS.Height<TLength>
  /**
   * ScrollBar Color
   */
  scrollBarColor?: CSS.Color
  /**
   * ScrollBar Background Color
   */
  scrollBarBackgroundColor?: CSS.BackgroundColor
  /**
   * ScrollBar Radius
   * @default 8
   */
  scrollBarRadius?: CSS.BorderRadius<TLength>
}

export const DivStyled = styled.div<DivCssProps>(
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
    posi,
    top,
    left,
    right,
    bottom,
    boxShadow,
    radius,
    cursor,
    overflow,
    overflowWrap,
    transform,
    d = 'flex',
    f,
    fDir = 'column',
    fGrow,
    fShrink,
    fJustify,
    fJSelf,
    fAlign,
    fASelf,
    fWrap,
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
    scrollBarColor,
    scrollBarBackgroundColor,
    scrollBarRadius = 8,
    isScrollBarOn,
    theme,
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
      position: posi,
      top,
      left,
      right,
      bottom,
      boxShadow,
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
      flexWrap: fWrap,
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
      ...((overflow === 'scroll' || isScrollBarOn) && {
        '::-webkit-scrollbar': {
          width: scrollBarWidth,
        },
        '::-webkit-scrollbar-track': {
          backgroundColor: scrollBarBackgroundColor || theme.colors.black10,
          borderRadius: scrollBarRadius,
        },
        '::-webkit-scrollbar-thumb': {
          height: scrollBarHeight,
          backgroundColor: scrollBarColor || theme.colors.blue50,
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

export interface BoxStyledProps
  extends LayoutProps,
    ColorProps,
    SpacingProps,
    FlexboxProps,
    BackgroundProps,
    BorderProps,
    ShadowProps,
    PositionProps,
    GridProps {}

export const Box = styled.div<BoxStyledProps>(
  ({ d = 'flex', fDir = 'column', ...props }) =>
    compose(
      layout,
      color,
      spacing,
      flexbox,
      background,
      position,
      border,
      shadow,
      grid
    )({ d, fDir, ...props })
)

export type BoxProps = StyledComponentProps<'div', BoxStyledProps>
