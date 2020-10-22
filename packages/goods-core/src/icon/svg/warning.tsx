import React, { memo } from 'react'
import { Path, SvgIconProps } from './_base'

const IconWarning = memo<SvgIconProps>(({ c }) => {
  return (
    <g fill='none'>
      <path fill='none' d='M0 0H32V32H0z' />
      <Path
        svgFill={c}
        d='M27.027 22.153l-4.36-7.533-4.354-7.533c-.477-.823-1.356-1.329-2.306-1.329-.951 0-1.83.506-2.307 1.329L9.333 14.62 5 22.153c-.477.826-.476 1.843.001 2.669.477.825 1.359 1.333 2.312 1.331h17.4c.954.002 1.835-.506 2.313-1.331.477-.826.477-1.843 0-2.669zM16 22.62c-.736 0-1.333-.597-1.333-1.333 0-.737.597-1.334 1.333-1.334s1.333.597 1.333 1.334c0 .736-.597 1.333-1.333 1.333zm.833-4.5c0 .46-.373.833-.833.833-.46 0-.833-.373-.833-.833l-.5-4.833c0-.737.597-1.334 1.333-1.334s1.333.597 1.333 1.334l-.5 4.833z'
      />
    </g>
  )
})

IconWarning.displayName = 'IconWarning'
export default IconWarning