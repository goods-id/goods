import { IconProps } from '@pomona/goods-core'

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
