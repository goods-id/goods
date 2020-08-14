export const breakpointConstants = {
  xs: '0px',
  sm: '321px',
  md: '481px',
  lg: '768px',
  xl: '1366px',
}

export type Breakpoint = keyof typeof breakpointConstants

export type InBreakpoint<CssType, P extends Breakpoint = Breakpoint> =
  | CssType
  | Partial<Pick<{ [key in Breakpoint]: CssType }, P>>

export const getValueInBp = <
  T extends string | number | undefined,
  P extends Breakpoint = Breakpoint
>(
  value: InBreakpoint<T, P>,
  breakpoint: P | P[]
): T | undefined => {
  if (typeof value === 'object') {
    if (Array.isArray(breakpoint)) {
      return breakpoint.reduce<T | undefined>(
        (prev, bp) => prev || value[bp],
        value[breakpoint[0]]
      )
    }
    return value[breakpoint]
  }
  return value
}

export default function breakpoints(name: Exclude<Breakpoint, 'xs'>): string {
  return `@media screen and (min-width: ${breakpointConstants[name]})`
}
