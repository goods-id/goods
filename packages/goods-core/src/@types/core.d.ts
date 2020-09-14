import 'styled-components'
import { Theme, ThemeType } from '../theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Omit<Theme, 'breakpoints'>, ThemeType {}
}
