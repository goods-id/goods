import { Property as CSS } from 'csstype'
import { system } from '@styled-system/core'
import { Config, ResponsiveValue } from '../@types/global'
import { ThemeType } from '../theme'

export interface TableProps<
  Theme extends ThemeType = ThemeType,
  TLength = string | number
> {
  /**
   * **Border Collapse**
   *
   * The border-collapse CSS property sets whether cells inside a <table> have shared or separate borders.
   *
   * **Syntax**: `collapse | separate`
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse)
   * */
  borCollapse?: ResponsiveValue<CSS.BorderCollapse, Theme>
  /**
   * **Border Spacing**
   *
   * The border-spacing CSS property sets the distance between the borders of adjacent <table> cells. This property applies only when border-collapse is separate.
   *
   * **Syntax**: `<length> <length>?`
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-spacing)
   * */
  borSpace?: ResponsiveValue<CSS.BorderSpacing<TLength>, Theme>
  /**
   * **Table Layout**
   *
   * The table-layout CSS property sets the algorithm used to lay out <table> cells, rows, and columns.
   *
   * **Syntax**: `auto | fixed`
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout)
   * */
  tableLayout?: ResponsiveValue<CSS.TableLayout, Theme>
  /**
   * **Empty Cells**
   *
   * The empty-cells CSS property sets whether borders and backgrounds appear around <table> cells that have no visible content.
   *
   * **Syntax**: `show | hide`
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/empty-cells)
   * */
  emptyCells?: ResponsiveValue<CSS.EmptyCells, Theme>
  /**
   * **Caption Side**
   *
   * The caption-side CSS property puts the content of a table's <caption> on the specified side. The values are relative to the writing-mode of the table.
   *
   * **Syntax**: `top | bottom | block-start | block-end | inline-start | inline-end`
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side)
   * */
  captionSide?: ResponsiveValue<CSS.CaptionSide, Theme>
}

const config: Config<TableProps> = {
  borCollapse: { property: 'borderCollapse' },
  borSpace: { property: 'borderSpacing' },
  tableLayout: { property: 'tableLayout' },
  emptyCells: { property: 'emptyCells' },
  captionSide: { property: 'captionSide' },
}

export const table = system(config)
