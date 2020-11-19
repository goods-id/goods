import { SvgIconProps, SvgProps } from './svg/_base'

const iconName = {
  pomona: 'pomona',
  home: 'home',
  homeOff: 'homeOff',
  profile: 'profile',
  profileOff: 'profileOff',
  notification: 'notification',
  notificationOff: 'notificationOff',
  note: 'note',
  noteOff: 'noteOff',
  cart: 'cart',
  cartOff: 'cartOff',
  transaction: 'transaction',
  store: 'store',
  camera: 'camera',
  warning: 'warning',
  plus: 'plus',
  minus: 'minus',
  close: 'close',
  arrow: 'arrow',
  search: 'search',
  dropdown: 'dropdown',
  chevron: 'chevron',
  checked: 'checked',
  checkbox: 'checkbox',
  checkboxOff: 'checkboxOff',
  approved: 'approved',
  rejected: 'rejected',
  question: 'question',
  point: 'point',
  receipt: 'receipt',
  burgerBar: 'burgerBar',
  radio: 'radio',
  radioActive: 'radioActive',
  radioDisabled: 'radioDisabled',
  calendar: 'calendar',
}

export type IconName = keyof typeof iconName

export interface IconRenderProps extends SvgIconProps {
  /**
   * Icon Name
   */
  name: IconName
}

export interface IconProps extends IconRenderProps, Omit<SvgProps, 'name'> {}
