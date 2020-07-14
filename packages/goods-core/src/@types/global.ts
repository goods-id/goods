import * as React from 'react'

export interface BaseIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export interface BaseProps<T = Element>
  extends Omit<React.HTMLProps<T>, 'as' | 'size'> {
  as: keyof JSX.IntrinsicElements
}

type OneParam<T> = [T]
type TwoParams<T> = [T, T]
type ThreeParams<T> = [T, T, T]
type FourParams<T> = [T, T, T, T]

export type NameToCSSValue<T> = (
  ...params: OneParam<T> | TwoParams<T> | ThreeParams<T> | FourParams<T>
) => string
