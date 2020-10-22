import React, { memo } from 'react'
import { Path, SvgIconProps } from './_base'

const IconRadioDisabled = memo<SvgIconProps>(({ c }) => {
  return (
    <>
      <defs>
        <path
          d='M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,1.25 C5.16750844,1.25 1.25,5.16750844 1.25,10 C1.25,14.8324916 5.16750844,18.75 10,18.75 C14.8324916,18.75 18.75,14.8324916 18.75,10 C18.75,5.16750844 14.8324916,1.25 10,1.25 Z'
          id='path-1'
        />
      </defs>
      <g
        stroke='none'
        strokeWidth='1'
        fill='none'
        fillRule='evenodd'
        opacity='0.5'
      >
        <g transform='translate(-631.000000, -374.000000)'>
          <g transform='translate(619.000000, 286.000000)'>
            <g transform='translate(0.000000, 80.000000)'>
              <g transform='translate(12.000000, 8.000000)'>
                <g transform='translate(2.000000, 2.000000)'>
                  <mask fill='white'>
                    <use xlinkHref='#path-1' />
                  </mask>
                  <Path as='use' svgFill={c} xlinkHref='#path-1' />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </>
  )
})

IconRadioDisabled.displayName = 'IconRadioDisabled'
export default IconRadioDisabled
