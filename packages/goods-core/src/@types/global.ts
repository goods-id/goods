import * as React from 'react'
import {
  StyledComponentProps as StyledComponentPropsBase,
  DefaultTheme,
} from 'styled-components'
import { ConfigStyle } from 'styled-system'

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
