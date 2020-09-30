import { Property as CSS } from 'csstype'
import {
  system,
  ThemeType,
  Config,
  ResponsiveValue,
  ColorName,
  RadiusName,
} from '@styled-system/core'
import colors from '../color'
import { radiusConstants } from '../radius'

export interface BorderProps<Theme extends ThemeType = ThemeType> {
  /**
   * **Border**
   *
   * The border shorthand CSS property sets an element's border. It sets the values of border-width, border-style, and border-color.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
   * */
  b?: ResponsiveValue<CSS.Border, Theme>
  /**
   * **Border Color**
   *
   * The border-color shorthand CSS property sets the color of an element's border.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color)
   * */
  bC?: ResponsiveValue<CSS.BorderColor | ColorName<Theme>, Theme>
  /**
   * **Border Style**
   *
   * The border-style shorthand CSS property sets the line style for all four sides of an element's border.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)
   * */
  bS?: ResponsiveValue<CSS.BorderStyle, Theme>
  /**
   * **Border Width**
   *
   * The border-width shorthand CSS property sets the width of an element's border.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width)
   * */
  bW?: ResponsiveValue<CSS.BorderWidth, Theme>
  /**
   * **Border Top**
   *
   * The border-top shorthand CSS property sets all the properties of an element's top border.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top)
   * */
  bTop?: ResponsiveValue<CSS.BorderTop, Theme>
  /**
   * **Border Top Color**
   *
   * The border-top-color CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties border-color or border-top.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color)
   * */
  bTopC?: ResponsiveValue<CSS.BorderTopColor | ColorName<Theme>, Theme>
  /**
   * **Border Top Style**
   *
   * The border-top-style CSS property sets the line style of an element's top border.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-style)
   * */
  bTopS?: ResponsiveValue<CSS.BorderTopStyle, Theme>
  /**
   * **Border Top Width**
   *
   * The border-top-width CSS property sets the width of the top border of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width)
   * */
  bTopW?: ResponsiveValue<CSS.BorderTopWidth, Theme>
  /**
   * **Border Left**
   *
   * The border-left shorthand CSS property set an element's left border.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left)
   * */
  bLeft?: ResponsiveValue<CSS.BorderLeft, Theme>
  /**
   * **Border Left Color**
   *
   * The border-left-color CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties border-color or border-left.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color)
   * */
  bLeftC?: ResponsiveValue<CSS.BorderLeftColor | ColorName<Theme>, Theme>
  /**
   * **Border Left Style**
   *
   * The border-left-style CSS property sets the line style of an element's left border.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-style)
   * */
  bLeftS?: ResponsiveValue<CSS.BorderLeftStyle, Theme>
  /**
   * **Border Left Width**
   *
   * The border-left-width CSS property sets the width of the left border of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width)
   * */
  bLeftW?: ResponsiveValue<CSS.BorderLeftWidth, Theme>
  /**
   * **Border Right**
   *
   * The border-right shorthand CSS property sets the properties of an element's right border.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right)
   * */
  bRight?: ResponsiveValue<CSS.BorderRight, Theme>
  /**
   * **Border Right Color**
   *
   * The border-right-color CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties border-color or border-right.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color)
   * */
  bRightC?: ResponsiveValue<CSS.BorderRightColor | ColorName<Theme>, Theme>
  /**
   * **Border Right Style**
   *
   * The border-right-style CSS property sets the line style of an element's right border.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-style)
   * */
  bRightS?: ResponsiveValue<CSS.BorderRightStyle, Theme>
  /**
   * **Border Right Width**
   *
   * The border-right-width CSS property sets the width of the right border of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width)
   * */
  bRightW?: ResponsiveValue<CSS.BorderRightWidth, Theme>
  /**
   * **Border Bottom**
   *
   * The border-bottom shorthand CSS property sets an element's bottom border. It sets the values of border-bottom-width, border-bottom-style and border-bottom-color.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom)
   * */
  bBottom?: ResponsiveValue<CSS.BorderBottom, Theme>
  /**
   * **Border Bottom Color**
   *
   * The border-bottom-color CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties border-color or border-bottom.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color)
   * */
  bBottomC?: ResponsiveValue<CSS.BorderBottomColor | ColorName<Theme>, Theme>
  /**
   * **Border Bottom Style**
   *
   * The border-bottom-style CSS property sets the line style of an element's bottom border.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style)
   * */
  bBottomS?: ResponsiveValue<CSS.BorderBottomStyle, Theme>
  /**
   * **Border Bottom Width**
   *
   * The border-bottom-width CSS property sets the width of the bottom border of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width)
   * */
  bBottomW?: ResponsiveValue<CSS.BorderBottomWidth, Theme>
  /**
   * **Border Top Right Radius**
   *
   * The border-top-right-radius CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius)
   * */
  bTopRightRad?: ResponsiveValue<
    RadiusName<Theme> | CSS.BorderTopRightRadius,
    Theme
  >
  /**
   * **Border Top Left Radius**
   *
   * The border-top-left-radius CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius)
   * */
  bTopLeftRad?: ResponsiveValue<
    RadiusName<Theme> | CSS.BorderTopLeftRadius,
    Theme
  >
  /**
   * **Border Bottom Right Radius**
   *
   * The border-bottom-right-radius CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius)
   * */
  bBotRightRad?: ResponsiveValue<
    RadiusName<Theme> | CSS.BorderBottomRightRadius,
    Theme
  >
  /**
   * **Border Bottom Left Radius**
   *
   * The border-bottom-left-radius CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius)
   * */
  bBotLeftRad?: ResponsiveValue<
    RadiusName<Theme> | CSS.BorderBottomLeftRadius,
    Theme
  >
  /**
   * **Border Radius**
   *
   * The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
   * */
  radius?: ResponsiveValue<RadiusName<Theme> | CSS.BorderRadius, Theme>
  /**
   * **Outline**
   *
   * The outline CSS shorthand property set all the outline properties in a single declaration.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/outline)
   * */
  outline?: ResponsiveValue<CSS.Outline, Theme>
}

