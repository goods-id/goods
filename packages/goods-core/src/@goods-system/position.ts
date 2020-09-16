import * as CSS from 'csstype'
import { system, get } from 'styled-system'

import { ThemeType } from '../theme'
import { Config, ResponsiveValue } from '../@types/global'

export interface PositionProps<
  Theme extends ThemeType = ThemeType,
  TLength = string | number
> {
  posi?: ResponsiveValue<CSS.PositionProperty, Theme>
  z?: ResponsiveValue<CSS.ZIndexProperty, Theme>
  top?: ResponsiveValue<CSS.TopProperty<TLength>, Theme>
  right?: ResponsiveValue<CSS.RightProperty<TLength>, Theme>
  bottom?: ResponsiveValue<CSS.BottomProperty<TLength>, Theme>
  left?: ResponsiveValue<CSS.LeftProperty<TLength>, Theme>
}

const isNumber = n => typeof n === 'number' && !Number.isNaN(n)
const getPosition = (n, scale) =>
  get(scale, n, !isNumber(n) || n > 1 ? n : `${n * 100}%`)

const config: Config<PositionProps> = {
  posi: { property: 'position' },
  z: { property: 'zIndex' },
  top: { property: 'top', transform: getPosition },
  right: { property: 'right', transform: getPosition },
  bottom: { property: 'bottom', transform: getPosition },
  left: { property: 'left', transform: getPosition },
}

export const position = system(config)
