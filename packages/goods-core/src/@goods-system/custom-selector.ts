import { Pseudos, Property as CSS } from 'csstype'
import { compose, StyleFnBase, ThemeType } from '@styled-system/core'
import { background, BackgroundProps } from './background'
import { border, BorderProps } from './border'
import { color, ColorProps } from './color'
import { flexbox, FlexboxProps } from './flexbox'
import { grid, GridProps } from './grid'
import { layout, LayoutProps } from './layout'
import { list, ListProps } from './list'
import { motion, MotionProps } from './motion'
import { position, PositionProps } from './position'
import { shadow, ShadowProps } from './shadow'
import { spacing, SpacingProps } from './spacing'
import { table, TableProps } from './table'
import { typography, TypographyProps } from './typography'

// eslint-disable-next-line @typescript-eslint/ban-types
type Selector = Pseudos | (string & {})

export interface CustomSelectorProps<T extends ThemeType = ThemeType>
  extends BackgroundProps<T>,
    BorderProps<T>,
    ColorProps<T>,
    FlexboxProps<T>,
    GridProps<T>,
    LayoutProps<T>,
    ListProps<T>,
    MotionProps<T>,
    PositionProps<T>,
    ShadowProps<T>,
    SpacingProps<T>,
    TableProps<T>,
    TypographyProps<T> {
  content?: CSS.Content
}

const styleFn = compose<CustomSelectorProps>(
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  list,
  motion,
  position,
  shadow,
  spacing,
  table,
  typography
)

export const customSelector = <T extends ThemeType = ThemeType>(
  selector: Selector
): StyleFnBase<CustomSelectorProps, T> => ({ content, ...props }) => ({
  [selector]: { content, ...styleFn(props) },
})

export interface CustomSelector<T extends ThemeType = ThemeType> {
  /**
   * Goods system CSS properties inside `:hover` selector
   */
  hoverProps?: CustomSelectorProps<T>
  /**
   * Goods system CSS properties inside `:focus` selector
   */
  focusProps?: CustomSelectorProps<T>
  /**
   * Goods system CSS properties inside `:disabled` selector
   */
  disabledProps?: CustomSelectorProps<T>
  /**
   * Goods system CSS properties inside `:active` selector
   */
  activeProps?: CustomSelectorProps<T>
  /**
   * Goods system CSS properties inside `::before` selector
   */
  beforeProps?: CustomSelectorProps<T>
  /**
   * Goods system CSS properties inside `::after` selector
   */
  afterProps?: CustomSelectorProps<T>
}

export const hover = customSelector(':hover')
export const focus = customSelector(':focus')
export const disabled = customSelector(':disabled')
export const active = customSelector(':active')
export const before = customSelector('::before')
export const after = customSelector('::after')
