import React, { memo } from 'react'
import { Path, SvgIconProps } from './_base'

const IconChevron = memo<SvgIconProps>(({ c }) => {
  return (
    <g fill='none'>
      <path fill='none' d='M0 0H32V32H0z' />
      <Path
        svgFill={c}
        d='M17.647 21.393l-4.714-4.726c-.386-.392-.386-1.022 0-1.414l4.714-4.713c.403-.39 1.046-.38 1.436.023.39.404.38 1.047-.023 1.437l-3.293 3.333c-.386.39-.386 1.017 0 1.407l3.293 3.333c.367.394.356 1.008-.025 1.39-.38.38-.994.39-1.388.024v-.094z'
      />
    </g>
  )
})

IconChevron.displayName = 'IconChevron'
export default IconChevron
