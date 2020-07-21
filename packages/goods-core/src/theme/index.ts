import colors from '../color'
import radius from '../radius'
import spacing from '../spacing'
import breakpoints from '../breakpoints'

export interface Theme {
  colors: Partial<typeof colors>
  radius: typeof radius
  spacing: typeof spacing
  breakpoints: typeof breakpoints
  fontBase: string
}

const theme: Theme = {
  colors,
  radius,
  spacing,
  breakpoints,
  fontBase: 'Rubik',
}

export function overrideTheme(
  newTheme: Partial<Pick<Theme, 'colors' | 'fontBase'>>
): Theme {
  return {
    ...theme,
    colors: { ...theme.colors, ...newTheme.colors },
    ...(newTheme.fontBase && { fontBase: newTheme.fontBase }),
  }
}

export default theme
