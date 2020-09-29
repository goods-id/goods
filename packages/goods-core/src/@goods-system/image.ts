import { Property as CSS } from 'csstype'
import { system, ResponsiveValue, ThemeType } from '@styled-system/core'

export interface ImageSystemProps<T extends ThemeType = ThemeType> {
  objectFit?: ResponsiveValue<CSS.ObjectFit, T>
  objectPosi?: ResponsiveValue<CSS.ObjectPosition, T>
  imgRendering?: ResponsiveValue<CSS.ImageRendering, T>
}

export const image = system<ImageSystemProps>({
  objectFit: { properties: ['objectFit', 'OObjectFit'] },
  objectPosi: { properties: ['objectPosition', 'OObjectPosition'] },
  imgRendering: { property: 'imageRendering' },
})
