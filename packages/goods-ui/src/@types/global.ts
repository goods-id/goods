import { IconProps } from '@pomona/goods-core'

export type ChangeEventInput = React.ChangeEvent<HTMLInputElement>

export interface IconButtonProps {
  icName: IconProps['name']
  icSize?: IconProps['size']
  icColor?: IconProps['c']
  icRotate?: IconProps['rotate']
}
