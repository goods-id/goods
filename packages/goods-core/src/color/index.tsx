export const blue = {
  blue10: '#E2F1FD',
  blue20: '#B9DCFB',
  blue50: '#37A0F4',
  blue60: '#048FF2',
}

export const orange = {
  orange20: '#FFFACA',
  orange70: '#FEC94D',
  orange90: '#F48D37',
}

export const black = {
  black10: '#D1D1D1',
  black20: '#ACACAC',
  black30: '#515151',
  black40: '#333333',
}

export const green = {
  green10: '#E5F8E4',
  green20: '#C2EDBE',
  green50: '#2FCD3A',
  green80: '#09A000',
  green90: '#078F00',
}

export const red = {
  red10: '#FEEBEE',
  red20: '#FCCED2',
  red60: '#EC4D3A',
  red80: '#CB3A33',
  red90: '#BE342D',
}

export const white = {
  white10: '#FFFFFF',
  white20: '#FAFAFA',
  white30: '#F5F5F5',
  white40: '#EEEEEE',
}

const colors = {
  ...blue,
  ...orange,
  ...black,
  ...green,
  ...red,
  ...white,
}

const colorRegExp = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i

export function hexToRgb(color: string): number[] {
  if (!colorRegExp.test(color)) return [0, 0, 0]
  const result = colorRegExp.exec(color) || []
  return result.slice(1, 4).map(hex => parseInt(hex, 16))
}

export function hexToRgba(color: string, alpha: number): string {
  if (!colorRegExp.test(color)) return color
  const rgb = hexToRgb(color)
  return `rgba(${rgb.join(', ')}, ${alpha})`
}

const luminanceFactors = [0.2126, 0.7152, 0.0722]

function calculateLuminance(rgb: number[]): number {
  return rgb.reduce<number>(
    (sum, value, index) => sum + value * luminanceFactors[index],
    0
  )
}

export function getInverseBw(color: string): string {
  if (!colorRegExp.test(color)) return color
  const luminance = calculateLuminance(hexToRgb(color))
  return luminance < 100 ? 'white' : 'black'
}

export default colors
