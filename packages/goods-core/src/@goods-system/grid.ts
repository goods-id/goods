import { Property as CSS } from 'csstype'
import { system } from '@styled-system/core'

import { ThemeType } from '../theme'
import { Config, ResponsiveValue } from '../@types/global'

export interface GridProps<
  Theme extends ThemeType = ThemeType,
  TLength = string | number
> {
  gap?: ResponsiveValue<CSS.Gap<TLength>, Theme>
  gArea?: ResponsiveValue<CSS.GridArea, Theme>
  gAutoCol?: ResponsiveValue<CSS.GridAutoColumns<TLength>, Theme>
  gAutoRow?: ResponsiveValue<CSS.GridAutoRows<TLength>, Theme>
  gAutoFlow?: ResponsiveValue<CSS.GridAutoFlow, Theme>
  gColStart?: ResponsiveValue<CSS.GridColumnStart, Theme>
  gColEnd?: ResponsiveValue<CSS.GridColumnEnd, Theme>
  gCol?: ResponsiveValue<CSS.GridColumn, Theme>
  gRowStart?: ResponsiveValue<CSS.GridRowStart, Theme>
  gRowEnd?: ResponsiveValue<CSS.GridRowEnd, Theme>
  gRow?: ResponsiveValue<CSS.GridRow, Theme>
  gTemp?: ResponsiveValue<CSS.GridTemplate, Theme>
  gTempAreas?: ResponsiveValue<CSS.GridTemplateAreas, Theme>
  gTempCol?: ResponsiveValue<CSS.GridTemplateColumns<TLength>, Theme>
  gTempRow?: ResponsiveValue<CSS.GridTemplateRows<TLength>, Theme>
}

const config: Config<GridProps> = {
  gap: true,
  gArea: {
    property: 'gridArea',
  },
  gAutoCol: {
    property: 'gridAutoColumns',
  },
  gAutoRow: {
    property: 'gridAutoRows',
  },
  gAutoFlow: {
    property: 'gridAutoFlow',
  },
  gColStart: {
    property: 'gridColumnStart',
  },
  gColEnd: {
    property: 'gridColumnEnd',
  },
  gCol: {
    property: 'gridColumn',
  },
  gRowStart: {
    property: 'gridRowStart',
  },
  gRowEnd: {
    property: 'gridRowEnd',
  },
  gRow: {
    property: 'gridRow',
  },
  gTemp: {
    property: 'gridTemplate',
  },
  gTempAreas: {
    property: 'gridTemplateAreas',
  },
  gTempCol: {
    property: 'gridTemplateColumns',
  },
  gTempRow: {
    property: 'gridTemplateRows',
  },
}

export const grid = system(config)
