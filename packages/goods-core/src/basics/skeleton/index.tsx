import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Property as CSS } from 'csstype'
import { BaseProps } from '../../@types/global'

export interface SkeletonCssProps<TLength = string | 0> {
  /**
   * Width
   * @default "300px"
   */
  w?: CSS.Width<TLength>
  /**
   * Height
   * @default "20px"
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
   * @default "hsl(0, 0%, 89%)"
   */
  bg?: CSS.BackgroundColor
  /**
   * Z Index
   */
  z?: CSS.ZIndex
  /**
   * Position
   * @default "relative"
   */
  position?: CSS.Position
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
   * Radius
   * @default "4px"
   */
  radius?: CSS.BorderRadius<TLength>
  /**
   * Transform
   * @default "scale(1, 1)"
   */
  transform?: CSS.Transform
  /**
   * Display
   * @default "block"
   */
  d?: CSS.Display
}

export const SkeletonStyled = styled.span<SkeletonCssProps>(
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
