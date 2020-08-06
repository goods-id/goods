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
  DisplayProperty,
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
  ObjectFitProperty,
} from 'csstype'
import { BaseProps } from '../../@types/global'

export interface ImageCssProps<TLength = string | 0> {
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
   * Display
   */
  d?: DisplayProperty
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
   * Object Fit
   */
  objectFit?: ObjectFitProperty
}

export interface ImageProps
  extends ImageCssProps,
    BaseProps<HTMLImageElement> {}

const ImageStyled = styled.img<ImageProps>(
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
    z,
    position,
    top,
    left,
    right,
    bottom,
    shadow,
    radius,
    cursor,
    transform,
    overflow,
    d = 'flex',
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
    objectFit,
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
      zIndex: z,
      position,
      top,
      left,
      right,
      bottom,
      boxShadow: shadow,
      borderRadius: radius,
      cursor,
      transform,
      overflow,
      display: d,
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
      objectFit,
    }
  }
)

export const Image: React.MemoExoticComponent<React.ForwardRefExoticComponent<
  ImageProps & React.RefAttributes<HTMLImageElement>
>> = React.memo(
  React.forwardRef((props, ref) => <ImageStyled ref={ref} {...props} />)
)

export default Image
