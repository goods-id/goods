import { color, ColorProps } from 'goods-core'
import styled, { CSSObject } from 'styled-components'

export type SVGCheckboxProps = Pick<ColorProps, 'c'>

const SVG = styled.svg<SVGCheckboxProps>(({ c = 'white10', theme }) => {
  const defaultStyle: CSSObject = {
    path: {
      fill: color({ c, theme })?.color,
    },
  }

  return defaultStyle
})

export default SVG
