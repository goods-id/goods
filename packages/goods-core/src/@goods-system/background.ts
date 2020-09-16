import * as CSS from 'csstype'
import { system } from 'styled-system'

import { ThemeType } from '../theme'
import { Config, ResponsiveValue } from '../@types/global'

export interface BackgroundProps<
  Theme extends ThemeType = ThemeType,
  TLength = string | number
> {
  bgs?: ResponsiveValue<CSS.BackgroundProperty<TLength>, Theme>
  bgImage?: ResponsiveValue<CSS.BackgroundImageProperty, Theme>
  bgSize?: ResponsiveValue<CSS.BackgroundSizeProperty<TLength>, Theme>
  bgPosi?: ResponsiveValue<CSS.BackgroundPositionProperty<TLength>, Theme>
  bgRepeat?: ResponsiveValue<CSS.BackgroundRepeatProperty, Theme>
  bgClip?: ResponsiveValue<CSS.BackgroundClipProperty, Theme>
  bgAttach: ResponsiveValue<CSS.BackgroundAttachmentProperty, Theme>
}

const config: Config<BackgroundProps> = {
  bgs: { property: 'background' },
  bgImage: { property: 'backgroundImage' },
  bgSize: { property: 'backgroundSize' },
  bgPosi: { property: 'backgroundPosition' },
  bgRepeat: { property: 'backgroundRepeat' },
  bgClip: { property: 'backgroundClip' },
  bgAttach: { property: 'backgroundAttachment' },
}

export const background = system(config)
