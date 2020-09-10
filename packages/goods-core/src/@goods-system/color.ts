import * as CSS from 'csstype'
import { system, ResponsiveValue } from 'styled-system'

import { ThemeType } from '../theme'
import { Config } from '../@types/global'

export interface ColorProps<Theme extends ThemeType = ThemeType> {
  c?: ResponsiveValue<keyof Theme['colors'] | CSS.Globals, Theme>
  bg?: ResponsiveValue<keyof Theme['colors'] | CSS.Globals, Theme>
  opacity?: ResponsiveValue<CSS.GlobalsNumber, Theme>
}

const config: Config<ColorProps> = {
  c: { property: 'color', scale: 'colors' },
  bg: { property: 'backgroundColor', scale: 'colors' },
  opacity: true,
}

export const color = system(config)
