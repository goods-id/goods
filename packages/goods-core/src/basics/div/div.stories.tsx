import React, { useState, useCallback } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { createGlobalStyle } from 'styled-components'
import { Div, DivProps, Box, BoxProps } from '.'

const storyMetaData: Meta<BoxProps> = {
  title: 'Basics/Div',
  component: Box,
}

export default storyMetaData

export const BoxExample: Story<BoxProps> = args => {
  return (
    <Box {...args}>
      <Box bg='blue50' c='black10'>
        Atta Halilintar
      </Box>
      <Box bg='orange90' c='black10'>
        Aurel Hermansyah
      </Box>
    </Box>
  )
}

BoxExample.args = {
  bg: 'black40',
  bgAlpha: 0.3,
  c: 'black40',
  cAlpha: 0.99,
  w: { xs: 1, sm: 1 / 2, lg: 700, md: '5em' },
  h: '300px',
  d: 'grid',
  radius: 'full',
  fAlign: 'center',
  fJustify: 'center',
  shadow: 'high',
  gap: '4px',
  gTempCol: 'repeat(auto-fit, 200px)',
  resize: 'horizontal',
  cursor: 'wait',
}

export const BoxTransitioned: Story<BoxProps> = args => {
  const [isChanged, setIsChanged] = useState(false)

  const toggle = useCallback(() => {
    setIsChanged(prev => !prev)
  }, [])

  return (
    <Box w='500px' maxW={1} h='300px' posi='relative'>
      <Box
        s={isChanged ? '300px' : '500px'}
        top={isChanged ? '50%' : '0px'}
        left={isChanged ? '50%' : '0px'}
        bgImage={
          isChanged
            ? 'url(https://cdn.idntimes.com/content-images/post/20190902/68708724-2110609995909560-5468908578491490675-n-03c82fa4f9b36a1c893d656d52f52766.jpg)'
            : 'url(https://4.bp.blogspot.com/-pE09m3LT_E8/VIr8Pycc-QI/AAAAAAAAAFM/Tey4Zv_MYAo/s1600/JessicaVeranda5_zpsf3621dc9.jpg)'
        }
        c={isChanged ? 'black40' : 'white10'}
        transform={isChanged ? 'rotate(315deg)' : 'none'}
        {...args}
        onClick={toggle}
        dangerouslySetInnerHTML={{
          __html:
            '<p style="background: white; color: black; padding: 0px 16px">Pencet Aku kaka 😉</p>',
        }}
      />
    </Box>
  )
}

BoxTransitioned.args = {
  posi: 'absolute',
  fAlign: 'center',
  fJustify: 'center',
  p: 'xs',
  radius: 'full',
  tProperty: 'all',
  tDuration: 2000,
  bgSize: 'contain',
  tTimingFunction: 'cubic-bezier(.51,.41,.17,1.79)',
  style: { cursor: 'pointer', textAlign: 'center' },
}

const BoxAnimatedKeyframe = createGlobalStyle`
  @keyframes bounce {
    0%, 100% {
      top: 0px;
      left: 0px;
    }
    10%, 90% {
      top: 50px;
      left: 0px;
    }
    50% {
      top: 50%;
      left: 0px;
    }
    70% {
      bottom: 0px;
      left: 0px;
    }
  }
`

export const BoxAnimated: Story<BoxProps> = args => {
  const [playState, setPlayState] = useState<'running' | 'paused'>('running')

  const toggle = useCallback(() => {
    setPlayState(prev => (prev === 'running' ? 'paused' : 'running'))
  }, [])

  return (
    <Box w='500px' maxW={1} h='700px' posi='relative'>
      <BoxAnimatedKeyframe />
      <Box
        {...args}
        onClick={toggle}
        aPlayState={playState}
        dangerouslySetInnerHTML={{
          __html:
            playState === 'running'
              ? 'Tangkap aku 🤪'
              : 'Berhasil 😎🎉 <br /> Main lagi ▶️',
        }}
      />
    </Box>
  )
}

BoxAnimated.args = {
  posi: 'absolute',
  s: '200px',
  bg: 'green50',
  c: 'black40',
  p: 'm',
  radius: 'full',
  fAlign: 'center',
  fJustify: 'center',
  aName: 'bounce',
  aDuration: 4000,
  aIterCount: 'infinite',
  aTimingFunction: 'cubic-bezier(.51,.41,.17,1.79)',
  aDir: 'alternate',
  aFillMode: 'backwards',
  style: { cursor: 'pointer', textAlign: 'center' },
}

export const DivExample: Story<DivProps> = args => {
  return (
    <Div {...args}>
      <Div h='700px' w='100%'>
        Goods Core - Atoms - Div
      </Div>
    </Div>
  )
}

DivExample.args = {
  fDir: 'row',
  cursor: 'pointer',
  overflow: 'scroll',
  w: '300px',
  h: '300px',
  bg: 'green80',
  c: 'white40',
  m: 'l',
  p: 'm',
  radius: 'l',
  hoverProps: { bg: 'green90' },
}
