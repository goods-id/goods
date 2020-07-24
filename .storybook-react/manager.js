import { addons } from '@storybook/addons'
import theme from './utils/story-theme'

addons.setConfig({
  theme,
  isFullscreen: false,
  showPanel: true,
  panelPosition: 'bottom',
  isToolshown: true,
})
