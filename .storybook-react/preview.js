import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
import { jsxDecorator } from 'storybook-addon-jsx'

import { sortStories } from './utils/story-helpers'
import theme from './utils/story-theme'
import { GoodsProvider } from '../packages/goods-core/src/goods-context'

const SORT_ORDER = {
  'Getting Started': [
    'Introduction',
    'Goods Provider',
    'Theme',
    'Use Goods',
    'With Goods',
  ],
  Core: ['Icon', 'Color', 'Typography', 'Spacing', 'Corner Radius'],
  Atoms: [],
  Molecules: [],
}

addParameters({
  viewMode: 'docs',
  options: {
    storySort: sortStories(SORT_ORDER),
    theme,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  docs: {
    container: ({ children, context }) => {
      return (
        <DocsContainer context={context}>
          <GoodsProvider>{children}</GoodsProvider>
        </DocsContainer>
      )
    },
    page: DocsPage,
    extractComponentDescription: component => {
      return component?.__docgenInfo?.description
    },
  },
})

addDecorator(withA11y)
addDecorator(withKnobs)
addDecorator(jsxDecorator)

const withGoods = StoryFn => {
  return (
    <GoodsProvider>
      <StoryFn />
    </GoodsProvider>
  )
}

addDecorator(withGoods)
