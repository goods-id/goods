/* eslint-disable @typescript-eslint/ban-types */
import * as CSS from 'csstype'
import { ObjectOrArray } from '@styled-system/core'
import colors from '../color'
import radius, { radiusConstants } from '../radius'
import spacing, { spacingConstants } from '../spacing'
import shadow from '../shadow'
import breakpoints, { breakpointConstants } from '../breakpoints'
import { IconProps } from '../icon/_types'
import { BorderProps } from '../@goods-system/border'

type AlertMapping = Record<
  'info' | 'error' | 'warning' | 'success',
  {
    bg: BorderProps['bC']
    bC: BorderProps['bC']
    icName: IconProps['name']
    icColor: IconProps['c']
  }
>

const alerts: AlertMapping = {
  info: {
    bg: 'blue10',
    bC: 'blue20',
    icName: 'approved',
    icColor: 'blue60',
  },
  error: {
    bg: 'red10',
    bC: 'red20',
    icName: 'approved',
    icColor: 'red60',
  },
  warning: {
    bg: 'orange20',
    bC: 'orange70',
    icName: 'approved',
    icColor: 'orange70',
  },
  success: {
    bg: 'green10',
    bC: 'green20',
    icName: 'approved',
    icColor: 'green80',
  },
}

export const zIndices = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  backdrop: 1150,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
}

export type TLengthStyledSystem = string | 0 | number

export interface ThemeStyledSystem<TLength = TLengthStyledSystem> {
  breakpoints?: ObjectOrArray<number | string | symbol>
  mediaQueries?: { [size: string]: string }
  space?: ObjectOrArray<CSS.Property.Margin<number | string>>
  fontSizes?: ObjectOrArray<CSS.Property.FontSize<number>>
  colors?: ObjectOrArray<CSS.Property.Color>
  fonts?: ObjectOrArray<CSS.Property.FontFamily>
  fontWeights?: ObjectOrArray<CSS.Property.FontWeight>
  lineHeights?: ObjectOrArray<CSS.Property.LineHeight<TLength>>
  letterSpacings?: ObjectOrArray<CSS.Property.LetterSpacing<TLength>>
  sizes?: ObjectOrArray<CSS.Property.Height<{}> | CSS.Property.Width<{}>>
  borders?: ObjectOrArray<CSS.Property.Border<{}>>
  borderStyles?: ObjectOrArray<CSS.Property.Border<{}>>
  borderWidths?: ObjectOrArray<CSS.Property.BorderWidth<TLength>>
  radii?: ObjectOrArray<CSS.Property.BorderRadius<TLength>>
  shadows?: ObjectOrArray<CSS.Property.BoxShadow>
  zIndices?: ObjectOrArray<CSS.Property.ZIndex>
  buttons?: ObjectOrArray<CSS.StandardProperties>
  colorStyles?: ObjectOrArray<CSS.StandardProperties>
  textStyles?: ObjectOrArray<CSS.StandardProperties>
}

export interface Theme {
  colors: Partial<typeof colors>
  /**
   * @deprecated
   */
  radius: typeof radius
  /**
   * @deprecated
   */
  spacing: typeof spacing
  breakpoints: typeof breakpoints
  shadow: Partial<typeof shadow>
  fontBase: string
}

export interface ThemeType extends ThemeStyledSystem {
  breakpoints?: typeof breakpointConstants
  colors?: typeof colors
  space?: typeof spacingConstants
  radii?: typeof radiusConstants
  shadows?: typeof shadow
  zIndices?: typeof zIndices
  fontBase?: string
  alerts?: AlertMapping
}

export const goodsTheme: ThemeType & Partial<Omit<Theme, 'breakpoints'>> = {
  breakpoints: breakpointConstants,
  colors,
  space: spacingConstants,
  radii: radiusConstants,
  shadows: shadow,
  zIndices,
  alerts,
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
    ...(newTheme.alerts &&
      goodsTheme.alerts && {
        alerts: { ...goodsTheme.alerts, ...newTheme.alerts },
      }),
    ...(newTheme.zIndices &&
      goodsTheme.zIndices && {
        zIndices: { ...goodsTheme.zIndices, ...newTheme.zIndices },
      }),
    ...(newTheme.fontBase && { fontBase: newTheme.fontBase }),
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

/**
 * @deprecated
 */
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
