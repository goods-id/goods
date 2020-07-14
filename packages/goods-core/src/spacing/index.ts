import { NameToCSSValue } from '../@types/global'

export const spacingConstants = {
  '0': '0px',
  xxxs: '4px',
  xxs: '8px',
  xs: '12px',
  s: '16px',
  m: '24px',
  l: '32px',
  xl: '40px',
  xxl: '48px',
  xxxl: '56px',
}

export type Spacing = keyof typeof spacingConstants

const spacing: NameToCSSValue<Spacing> = (...params) => {
  return params.map(name => spacingConstants[name]).join(' ')
}

export default spacing
