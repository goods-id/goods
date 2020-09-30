import { Property as CSS } from 'csstype'
import { system, ThemeType, Config, ResponsiveValue } from '@styled-system/core'

export interface InteractionProps<Theme extends ThemeType = ThemeType> {
  /**
   * **Cursor**
   *
   * The cursor CSS property sets the type of mouse cursor, if any, to show when the mouse pointer is over an element.
   *
   * **Syntax**: `pointer | auto | help | wait | crosshair | not-allowed | zoom-in | grab`
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)
   * */
  cursor?: ResponsiveValue<CSS.Cursor, Theme>
  /**
   * **Pointer Events**
   *
   * The pointer-events CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.
   *
   * **Syntax**: `auto | none`
   *
   * **Syntax SVG Only**: `all | stroke | fill | visible | visiblePainted | visibleFill | visibleStroke | `
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events)
   * */
  pointEvents?: ResponsiveValue<CSS.PointerEvents, Theme>
  /**
   * The **`resize`** CSS property sets whether an element is resizable, and if so, in which directions.
   *
   * **Syntax**: `none | both | horizontal | vertical | block | inline`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **1**  |  **4**  | **3**  | **79** | No  |
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/resize)
   */
  resize?: ResponsiveValue<CSS.Resize, Theme>
}

const config: Config<InteractionProps> = {
  cursor: true,
  pointEvents: {
    property: 'pointerEvents',
  },
  resize: true,
}

export const interaction = system(config)
