import React, { lazy, Suspense } from 'react'
import { Svg } from './svg/_base'
import { defaultPropsList } from './_shared'
import { IconRenderProps, IconProps } from './_types'

export { iconSize as IconSize, iconRotate as IconRotate } from './svg/_base'
export * from './_types'

const Pomona = lazy(
  () => import(/* webpackChunkName: "ic-pomona" */ './svg/pomona')
)

const Home = lazy(() => import(/* webpackChunkName: "ic-home" */ './svg/home'))

const HomeOff = lazy(
  () => import(/* webpackChunkName: "ic-home-off" */ './svg/home-off')
)

const Profile = lazy(
  () => import(/* webpackChunkName: "ic-profile" */ './svg/profile')
)

const ProfileOff = lazy(
  () => import(/* webpackChunkName: "ic-profile-off" */ './svg/profile-off')
)

const Notif = lazy(
  () => import(/* webpackChunkName: "ic-notif" */ './svg/notification')
)

const NotifOff = lazy(
  () => import(/* webpackChunkName: "ic-notif-off" */ './svg/notification-off')
)

const Note = lazy(() => import(/* webpackChunkName: "ic-note" */ './svg/note'))

const NoteOff = lazy(
  () => import(/* webpackChunkName: "ic-note-off" */ './svg/note-off')
)

const Cart = lazy(() => import(/* webpackChunkName: "ic-cart" */ './svg/cart'))

const CartOff = lazy(
  () => import(/* webpackChunkName: "ic-cart-off" */ './svg/cart-off')
)

const Transaction = lazy(
  () => import(/* webpackChunkName: "ic-transaction" */ './svg/transaction')
)

const Store = lazy(
  () => import(/* webpackChunkName: "ic-store" */ './svg/store')
)

const Camera = lazy(
  () => import(/* webpackChunkName: "ic-camera" */ './svg/camera')
)

const Warning = lazy(
  () => import(/* webpackChunkName: "ic-warning" */ './svg/warning')
)

const Plus = lazy(() => import(/* webpackChunkName: "ic-plus" */ './svg/plus'))

const Minus = lazy(
  () => import(/* webpackChunkName: "ic-minus" */ './svg/minus')
)

const Close = lazy(
  () => import(/* webpackChunkName: "ic-close" */ './svg/close')
)

const Arrow = lazy(
  () => import(/* webpackChunkName: "ic-arrow" */ './svg/arrow')
)

const Search = lazy(
  () => import(/* webpackChunkName: "ic-search" */ './svg/search')
)

const Dropdown = lazy(
  () => import(/* webpackChunkName: "ic-dropdown" */ './svg/dropdown')
)

const Chevron = lazy(
  () => import(/* webpackChunkName: "ic-chevron" */ './svg/chevron')
)

const Checked = lazy(
  () => import(/* webpackChunkName: "ic-checked" */ './svg/checked')
)

const Checkbox = lazy(
  () => import(/* webpackChunkName: "ic-checkbox" */ './svg/checkbox')
)

const CheckboxOff = lazy(
  () => import(/* webpackChunkName: "ic-checkbox-off" */ './svg/checkbox-off')
)

const Approved = lazy(
  () => import(/* webpackChunkName: "ic-approved" */ './svg/approved')
)

const Rejected = lazy(
  () => import(/* webpackChunkName: "ic-rejected" */ './svg/rejected')
)

const Question = lazy(
  () => import(/* webpackChunkName: "ic-question" */ './svg/question')
)

const Point = lazy(
  () => import(/* webpackChunkName: "ic-point" */ './svg/point')
)

const Receipt = lazy(
  () => import(/* webpackChunkName: "ic-receipt" */ './svg/receipt')
)

const BurgerBar = lazy(
  () => import(/* webpackChunkName: "ic-burger-bar" */ './svg/burger-bar')
)

const Radio = lazy(
  () => import(/* webpackChunkName: "ic-radio" */ './svg/radio')
)

const RadioActive = lazy(
  () => import(/* webpackChunkName: "ic-radio-active" */ './svg/radio-active')
)

const RadioDisabled = lazy(
  () =>
    import(/* webpackChunkName: "ic-radio-disabled" */ './svg/radio-disabled')
)

const Calendar = lazy(
  () => import(/* webpackChunkName: "ic-calendar" */ './svg/calendar')
)

export { Svg }

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
          <Suspense fallback=''>
            <IconRender name={name} c={c} c1={c1 || defaultC1} />
          </Suspense>
        </Svg>
      )
    }
  )
)

export default Icon
