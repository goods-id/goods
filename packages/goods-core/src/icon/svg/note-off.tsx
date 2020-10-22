import React, { memo } from 'react'
import { Path, SvgIconProps } from './_base'

const IconNoteOff = memo<SvgIconProps>(({ c }) => {
  return (
    <g fill='none'>
      <path fill='none' d='M0 0H32V32H0z' />
      <Path
        svgFill={c}
        d='M24.667 4.667c.368 0 .666.298.666.666v17.334c0 .368-.298.666-.666.666H7.333c-.368 0-.666-.298-.666-.666V5.333c0-.368.298-.666.666-.666h17.334m0-2H7.333c-1.472 0-2.666 1.194-2.666 2.666v17.334c0 1.472 1.194 2.666 2.666 2.666h17.334c1.472 0 2.666-1.194 2.666-2.666V5.333c0-1.472-1.194-2.666-2.666-2.666z'
      />
      <Path
        as='rect'
        width='8.667'
        height='2'
        x='8.667'
        y='8'
        svgFill={c}
        rx='1'
      />
      <Path
        as='rect'
        width='3.333'
        height='2'
        x='20'
        y='8'
        svgFill={c}
        rx='1'
      />
      <Path
        as='rect'
        width='14.667'
        height='2'
        x='8.667'
        y='14'
        svgFill={c}
        rx='1'
      />
      <Path
        as='rect'
        width='14.667'
        height='2'
        x='8.667'
        y='18'
        svgFill={c}
        rx='1'
      />
    </g>
  )
})

IconNoteOff.displayName = 'IconNoteOff'
export default IconNoteOff
