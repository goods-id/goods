import React from 'react'
import styled from 'styled-components'
import {
  WidthProperty,
  HeightProperty,
  MarginProperty,
  PaddingProperty,
  BackgroundColorProperty,
  MinWidthProperty,
  MinHeightProperty,
  MaxWidthProperty,
  MaxHeightProperty,
  ZIndexProperty,
  PositionProperty,
  BoxShadowProperty,
  BorderRadiusProperty,
  BorderProperty,
} from 'csstype'
import { BaseProps } from '../../@types/global'
import colors from '../../color'

export interface LineCssProps<TLength = string | 0> {
  /**
   * Width
   */
  w?: WidthProperty<TLength>
  /**
   * Height
   * @default "2px"
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
   * Background Color
   */
  bg?: BackgroundColorProperty
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
   * Z Index
   */
  z?: ZIndexProperty
  /**
   * Position
   */
  position?: PositionProperty
  /**
   * Shadow
   */
  shadow?: BoxShadowProperty
  /**
   * Radius
   * @default "4px"
   */
  radius?: BorderRadiusProperty<TLength>
  /**
   * Border
   */
  b?: BorderProperty<TLength>
}

export const LineStyled = styled.div<LineCssProps>(
  ({
    w,
    h = '2px',
    m,
    p,
    minW,
    maxW,
    minH,
    maxH,
    z,
    bg = colors.black10,
    position,
    shadow,
    radius = '4px',
  }) => {
    return {
      width: w,
      height: h,
      padding: p,
      margin: m || '0px',
      backgroundColor: bg,
      minWidth: minW,
      maxWidth: maxW,
      minHeight: minH,
      maxHeight: maxH,
      zIndex: z,
      position,
      boxShadow: shadow,
      borderRadius: radius,
      border: '0px',
    }
  }
)

export interface SeparatorProps
  extends LineCssProps,
    BaseProps<HTMLDivElement> {}

export const Line: React.MemoExoticComponent<React.ForwardRefExoticComponent<
  SeparatorProps & React.RefAttributes<HTMLDivElement>
>> = React.memo(
  React.forwardRef((props, ref) => <LineStyled as='hr' ref={ref} {...props} />)
)

export { SeparatorProps as LineProps }

export default Line
