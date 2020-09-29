import React from 'react'
import styled, { CSSObject, StyledComponentProps } from 'styled-components'
import { Property as CSS } from 'csstype'
import { compose, merge, ThemeType } from '@styled-system/core'
import {
  BorderProps,
  border,
  ColorProps,
  color,
  ImageSystemProps,
  image,
  LayoutProps,
  layout,
  MotionProps,
  motion,
  PositionProps,
  position,
  ShadowProps,
  shadow,
  SpacingProps,
  spacing,
  CustomSelector,
  hover,
} from '../../@goods-system'

interface BaseImageCssProps<T extends ThemeType = ThemeType>
  extends BorderProps<T>,
    ColorProps<T>,
    ImageSystemProps<T>,
    LayoutProps<T>,
    MotionProps<T>,
    PositionProps<T>,
    ShadowProps<T>,
    SpacingProps<T> {}

export interface ImageCssProps<T extends ThemeType = ThemeType>
  extends BaseImageCssProps<T>,
    Pick<CustomSelector<T>, 'hoverProps'> {
  /**
   * Cursor
   */
  cursor?: CSS.Cursor
}

export type ImageProps = StyledComponentProps<
  'img',
  ThemeType,
  ImageCssProps,
  never
>

const styleFn = compose<BaseImageCssProps>(
  border,
  color,
  image,
  layout,
  motion,
  position,
  shadow,
  spacing
)

export const ImageStyled = styled.img<ImageCssProps>(
  ({ d = 'flex', cursor, hoverProps = {}, ...props }) => {
    const { theme } = props
    const baseStyle = styleFn({ d, ...props })
    const otherStyle: CSSObject = {
      cursor,
      ...hover({ theme, ...hoverProps }),
    }
    return merge(baseStyle, otherStyle)
  }
)

ImageStyled.displayName = 'ImageStyled'

export const Image: React.MemoExoticComponent<React.ForwardRefExoticComponent<
  ImageProps & React.RefAttributes<HTMLImageElement>
>> = React.memo(
  React.forwardRef((props, ref) => <ImageStyled ref={ref} {...props} />)
)

Image.displayName = 'Image'

export default Image
