import React, { forwardRef, memo } from 'react'
import styled, { StyledComponentPropsWithAs } from 'styled-components'
import {
  Box,
  BoxProps,
  BoxStyled,
  BoxStyledProps,
  ColorProps,
  mergeClass,
  Text,
  TextProps,
  TypographyProps,
  TypographyRuleProps,
} from '@pomona/goods-core'

const SwitchInput = styled(BoxStyled)<BoxStyledProps>(() => {
  return {
    '&:active': {
      alignItems: 'flex-end',
    },
    '&.disabled': {
      filter: 'opacity(35%)',
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
    input: { display: 'none' },
  }
})

type SwitchBoxProps = StyledComponentPropsWithAs<'label', BoxStyledProps>

export interface SwitchProps
  extends Omit<
      SwitchBoxProps,
      'name' | 'as' | 'disabled' | 'checked' | 'onChange' | 'ref'
    >,
    TypographyProps,
    TypographyRuleProps,
    Pick<
      React.InputHTMLAttributes<HTMLInputElement>,
      'onChange' | 'name' | 'checked' | 'disabled'
    > {
  /**
   * **Fit to parent**
   *
   * Set component to fit with the parent component. The width will be 100%.
   * */
  isFit?: boolean
  /**
   * **RTL aka Right to Left**
   *
   * Reverse block label and toggle.
   * */
  rtl?: boolean
  /**
   * **Background color switch(checked: TRUE)**
   *
   * This default background color when switch value is TRUE. Representation of goods-core: Color.
   * */
  bgChecked?: ColorProps['bg']
  /**
   * **Background color Dot (checked: FALSE)**
   *
   * This default background color when switch value is FALSE. Representation of goods-core: Color.
   * */
  bgDot?: ColorProps['bg']
  /**
   * **Background color Dot (checked: TRUE)**
   *
   * This default background color when switch value is TRUE. Representation of goods-core: Color.
   * */
  bgDotChecked?: ColorProps['bg']
  /**
   * **Support text**
   *
   * Set text of support text. if value props is string | number, text will be render using default style. if value props is Component, support text will use custom Component.
   * */
  supText?: React.ReactNode
  /**
   ***Support text rule**
   *
   * Set support text rule and representation of goods system typography role.
   *
   * including: fontWeight, fontSize, lineHeight and letterSpacing
   *
   * default: `caption`
   *
   * **Syntax**: `title | subtitle | caption | button | body | body-bold`
   * */
  supRule?: TypographyRuleProps['rule']
  /**
   * **Support text color**
   *
   * Set support text color and representation of goods system color constants **or** string hexcode
   * */
  supColor?: ColorProps['c']
  /**
   * **Label text**
   *
   * Set switch label text. only string
   *
   * default: `black20`
   * */
  label?: string
  /**
   * **Label props and container**
   *
   * Representation of goods-core: Typography
   *
   * **Syntax**: `labelProps={{ c: 'red90' }}`
   * */
  labelProps?: TextProps
  /**
   * **Switch container**
   *
   * Representation of goods-core: Box
   *
   * **Syntax**: `switchContainer={{ m: 'xxs', p: 'm', posi: 'relative }}`
   * */
  switchContainer?: BoxProps
}

export const Switch = memo(
  forwardRef<HTMLInputElement, SwitchProps>(
    (
      {
        id,
        name,
        checked,
        label,
        supText,
        supColor = 'black20',
        supRule = 'caption',
        isFit = false,
        rtl,
        disabled = false,
        bg = 'black10',
        bgChecked = 'blue50',
        bgDot = 'white10',
        bgDotChecked = 'white10',
        cursor = 'pointer',
        onChange,
        switchContainer,
        labelProps,
        className,
        ...props
      },
      ref
    ) => {
      const inputId = `switch-${id}`

      return (
        <Box
          py='xxs'
          px='s'
          fDir={rtl ? 'row-reverse' : 'row'}
          fJustify={rtl ? 'flex-end' : 'flex-start'}
          fAlign='center'
          w={isFit || 'fit-content'}
          {...switchContainer}
        >
          <Box
            w={isFit || 'fit-content'}
            fAlign={isFit ? 'flex-end' : 'flex-start'}
          >
            {typeof label === 'string' && (
              <Text rule='body' mb={supText ? 'xxxs' : ''} {...labelProps}>
                {label}
              </Text>
            )}
            {typeof supText === 'string' || typeof supText === 'number' ? (
              <Text c={supColor} rule={supRule}>
                {supText}
              </Text>
            ) : (
              supText
            )}
          </Box>
          <SwitchInput
            posi='relative'
            className={mergeClass(disabled ? 'disabled' : '', className)}
            id={id}
            htmlFor={inputId}
            cursor={cursor}
            p='2px'
            bg={checked ? bgChecked : bg}
            minW='36px'
            transition='all 0.2s ease-in'
            h='20px'
            radius='full'
            {...props}
            as='label'
            mr={rtl && (label || supText) ? 'xs' : props.mr}
            ml={rtl ? props.ml : label || supText ? 'xs' : props.ml}
          >
            <Box
              posi='absolute'
              right={checked ? '2px' : 'calc(100% - 18px)'}
              left={checked ? 'calc(100% - 18px)' : '2px'}
              bg={checked ? bgDotChecked : bgDot}
              s='16px'
              radius='full'
              transition='inherit'
            />
            <input
              ref={ref}
              id={inputId}
              type='checkbox'
              name={name}
              checked={checked}
              disabled={disabled}
              onChange={onChange}
            />
          </SwitchInput>
        </Box>
      )
    }
  )
)

Switch.displayName = 'Switch'
