import { NameToCSSValue } from '../@types/core'

export const radiusConstants = {
  '0': '0px',
  m: '4px',
  l: '8px',
  full: '10000px',
}

export type Radius = keyof typeof radiusConstants

const radius: NameToCSSValue<Radius> = (...params) => {
  return params.map(name => radiusConstants[name]).join(' ')
}

export default radius
