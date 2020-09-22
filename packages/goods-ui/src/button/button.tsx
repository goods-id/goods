import * as React from 'react'
import styled, { InterpolationValue } from 'styled-components'
import { compose, ConfigStyle, get, system } from '@styled-system/core'
import { Icon, IconProps } from '../../../goods-core/src/icon'
import {
  border,
  BorderProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  color,
  ColorProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  typography,
  TypographyProps,
  background,
  BackgroundProps,
  merge,
} from '../../../goods-core/src/@goods-system'
import { Box, BoxProps } from '../../../goods-core/src/basics'
import { Config, ResponsiveValue } from '../../../goods-core/src/@types/global'

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

const sizeRuleConstant = {
  smallest: '24px',
  small: '32px',
  normal: '48px',
}

type SizeRule = keyof typeof sizeRuleConstant

export interface ButtonStyledProps
  extends LayoutProps,
    SpacingProps,
    ColorProps,
    PositionProps,
    BorderProps,
    FlexboxProps,
    ShadowProps,
    TypographyProps,
    BackgroundProps {
  buttonSize: ResponsiveValue<SizeRule | number>
}

const getRule = (n, scale, props: ButtonStyledProps) =>
  get(scale, n, n in sizeRuleConstant ? sizeRuleConstant[n] : n || props?.minH)

const configButton: Config<Pick<ButtonStyledProps, 'buttonSize'>> = {
  buttonSize: {
    property: 'minHeight',
    transform: getRule as ConfigStyle['transform'],
  },
}

const buttonRule = system(configButton)

const ButtonStyled = styled.button<ButtonStyledProps>(
  ({
    buttonSize = 'normal',
    radius = 'm',
    bg = 'blue50',
    b = 'none',
    c = 'white10',
    d = 'flex',
    fAlign = 'center',
    fJustify = 'center',
    fSize = '14px',
    weight = 'bold',
    lineHeight = '20px',
    letterSpace = '0.5px',
    bgPosi = 'center',
    ...props
  }) => {
    const defaultStyle: InterpolationValue = {
      cursor: 'pointer',
      outline: 'none',
      transition: 'background 0.8s',
      '&:hover': {
        // filter: 'brightness(80%)',
        background:
          '#47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%',
      },
      '&:active': {
        // filter: 'brightness(50%)',
        backgroundColor: '#6eb9f7',
        backgroundSize: '100%',
        transition: 'background 0s',
      },
      '&:disabled': {
        filter: 'opacity(35%)',
        cursor: 'not-allowed',
      },
    }
    const style = compose(
      layout,
      spacing,
      color,
      position,
      flexbox,
      border,
      shadow,
      typography,
      background,
      buttonRule
    )({
      buttonSize,
      radius,
      bg,
      b,
      c,
      d,
      fAlign,
      fJustify,
      fontFam: props?.theme?.fontBase || 'Rubik',
      fSize,
      weight,
      lineHeight,
      letterSpace,
      bgPosi,
      ...props,
    })
    return merge(defaultStyle, style)
  }
)

interface IconButtonProps {
  icName: IconProps['name']
  icSize?: IconProps['size']
  icColor?: IconProps['c']
  icRotate?: IconProps['rotate']
}

export interface ButtonProps
  extends ButtonStyledProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'prefix'> {
  isLoading?: boolean
  prefix?: IconButtonProps | React.ReactNode
  prefixContainer?: BoxProps
  suffix?: React.ReactNode | IconButtonProps
  suffixContainer?: BoxProps
}

const isIconButtonProps = (params): params is IconButtonProps => {
  return typeof params === 'object' && 'icName' in params
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
              {prefix && (
                <Box as='span' posi='absolute' left='16px' {...prefixContainer}>
                  {isIconButtonProps(prefix) ? (
                    <Icon
                      name={prefix?.icName}
                      c={prefix?.icColor}
                      rotate={prefix?.icRotate}
                      size={prefix?.icSize}
                    />
                  ) : (
                    prefix
                  )}
                </Box>
              )}
              {children}
              {suffix && (
                <Box
                  as='span'
                  posi='absolute'
                  right='16px'
                  {...suffixContainer}
                >
                  {isIconButtonProps(suffix) ? (
                    <Icon
                      name={suffix?.icName}
                      c={suffix?.icColor}
                      rotate={suffix?.icRotate}
                      size={suffix?.icSize}
                    />
                  ) : (
                    suffix
                  )}
                </Box>
              )}
            </>
          )}
        </ButtonStyled>
      )
    }
  )
)

Button.displayName = 'Button'
