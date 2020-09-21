import { Property as CSS } from 'csstype'
import { system } from '@styled-system/core'
import { Config, ResponsiveValue, GlobalsNumber } from '../@types/global'
import { ThemeType } from '../theme'

export interface FlexboxProps<
  Theme extends ThemeType = ThemeType,
  TLength = string | number
> {
  f?: ResponsiveValue<CSS.Flex<TLength>, Theme>
  fDir?: ResponsiveValue<CSS.FlexDirection, Theme>
  fGrow?: ResponsiveValue<GlobalsNumber, Theme>
  fShrink?: ResponsiveValue<GlobalsNumber, Theme>
  fJustify?: ResponsiveValue<CSS.JustifyContent, Theme>
  fJSelf?: ResponsiveValue<CSS.JustifySelf, Theme>
  fAlign?: ResponsiveValue<CSS.AlignItems, Theme>
  fASelf?: ResponsiveValue<CSS.AlignSelf, Theme>
  fWrap?: ResponsiveValue<CSS.FlexWrap, Theme>
  order?: ResponsiveValue<GlobalsNumber, Theme>
}

const config: Config<FlexboxProps> = {
  f: { property: 'flex' },
  fDir: { property: 'flexDirection' },
  fGrow: { property: 'flexGrow' },
  fShrink: { property: 'flexShrink' },
  fJustify: { property: 'justifyContent' },
  fJSelf: { property: 'justifySelf' },
  fAlign: { property: 'alignItems' },
  fASelf: { property: 'alignSelf' },
  fWrap: { property: 'flexWrap' },
  order: true,
}

export const flexbox = system(config)
