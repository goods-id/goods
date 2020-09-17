import * as CSS from 'csstype'
import { system } from 'styled-system'

import { ThemeType } from '../theme'
import { Config, ResponsiveValue } from '../@types/global'

export interface GridProps<
  Theme extends ThemeType = ThemeType,
  TLength = string | number
> {
  gap?: ResponsiveValue<CSS.GapProperty<TLength>, Theme>
  gArea?: ResponsiveValue<CSS.GridAreaProperty, Theme>
  gAutoCol?: ResponsiveValue<CSS.GridAutoColumnsProperty<TLength>, Theme>
  gAutoRow?: ResponsiveValue<CSS.GridAutoRowsProperty<TLength>, Theme>
  gAutoFlow?: ResponsiveValue<CSS.GridAutoFlowProperty, Theme>
  gColStart?: ResponsiveValue<CSS.GridColumnStartProperty, Theme>
  gColEnd?: ResponsiveValue<CSS.GridColumnEndProperty, Theme>
  gCol?: ResponsiveValue<CSS.GridColumnProperty, Theme>
  gRowStart?: ResponsiveValue<CSS.GridRowStartProperty, Theme>
  gRowEnd?: ResponsiveValue<CSS.GridRowEndProperty, Theme>
  gRow?: ResponsiveValue<CSS.GridRowProperty, Theme>
  gTemp?: ResponsiveValue<CSS.GridTemplateProperty, Theme>
  gTempAreas?: ResponsiveValue<CSS.GridTemplateAreasProperty, Theme>
  gTempCol?: ResponsiveValue<CSS.GridTemplateColumnsProperty<TLength>, Theme>
  gTempRow?: ResponsiveValue<CSS.GridTemplateRowsProperty<TLength>, Theme>
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
