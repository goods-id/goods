import { Property as CSS } from 'csstype'
import {
  system,
  ThemeType,
  Config,
  ResponsiveValue,
  ShadowName,
} from '@styled-system/core'
import shadowConstant from '../shadow'

export interface ShadowProps<Theme extends ThemeType = ThemeType> {
  shadow?: ResponsiveValue<ShadowName<Theme> | CSS.BoxShadow, Theme>
  tShadow?: ResponsiveValue<ShadowName<Theme> | CSS.TextShadow, Theme>
}

const config: Config<ShadowProps> = {
  shadow: {
    property: 'boxShadow',
    scale: 'shadows',
    defaultScale: shadowConstant,
  },
  tShadow: {
    property: 'textShadow',
    scale: 'shadows',
    defaultScale: shadowConstant,
  },
}

export const shadow = system(config)
