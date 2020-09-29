import React from 'react'
import styled, { StyledComponentProps } from 'styled-components'
import { ThemeType, compose } from '@styled-system/core'
import {
  BorderProps,
  border,
  ColorProps,
  color,
  LayoutProps,
  layout,
  PositionProps,
  position,
  ShadowProps,
  shadow,
  SpacingProps,
  spacing,
} from '../../@goods-system'

export interface LineCssProps<T extends ThemeType = ThemeType>
  extends BorderProps<T>,
    ColorProps<T>,
    LayoutProps<T>,
    PositionProps<T>,
    ShadowProps<T>,
    SpacingProps<T> {}

const styleFn = compose<LineCssProps>(
  border,
  color,
  layout,
  position,
  shadow,
  spacing
)

export const LineStyled = styled.hr<LineCssProps>(
  ({ h = '2px', m = '0', bg = 'black10', radius = '4px', ...props }) => {
    return styleFn({ h, m, bg, radius, ...props })
  }
)

LineStyled.displayName = 'LineStyled'

export type SeparatorProps = StyledComponentProps<
  'hr',
  ThemeType,
  LineCssProps,
  never
>

export const Line: React.MemoExoticComponent<React.ForwardRefExoticComponent<
  SeparatorProps & React.RefAttributes<HTMLHRElement>
>> = React.memo(
  React.forwardRef((props, ref) => <LineStyled ref={ref} {...props} />)
)

Line.displayName = 'Line'

export { SeparatorProps as LineProps }

export default Line
