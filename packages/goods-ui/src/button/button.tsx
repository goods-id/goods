import * as React from 'react'
import styled, { InterpolationValue } from 'styled-components'
import {
  compose,
  get,
  system,
  merge,
  Config,
  ResponsiveValue,
  TransformFn,
} from '@styled-system/core'
import {
  Icon,
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
  Box,
  BoxProps,
  Spinner,
  interaction,
  InteractionProps,
} from '@pomona/goods-core'
import { isIconButtonProps, getColor } from '../_utils/helpers'
import { IconButtonProps } from '../@types/global'

const sizeRuleConstant = {
  small: '24px',
  medium: '32px',
  big: '48px',
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
    BackgroundProps,
    InteractionProps {
  /**
   * **Button Size**
   *
   * The size of button. `small` is equivalent to the dense button styling.
   *
   * */
  buttonSize?: ResponsiveValue<SizeRule | number>
}

const getRule: TransformFn<ButtonStyledProps> = (n, scale, props) =>
  get(scale, n, n in sizeRuleConstant ? sizeRuleConstant[n] : n || props?.minH)

const configButton: Config<Pick<ButtonStyledProps, 'buttonSize'>> = {
  buttonSize: {
    property: 'minHeight',
    transform: getRule,
  },
}

const buttonRule = system(configButton)

const styleFn = compose<ButtonStyledProps>(
  layout,
  spacing,
  color,
  position,
  flexbox,
  border,
  shadow,
  typography,
  background,
  interaction,
  buttonRule
)

const ButtonStyled = styled.button<ButtonStyledProps>(
  ({
    buttonSize = 'big',
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
        background: `${getColor(
          bg,
          props?.theme
        )}  radial-gradient(circle, rgba(0, 0, 0, 0.03) 1%, rgba(255, 255, 255, 0.05) 1%) center/15000%`,
        filter: 'brightness(95%)',
      },
      '&:active': {
        // backgroundColor: '#09A000',
        backgroundSize: '100%',
        transition: 'background 0s',
      },
      '&:disabled': {
        filter: 'opacity(35%)',
        cursor: 'not-allowed',
      },
    }
    const style = styleFn({
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

export interface ButtonProps
  extends ButtonStyledProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'prefix'> {
  /**
   * **isLoading**
   *
   * If true, a loading spinner is displayed.
   *
   * */
  isLoading?: boolean
  /**
   * **loadingColor**
   *
   * The color of the loading spinner. It supports those theme colors that make sense for this component.
   *
   * */
  loadingColor?: ColorProps['c']
  /**
   * **prefix**
   *
   * A property to place component that act as prefix. It will be located at the beginning of component
   *
   * */
  prefix?: IconButtonProps | React.ReactNode
  /**
   * **prefixContainer**
   *
   * Props for Prefix Component Container
   *
   * */
  prefixContainer?: BoxProps
  /**
   * **suffix**
   *
   * A property to place component that act as a suffix. It will be located at the end of component
   *
   * */
  suffix?: React.ReactNode | IconButtonProps
  /**
   * **suffixContainer**
   *
   * Props for Suffix Component Container
   *
   * */
  suffixContainer?: BoxProps
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
        loadingColor = 'white10',
        pointEvents,
        ...props
      },
      ref
    ) => {
      return (
        <ButtonStyled
          posi='relative'
          ref={ref}
          pointEvents={isLoading ? 'none' : pointEvents}
          {...props}
        >
          {isLoading ? (
            <Spinner c={loadingColor} />
          ) : (
            <>
              {prefix && (
                <Box as='span' {...prefixContainer}>
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
                <Box as='span' {...suffixContainer}>
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
