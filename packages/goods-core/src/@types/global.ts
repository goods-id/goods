/* eslint-disable @typescript-eslint/ban-types */
import * as React from 'react'
import * as CSS from 'csstype'
import {
  StyledComponentProps as StyledComponentPropsBase,
  DefaultTheme,
} from 'styled-components'
import { ObjectOrArray, ConfigStyle } from '@styled-system/core'

import { Theme, ThemeType } from '../theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Omit<Theme, 'breakpoints'>, ThemeType {}
}

export interface BaseIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export interface BaseProps<T = Element>
  extends Omit<React.HTMLProps<T>, 'as' | 'size'> {
  as?: keyof JSX.IntrinsicElements
}

type OneParam<T> = [T]
type TwoParams<T> = [T, T]
type ThreeParams<T> = [T, T, T]
type FourParams<T> = [T, T, T, T]

export type NameToCSSValue<T> = (
  ...params: OneParam<T> | TwoParams<T> | ThreeParams<T> | FourParams<T>
) => string

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

interface GoodsConfigStyle extends ConfigStyle {
  scale?: Exclude<keyof ThemeType, 'fontBase'>
}

export type Config<Props> = Required<
  { [x in keyof Props]: GoodsConfigStyle | boolean }
>

export type StyledComponentProps<
  C extends keyof JSX.IntrinsicElements,
  // eslint-disable-next-line @typescript-eslint/ban-types
  O extends object
> = StyledComponentPropsBase<C, DefaultTheme, O, never> & {
  as?: keyof JSX.IntrinsicElements
  forwardedAs?: keyof JSX.IntrinsicElements
}

export type ResponsiveValue<T, Theme extends ThemeType = ThemeType> =
  | T
  | null
  | { [key in keyof Required<Theme>['breakpoints']]?: T }

export type GlobalsNumber = CSS.Globals | number
