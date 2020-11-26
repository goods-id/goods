import React, { memo } from 'react'
import { Path, SvgIconProps } from './_base'

const IconProfile = memo<SvgIconProps>(({ c }) => {
  return (
    <g fill='none'>
      <path fill='none' d='M0 0H32V32H0z' />
      <Path as='circle' cx='16' cy='9.667' r='4.333' svgFill={c} />
      <Path
        svgFill={c}
        d='M27.333 23.86c.02.088.02.179 0 .267V25c.002.266-.103.521-.29.71-.189.187-.444.292-.71.29H5.667c-.553 0-1-.448-1-1v-.873c-.007-.09-.007-.178 0-.267 1.284-5.024 5.814-8.536 11-8.527h.666c5.186-.009 9.716 3.503 11 8.527z'
      />
    </g>
  )
})

IconProfile.displayName = 'IconProfile'
export default IconProfile
