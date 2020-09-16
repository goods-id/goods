import React from 'react'
import { Div } from '../basics/div'
import { Image } from '../basics/image'
import { GoodsDocs, Section } from '../utils/storybook.docs'

const RadiusDesignImg = require('../../assets/stories/corner-radius-design.png')
const RadiusUsageImg = require('../../assets/stories/corner-radius-usage.png')

const RadiusDocs: React.FC = () => {
  return (
    <GoodsDocs
      withoutPropsTable
      withoutStories
      withoutDocsTitle
      designDesc={`
        Corner Radius is used to differentiate between a group of components to the other.
        It also helps to build memorability of shape, whether it is accessible or not.
      `}
    >
      <Div w='100%' fAlign='center' m='16px 0px 40px'>
        <Image alt='Corner Radius Design' src={RadiusDesignImg} w='80%' />
      </Div>
      <Section title='I. Usage' noChildTab>
        <Div w='100%' fAlign='center'>
          <Image alt='Corner Radius Usage' src={RadiusUsageImg} w='80%' />
        </Div>
      </Section>
    </GoodsDocs>
  )
}

export default RadiusDocs
