import React from 'react'
import styled, { css, keyframes } from 'styled-components'
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
  ZIndexProperty,
  PositionProperty,
  TopProperty,
  LeftProperty,
  RightProperty,
  BottomProperty,
  BorderRadiusProperty,
  TransformProperty,
  DisplayProperty,
} from 'csstype'
import { BaseProps } from '../../../goods-core/src/@types/global'

export interface SkeletonCssProps<TLength = string | 0> {
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
  radius?: BorderRadiusProperty<TLength>
  /**
   * Transform
   */
  transform?: TransformProperty
  /**
   * Display
   */
  d?: DisplayProperty
}

const SkeletonStyled = styled.span<SkeletonCssProps>(
  ({
    w = '300px',
    h = '20px',
    m,
    p,
    minW,
    maxW,
    minH,
    maxH,
    bg = 'hsl(0, 0%, 89%)',
    z,
    position = 'relative',
    top,
    left,
    right,
    bottom,
    radius = '4px',
    transform = 'scale(1, 1)',
    d = 'block',
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
      borderRadius: radius,
      transform,
      overflow: 'hidden',
      transformOrigin: '0 60%',
      display: d,
    }
  }
)

const progress = keyframes`
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
`

const SkeletonAnimation = styled(SkeletonStyled)`
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      hsl(0, 0%, 89%),
      hsl(0, 0%, 93%),
      hsl(0, 0%, 89%)
    );
    animation: ${css`
      ${progress} 1s ease-in-out infinite;
    `};
  }
`

export interface SkeletonProps
  extends SkeletonCssProps,
    BaseProps<HTMLDivElement> {}

export const Skeleton: React.MemoExoticComponent<React.ForwardRefExoticComponent<
  SkeletonProps & React.RefAttributes<HTMLDivElement>
>> = React.memo(
  React.forwardRef((props, ref) => <SkeletonAnimation ref={ref} {...props} />)
)

export default Skeleton
