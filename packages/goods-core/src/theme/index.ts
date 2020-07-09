import colors from '../color'
import radius from '../radius'
import spacing from '../spacing'
import breakpoints from '../breakpoints'

export interface Theme {
  colors: Partial<typeof colors>
  radius: typeof radius
  spacing: typeof spacing
  breakpoints: typeof breakpoints
}

const theme: Theme = {
  colors,
  radius,
  spacing,
  breakpoints,
}

export function overrideTheme(newTheme: Partial<Pick<Theme, 'colors'>>): Theme {
  return {
    ...theme,
    colors: { ...theme.colors, ...newTheme.colors },
  }
}

export default theme
