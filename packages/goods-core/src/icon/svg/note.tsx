import React, { memo } from 'react'
import { Path, SvgIconProps } from './_base'

const IconNote = memo<SvgIconProps>(({ c }) => {
  return (
    <g fill='none'>
      <path fill='none' d='M0 0H32V32H0z' />
      <Path
        as='rect'
        width='22.667'
        height='22.667'
        x='4.667'
        y='2.667'
        svgFill={c}
        rx='4'
      />
      <rect width='8.667' height='2' x='8.667' y='8' fill='#FFF' rx='1' />
      <rect width='3.333' height='2' x='20' y='8' fill='#FFF' rx='1' />
      <rect width='14.667' height='2' x='8.667' y='14' fill='#FFF' rx='1' />
      <rect width='14.667' height='2' x='8.667' y='18' fill='#FFF' rx='1' />
      <Path
        as='rect'
        width='14'
        height='1.333'
        x='9'
        y='28.667'
        svgFill={c}
        rx='.667'
      />
    </g>
  )
})

IconNote.displayName = 'IconNote'
export default IconNote
