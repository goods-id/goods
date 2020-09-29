import React from 'react'
import { Div } from '../basics/div'
import { Image } from '../basics/image'
import { Line } from '../basics/line'
import { Text } from '../typography'
import { GoodsDocs } from '../utils/storybook.docs'
import shadows from '.'

const shadowNames = Object.keys(shadows) as (keyof typeof shadows)[]

const ShadowLowImg: string = require('../../assets/stories/shadow-low.png')
const ShadowHighImg: string = require('../../assets/stories/shadow-high.png')

const ilustrations = [ShadowLowImg, ShadowHighImg]

function getJustify(shadowName: keyof typeof shadows): string {
  if (shadowName === 'flat') return 'flex-end'
  if (shadowName === 'low') return 'center'
  return 'flex-start'
}

const ShadowDocs: React.FC = () => {
  return (
    <GoodsDocs
      withoutPropsTable
      withoutStories
      withoutDocsTitle
      designDesc={`
        Shadow is created when an object is lifted / elevated.
        It indicates which important and created a hierarchy.
      `}
    >
      <Div w='100%' fAlign='center'>
        <Div w='100%' posi='relative' m='66px 0px 16px'>
          <Div w='100%' fDir='row' z={2}>
            {shadowNames.map(name => (
              <Div key={name} w='calc(100%/3)' fAlign='center'>
                <Div
                  maxW='calc(100% - 104px)'
                  minW='10px'
                  w='64px'
                  h='40px'
                  fJustify={getJustify(name)}
                >
                  <Div h='8px' w='100%' radius='1px' bg='black10' />
                </Div>
                <Div
                  maxW='calc(100% - 64px)'
                  w='104px'
                  minW='60px'
                  h='104px'
                  p='20px'
                  bg='white30'
                  m='40px 0px'
                  fJustify='center'
                  radius='4px'
                >
                  <Div
                    w='100%'
                    h='0px'
                    p='100% 0px 0px'
                    radius='4px'
                    bg='white10'
                    shadow={name}
                  />
                </Div>
                <Div
                  maxW='calc(100% - 64px)'
                  w='104px'
                  minW='60px'
                  fAlign='center'
                >
                  <Text rule='body' textAlign='center'>
                    {name}
                  </Text>
                </Div>
              </Div>
            ))}
          </Div>
          <Line posi='absolute' h='1px' w='100%' bg='white40' top='36px' />
        </Div>
        <Div w='100%' fDir='row' fJustify='flex-end'>
          {ilustrations.map((ilustration, index) => (
            <Div key={index} w='calc(100%/3)' fAlign='center'>
              <Image
                alt={`Shadow Ilustration - ${index + 1}`}
                src={ilustration}
                maxW='calc(100% - 22px)'
                w='160px'
                minW='60px'
              />
            </Div>
          ))}
        </Div>
      </Div>
    </GoodsDocs>
  )
}

export default ShadowDocs
