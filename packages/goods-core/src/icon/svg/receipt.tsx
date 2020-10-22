import React, { memo } from 'react'
import { Path, SvgIconProps } from './_base'

const IconReceipt = memo<SvgIconProps>(({ c }) => {
  return (
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g transform='translate(-308.000000, -776.000000)'>
        <g id='receipt' transform='translate(300.000000, 770.000000)'>
          <rect x='0' y='0' width='48' height='48' />
          <Path
            svgFill={c}
            fillRule='nonzero'
            d='M30,6 C31.1045695,6 32,6.8954305 32,8 L32,8 L32,24 L38,24 C39.0543618,24 39.9181651,24.8158778 39.9945143,25.8507377 L40,26 L40,32 C40,37.5228475 35.5228475,42 30,42 L30,42 L10,42 C8.8954305,42 8,41.1045695 8,40 L8,40 L8,8 C8,6.8954305 8.8954305,6 10,6 L10,6 Z M30,8 L10,8 L10,40 L30,40 L30,8 Z M38,26 L32,26 L32,39.74 C35.5299976,38.8285596 37.9972806,35.6457645 38,32 L38,32 L38,26 Z M26.5,32 C26.7761424,32 27,32.2238576 27,32.5 L27,33.5 C27,33.7761424 26.7761424,34 26.5,34 L13.5,34 C13.2238576,34 13,33.7761424 13,33.5 L13,32.5 C13,32.2238576 13.2238576,32 13.5,32 L26.5,32 Z M26.5,26 C26.7761424,26 27,26.2238576 27,26.5 L27,27.5 C27,27.7761424 26.7761424,28 26.5,28 L13.5,28 C13.2238576,28 13,27.7761424 13,27.5 L13,26.5 C13,26.2238576 13.2238576,26 13.5,26 L26.5,26 Z M26.5,20 C26.7761424,20 27,20.2238576 27,20.5 L27,21.5 C27,21.7761424 26.7761424,22 26.5,22 L13.5,22 C13.2238576,22 13,21.7761424 13,21.5 L13,20.5 C13,20.2238576 13.2238576,20 13.5,20 L26.5,20 Z M26.5,14 C26.7761424,14 27,14.2238576 27,14.5 L27,15.5 C27,15.7761424 26.7761424,16 26.5,16 L13.5,16 C13.2238576,16 13,15.7761424 13,15.5 L13,14.5 C13,14.2238576 13.2238576,14 13.5,14 L26.5,14 Z'
          />
        </g>
      </g>
    </g>
  )
})

IconReceipt.displayName = 'IconReceipt'
export default IconReceipt
