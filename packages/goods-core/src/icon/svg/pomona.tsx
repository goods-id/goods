import React, { memo } from 'react'
import { Path, SvgIconProps } from './_base'

const IconPomona = memo<SvgIconProps>(({ c }) => {
  return (
    <>
      <defs>
        <path id='a' d='M0 .138h55.858v55.026H0z' />
      </defs>
      <g fill='none' fillRule='evenodd'>
        <g>
          <mask id='b' fill='#fff'>
            <use xlinkHref='#a' />
          </mask>
          <Path
            svgFill={c}
            d='M55.858 27.651c0 15.196-12.504 27.513-27.928 27.513C12.502 55.164 0 42.847 0 27.651 0 12.458 12.502.138 27.93.138c15.424 0 27.928 12.32 27.928 27.513'
            mask='url(#b)'
          />
        </g>
        <path
          fill='#FFF'
          d='M27.577 12.537c-7.261 0-13.153 5.687-13.153 12.7v18.226h.544c4.423-.258 7.955-3.669 8.228-7.931v-.43c-.005-.062-.013-.763-.015-.825l.015.635v-9.674c0-2.339 1.96-4.236 4.381-4.236h4.382v4.236c0 2.339-1.962 4.233-4.382 4.233-.125 0-.25-.01-.372-.019h-1.87v8.481h1.87v-.005c.125.005.247.005.372.005 7.264 0 13.15-5.683 13.15-12.695V12.537h-13.15z'
        />
      </g>
    </>
  )
})

IconPomona.displayName = 'IconPomona'
export default IconPomona
