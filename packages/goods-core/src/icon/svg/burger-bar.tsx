import React, { memo } from 'react'
import { Path, SvgIconProps } from './_base'

const IconBurgerBar = memo<SvgIconProps>(({ c }) => {
  return (
    <Path as='g' svgFill={c} fillRule='evenodd'>
      <rect width='16' height='1.5' x='4' y='5' rx='.75' />
      <rect width='16' height='1.5' x='4' y='11.25' rx='.75' />
      <rect width='16' height='1.5' x='4' y='17.5' rx='.75' />
      <rect width='13' height='1.5' x='7' y='17.5' rx='.75' />
    </Path>
  )
})

IconBurgerBar.displayName = 'IconBurgerBar'
export default IconBurgerBar
