import styled from 'styled-components'
import { Property as CSS } from 'csstype'
import {
  ColorName,
  compose,
  ResponsiveValue,
  system,
  ThemeType,
} from '@styled-system/core'
import { spacing, SpacingProps } from '../../@goods-system/spacing'
import { layout, LayoutProps } from '../../@goods-system/layout'
import { motion, MotionProps } from '../../@goods-system/motion'
import { interaction, InteractionProps } from '../../@goods-system/interaction'
import colors from '../../color'

export interface SvgSystemProps<Theme extends ThemeType = ThemeType> {
  /**
   * **Fill**
   *
   * The **fill** attribute has two different meanings. For shapes and
   * text it's a presentation attribute that defines the color (or any
   * SVG paint servers like gradients or patterns) used to paint the
   * element; for animation it defines the final state of the
   * animation.
   *
   * As a presentation attribute, it can be applied to any element but
   * it only has an effect on the following eleven elements:
   * `<altGlyph>`, `<circle>`, `<ellipse>`, `<path>`, `<polygon>`,
   * `<polyline>`, `<rect>`, `<text>`, `<textPath>`, `<tref>`, and
   * `<tspan>`.
   *
   * For animation five elements are using this attribute:
   * `<animate>`, `<animateColor>`, `<animateMotion>`,
   * `<animateTransform>`, and `<set>`.
   *
   * **Note**: As a presentation attribute **fill** can be used as a
   * CSS property.
   *
   * Can use color name defined in theme, color hex, color rgb, color
   * rgba, or css globals
   *
   * **Syntax**: `'black30' | '#333333' | 'rgba(100, 100, 100, 0.4)' |
   * 'rgb(100, 100, 100)' | 'inherit' | 'black'`
   *
   * [MDN
   * reference](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill)
   */
  svgFill?: ResponsiveValue<ColorName<Theme> | CSS.Fill, Theme>
}

const svgSystem = system<SvgSystemProps>({
  svgFill: { property: 'fill', defaultScale: colors, scale: 'colors' },
})

export const iconSize = {
  small: '16px',
  normal: '24px',
  large: '32px',
}

export const iconRotate = {
  up: 0,
  right: 90,
  down: 180,
  left: 270,
}

type IconSize = keyof typeof iconSize | number
type IconRotate = keyof typeof iconRotate | number

export interface SvgStyledProps
  extends SpacingProps,
    LayoutProps,
    MotionProps,
    InteractionProps {
  /**
   * Width and height of svg element
   */
  size?: IconSize
  /**
   * Rotate
   */
  rotate?: IconRotate
}

export interface SvgProps
  extends SvgStyledProps,
    Omit<
      React.SVGProps<SVGSVGElement>,
      'rotate' | 'ref' | 'transform' | 'overflow' | 'd' | 'cursor'
    > {}

function getSize(size?: IconSize): string {
  return typeof size === 'number'
    ? `${size}px`
    : size
    ? iconSize[size]
    : iconSize.normal
}

function getRotate(rotate?: IconRotate): string {
  return rotate
    ? `rotate(${typeof rotate === 'number' ? rotate : iconRotate[rotate]}deg)`
    : ''
}

const styleFn = compose<Omit<SvgStyledProps, 'size' | 'rotate'>>(
  spacing,
  layout,
  motion,
  interaction
)

export const Svg = styled.svg<SvgStyledProps>(
  ({ size = 'normal', rotate, s, transform, ...props }) => {
    return styleFn({
      s: s || getSize(size),
      transform: transform || getRotate(rotate),
      ...props,
    })
  }
) as React.ForwardRefExoticComponent<
  SvgProps & React.RefAttributes<SVGSVGElement>
>

export const Path = styled.path<SvgSystemProps>(svgSystem)

export interface SvgIconProps {
  /**
   * Primary color of svg fill
   */
  c?: SvgSystemProps['svgFill']
  /**
   * Secondary color of svg fill
   */
  c1?: SvgSystemProps['svgFill']
}
