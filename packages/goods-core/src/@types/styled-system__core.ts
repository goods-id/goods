/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '@styled-system/core' {
  import { Properties, Globals } from 'csstype'
  import { CSSObject, DefaultTheme } from 'styled-components'

  export type GlobalsNumber = Globals | number

  type Theme = Required<DefaultTheme>
  export { Theme as ThemeType }

  export type ScaleName<Th = Theme> = Exclude<
    keyof Th,
    'breakpoints' | 'fontBase' | 'spacing' | 'radius' | 'shadow'
  >

  export type ColorName<Th extends Theme = Theme> = keyof Th['colors']
  export type ShadowName<Th extends Theme = Theme> = keyof Th['shadows']
  export type RadiusName<Th extends Theme = Theme> = keyof Th['radii']
  export type SpacingName<Th extends Theme = Theme> = keyof Th['space']
  export type ZIndexName<Th extends Theme = Theme> = keyof Th['zIndices']

  export function get(obj: any, ...paths: Array<string | number>): any

  export type ObjectOrArray<T, K extends keyof any = keyof any> =
    | T[]
    | Record<K, T | Record<K, T> | T[]>

  export type Scale = ObjectOrArray<number | string | Record<string, any>>

  export type ResponsiveValue<T, Th extends Theme = Theme> =
    | T
    | null
    | { [key in keyof Th['breakpoints']]?: T }

  export type TransformFn<
    P extends Record<string, any> = Record<string, any>
  > = (value?: any, scale?: any, props?: P) => CSSObject[string]

  export interface SxFn<
    P extends Record<string, any> = Record<string, any>,
    Th extends Theme = Theme
  > {
    (value?: any, scale?: any, props?: P & { theme: Th }):
      | CSSObject
      | void
      | undefined
    scale?: ScaleName
    defaultScale?: Scale
  }

  export interface StyleFnBase<
    P extends Record<string, any>,
    Th extends Theme = Theme
  > {
    (props: Partial<P> & { theme: Partial<Th> }): CSSObject | undefined
    readonly config?: SxFn<P>
    readonly propNames?: (keyof P)[]
    readonly cache?: { breakpoints?: Th['breakpoints']; media?: string[] }
  }

  export type StyleFnObject<
    P extends Record<string, any>,
    Th extends Theme = Theme
  > = Partial<
    {
      readonly [K in Exclude<keyof P, 'config'>]: StyleFnBase<
        Record<K, P[K]>,
        Th
      >
    }
  >

  export type StyleFn<
    P extends Record<string, any>,
    Th extends Theme = Theme
  > = StyleFnBase<P, Th> & StyleFnObject<P, Th>

  export interface ConfigStyle<
    P extends Record<string, any>,
    Th extends Theme = Theme
  > {
    /**
     * The CSS property to use in the returned style object (overridden by
     * `properties` if present).
     * */
    property?: keyof Properties
    /**
     * An array of multiple properties (e.g. `['marginLeft', 'marginRight']`) to
     * which this style's value will be assigned (overrides `property` when
     * present).
     */
    properties?: (keyof Properties)[]
    /** A string referencing a key in the `theme` object. */
    scale?: ScaleName<Th>
    /** A fallback scale object for when there isn't one defined in the `theme` object. */
    defaultScale?: Scale
    /** A function to transform the raw value based on the scale. */
    transform?: TransformFn<P>
  }

  export type Config<
    P extends Record<string, any>,
    Th extends Theme = Theme
  > = Required<
    {
      [K in keyof P]: K extends keyof Properties
        ? true | ConfigStyle<P, Th> | SxFn<P, Th>
        : ConfigStyle<P, Th> | SxFn<P, Th>
    }
  >

  export function system<P, Th extends Theme = Theme>(
    config: Config<P, Th>
  ): StyleFn<P, Th>

  export function compose<A, B, Th extends Theme = Theme>(
    a: StyleFn<A, Th>,
    b: StyleFn<B, Th>
  ): StyleFn<A & B, Th>
  export function compose<A, B, C, Th extends Theme = Theme>(
    a: StyleFn<A, Th>,
    b: StyleFn<B, Th>,
    c: StyleFn<C, Th>
  ): StyleFn<A & B & C, Th>
  export function compose<A, B, C, D, Th extends Theme = Theme>(
    a: StyleFn<A, Th>,
    b: StyleFn<B, Th>,
    c: StyleFn<C, Th>,
    d: StyleFn<D, Th>
  ): StyleFn<A & B & C & D, Th>
  export function compose<A, B, C, D, E, Th extends Theme = Theme>(
    a: StyleFn<A, Th>,
    b: StyleFn<B, Th>,
    c: StyleFn<C, Th>,
    d: StyleFn<D, Th>,
    e: StyleFn<E, Th>
  ): StyleFn<A & B & C & D & E, Th>
  export function compose<A, B, C, D, E, F, Th extends Theme = Theme>(
    a: StyleFn<A, Th>,
    b: StyleFn<B, Th>,
    c: StyleFn<C, Th>,
    d: StyleFn<D, Th>,
    e: StyleFn<E, Th>,
    f: StyleFn<F, Th>
  ): StyleFn<A & B & C & D & E & F, Th>
  export function compose<A, B, C, D, E, F, G, Th extends Theme = Theme>(
    a: StyleFn<A, Th>,
    b: StyleFn<B, Th>,
    c: StyleFn<C, Th>,
    d: StyleFn<D, Th>,
    e: StyleFn<E, Th>,
    f: StyleFn<F, Th>,
    g: StyleFn<G, Th>
  ): StyleFn<A & B & C & D & E & F & G, Th>
  export function compose<P, Th extends Theme = Theme>(
    ...parsers: StyleFn<P, Th>[]
  ): StyleFn<P, Th>

  export function createStyleFunction<P, Th extends Theme = Theme>(
    args: ConfigStyle<P, Th>
  ): SxFn<P, Th>

  export function createParser<P, Th extends Theme = Theme>(
    config: Partial<{ [K in keyof P]: SxFn<P, Th> }>
  ): StyleFn<P, Th>

  export function merge(a: any, b: any): any
}
