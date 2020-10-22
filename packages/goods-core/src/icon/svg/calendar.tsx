import React, { memo } from 'react'
import { Path, SvgIconProps } from './_base'

const IconCalendar = memo<SvgIconProps>(({ c }) => {
  return (
    <>
      <defs>
        <path
          id='prefix__a'
          d='M3.333 0v1.333h5.333V0H10l-.001 1.333H10a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2v-8a2 2 0 012-2V0h1.333zm7.334 4.667H1.333V12h9.334V4.667zm-6 4v2.666H2V8.667h2.667z'
        />
      </defs>
      <g fill='none' fillRule='evenodd' transform='translate(2 1.333)'>
        <mask id='prefix__b' fill='#fff'>
          <use xlinkHref='#prefix__a' />
        </mask>
        <Path as='use' svgFill={c} xlinkHref='#prefix__a' />
        <Path as='g' svgFill={c} mask='url(#prefix__b)'>
          <path d='M0 0H80V80H0z' transform='translate(-34 -32.667)' />
        </Path>
      </g>
    </>
  )
})

IconCalendar.displayName = 'IconCalendar'
export default IconCalendar
