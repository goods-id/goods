import { IconName, IconProps } from './_types'

export const defaultPropsList: {
  [K in IconName]?: Partial<Omit<IconProps, 'name'>>
} = {
  pomona: { viewBox: '0 0 56 56' },
  approved: { viewBox: '0 0 48 48', c1: 'white10' },
  rejected: { viewBox: '0 0 48 48', c1: 'white10' },
  question: { viewBox: '0 0 88 87', c1: 'white10' },
  point: { viewBox: '0 0 32 37' },
  receipt: { viewBox: '0 0 32 36' },
  burgerBar: { viewBox: '0 0 24 24' },
  radio: { viewBox: '0 0 24 24' },
  radioActive: { viewBox: '0 0 24 24' },
  radioDisabled: { viewBox: '0 0 24 24' },
  calendar: { viewBox: '0 0 16 16' },
  checked: { viewBox: '0 0 24 24' },
}
