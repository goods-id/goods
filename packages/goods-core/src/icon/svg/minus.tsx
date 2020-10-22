import React, { memo } from 'react'
import { Path, SvgIconProps } from './_base'

const IconMinus = memo<SvgIconProps>(({ c }) => {
  return (
    <g fill='none'>
      <path fill='none' d='M0 0H32V32H0z' />
      <Path
        as='rect'
        width='22.667'
        height='2'
        x='4.667'
        y='15'
        svgFill={c}
        rx='1'
      />
    </g>
  )
})

IconMinus.displayName = 'IconMinus'
export default IconMinus
