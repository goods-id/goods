import {
  Box,
  BoxProps,
  spacing,
  SpacingProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  border,
  BorderProps,
  flexbox,
  FlexboxProps,
  Text,
  ColorProps,
  color,
} from '@pomona/goods-core'
import React, { memo } from 'react'
import styled, { InterpolationValue } from 'styled-components'
import { compose, merge } from '@styled-system/core'
import { CheckboxLabelStyled } from './label-styled'
import { CheckboxInputStyled } from './input-styled'
import SVG, { SVGCheckboxProps } from './icon-styled'

export interface CheckboxSystemProps
  extends ColorProps,
    LayoutProps,
    SpacingProps,
    FlexboxProps,
    BorderProps,
    PositionProps {}
export interface CheckboxStyledProps
  extends CheckboxSystemProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'> {
  name: string
}
export interface CheckboxProps extends CheckboxStyledProps {
  label?: string
  supText?: string
  rtl?: boolean
  fill?: ColorProps['c']
  isFit?: boolean
  containerProps?: BoxProps
  checkedC?: BorderProps['bC']
  defaultC?: BorderProps['bC']
  IconCheckbox?: React.ComponentType<SVGCheckboxProps>
}

const styleFn = compose<CheckboxSystemProps>(
  spacing,
  color,
  layout,
  position,
  border,
  flexbox
)

const InputCheckbox = styled(Box)<BoxProps>(
  ({
    d = 'flex',
    fJustify = 'center',
    fAlign = 'center',
    radius = 'l',
    h = '32px',
    w = '32px',
    posi = 'relative',
    theme,
    ...props
  }) => {
    const defaultStyle: InterpolationValue = {}

    const style = styleFn({
      d,
      fJustify,
      fAlign,
      radius,
      h,
      w,
      posi,
      theme,
      ...props,
    })

    return merge(defaultStyle, style)
  }
)

const DefaultIcon = memo<SVGCheckboxProps>(({ c = 'white10' }) => {
  return (
    <SVG
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='24'
      viewBox='0 0 18 24'
      c={c}
    >
      <g transform='translate(-4 -3)'>
        <rect
          data-name='Rectangle 1'
          width='18'
          height='24'
          transform='translate(4 3)'
          opacity='0'
        />
        <path
          data-name='Path 3'
          d='M23.527,12.453,15.033,20.94a.712.712,0,0,1-.326.213,1.163,1.163,0,0,1-.334.074.42.42,0,0,1-.18,0,.4.4,0,0,1-.12,0,.242.242,0,0,1-.093,0,.92.92,0,0,1-.16-.08.4.4,0,0,1-.107-.08l-.066-.054L8.6,16.787a1,1,0,0,1-.193-1.4l.053-.067.053-.067A1,1,0,0,1,9.847,15.2l3.633,3.053a.728.728,0,0,0,.16.127,1,1,0,0,0,1.253-.127l7.2-7.193a1,1,0,0,1,1.434,1.393Z'
          transform='translate(-2.977 -1)'
        />
      </g>
    </SVG>
  )
})

export const Checkbox: React.MemoExoticComponent<React.ForwardRefExoticComponent<
  CheckboxProps & React.RefAttributes<HTMLInputElement>
>> = React.memo(
  React.forwardRef(
    (
      {
        id = Date.now().toString(),
        name,
        label,
        supText,
        rtl,
        fill,
        defaultC = 'black30',
        checkedC = 'blue50',
        checked = false,
        bg,
        disabled,
        isFit = false,
        onChange,
        containerProps,
        IconCheckbox = DefaultIcon,
      },
      ref
    ) => {
      const defaultColor = checked ? checkedC : defaultC
      return (
        <Box
          bg={bg}
          d='initial'
          w={isFit ? true : 'fit-content'}
          {...containerProps}
        >
          <CheckboxLabelStyled
            id={`label-${name}`}
            htmlFor={`checbox-${id}`}
            posi='relative'
            fDir={rtl ? 'row-reverse' : 'row'}
            fJustify={rtl ? 'space-between' : ''}
            w={!isFit || rtl}
            disabled={disabled}
          >
            <InputCheckbox as='span'>
              <CheckboxInputStyled
                checked={checked}
                disabled={disabled}
                id={`checbox-${id}`}
                name={name}
                type='checkbox'
                ref={ref}
                onChange={onChange}
              />
              <Box
                w='20px'
                h='20px'
                as='span'
                radius='m'
                b='1px solid'
                bC={defaultColor}
                bg={checked ? checkedC : bg}
              >
                {checked && <IconCheckbox c={fill} />}
              </Box>
            </InputCheckbox>
            {label && (
              <Box as='span' fJustify='center' p='xxxs'>
                <Text>{label}</Text>
                {supText && <Text rule='caption'>{supText}</Text>}
              </Box>
            )}
          </CheckboxLabelStyled>
        </Box>
      )
    }
  )
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
