import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { DocsContainer } from '@storybook/addon-docs/blocks'
import { jsxDecorator } from 'storybook-addon-jsx'

import { sortStories } from './utils/story-helpers'
import theme from './utils/story-theme'
import { GoodsProvider } from '../packages/goods-core/src/goods-context'
import { GoodsDocs } from '../packages/goods-core/src/utils/storybook.docs'

const SORT_ORDER = {
  'Getting Started': [
    'Introduction',
    'Goods Provider',
    'Theme',
    'Use Goods',
    'With Goods',
    'Global Style',
  ],
  Core: ['Colour', 'Shadow', 'Spacing', 'Corner Radius', 'Typography', 'Icon'],
  Basics: ['Div', 'Image', 'Skeleton', 'Line', 'Anchor', 'Spinner'],
  Component: [
    'Input',
    'Button',
    'Checkbox',
    'Radio',
    'Switch',
    'Dropdown',
    'Dropdown Async',
    'Menu',
    'Accordion',
  ],
}

addParameters({
  options: {
    storySort: sortStories(SORT_ORDER),
    showRoots: true,
    theme,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
  },
  docs: {
    container: ({ children, context }) => {
      return (
        <DocsContainer context={context}>
          <GoodsProvider>{children}</GoodsProvider>
        </DocsContainer>
      )
    },
    page: GoodsDocs,
    extractComponentDescription: component => {
      return component?.__docgenInfo?.description
    },
  },
})

addDecorator(jsxDecorator)
addDecorator(withA11y)
addDecorator(withKnobs)

const withGoods = StoryFn => {
  React.useEffect(() => {
    document.body.classList.add('scroll')
    return () => {
      document.body.classList.remove('scroll')
    }
  }, [])
  return (
    <GoodsProvider>
      <StoryFn />
    </GoodsProvider>
  )
}

addDecorator(withGoods)
