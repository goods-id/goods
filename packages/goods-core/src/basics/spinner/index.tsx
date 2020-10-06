import React from 'react'
import { compose } from '@styled-system/core'
import styled, {
  InterpolationValue,
  keyframes,
  StyledComponentPropsWithAs,
} from 'styled-components'
import {
  animation,
  AnimationProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
  spacing,
  SpacingProps,
  getAnimationName,
} from '../../@goods-system'

const keyframeRotate = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`

const keyframeCircle = keyframes`
  0%, 25% {
    stroke-dashoffset: 260;
    transform: rotate(0);
  }

  50%, 75% {
    stroke-dashoffset: 80;
    transform: rotate(45deg);
  }

  100% {
    stroke-dashoffset: 260;
    transform: rotate(360deg);
  }
`

interface SpinnerStyledBase
  extends AnimationProps,
    ColorProps,
    LayoutProps,
    SpacingProps {}

export interface SpinnerStyledProps extends SpinnerStyledBase {
  aDurationCircle?: AnimationProps['aDuration']
  aTimingFunctionCircle?: AnimationProps['aTimingFunction']
  aIterCountCircle?: AnimationProps['aIterCount']
  aNameCircle?: AnimationProps['aName']
  circleWidth?: LayoutProps['w']
}

const style = compose<SpinnerStyledBase>(spacing, layout, animation, color)
const circle = compose(animation, layout)

const SpinnerStyled = styled.svg<
  Omit<SpinnerStyledProps, 'aName' | 'aNameCircle'>
>(
  ({
    c = 'blue50',
    aDuration = '1.6s',
    aTimingFunction = 'linear',
    aIterCount = 'infinite',
    s = 24,
    aDurationCircle = '1.4s',
    aTimingFunctionCircle = 'linear',
    aIterCountCircle = 'infinite',
    circleWidth = '6px',
    theme,
    ...props
  }) => {
    const baseStyle = style({
      theme,
      aDuration,
      aTimingFunction,
      aIterCount,
      s,
      c,
      ...props,
    })
    const circleStyle = circle({
      theme,
      aDuration: aDurationCircle,
      aTimingFunction: aTimingFunctionCircle,
      aIterCount: aIterCountCircle,
      w: circleWidth,
    })
    const defaultStyle: InterpolationValue = {
      ...baseStyle,
      circle: {
        ...circleStyle,
        display: 'block',
        fill: 'transparent',
        stroke: 'currentcolor',
        strokeLinecap: 'round',
        strokeDasharray: 290,
        strokeDashoffset: 280,
        strokeWidth: circleStyle?.width,
        transformOrigin: '50% 50%',
      },
    }
    return defaultStyle
  }
)

const SpinnerAnimated = styled(SpinnerStyled)<SpinnerStyledProps>`
  ${({ aName = keyframeRotate }) => getAnimationName({ aName })}
  circle {
    ${({ aNameCircle = keyframeCircle }) =>
      getAnimationName({ aName: aNameCircle })}
  }
`

export type SpinnerProps = StyledComponentPropsWithAs<'svg', SpinnerStyledProps>

export const Spinner = React.memo(
  React.forwardRef<SVGSVGElement, SpinnerProps>((props, ref) => (
    <SpinnerAnimated
      ref={ref}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'
      {...props}
    >
      <circle cx='50' cy='50' r='40' />
    </SpinnerAnimated>
  ))
)

export default Spinner
