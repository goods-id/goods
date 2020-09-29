import { Property as CSS } from 'csstype'
import {
  system,
  ThemeType,
  Config,
  ResponsiveValue,
  ColorName,
  RadiusName,
} from '@styled-system/core'
import colors from '../color'
import { radiusConstants } from '../radius'

export interface BorderProps<Theme extends ThemeType = ThemeType> {
  b?: ResponsiveValue<CSS.Border, Theme>
  bC?: ResponsiveValue<CSS.BorderColor | ColorName<Theme>, Theme>
  bS?: ResponsiveValue<CSS.BorderStyle, Theme>
  bW?: ResponsiveValue<CSS.BorderWidth, Theme>
  bTop?: ResponsiveValue<CSS.BorderTop, Theme>
  bTopC?: ResponsiveValue<CSS.BorderTopColor | ColorName<Theme>, Theme>
  bTopS?: ResponsiveValue<CSS.BorderTopStyle, Theme>
  bTopW?: ResponsiveValue<CSS.BorderTopWidth, Theme>
  bLeft?: ResponsiveValue<CSS.BorderLeft, Theme>
  bLeftC?: ResponsiveValue<CSS.BorderLeftColor | ColorName<Theme>, Theme>
  bLeftS?: ResponsiveValue<CSS.BorderLeftStyle, Theme>
  bLeftW?: ResponsiveValue<CSS.BorderLeftWidth, Theme>
  bRight?: ResponsiveValue<CSS.BorderRight, Theme>
  bRightC?: ResponsiveValue<CSS.BorderRightColor | ColorName<Theme>, Theme>
  bRightS?: ResponsiveValue<CSS.BorderRightStyle, Theme>
  bRightW?: ResponsiveValue<CSS.BorderRightWidth, Theme>
  bBottom?: ResponsiveValue<CSS.BorderBottom, Theme>
  bBottomC?: ResponsiveValue<CSS.BorderBottomColor | ColorName<Theme>, Theme>
  bBottomS?: ResponsiveValue<CSS.BorderBottomStyle, Theme>
  bBottomW?: ResponsiveValue<CSS.BorderBottomWidth, Theme>
  bTopRightRad?: ResponsiveValue<
    RadiusName<Theme> | CSS.BorderTopRightRadius,
    Theme
  >
  bTopLeftRad?: ResponsiveValue<
    RadiusName<Theme> | CSS.BorderTopLeftRadius,
    Theme
  >
  bBotRightRad?: ResponsiveValue<
    RadiusName<Theme> | CSS.BorderBottomRightRadius,
    Theme
  >
  bBotLeftRad?: ResponsiveValue<
    RadiusName<Theme> | CSS.BorderBottomLeftRadius,
    Theme
  >
  radius?: ResponsiveValue<RadiusName<Theme> | CSS.BorderRadius, Theme>
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

export const border = system<BorderProps>(config)
