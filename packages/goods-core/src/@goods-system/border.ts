import { Property as CSS } from 'csstype'
import { system } from '@styled-system/core'
import { ThemeType } from '../theme'
import { Config, ResponsiveValue, GlobalsNumber } from '../@types/global'
import { radiusConstants } from '../radius'

export interface BorderProps<
  Theme extends ThemeType = ThemeType,
  TLength = string | number
> {
  b?: ResponsiveValue<CSS.Border<TLength>, Theme>
  bC?: ResponsiveValue<CSS.BorderColor, Theme>
  bS?: ResponsiveValue<CSS.BorderStyle, Theme>
  bW?: ResponsiveValue<CSS.BorderWidth<TLength>, Theme>
  bTop?: ResponsiveValue<CSS.BorderTop<TLength>, Theme>
  bTopC?: ResponsiveValue<CSS.BorderTopColor, Theme>
  bTopS?: ResponsiveValue<CSS.BorderTopStyle, Theme>
  bTopW?: ResponsiveValue<CSS.BorderTopWidth<TLength>, Theme>
  bLeft?: ResponsiveValue<CSS.BorderLeft<TLength>, Theme>
  bLeftC?: ResponsiveValue<CSS.BorderLeftColor, Theme>
  bLeftS?: ResponsiveValue<CSS.BorderLeftStyle, Theme>
  bLeftW?: ResponsiveValue<CSS.BorderLeftWidth<TLength>, Theme>
  bRight?: ResponsiveValue<CSS.BorderRight<TLength>, Theme>
  bRightC?: ResponsiveValue<CSS.BorderRightColor, Theme>
  bRightS?: ResponsiveValue<CSS.BorderRightStyle, Theme>
  bRightW?: ResponsiveValue<CSS.BorderRightWidth<TLength>, Theme>
  bBottom?: ResponsiveValue<CSS.BorderBottom<TLength>, Theme>
  bBottomC?: ResponsiveValue<CSS.BorderBottomColor, Theme>
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
