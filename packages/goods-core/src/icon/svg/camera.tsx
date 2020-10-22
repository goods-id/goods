import React, { memo } from 'react'
import { Path, SvgIconProps } from './_base'

const IconCamera = memo<SvgIconProps>(({ c }) => {
  return (
    <g fill='none'>
      <path fill='none' d='M0 0H32V32H0z' />
      <Path
        svgFill={c}
        d='M26.667 6.333H24c-.266.002-.522-.102-.711-.29-.19-.188-.296-.443-.296-.71-.003-.548-.445-.992-.993-1H10c-.266-.001-.522.103-.711.29-.19.189-.296.444-.296.71-.003.549-.445.993-.993 1H5.333C3.861 6.333 2.667 7.527 2.667 9v16c0 1.473 1.194 2.667 2.666 2.667h21.334c1.472 0 2.666-1.194 2.666-2.667V9c0-1.473-1.194-2.667-2.666-2.667zM16 24c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7z'
      />
      <Path as='circle' cx='16' cy='17' r='4.333' svgFill={c} />
    </g>
  )
})

IconCamera.displayName = 'IconCamera'
export default IconCamera
