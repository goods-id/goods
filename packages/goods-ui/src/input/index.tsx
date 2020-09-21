import * as React from 'react'
import styled, { InterpolationValue } from 'styled-components'
import { compose } from '@styled-system/core'
import { Box, BoxProps } from '../../../goods-core/src/basics/div'
import { Text } from '../../../goods-core/src/typography'
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
} from '../../../goods-core/src/@goods-system'

export interface InputStyledProps
  extends SpacingProps,
    LayoutProps,
    ColorProps,
    TypographyProps,
    BorderProps,
    FlexboxProps {}

export interface InputProps extends InputStyledProps {
  containerProps?: Omit<BoxProps, 'ref'>
  supColor?: ColorProps['c']
  supRule?: TypographyRuleProps['rule']
  supText?: React.ReactNode
  prefix?: React.ReactNode
  suffix?: React.ReactNode
}

export const InputStyled = styled.input<InputStyledProps>(({ ...props }) => {
  const customStyle: InterpolationValue = {
    width: '100%',
    '&:hover': {
      color: props.theme.colors.blue50,
    },
    '&:focus': {
      color: props.theme.colors.green20,
    },
  }
  const style = compose(
    spacing,
    layout,
    color,
    typography,
    border,
    flexbox
  )({ ...props })
  return merge(customStyle, style)
})

export const Input: React.MemoExoticComponent<React.ForwardRefExoticComponent<
  InputProps & React.RefAttributes<HTMLInputElement>
>> = React.memo(
  React.forwardRef(
    (
      { containerProps, supColor, supRule, suffix, prefix, supText, ...props },
      ref
    ) => {
      return (
        <Box posi='relative' my='xxs' {...containerProps}>
          {prefix && <Box posi='absolute'>{prefix}</Box>}
          <InputStyled ref={ref} {...props} />
          {suffix && <Box posi='absolute'>{suffix}</Box>}
          {typeof supText === 'string' ? (
            <Text c={supColor} rule={supRule}>
              {supText}
            </Text>
          ) : (
            supText
          )}
        </Box>
      )
    }
  )
)

Input.displayName = 'Input'

export default Input
