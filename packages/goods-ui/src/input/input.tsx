import * as React from 'react'
import {
  Box,
  BoxProps,
  Text,
  Icon,
  ColorProps,
  TypographyRuleProps,
  mergeClass,
} from 'goods-core'
import { isIconButtonProps } from '../_utils/helpers'
import { InputStyled, InputStyledProps } from './input-styled'
import { LabelStyled, LabelStyledProps } from './label-styled'
import { IconButtonProps } from '../@types/global'

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
  /**
   * **containerProps**
   *
   * Extends the styles applied to the component
   *
   * */
  containerProps?: Omit<BoxProps, 'ref'>
  /**
   * **prefix**
   *
   * A property to place component that act as prefix. It will be located at the beginning of component
   *
   * */
  prefix?: IconButtonProps | React.ReactNode | boolean
  /**
   * **supColor**
   *
   * Sup Color
   *
   * */
  supColor?: ColorProps['c']
  /**
   * **supRule**
   *
   * Property to change of the support text color
   *
   * */
  supRule?: TypographyRuleProps['rule']
  /**
   * **supRule**
   *
   * Property to change rule of the support text
   *
   * */
  supText?: React.ReactNode
  /**
   * **supText**
   *
   * The text to be used as a support text
   *
   * */
  labelProps?: LabelStyledProps
  /**
   * **labelProps**
   *
   * Extend style to the label
   *
   * */
  label?: string
  /**
   * **isLoading**
   *
   * The text to be used in an enclosing label element
   *
   * */
  supErrorColor?: ColorProps['c']
}

export const Input: React.MemoExoticComponent<
  React.ForwardRefExoticComponent<
    InputProps & React.RefAttributes<HTMLInputElement | HTMLTextAreaElement>
  >
> = React.memo(
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
        supText = '',
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
          {typeof supText === 'string' || typeof supText === 'number' ? (
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
