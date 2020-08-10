import colors from '../color'
import radius from '../radius'
import spacing from '../spacing'
import shadow from '../shadow'
import breakpoints from '../breakpoints'

export interface Theme {
  colors: Partial<typeof colors>
  radius: typeof radius
  spacing: typeof spacing
  breakpoints: typeof breakpoints
  shadow: Partial<typeof shadow>
  fontBase: string
}

const theme: Theme = {
  colors,
  radius,
  spacing,
  breakpoints,
  shadow,
  fontBase: 'Rubik',
}

export function overrideTheme(
  newTheme: Partial<Pick<Theme, 'colors' | 'fontBase' | 'shadow'>>
): Theme {
  return {
    ...theme,
    colors: { ...theme.colors, ...newTheme.colors },
    shadow: { ...theme.shadow, ...newTheme.shadow },
    ...(newTheme.fontBase && { fontBase: newTheme.fontBase }),
  }
}

export default theme
