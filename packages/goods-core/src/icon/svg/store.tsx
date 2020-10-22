import React, { memo } from 'react'
import { Path, SvgIconProps } from './_base'

const IconStore = memo<SvgIconProps>(({ c }) => {
  return (
    <g fill='none'>
      <path fill='none' d='M0 0H32V32H0z' />
      <Path
        svgFill={c}
        d='M26.88 13.787c-.178-.064-.348-.15-.507-.254-.225-.152-.52-.152-.746 0-.785.517-1.802.517-2.587 0-.226-.152-.521-.152-.747 0-.785.517-1.801.517-2.586 0-.226-.152-.521-.152-.747 0-.785.517-1.802.517-2.587 0-.225-.152-.52-.152-.746 0-.785.517-1.802.517-2.587 0-.226-.152-.521-.152-.747 0-.785.517-1.801.517-2.586 0-.226-.152-.521-.152-.747 0-.785.517-1.802.517-2.587 0-.225-.152-.52-.152-.746 0-.159.104-.329.19-.507.254-.27.09-.451.342-.453.626v11.894c0 .615.498 1.113 1.113 1.113h6.567c.545 0 .986-.442.986-.987v-2.306c.019-1.46 1.207-2.634 2.667-2.634 1.475.067 2.644 1.27 2.667 2.747v2.18c.003.55.449.996 1 1h6.566c.292 0 .572-.116.778-.322.206-.206.322-.486.322-.778V14.413c-.002-.284-.184-.535-.453-.626zM22 18.16H10c-.552 0-1-.448-1-1s.448-1 1-1h12c.552 0 1 .448 1 1s-.448 1-1 1zM29.333 9.26v2.227c.02.88-.622 1.635-1.493 1.76-.624.06-1.23-.23-1.573-.754-.06-.092-.163-.147-.274-.147-.11 0-.213.055-.273.147-.31.464-.83.742-1.387.742s-1.077-.278-1.386-.742c-.062-.095-.167-.152-.28-.152-.113 0-.219.057-.28.152-.31.464-.83.742-1.387.742s-1.078-.278-1.387-.742c-.061-.095-.167-.152-.28-.152-.113 0-.218.057-.28.152-.309.464-.83.742-1.386.742-.558 0-1.078-.278-1.387-.742-.061-.095-.167-.152-.28-.152-.113 0-.219.057-.28.152-.31.464-.83.742-1.387.742s-1.077-.278-1.386-.742c-.062-.095-.167-.152-.28-.152-.113 0-.219.057-.28.152-.31.464-.83.742-1.387.742s-1.078-.278-1.387-.742c-.061-.095-.167-.152-.28-.152-.113 0-.218.057-.28.152-.309.464-.83.742-1.386.742-.558 0-1.078-.278-1.387-.742-.06-.092-.163-.147-.273-.147-.11 0-.213.055-.274.147-.343.524-.95.814-1.573.754-.871-.125-1.512-.88-1.493-1.76V9.26c.006-.084.022-.166.046-.247l1.454-3.78c.142-.403.525-.67.953-.666h21.76c.428-.005.81.263.953.666l1.454 3.78c.024.08.04.163.046.247z'
      />
    </g>
  )
})

IconStore.displayName = 'IconStore'
export default IconStore