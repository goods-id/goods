import React, { memo } from 'react'
import { Path, SvgIconProps } from './_base'

const IconRejected = memo<SvgIconProps>(({ c, c1 }) => {
  return (
    <g>
      <rect fill='none' opacity='0' width='48' height='48' />
      <Path as='circle' svgFill={c} cx='24' cy='24' r='17' />
      <Path
        svgFill={c1}
        d='M31.42,31.42a1.49,1.49,0,0,1-2.12,0l-4.24-4.24a1.51,1.51,0,0,0-2.12,0L18.7,31.42a1.5,1.5,0,0,1-2.12-2.12l4.24-4.24a1.51,1.51,0,0,0,0-2.12L16.58,18.7a1.5,1.5,0,0,1,2.12-2.12l4.24,4.24a1.51,1.51,0,0,0,2.12,0l4.24-4.24a1.5,1.5,0,0,1,2.12,2.12l-4.24,4.24a1.51,1.51,0,0,0,0,2.12l4.24,4.24A1.49,1.49,0,0,1,31.42,31.42Z'
      />
    </g>
  )
})

IconRejected.displayName = 'IconRejected'
export default IconRejected
