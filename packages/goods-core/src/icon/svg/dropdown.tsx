import React, { memo } from 'react'
import { Path, SvgIconProps } from './_base'

const IconDropdown = memo<SvgIconProps>(({ c }) => {
  return (
    <g fill='none'>
      <path fill='none' d='M0 0H32V32H0z' />
      <Path
        svgFill={c}
        d='M16.78 20c-.403.427-1.074.45-1.507.053L15.22 20l-3.267-3.72-2.726-3.107c-.326-.384-.278-.96.106-1.286.183-.162.424-.242.667-.22h12c.368-.031.719.163.888.491.17.329.124.727-.115 1.009l-2.726 3.106L16.78 20z'
      />
    </g>
  )
})

IconDropdown.displayName = 'IconDropdown'
export default IconDropdown
