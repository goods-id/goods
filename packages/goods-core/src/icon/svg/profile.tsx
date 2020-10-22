import React, { memo } from 'react'
import { Path, SvgIconProps } from './_base'

const IconProfile = memo<SvgIconProps>(({ c }) => {
  return (
    <g fill='none'>
      <path fill='none' d='M0 0H32V32H0z' />
      <Path as='circle' cx='16' cy='9' r='4.333' svgFill={c} />
      <Path
        svgFill={c}
        d='M27.333 23.193c.02.088.02.18 0 .267v.873c.002.266-.103.521-.29.71-.189.187-.444.292-.71.29H5.667c-.553 0-1-.447-1-1v-.873c-.007-.089-.007-.178 0-.267 1.284-5.024 5.814-8.535 11-8.526h.666c5.186-.01 9.716 3.502 11 8.526z'
      />
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

IconProfile.displayName = 'IconProfile'
export default IconProfile
