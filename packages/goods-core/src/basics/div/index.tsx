import React from 'react'
import styled, {
  CSSObject,
  StyledComponentPropsWithAs,
} from 'styled-components'
import { compose, merge, ThemeType } from '@styled-system/core'
import { Property as CSS } from 'csstype'
import {
  color,
  layout,
  spacing,
  flexbox,
  position,
  background,
  border,
  shadow,
  grid,
  list,
  table,
  motion,
  hover,
  BackgroundProps,
  PositionProps,
  ColorProps,
  SpacingProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  ShadowProps,
  GridProps,
  ListProps,
  TableProps,
  MotionProps,
  CustomSelector,
} from '../../@goods-system'

export interface BoxStyledProps<T extends ThemeType = ThemeType>
  extends LayoutProps<T>,
    ColorProps<T>,
    SpacingProps<T>,
    FlexboxProps<T>,
    BackgroundProps<T>,
    BorderProps<T>,
    ShadowProps<T>,
    PositionProps<T>,
    GridProps<T>,
    ListProps<T>,
    MotionProps<T>,
    TableProps<T> {}

export interface DivCssProps<T extends ThemeType = ThemeType>
  extends BoxStyledProps<T>,
    Pick<CustomSelector<T>, 'hoverProps'> {
  /**
   * Cursor
   */
  cursor?: CSS.Cursor
  /**
   * Use custom scroll bar.
   * If `overflow === 'scroll'`, custom scroll bar is auto shown.
   * @default false
   */
  isScrollBarOn?: boolean
  /**
   * ScrollBar Width
   * @default 8
   */
  scrollBarWidth?: CSS.Width
  /**
   * ScrollBar Height
   * @default 24
   */
  scrollBarHeight?: CSS.Height
  /**
   * ScrollBar Color
   */
  scrollBarColor?: CSS.Color
  /**
   * ScrollBar Background Color
   */
  scrollBarBackgroundColor?: CSS.BackgroundColor
  /**
   * ScrollBar Radius
   * @default 8
   */
  scrollBarRadius?: CSS.BorderRadius
}

const styleFn = compose<BoxStyledProps>(
  layout,
  color,
  spacing,
  flexbox,
  background,
  border,
  shadow,
  position,
  grid,
  list,
  motion,
  table
)

export const DivStyled = styled.div<DivCssProps>(
  ({
    d = 'flex',
    fDir = 'column',
    cursor,
    hoverProps = {},
    scrollBarWidth = 8,
    scrollBarHeight = 24,
    scrollBarColor,
    scrollBarBackgroundColor,
    scrollBarRadius = 8,
    isScrollBarOn = false,
    theme,
    ...props
  }) => {
    const baseStyle = styleFn({ theme, d, fDir, ...props })
    const otherStyle: CSSObject = {
      cursor,
      ...hover({ theme, ...hoverProps }),
      ...((props.overflow === 'scroll' || isScrollBarOn) && {
        '::-webkit-scrollbar': {
          width: scrollBarWidth,
        },
        '::-webkit-scrollbar-track': {
          backgroundColor: scrollBarBackgroundColor || theme?.colors?.black10,
          borderRadius: scrollBarRadius,
        },
        '::-webkit-scrollbar-thumb': {
          height: scrollBarHeight,
          backgroundColor: scrollBarColor || theme?.colors?.blue50,
          borderRadius: scrollBarRadius,
        },
      }),
    }
    return merge(baseStyle, otherStyle)
  }
)

DivStyled.displayName = 'DivStyled'

export type DivProps = StyledComponentPropsWithAs<'div', DivCssProps>

export const Div: React.MemoExoticComponent<React.ForwardRefExoticComponent<
  DivProps & React.RefAttributes<HTMLDivElement>
>> = React.memo(
  React.forwardRef((props, ref) => <DivStyled ref={ref} {...props} />)
)

Div.displayName = 'Div'

export default Div

export const BoxStyled = styled.div<BoxStyledProps>(
  ({ d = 'flex', fDir = 'column', ...props }) => styleFn({ d, fDir, ...props })
)

BoxStyled.displayName = 'BoxStyled'

export type BoxProps = StyledComponentPropsWithAs<'div', BoxStyledProps>

export const Box = React.memo(
  React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
    return <BoxStyled ref={ref} {...props} />
  })
)

Box.displayName = 'Box'
