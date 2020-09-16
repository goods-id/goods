import * as CSS from 'csstype'
import { system } from 'styled-system'
import { Config, ResponsiveValue } from '../@types/global'

import { ThemeType } from '../theme'

export interface FlexboxProps<
  Theme extends ThemeType = ThemeType,
  TLength = string | number
> {
  f?: ResponsiveValue<CSS.FlexProperty<TLength>, Theme>
  fDir?: ResponsiveValue<CSS.FlexDirectionProperty, Theme>
  fGrow?: ResponsiveValue<CSS.GlobalsNumber, Theme>
  fShrink?: ResponsiveValue<CSS.GlobalsNumber, Theme>
  fJustify?: ResponsiveValue<CSS.JustifyContentProperty, Theme>
  fJSelf?: ResponsiveValue<CSS.JustifySelfProperty, Theme>
  fAlign?: ResponsiveValue<CSS.AlignItemsProperty, Theme>
  fASelf?: ResponsiveValue<CSS.AlignSelfProperty, Theme>
  fWrap?: ResponsiveValue<CSS.FlexWrapProperty, Theme>
  order?: ResponsiveValue<CSS.GlobalsNumber, Theme>
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
