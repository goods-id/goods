import { Globals } from 'csstype'
import { system } from '@styled-system/core'
import { ThemeType } from '../theme'
import { Config, ResponsiveValue } from '../@types/global'
import shadowConstant from '../shadow'

export interface ShadowProps<Theme extends ThemeType = ThemeType> {
  shadow?: ResponsiveValue<keyof Required<Theme>['shadows'] | Globals, Theme>
  tShadow?: ResponsiveValue<keyof Required<Theme>['shadows'] | Globals, Theme>
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
