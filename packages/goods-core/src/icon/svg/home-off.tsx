import React, { memo } from 'react'
import { Path, SvgIconProps } from './_base'

const IconHomeOff = memo<SvgIconProps>(({ c }) => {
  return (
    <g fill='none'>
      <path fillOpacity='0' d='M0 0H32V32H0z' />
      <Path
        svgFill={c}
        d='M16 6.327l9.64 8.34c-1.645.018-2.97 1.355-2.973 3v5.666h-2V21c-.008-1.654-1.347-2.993-3-3h-3.334c-1.653.007-2.992 1.346-3 3v2.333h-2v-5.666c-.003-1.648-1.332-2.986-2.98-3L16 6.327M16 4c-.265 0-.52.106-.707.293L2.967 14.96c-.285.285-.37.713-.218 1.086.153.373.515.618.918.62h2.666c.553 0 1 .448 1 1v6.667c0 .553.448 1 1 1h4c.553 0 1-.447 1-1V21c0-.552.448-1 1-1h3.334c.552 0 1 .448 1 1v3.333c0 .553.447 1 1 1h4c.552 0 1-.447 1-1v-6.666c0-.553.447-1 1-1h2.666c.405 0 .769-.244.923-.618.155-.373.07-.803-.216-1.089L16.707 4.293C16.519 4.106 16.265 4 16 4z'
      />
    </g>
  )
})

IconHomeOff.displayName = 'IconHomeOff'
export default IconHomeOff
