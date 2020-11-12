import React from 'react'
import styled, {
  css,
  keyframes,
  StyledComponentPropsWithAs,
} from 'styled-components'
import { compose, ThemeType } from '@styled-system/core'
import {
  BorderProps,
  border,
  ColorProps,
  color,
  LayoutProps,
  layout,
  TransformProps,
  transform,
  PositionProps,
  position,
  SpacingProps,
  spacing,
} from '../../@goods-system'

export interface SkeletonCssProps<T extends ThemeType = ThemeType>
  extends BorderProps<T>,
    ColorProps<T>,
    LayoutProps<T>,
    TransformProps<T>,
    PositionProps<T>,
    SpacingProps<T> {}

const styleFn = compose<SkeletonCssProps>(
  border,
  color,
  layout,
  transform,
  position,
  spacing
)

export const SkeletonStyled = styled.span<SkeletonCssProps>(
  ({
    w = '300px',
    h = '20px',
    bg = 'hsl(0, 0%, 90%)',
    posi = 'relative',
    radius = 'm',
    d = 'block',
    transform: t = 'scale(1, 1)',
    ...props
  }) => {
    return styleFn({
      w,
      h,
      d,
      bg,
      posi,
      radius,
      transform: t,
      ...props,
      overflow: 'hidden',
      transformOrigin: '0 60%',
    })
  }
)

SkeletonStyled.displayName = 'SkeletonStyled'

const progress = keyframes`
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
`

export const SkeletonAnimation = styled(SkeletonStyled)`
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgb(255 255 255 / 50%) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    animation: ${css`
      ${progress} 1s ease-in-out infinite;
    `};
  }
`

SkeletonAnimation.displayName = 'SkeletonAnimation'

export type SkeletonProps = StyledComponentPropsWithAs<'span', SkeletonCssProps>

export const Skeleton: React.MemoExoticComponent<React.ForwardRefExoticComponent<
  SkeletonProps & React.RefAttributes<HTMLSpanElement>
>> = React.memo(
  React.forwardRef((props, ref) => <SkeletonAnimation ref={ref} {...props} />)
)

Skeleton.displayName = 'Skeleton'

export default Skeleton