const config: Config<BorderProps> = {
  b: {
    property: 'border',
  },
  bC: {
    property: 'borderColor',
    scale: 'colors',
    defaultScale: colors,
  },
  bW: {
    property: 'borderWidth',
  },
  bS: {
    property: 'borderStyle',
  },
  bTop: {
    property: 'borderTop',
  },
  bTopC: {
    property: 'borderTopColor',
    scale: 'colors',
    defaultScale: colors,
  },
  bTopW: {
    property: 'borderTopWidth',
  },
  bTopS: {
    property: 'borderTopStyle',
  },
  bLeft: {
    property: 'borderLeft',
  },
  bLeftC: {
    property: 'borderLeftColor',
    scale: 'colors',
    defaultScale: colors,
  },
  bLeftW: {
    property: 'borderLeftWidth',
  },
  bLeftS: {
    property: 'borderLeftStyle',
  },
  bBottom: {
    property: 'borderBottom',
  },
  bBottomC: {
    property: 'borderBottomColor',
    scale: 'colors',
    defaultScale: colors,
  },
  bBottomW: {
    property: 'borderBottomWidth',
  },
  bBottomS: {
    property: 'borderBottomStyle',
  },
  bRight: {
    property: 'borderRight',
  },
  bRightC: {
    property: 'borderRightColor',
    scale: 'colors',
    defaultScale: colors,
  },
  bRightW: {
    property: 'borderRightWidth',
  },
  bRightS: {
    property: 'borderRightStyle',
  },
  bTopLeftRad: {
    property: 'borderTopLeftRadius',
    scale: 'radii',
    defaultScale: radiusConstants,
  },
  bTopRightRad: {
    property: 'borderTopRightRadius',
    scale: 'radii',
    defaultScale: radiusConstants,
  },
  bBotLeftRad: {
    property: 'borderBottomLeftRadius',
    scale: 'radii',
    defaultScale: radiusConstants,
  },
  bBotRightRad: {
    property: 'borderBottomRightRadius',
    scale: 'radii',
    defaultScale: radiusConstants,
  },
  radius: {
    property: 'borderRadius',
    scale: 'radii',
    defaultScale: radiusConstants,
  },
  outline: {
    property: 'outline',
  },
}

export const border = system<BorderProps>(config)
