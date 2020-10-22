import { color, ColorProps, IconProps } from '@pomona/goods-core'
import { DefaultTheme } from 'styled-components'

export interface IconButtonProps {
  icName: IconProps['name']
  icSize?: IconProps['size']
  icColor?: IconProps['c']
  icRotate?: IconProps['rotate']
}

export const isIconButtonProps = (
  params?: React.ReactNode | IconButtonProps
): params is IconButtonProps => {
  if (!params) return false
  return typeof params === 'object' && 'icName' in params
}

export const getColor = (col: ColorProps['c'], theme: DefaultTheme): string => {
  const colorConst = color({ c: col, theme })?.color
  return colorConst || ''
}

declare global {
  type ChangeEventInput = React.ChangeEvent<HTMLInputElement>
}
