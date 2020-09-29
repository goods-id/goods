/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import * as React from 'react'

import { ThemeType, Theme } from '../theme'

declare module 'styled-components' {
  export interface DefaultTheme
    extends Pick<Theme, 'spacing' | 'radius'>,
      ThemeType {}

  export type StyledComponentPropsWithAs<
    C extends keyof JSX.IntrinsicElements,
    P extends object,
    T extends DefaultTheme = DefaultTheme,
    A extends keyof any = never
  > = StyledComponentProps<C, T, P, A> & {
    as?: keyof JSX.IntrinsicElements
    forwardedAs?: keyof JSX.IntrinsicElements
  }
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
