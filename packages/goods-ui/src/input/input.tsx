import * as React from 'react'
import styled, { InterpolationValue } from 'styled-components'
import { compose } from '@styled-system/core'
import { Property } from 'csstype'
import { Box, BoxProps } from '../../../goods-core/src/basics/div'
import { Text } from '../../../goods-core/src/typography'
import { Icon, IconProps } from '../../../goods-core/src/icon'
import {
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
  TypographyRuleProps,
  flexbox,
  FlexboxProps,
  merge,
  position,
  PositionProps,
  TransitionProps,
  transition,
} from '../../../goods-core/src/@goods-system'

interface IconButtonProps {
  icName: IconProps['name']
  icSize?: IconProps['size']
  icColor?: IconProps['c']
  icRotate?: IconProps['rotate']
}

const isIconButtonProps = (params): params is IconButtonProps => {
  return typeof params === 'object' && 'icName' in params
}

export interface InputRuleProps extends ColorProps, BorderProps {}
export interface FilledProps
  extends ColorProps,
    BorderProps,
    TypographyProps,
    PositionProps,
    SpacingProps,
    LayoutProps {}

export interface ConditionalProps {
  isError?: boolean
  errorProps?: InputRuleProps
  hoverProps?: InputRuleProps
  focusProps?: InputRuleProps
  disabledProps?: InputRuleProps
  placeholderProps?: InputRuleProps
}

