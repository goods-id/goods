import * as React from 'react'
import styled from 'styled-components'
import { compose } from 'styled-system'
import {
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  color,
  ColorProps,
  position,
  PositionProps,
} from '../../../goods-core/src/@goods-system'
import { Div, DivCssProps } from '../../../goods-core/src/basics'

const Spinner = styled.div`
  width: 24px;
  height: 24px;
  clear: both;
  border-radius: 50%;
  position: relative;
  opacity: 1;
  &::before,
  &::after {
    content: '';
    border: 1px black solid;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
  }
  &::before {
    transform: scale(1, 1);
    opacity: 1;
    -webkit-animation: spWaveBe 0.6s infinite linear;
    animation: spWaveBe 0.6s infinite linear;
  }
  &::after {
    transform: scale(0, 0);
    opacity: 0;
    -webkit-animation: spWaveAf 0.6s infinite linear;
    animation: spWaveAf 0.6s infinite linear;
  }
  @-webkit-keyframes spWaveAf {
    from {
      -webkit-transform: scale(0.5, 0.5);
      opacity: 0;
    }
    to {
      -webkit-transform: scale(1, 1);
      opacity: 1;
    }
  }
  @keyframes spWaveAf {
    from {
      transform: scale(0.5, 0.5);
      opacity: 0;
    }
    to {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @-webkit-keyframes spWaveBe {
    from {
      -webkit-transform: scale(1, 1);
      opacity: 1;
    }
    to {
      -webkit-transform: scale(1.5, 1.5);
      opacity: 0;
    }
  }
  @keyframes spWaveBe {
    from {
      -webkit-transform: scale(1, 1);
      opacity: 1;
    }
    to {
      -webkit-transform: scale(1.5, 1.5);
      opacity: 0;
    }
  }
`

export interface ButtonStyledProps
  extends LayoutProps,
    SpacingProps,
    ColorProps,
    PositionProps {}

const ButtonStyled = styled.button<ButtonStyledProps>(props => ({
  ...compose(layout, spacing, color, position)(props),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ':hover': {
    background: props.bg,
  },
}))

export interface ButtonProps
  extends ButtonStyledProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'prefix'> {
  isLoading?: boolean
  prefix?: React.ReactNode
  prefixContainer?: DivCssProps
  suffix?: React.ReactNode
  suffixContainer?: DivCssProps
}

export const Button: React.MemoExoticComponent<React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<HTMLButtonElement>
>> = React.memo(
  React.forwardRef(
    (
      {
        children,
        prefix,
        prefixContainer,
        suffix,
        suffixContainer,
        isLoading,
        ...props
      },
      ref
    ) => {
      return (
        <ButtonStyled posi='relative' ref={ref} {...props}>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <Div
                as='span'
                position='absolute'
                left='16px'
                {...prefixContainer}
              >
                {prefix}
              </Div>
              {children}
              <Div as='span' position='absolute' {...suffixContainer}>
                {suffix}
              </Div>
            </>
          )}
        </ButtonStyled>
      )
    }
  )
)

Button.displayName = 'Button'

export default Button
