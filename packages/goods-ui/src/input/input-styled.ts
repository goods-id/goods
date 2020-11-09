import styled, { InterpolationValue } from 'styled-components'
import { compose, merge } from '@styled-system/core'
import { Property } from 'csstype'
import {
  BoxProps,
  border,
  BorderProps,
  spacing,
  SpacingProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
} from '@pomona/goods-core'
import { IconButtonProps } from '../@types/global'

export interface InputRuleProps extends ColorProps, BorderProps, SpacingProps {}

export interface ConditionalProps {
  isError?: boolean
  errorProps?: InputRuleProps
  hoverProps?: InputRuleProps
  focusProps?: InputRuleProps
  disabledProps?: InputRuleProps
  placeholderProps?: InputRuleProps
}

export interface InputStyledProps
  extends SpacingProps,
    LayoutProps,
    ColorProps,
    TypographyProps,
    BorderProps,
    FlexboxProps,
    PositionProps,
    ConditionalProps {
  as?: 'textarea' | 'input'
  prefix?: string
  prefixContainer?: BoxProps
  suffix?: React.ReactNode | IconButtonProps
  suffixContainer?: BoxProps
  resize?: Property.Resize
  isLabeled?: boolean
}

const inputRule = compose(color, border, spacing)
const styleFn = compose(
  spacing,
  layout,
  color,
  typography,
  border,
  flexbox,
  position
)

export const InputStyled = styled.input<InputStyledProps>(
  ({
    minH = 40,
    w,
    bg = 'white30',
    c = 'black30',
    radius = '4px',
    lineHeight = '20px',
    fSize = '14px',
    prefix,
    suffix,
    isError,
    errorProps,
    hoverProps,
    focusProps,
    disabledProps,
    placeholderProps,
    resize = 'vertical',
    isLabeled,
    ...props
  }) => {
    const { theme } = props
    const errorStyle = inputRule({
      bW: '1px',
      bS: 'solid',
      bC: 'red60',
      bg: 'red10',
      theme,
      ...errorProps,
    })

    const focusStyle = inputRule({
      bW: '1px',
      bS: 'solid',
      bC: 'blue50',
      theme,
      ...focusProps,
    })

    const hoverStyle = inputRule({
      bg: 'blue10',
      theme,
      ...hoverProps,
    })

    const disabledStyle = inputRule({
      bg: 'white40',
      theme,
      ...disabledProps,
    })

    const placeholderStyle = inputRule({
      c: 'black20',
      theme,
      ...placeholderProps,
    })

    const customStyle: InterpolationValue = {
      '::placeholder': {
        visibility: isLabeled ? 'hidden' : 'visible',
        ...placeholderStyle,
      },
      '::-webkit-input-placeholder': {
        visibility: isLabeled ? 'hidden' : 'visible',
        ...placeholderStyle,
      },
      '::-ms-input-placeholder': {
        visibility: isLabeled ? 'hidden' : 'visible',
        ...placeholderStyle,
      },
      '::-moz-placeholder': {
        opacity: isLabeled ? 0 : 1,
        ...placeholderStyle,
      },
      '&:focus::-moz-placeholder': {
        opacity: 1,
      },
      '&:focus::placeholder': {
        visibility: 'visible',
      },
      ...(!isError && {
        '&:hover': hoverStyle,
        '&:focus': focusStyle,
      }),
      '&:disabled': {
        cursor: 'not-allowed',
      },
      '&:disabled:not(.error)': disabledStyle,
      resize,
      MozAppearance: 'textfield',
      '::-webkit-outer-spin-button, ::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        appearance: 'none',
        margin: '0px',
      },
      '&:not(:focus):placeholder-shown ~ span.prefix': {
        display: isLabeled ? 'none' : '',
      },
    }

    const style = styleFn({
      minH,
      w,
      bg,
      fontFam: props?.theme?.fontBase || 'Rubik',
      lineHeight,
      fSize,
      radius,
      c,
      p: 'xs',
      pr: suffix ? 'xl' : 'xs',
      pl: prefix ? 'xl' : 'xs',
      ...props,
    })
    return merge(customStyle, merge(style, isError ? errorStyle : {}))
  }
)
