import styled, { InterpolationValue } from 'styled-components'
import { compose, merge } from '@styled-system/core'
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
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
  hexToRgba,
} from '@pomona/goods-core'
import React from 'react'
import { getColor } from '../_utils/helpers'

export interface CheckboxLabelSystemProps
  extends SpacingProps,
    LayoutProps,
    ColorProps,
    PositionProps,
    TypographyProps,
    FlexboxProps,
    BorderProps {}

export interface CheckboxLabelStyledProps
  extends CheckboxLabelSystemProps,
    React.LabelHTMLAttributes<HTMLLabelElement> {
  disabled?: boolean
}

const styleFn = compose(
  spacing,
  layout,
  color,
  typography,
  border,
  flexbox,
  position
)

export const CheckboxLabelStyled = styled.label<CheckboxLabelStyledProps>(
  ({
    w,
    m = 'xxxs',
    minH = 32,
    minW = 32,
    d = 'flex',
    radius = 'l',
    c = 'blue50',
    fAlign = 'center',
    disabled,
    theme,
    ...props
  }) => {
    const defaultStyle: InterpolationValue = {
      width:
        w !== 'fit-content'
          ? `calc(100% - ${theme.space?.xxs})`
          : 'fit-content',
      transition: 'background 0.4s',
      filter: disabled ? 'opacity(50%)' : '',
      cursor: disabled ? 'not-allowed' : 'pointer',
      pointerEvents: disabled ? 'none' : 'auto',
      ':&hover': {
        background: theme.colors?.white30,
      },
      '&:active': {
        background: hexToRgba(getColor(c, theme), 0.2),
        backgroundSize: '100%',
        transition: 'background 0s',
      },
      '&:disabled': {
        filter: 'opacity(50%)',
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
    }

    const style = styleFn({
      m,
      minH,
      minW,
      d,
      radius,
      fAlign,
      theme,
      c,
      ...props,
    })

    return merge(defaultStyle, style)
  }
)