export interface LabelStyledProps
  extends SpacingProps,
    LayoutProps,
    ColorProps,
    PositionProps,
    TypographyProps,
    FlexboxProps,
    TransitionProps,
    Omit<ConditionalProps, 'placeholderProps'> {
  filledProps?: FilledProps
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

type HTMLTagInputAttibute = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'prefix'
>
type HTMLTagTextareaAttribute = Pick<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  'wrap' | 'cols' | 'rows'
>

export interface InputProps
  extends Omit<InputStyledProps, 'prefix'>,
    HTMLTagInputAttibute,
    HTMLTagTextareaAttribute {
  containerProps?: Omit<BoxProps, 'ref'>
  prefix?: IconButtonProps | React.ReactNode | boolean
  supColor?: ColorProps['c']
  supRule?: TypographyRuleProps['rule']
  supText?: React.ReactNode
  labelProps?: LabelStyledProps
  label?: string
  supErrorColor?: ColorProps['c']
}

const inputRule = compose(color, border)
const filledRule = compose(color, border, typography, position, spacing, layout)

export const InputStyled = styled.input<InputStyledProps>(
  ({
    minH = 40,
    w,
    bg = 'white30',
    c = 'black30',
    radius = '4px',
    lineHeight = '20px',
    fSize = 14,
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
    const errorStyle = inputRule({
      bW: '1px',
      bS: 'solid',
      bC: 'red60',
      bg: 'red10',
      ...errorProps,
    } as InputRuleProps)

    const focusStyle = inputRule({
      bW: '1px',
      bS: 'solid',
      bC: 'blue50',
      ...focusProps,
    } as InputRuleProps)

    const hoverStyle = inputRule({
      bg: 'blue10',
      ...hoverProps,
    } as InputRuleProps)

    const disabledStyle = inputRule({
      bg: 'white40',
      ...disabledProps,
    } as InputRuleProps)

    const placeholderStyle = inputRule({
      c: 'black20',
      ...placeholderProps,
    } as InputRuleProps)

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
        ...disabledStyle,
        cursor: 'not-allowed',
      },
      resize,
    }

    const style = compose(
      spacing,
      layout,
      color,
      typography,
      border,
      flexbox,
      position
    )({
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

export const LabelStyled = styled.label<LabelStyledProps>(
  ({
    c = 'black20',
    fSize = '14px',
    bg = 'white30',
    weight = 'normal',
    posi = 'absolute',
    left = '12px',
    top = '16px',
    isError,
    disabledProps,
    errorProps,
    focusProps,
    hoverProps,
    filledProps,
    tDuration = 200,
    tTimingFunction = 'ease',
    tProperty = 'top, font-size, color, padding',
    ...props
  }) => {
    const disabledStyle = inputRule({
      c: isError ? errorProps?.c || 'red80' : 'black20',
      bg: 'white40',
      ...disabledProps,
    } as InputRuleProps)

    const hoverStyle = inputRule({
      bg: 'blue10',
      ...hoverProps,
    } as InputRuleProps)

    const errorStyle = inputRule({
      c: 'red80',
      bg: 'red10',
      ...errorProps,
    } as InputRuleProps)

    const focusStyle = inputRule({
      c: 'blue50',
      ...focusProps,
    } as InputRuleProps)

    const filledStyle = filledRule({
      c: isError ? undefined : 'blue50',
      fSize: '11px',
      pt: 'xxxs',
      bTopRightRad: 'full',
      w: left ? `calc(100% - ${left} - 1px)` : 'calc(100% - 1px)',
      top: '1px',

      ...filledProps,
    } as FilledProps)

    const style = compose(
      spacing,
      layout,
      color,
      typography,
      position,
      flexbox,
      transition
    )({
      c,
      fSize,
      weight,
      posi,
      left,
      top,
      bg,
      tDuration,
      tTimingFunction,
      tProperty,
      ...props,
    })

    const defaultStyle: InterpolationValue = {
      pointerEvents: 'none',
      [`${InputStyled}:not(:focus):placeholder-shown:not(:hover) ~ &`]: isError
        ? errorStyle
        : style,
      [`${InputStyled}:focus ~ &`]: isError ? errorStyle : focusStyle,
      [`${InputStyled}:focus ~ &, ${InputStyled}:not(:placeholder-shown) ~ &`]: filledStyle,
      [`${InputStyled}:hover ~ &`]: isError ? errorStyle : hoverStyle,
      [`${InputStyled}:disabled ~ &`]: disabledStyle,
    }
    return merge(defaultStyle, merge(style, isError ? errorStyle : {}))
  }
)

const Container = styled(Box)<BoxProps & { isLabeled?: boolean }>(props => ({
  'input:not(:focus):placeholder-shown ~ span.prefix, textarea:not(:focus):placeholder-shown ~ span.prefix': {
    display: props.isLabeled ? 'none' : '',
  },
}))

export const Input: React.MemoExoticComponent<React.ForwardRefExoticComponent<
  InputProps & React.RefAttributes<HTMLInputElement | HTMLTextAreaElement>
>> = React.memo(
  React.forwardRef(
    (
      {
        as,
        id = Date.now().toString(),
        containerProps,
        supColor = 'black20',
        supRule = 'caption',
        suffixContainer,
        prefixContainer,
        supText,
        supErrorColor = 'red60',
        prefix,
        label,
        labelProps,
        rows = 3,
        ...props
      },
      ref
    ) => {
      const { suffix } = props
      return (
        <Container
          posi='relative'
          my='xxs'
          {...containerProps}
          isLabeled={Boolean(label)}
        >
          <InputStyled
            as={as}
            id={id}
            isLabeled={Boolean(label)}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            ref={ref}
            minH={label ? '48px' : '40px'}
            rows={rows}
            pt={as === 'textarea' ? 's' : undefined}
            bW={as === 'textarea' ? '0px' : undefined}
            {...props}
            pb={label ? 'xxxs' : props.pb}
            prefix={prefix ? 'true' : ''}
          />
          {label && (
            <LabelStyled
              id={`${id}-label`}
              htmlFor={id}
              isError={props.isError}
              {...labelProps}
            >
              {label}
            </LabelStyled>
          )}
          {prefix && (
            <Box
              posi='absolute'
              overflow='hidden'
              left='12px'
              d='flex'
              fJustify='center'
              w={24}
              pt='xs'
              pb={label ? 'xxxs' : props.pb || 'xs'}
              h={props.h || (label ? 48 : 40)}
              {...prefixContainer}
              as='span'
              className='prefix'
            >
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
          {suffix && (
            <Box
              as='span'
              posi='absolute'
              right='8px'
              d='flex'
              fJustify='center'
              w={24}
              h={props.h || (label ? 48 : 40)}
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
          {typeof supText === 'string' ? (
            <Text
              c={props.isError ? supErrorColor : supColor}
              rule={supRule}
              my='xxxs'
              pl='xs'
            >
              {supText}
            </Text>
          ) : (
            supText
          )}
        </Container>
      )
    }
  )
)

Input.displayName = 'Input'

export default Input
