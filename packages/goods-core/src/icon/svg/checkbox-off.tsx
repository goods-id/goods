import React, { memo } from 'react'
import { Path, SvgIconProps } from './_base'

const IconCheckboxOff = memo<SvgIconProps>(({ c }) => {
  return (
    <g fill='none'>
      <path fill='none' d='M0 0H32V32H0z' />
      <Path
        svgFill={c}
        d='M21.333 4C25.015 4 28 6.985 28 10.667v10.666C28 25.015 25.015 28 21.333 28H10.667C6.985 28 4 25.015 4 21.333V10.667C4 6.985 6.985 4 10.667 4h10.666m0-1.333H10.667c-4.419 0-8 3.581-8 8v10.666c0 4.419 3.581 8 8 8h10.666c4.419 0 8-3.581 8-8V10.667c0-4.419-3.581-8-8-8z'
      />
    </g>
  )
})

IconCheckboxOff.displayName = 'IconCheckboxOff'
export default IconCheckboxOff
