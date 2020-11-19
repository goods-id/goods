import React from 'react'
import { defaultPropsList } from './_shared'
import { IconRenderProps, IconProps } from './_types'
import {
  Svg,
  Approved,
  Arrow,
  BurgerBar,
  Calendar,
  Camera,
  Cart,
  CartOff,
  Checkbox,
  CheckboxOff,
  Checked,
  Chevron,
  Close,
  Dropdown,
  Home,
  HomeOff,
  Minus,
  Note,
  NoteOff,
  Notif,
  NotifOff,
  Plus,
  Point,
  Pomona,
  Profile,
  ProfileOff,
  Question,
  Radio,
  RadioActive,
  RadioDisabled,
  Receipt,
  Rejected,
  Search,
  Store,
  Transaction,
  Warning,
} from './svg'

export { Svg } from './svg/_base'
export * from './_types'

const IconRender: React.FC<IconRenderProps> = ({ name, c = 'blue50', c1 }) => {
  switch (name) {
    case 'pomona':
      return <Pomona c={c} c1={c1} />
    case 'home':
      return <Home c={c} c1={c1} />
    case 'homeOff':
      return <HomeOff c={c} c1={c1} />
    case 'profile':
      return <Profile c={c} c1={c1} />
    case 'profileOff':
      return <ProfileOff c={c} c1={c1} />
    case 'notification':
      return <Notif c={c} c1={c1} />
    case 'notificationOff':
      return <NotifOff c={c} c1={c1} />
    case 'note':
      return <Note c={c} c1={c1} />
    case 'noteOff':
      return <NoteOff c={c} c1={c1} />
    case 'cart':
      return <Cart c={c} c1={c1} />
    case 'cartOff':
      return <CartOff c={c} c1={c1} />
    case 'transaction':
      return <Transaction c={c} c1={c1} />
    case 'store':
      return <Store c={c} c1={c1} />
    case 'camera':
      return <Camera c={c} c1={c1} />
    case 'warning':
      return <Warning c={c} c1={c1} />
    case 'plus':
      return <Plus c={c} c1={c1} />
    case 'minus':
      return <Minus c={c} c1={c1} />
    case 'close':
      return <Close c={c} c1={c1} />
    case 'arrow':
      return <Arrow c={c} c1={c1} />
    case 'search':
      return <Search c={c} c1={c1} />
    case 'dropdown':
      return <Dropdown c={c} c1={c1} />
    case 'chevron':
      return <Chevron c={c} c1={c1} />
    case 'checked':
      return <Checked c={c} c1={c1} />
    case 'checkbox':
      return <Checkbox c={c} c1={c1} />
    case 'checkboxOff':
      return <CheckboxOff c={c} c1={c1} />
    case 'approved':
      return <Approved c={c} c1={c1} />
    case 'rejected':
      return <Rejected c={c} c1={c1} />
    case 'question':
      return <Question c={c} c1={c1} />
    case 'point':
      return <Point c={c} c1={c1} />
    case 'receipt':
      return <Receipt c={c} c1={c1} />
    case 'burgerBar':
      return <BurgerBar c={c} c1={c1} />
    case 'radio':
      return <Radio c={c} c1={c1} />
    case 'radioActive':
      return <RadioActive c={c} c1={c1} />
    case 'radioDisabled':
      return <RadioDisabled c={c} c1={c1} />
    case 'calendar':
      return <Calendar c={c} c1={c1} />
    default:
      return null
  }
}

export const Icon = React.memo(
  React.forwardRef<SVGSVGElement, IconProps>(
    ({ name, id, c, c1, m, p, rotate, size, ...rest }, ref) => {
      const { c1: defaultC1 = 'red60', ...defaultProps } =
        defaultPropsList[name] || {}

      return (
        <Svg
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          id={id}
          m={m}
          p={p}
          name={name}
          ref={ref}
          rotate={rotate}
          size={size}
          viewBox='0 0 32 32'
          {...defaultProps}
          {...rest}
        >
          <IconRender name={name} c={c} c1={c1 || defaultC1} />
        </Svg>
      )
    }
  )
)
