import { Theme as StyledSystemTheme } from 'styled-system'

import colors from '../color'
import radius, { radiusConstants } from '../radius'
import spacing, { spacingConstants } from '../spacing'
import shadow from '../shadow'
import breakpoints, { breakpointConstants } from '../breakpoints'

export interface Theme {
  colors: Partial<typeof colors>
  radius: typeof radius
  spacing: typeof spacing
  breakpoints: typeof breakpoints
  shadow: Partial<typeof shadow>
  fontBase: string
}

export interface ThemeType extends StyledSystemTheme {
  breakpoints?: typeof breakpointConstants
  colors?: typeof colors
  space?: typeof spacingConstants
  radii?: typeof radiusConstants
  shadows?: typeof shadow
  fontBase?: string
}

export const goodsTheme: ThemeType & Partial<Omit<Theme, 'breakpoints'>> = {
  breakpoints: breakpointConstants,
  colors,
  space: spacingConstants,
  radii: radiusConstants,
  shadows: shadow,
  fontBase: 'Rubik',
  radius,
  spacing,
  shadow,
}

export function overrideGoodsTheme(
  newTheme: { [K in keyof ThemeType]?: Partial<ThemeType[K]> }
): Partial<ThemeType> {
  return {
    ...goodsTheme,
    ...(newTheme.colors &&
      goodsTheme.colors && {
        colors: { ...goodsTheme.colors, ...newTheme.colors },
      }),
    ...(newTheme.breakpoints &&
      goodsTheme.breakpoints && {
        breakpoints: { ...goodsTheme.breakpoints, ...newTheme.breakpoints },
      }),
    ...(newTheme.space &&
      goodsTheme.space && {
        space: { ...goodsTheme.space, ...newTheme.space },
      }),
    ...(newTheme.radii &&
      goodsTheme.radii && {
        radii: { ...goodsTheme.radii, ...newTheme.radii },
      }),
    ...(newTheme.shadows &&
      goodsTheme.shadows && {
        shadows: { ...goodsTheme.shadows, ...newTheme.shadows },
      }),
  }
}

const theme: Theme = {
  colors,
  radius,
  spacing,
  breakpoints,
  shadow,
  fontBase: 'Rubik',
}

export function overrideTheme(
  newTheme: Partial<Pick<Theme, 'colors' | 'fontBase' | 'shadow'>>
): Theme {
  return {
    ...theme,
    colors: { ...theme.colors, ...newTheme.colors },
    shadow: { ...theme.shadow, ...newTheme.shadow },
    ...(newTheme.fontBase && { fontBase: newTheme.fontBase }),
  }
}

export default theme
