import * as CSS from 'csstype'
import { system, get, ResponsiveValue } from 'styled-system'

import { ThemeType } from '../theme'
import { Config } from '../@types/global'

export interface LayoutProps<
  Theme extends ThemeType = ThemeType,
  TLength = string | number
> {
  w?: ResponsiveValue<CSS.WidthProperty<TLength>, Theme>
  minW?: ResponsiveValue<CSS.MinWidthProperty<TLength>, Theme>
  maxW?: ResponsiveValue<CSS.MaxWidthProperty<TLength>, Theme>
  h?: ResponsiveValue<CSS.HeightProperty<TLength>, Theme>
  minH?: ResponsiveValue<CSS.MinHeightProperty<TLength>, Theme>
  maxH?: ResponsiveValue<CSS.MaxHeightProperty<TLength>, Theme>
  s?: ResponsiveValue<CSS.HeightProperty<TLength>, Theme>
  d?: ResponsiveValue<CSS.DisplayProperty, Theme>
  vAlign?: ResponsiveValue<CSS.VerticalAlignProperty<TLength>, Theme>
  overflow?: ResponsiveValue<CSS.OverflowProperty, Theme>
  overflowX?: ResponsiveValue<CSS.OverflowXProperty, Theme>
  overflowY?: ResponsiveValue<CSS.OverflowYProperty, Theme>
}

const isNumber = n => typeof n === 'number' && !Number.isNaN(n)
const getSize = (n, scale) =>
  get(scale, n, !isNumber(n) || n > 1 ? n : `${n * 100}%`)

const config: Config<LayoutProps> = {
  w: { property: 'width', transform: getSize },
  minW: { property: 'minWidth', transform: getSize },
  maxW: { property: 'maxWidth', transform: getSize },
  h: { property: 'height', transform: getSize },
  minH: { property: 'minHeight', transform: getSize },
  maxH: { property: 'maxHeight', transform: getSize },
  s: { properties: ['width', 'height'], transform: getSize },
  d: { property: 'display' },
  vAlign: { property: 'verticalAlign' },
  overflow: true,
  overflowX: true,
  overflowY: true,
}

export const layout = system(config)
