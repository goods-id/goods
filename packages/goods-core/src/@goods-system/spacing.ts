import { Globals } from 'csstype'
import { system, compose } from '@styled-system/core'

import { ThemeType } from '../theme'
import { Config, ResponsiveValue } from '../@types/global'
import { spacingConstants } from '../spacing'

export interface MarginProps<Theme extends ThemeType = ThemeType> {
  /** Margin Top, Right, Bottom, and Left */
  m?: ResponsiveValue<keyof Required<Theme>['space'] | Globals, Theme>
  /** Margin Top */
  mt?: ResponsiveValue<keyof Required<Theme>['space'] | Globals, Theme>
  /** Margin Right */
  mr?: ResponsiveValue<keyof Required<Theme>['space'] | Globals, Theme>
  /** Margin Bottom */
  mb?: ResponsiveValue<keyof Required<Theme>['space'] | Globals, Theme>
  /** Margin Left */
  ml?: ResponsiveValue<keyof Required<Theme>['space'] | Globals, Theme>
  /** Margin Right and Margin Left */
  mx?: ResponsiveValue<keyof Required<Theme>['space'] | Globals, Theme>
  /** Margin Top and Margin Bottom */
  my?: ResponsiveValue<keyof Required<Theme>['space'] | Globals, Theme>
}

export interface PaddingProps<Theme extends ThemeType = ThemeType> {
  /** Padding Top, Right, Bottom, and Left */
  p?: ResponsiveValue<keyof Required<Theme>['space'] | Globals, Theme>
  /** Padding Top */
  pt?: ResponsiveValue<keyof Required<Theme>['space'] | Globals, Theme>
  /** Padding Right */
  pr?: ResponsiveValue<keyof Required<Theme>['space'] | Globals, Theme>
  /** Padding Bottom */
  pb?: ResponsiveValue<keyof Required<Theme>['space'] | Globals, Theme>
  /** Padding Left */
  pl?: ResponsiveValue<keyof Required<Theme>['space'] | Globals, Theme>
  /** Padding Right and Padding Left */
  px?: ResponsiveValue<keyof Required<Theme>['space'] | Globals, Theme>
  /** Padding Top and Padding Bottom */
  py?: ResponsiveValue<keyof Required<Theme>['space'] | Globals, Theme>
}

export interface SpacingProps<Theme extends ThemeType = ThemeType>
  extends MarginProps<Theme>,
    PaddingProps<Theme> {}

const configMargin: Config<MarginProps> = {
  m: { property: 'margin', scale: 'space', defaultScale: spacingConstants },
  mt: { property: 'marginTop', scale: 'space', defaultScale: spacingConstants },
  mr: {
    property: 'marginRight',
    scale: 'space',
    defaultScale: spacingConstants,
  },
  mb: {
    property: 'marginBottom',
    scale: 'space',
    defaultScale: spacingConstants,
  },
  ml: {
    property: 'marginLeft',
    scale: 'space',
    defaultScale: spacingConstants,
  },
  mx: {
    properties: ['marginRight', 'marginLeft'],
    scale: 'space',
    defaultScale: spacingConstants,
  },
  my: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    defaultScale: spacingConstants,
  },
}

const configPadding: Config<PaddingProps> = {
  p: { property: 'padding', scale: 'space', defaultScale: spacingConstants },
  pt: {
    property: 'paddingTop',
    scale: 'space',
    defaultScale: spacingConstants,
  },
  pr: {
    property: 'paddingRight',
    scale: 'space',
    defaultScale: spacingConstants,
  },
  pb: {
    property: 'paddingBottom',
    scale: 'space',
    defaultScale: spacingConstants,
  },
  pl: {
    property: 'paddingLeft',
    scale: 'space',
    defaultScale: spacingConstants,
  },
  px: {
    properties: ['paddingRight', 'paddingLeft'],
    scale: 'space',
    defaultScale: spacingConstants,
  },
  py: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space',
    defaultScale: spacingConstants,
  },
}

export const margin = system(configMargin)
export const padding = system(configPadding)

export const spacing = compose(margin, padding)
