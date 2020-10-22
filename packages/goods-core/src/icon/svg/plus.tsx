import React, { memo } from 'react'
import { Path, SvgIconProps } from './_base'

const IconPlus = memo<SvgIconProps>(({ c }) => {
  return (
    <g fill='none'>
      <path fill='none' d='M0 0H32V32H0z' />
      <Path
        svgFill={c}
        d='M27.333 16c0 .552-.447 1-1 1H18c-.552 0-1 .448-1 1v8.333c0 .553-.448 1-1 1s-1-.447-1-1V18c0-.552-.448-1-1-1H5.667c-.553 0-1-.448-1-1s.447-1 1-1H14c.552 0 1-.448 1-1V5.667c0-.553.448-1 1-1s1 .447 1 1V14c0 .552.448 1 1 1h8.333c.553 0 1 .448 1 1z'
      />
    </g>
  )
})

IconPlus.displayName = 'IconPlus'
export default IconPlus
