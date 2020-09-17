import * as CSS from 'csstype'
import { system } from 'styled-system'

import { ThemeType } from '../theme'
import { Config, ResponsiveValue } from '../@types/global'
import { radiusConstants } from '../radius'

export interface BorderProps<
  Theme extends ThemeType = ThemeType,
  TLength = string | number
> {
  b?: ResponsiveValue<CSS.BorderProperty<TLength>, Theme>
  bC?: ResponsiveValue<CSS.BorderColorProperty, Theme>
  bS?: ResponsiveValue<CSS.BorderStyleProperty, Theme>
  bW?: ResponsiveValue<CSS.BorderWidthProperty<TLength>, Theme>
  bTop?: ResponsiveValue<CSS.BorderTopProperty<TLength>, Theme>
  bTopC?: ResponsiveValue<CSS.BorderTopColorProperty, Theme>
  bTopS?: ResponsiveValue<CSS.BorderTopStyleProperty, Theme>
  bTopW?: ResponsiveValue<CSS.BorderTopWidthProperty<TLength>, Theme>
  bLeft?: ResponsiveValue<CSS.BorderLeftProperty<TLength>, Theme>
  bLeftC?: ResponsiveValue<CSS.BorderLeftColorProperty, Theme>
  bLeftS?: ResponsiveValue<CSS.BorderLeftStyleProperty, Theme>
  bLeftW?: ResponsiveValue<CSS.BorderLeftWidthProperty<TLength>, Theme>
  bRight?: ResponsiveValue<CSS.BorderRightProperty<TLength>, Theme>
  bRightC?: ResponsiveValue<CSS.BorderRightColorProperty, Theme>
  bRightS?: ResponsiveValue<CSS.BorderRightStyleProperty, Theme>
  bRightW?: ResponsiveValue<CSS.BorderRightWidthProperty<TLength>, Theme>
  bBottom?: ResponsiveValue<CSS.BorderBottomProperty<TLength>, Theme>
  bBottomC?: ResponsiveValue<CSS.BorderBottomColorProperty, Theme>
  bBottomS?: ResponsiveValue<CSS.BorderBottomStyleProperty, Theme>
  bBottomW?: ResponsiveValue<CSS.BorderBottomWidthProperty<TLength>, Theme>
  bTopRightRad?: ResponsiveValue<
    keyof Required<Theme>['radii'] | CSS.Globals,
    Theme
  >
  bTopLeftRad?: ResponsiveValue<
    keyof Required<Theme>['radii'] | CSS.Globals,
    Theme
  >
  bBotRightRad?: ResponsiveValue<
    keyof Required<Theme>['radii'] | CSS.Globals,
    Theme
  >
  bBotLeftRad?: ResponsiveValue<
    keyof Required<Theme>['radii'] | CSS.Globals,
    Theme
  >
  radius?: ResponsiveValue<keyof Required<Theme>['radii'] | CSS.Globals, Theme>
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
