import * as React from 'react'
import {
  Box,
  BoxProps,
  Text,
  Icon,
  ColorProps,
  TypographyRuleProps,
  mergeClass,
} from '@pomona/goods-core'
import { IconButtonProps, isIconButtonProps } from '../@types/global'
import { InputStyled, InputStyledProps } from './input-styled'
import { LabelStyled, LabelStyledProps } from './label-styled'

type HTMLTagInputAttibute = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'prefix'
>
type HTMLTagTextareaAttribute = Pick<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  'wrap' | 'cols' | 'rows'
>

export interface InputProps
  extends Omit<InputStyledProps, 'prefix' | 'isLabeled'>,
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
        <Box posi='relative' my='xxs' {...containerProps}>
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
            className={mergeClass(
              props.isError ? 'error' : '',
              props.className
            )}
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
              className={mergeClass('prefix', prefixContainer?.className)}
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
        </Box>
      )
    }
  )
)

Input.displayName = 'Input'

export default Input
