import React, { memo } from 'react'
import { Path, SvgIconProps } from './_base'

const IconQuestion = memo<SvgIconProps>(({ c, c1 }) => {
  return (
    <>
      <defs>
        <circle id='circle-1' cx='28' cy='28' r='28' />
        <filter
          id='filter-1'
          width='187.5%'
          height='187.5%'
          x='-43.8%'
          y='-42%'
          filterUnits='objectBoundingBox'
        >
          <feOffset dy='1' in='SourceAlpha' result='shadowOffsetOuter1' />
          <feGaussianBlur
            in='shadowOffsetOuter1'
            result='shadowBlurOuter1'
            stdDeviation='8'
          />
          <feColorMatrix
            in='shadowBlurOuter1'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0'
          />
        </filter>
      </defs>
      <g fill='none' fillRule='evenodd'>
        <g fillRule='nonzero' transform='translate(16 15)'>
          <use fill='#000' filter='url(#filter-1)' xlinkHref='#circle-1' />
          <Path as='use' svgFill={c} xlinkHref='#circle-1' />
        </g>
        <Path
          svgFill={c1}
          d='M37.184 35.632c0-.747.384-1.365 1.152-1.856 1.685-1.216 3.467-1.824 5.344-1.824 2.005 0 3.69.603 5.056 1.808 1.365 1.205 2.048 2.725 2.048 4.56 0 1.259-.384 2.293-1.152 3.104-.768.81-1.77 1.557-3.008 2.24-.96.533-1.44 1.13-1.44 1.792 0 .15.01.256.032.32.021.064.032.181.032.352 0 .512-.181.928-.544 1.248-.363.32-.853.48-1.472.48-.704 0-1.275-.25-1.712-.752-.437-.501-.656-1.179-.656-2.032 0-1.43.8-2.613 2.4-3.552 1.365-.79 2.219-1.376 2.56-1.76.405-.448.608-.917.608-1.408 0-.725-.272-1.312-.816-1.76-.544-.448-1.21-.672-2-.672-.896 0-1.792.33-2.688.992-.725.49-1.344.736-1.856.736-.448 0-.875-.224-1.28-.672-.405-.448-.608-.896-.608-1.344zm3.488 16.352c0-.683.245-1.248.736-1.696.49-.448 1.12-.672 1.888-.672.725 0 1.323.219 1.792.656.47.437.704.997.704 1.68 0 .747-.25 1.323-.752 1.728-.501.405-1.115.608-1.84.608-.747 0-1.355-.203-1.824-.608-.47-.405-.704-.97-.704-1.696z'
        />
      </g>
    </>
  )
})

IconQuestion.displayName = 'IconQuestion'
export default IconQuestion
