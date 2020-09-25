import { Property as CSS } from 'csstype'
import { system } from '@styled-system/core'
import { ThemeType } from '../theme'
import { Config, ResponsiveValue, GlobalsNumber } from '../@types/global'
import colors from '../color'
import { radiusConstants } from '../radius'

export interface BorderProps<
  Theme extends ThemeType = ThemeType,
  TLength = string | number
> {
  b?: ResponsiveValue<CSS.Border<TLength>, Theme>
  bC?: ResponsiveValue<CSS.BorderColor | keyof Required<Theme>['colors'], Theme>
  bS?: ResponsiveValue<CSS.BorderStyle, Theme>
  bW?: ResponsiveValue<CSS.BorderWidth<TLength>, Theme>
  bTop?: ResponsiveValue<CSS.BorderTop<TLength>, Theme>
  bTopC?: ResponsiveValue<
    CSS.BorderTopColor | keyof Required<Theme>['colors'],
    Theme
  >
  bTopS?: ResponsiveValue<CSS.BorderTopStyle, Theme>
  bTopW?: ResponsiveValue<CSS.BorderTopWidth<TLength>, Theme>
  bLeft?: ResponsiveValue<CSS.BorderLeft<TLength>, Theme>
  bLeftC?: ResponsiveValue<
    CSS.BorderLeftColor | keyof Required<Theme>['colors'],
    Theme
  >
  bLeftS?: ResponsiveValue<CSS.BorderLeftStyle, Theme>
  bLeftW?: ResponsiveValue<CSS.BorderLeftWidth<TLength>, Theme>
  bRight?: ResponsiveValue<CSS.BorderRight<TLength>, Theme>
  bRightC?: ResponsiveValue<
    CSS.BorderRightColor | keyof Required<Theme>['colors'],
    Theme
  >
  bRightS?: ResponsiveValue<CSS.BorderRightStyle, Theme>
  bRightW?: ResponsiveValue<CSS.BorderRightWidth<TLength>, Theme>
  bBottom?: ResponsiveValue<CSS.BorderBottom<TLength>, Theme>
  bBottomC?: ResponsiveValue<
    CSS.BorderBottomColor | keyof Required<Theme>['colors'],
    Theme
  >
  bBottomS?: ResponsiveValue<CSS.BorderBottomStyle, Theme>
  bBottomW?: ResponsiveValue<CSS.BorderBottomWidth<TLength>, Theme>
  bTopRightRad?: ResponsiveValue<
    keyof Required<Theme>['radii'] | GlobalsNumber,
    Theme
  >
  bTopLeftRad?: ResponsiveValue<
    keyof Required<Theme>['radii'] | GlobalsNumber,
    Theme
  >
  bBotRightRad?: ResponsiveValue<
    keyof Required<Theme>['radii'] | GlobalsNumber,
    Theme
  >
  bBotLeftRad?: ResponsiveValue<
    keyof Required<Theme>['radii'] | GlobalsNumber,
    Theme
  >
  radius?: ResponsiveValue<
    keyof Required<Theme>['radii'] | GlobalsNumber,
    Theme
  >
}

const config: Config<BorderProps> = {
  b: {
    property: 'border',
  },
  bC: {
    property: 'borderColor',
    scale: 'colors',
    defaultScale: colors,
  },
  bW: {
    property: 'borderWidth',
  },
  bS: {
    property: 'borderStyle',
  },
  bTop: {
    property: 'borderTop',
  },
  bTopC: {
    property: 'borderTopColor',
    scale: 'colors',
    defaultScale: colors,
  },
  bTopW: {
    property: 'borderTopWidth',
  },
  bTopS: {
    property: 'borderTopStyle',
  },
  bLeft: {
    property: 'borderLeft',
  },
  bLeftC: {
    property: 'borderLeftColor',
    scale: 'colors',
    defaultScale: colors,
  },
  bLeftW: {
    property: 'borderLeftWidth',
  },
  bLeftS: {
    property: 'borderLeftStyle',
  },
  bBottom: {
    property: 'borderBottom',
  },
  bBottomC: {
    property: 'borderBottomColor',
    scale: 'colors',
    defaultScale: colors,
  },
  bBottomW: {
    property: 'borderBottomWidth',
  },
  bBottomS: {
    property: 'borderBottomStyle',
  },
  bRight: {
    property: 'borderRight',
  },
  bRightC: {
    property: 'borderRightColor',
    scale: 'colors',
    defaultScale: colors,
  },
  bRightW: {
    property: 'borderRightWidth',
  },
  bRightS: {
    property: 'borderRightStyle',
  },
  bTopLeftRad: {
    property: 'borderTopLeftRadius',
    scale: 'radii',
    defaultScale: radiusConstants,
  },
  bTopRightRad: {
    property: 'borderTopRightRadius',
    scale: 'radii',
    defaultScale: radiusConstants,
  },
  bBotLeftRad: {
    property: 'borderBottomLeftRadius',
    scale: 'radii',
    defaultScale: radiusConstants,
  },
  bBotRightRad: {
    property: 'borderBottomRightRadius',
    scale: 'radii',
    defaultScale: radiusConstants,
  },
  radius: {
    property: 'borderRadius',
    scale: 'radii',
    defaultScale: radiusConstants,
  },
}

export const border = system(config)
