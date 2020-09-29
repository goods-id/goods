import { Property as CSS } from 'csstype'
import { system, ThemeType, Config, ResponsiveValue } from '@styled-system/core'

export interface GridProps<Theme extends ThemeType = ThemeType> {
  /**
   * **Gap**
   *
   * The **gap** CSS property sets the gaps (gutters)
   * between rows and columns. It is a shorthand for
   * row-gap and column-gap.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)
   */
  gap?: ResponsiveValue<CSS.Gap, Theme>
  /**
   * **Grid Area**
   *
   * The **grid-area** CSS shorthand property specifies
   * a grid item’s size and location within a grid
   * by contributing a line, a span, or nothing (automatic)
   * to its grid placement, thereby specifying the edges of
   * its grid area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area)
   */
  gArea?: ResponsiveValue<CSS.GridArea, Theme>
  /**
   * **Grid Auto Columns**
   *
   * The **grid-auto-columns** CSS property specifies
   * the size of an implicitly-created grid column track
   * or pattern of tracks.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns)
   */
  gAutoCol?: ResponsiveValue<CSS.GridAutoColumns, Theme>
  /**
   * **Grid Auto Rows**
   *
   * The **grid-auto-rows** CSS property specifies the size of
   * an implicitly-created grid row track or pattern of
   * tracks.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows)
   */
  gAutoRow?: ResponsiveValue<CSS.GridAutoRows, Theme>
  /**
   * **Grid Auto Flow**
   *
   * The **grid-auto-flow** CSS property controls how the
   * auto-placement algorithm works, specifying exactly how
   * auto-placed items get flowed into the grid.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow)
   */
  gAutoFlow?: ResponsiveValue<CSS.GridAutoFlow, Theme>
  /**
   * **Grid Column Start**
   *
   * The **grid-column-start** CSS property specifies a
   * grid item’s start position within the grid column by
   * contributing a line, a span, or nothing (automatic)
   * to its grid placement. This start position defines the
   * block-start edge of the grid area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start)
   */
  gColStart?: ResponsiveValue<CSS.GridColumnStart, Theme>
  /**
   * **Grid Column End**
   *
   * The **grid-column-end** CSS property specifies a
   * grid item’s end position within the grid column by
   * contributing a line, a span, or nothing (automatic) to its
   * grid placement, thereby specifying the block-end edge of
   * its grid area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end)
   */
  gColEnd?: ResponsiveValue<CSS.GridColumnEnd, Theme>
  /**
   * **Grid Column**
   *
   * The **grid-column** CSS property specifies a grid item's
   * size and location within a grid column by contributing
   * a line, a span, or nothing (automatic) to its grid
   * placement, thereby specifying the inline-start and inline-end
   * edge of its grid area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column)
   */
  gCol?: ResponsiveValue<CSS.GridColumn, Theme>
  /**
   * **Grid Row Start**
   *
   * The **grid-row-start** CSS property specifies a grid
   * item’s start position within the grid row by contributing
   * a line, a span, or nothing (automatic) to its grid
   * placement, thereby specifying the inline-start edge of
   * its grid area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start
   */
  gRowStart?: ResponsiveValue<CSS.GridRowStart, Theme>
  /**
   * **Grid Row End**
   *
   * The **grid-row-end** CSS property specifies a grid item’s
   * end position within the grid row by contributing a line, a
   * span, or nothing (automatic) to its grid placement, thereby
   * specifying the inline-end edge of its grid area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end
   */
  gRowEnd?: ResponsiveValue<CSS.GridRowEnd, Theme>
  /**
   * **Grid Row**
   *
   * The **grid-row** CSS shorthand property specifies a grid
   * item’s size and location within the grid row by
   * contributing a line, a span, or nothing (automatic) to its
   * grid placement, thereby specifying the inline-start and
   * inline-end edge of its grid area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row
   */
  gRow?: ResponsiveValue<CSS.GridRow, Theme>
  /**
   * **Grid Template**
   *
   * The **grid-template** CSS property is a shorthand property
   * for defining grid columns, rows, and areas.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template
   */
  gTemp?: ResponsiveValue<CSS.GridTemplate, Theme>
  /**
   * **Grid Template Areas**
   *
   * The **grid-template-areas** CSS property specifies named
   * grid areas, establishing the cells in the grid and assigning
   * them names.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas
   */
  gTempAreas?: ResponsiveValue<CSS.GridTemplateAreas, Theme>
  /**
   * **Grid Template Columns**
   *
   * The **grid-template-columns** CSS property defines the line
   * names and track sizing functions of the grid columns.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
   */
  gTempCol?: ResponsiveValue<CSS.GridTemplateColumns, Theme>
  /**
   * **Grid Template Rows**
   *
   * The **grid-template-rows** CSS property defines the line
   * names and track sizing functions of the grid rows.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
   */
  gTempRow?: ResponsiveValue<CSS.GridTemplateRows, Theme>
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

export const grid = system<GridProps>(config)
