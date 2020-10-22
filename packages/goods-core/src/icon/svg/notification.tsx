import React, { memo } from 'react'
import { Path, SvgIconProps } from './_base'

const IconNotif = memo<SvgIconProps>(({ c, c1 }) => {
  return (
    <g fill='none'>
      <path fill='none' d='M0 0H32V32H0z' />
      <Path as='circle' cx='26.333' cy='5.62' r='4.233' svgFill={c1} />
      <Path
        svgFill={c}
        d='M17.667 4.333v.187c-1.095-.267-2.239-.267-3.334 0v-.187c0-.92.747-1.666 1.667-1.666s1.667.746 1.667 1.666zM18.667 23.427c0 1.472-1.194 2.666-2.667 2.666-1.473 0-2.667-1.194-2.667-2.666h5.334zM26.333 21.093c.004.443-.17.87-.484 1.183-.313.313-.74.488-1.182.484H7.333c-.92 0-1.666-.746-1.666-1.667 0-.92.746-1.666 1.666-1.666.92 0 1.667-.747 1.667-1.667V12c0-3.866 3.134-7 7-7s7 3.134 7 7v5.767c0 .92.746 1.666 1.667 1.666.918 0 1.663.742 1.666 1.66z'
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

IconNotif.displayName = 'IconNotif'
export default IconNotif