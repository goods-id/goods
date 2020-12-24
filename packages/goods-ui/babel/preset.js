/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
const { name } = require('../package.json')

const join = (ssr = false) => (...args) => {
  return `${name}/${ssr ? 'ssr' : 'lib'}/${args.join('/')}`
}

const createTransformFn = (ssr = false) => (importName = '') => {
  const lowerCase = importName.toLowerCase()

  switch (importName) {
    case 'Button':
    case 'Input':
    case 'Radio':
    case 'Checkbox':
    case 'Switch':
    case 'Dropdown':
    case 'Accordion':
    case 'Menu':
    case 'Modal':
      return join(ssr)(lowerCase, lowerCase)

    case 'DropdownAsync':
      return join(ssr)('dropdown', 'dropdown-async')
    case 'AccordionGroup':
      return join(ssr)('accordion', 'accordion-group')
    case 'MenuGroup':
      return join(ssr)('menu', 'menu-group')

    case 'Feedback':
    case 'FeedbackPopupDispatchContext':
    case 'FeedbackPopupStateContext':
    case 'FeedbackProvider':
    case 'openFeedback':
    case 'useFeedback':
    case 'useFeedbackPopup':
      return join(ssr)('modal', 'modal-feedback')

    case 'cssUnitRegExp':
    case 'getColor':
    case 'isIconButtonProps':
    case 'toCssValue':
      return join(ssr)('_utils', 'helpers')

    case 'handleMouseDown':
    case 'isDocumentElement':
    case 'scrollIntoView':
    case 'scrollTo':
      return join(ssr)('_utils', 'dom-helpers')

    default:
      return name
  }
}

module.exports = (_, { ssr = false } = {}) => {
  return {
    plugins: [
      [
        require('babel-plugin-styled-components'),
        { ssr, minify: true, pure: true },
      ],
      [
        require('babel-plugin-transform-imports'),
        {
          [name]: {
            transform: createTransformFn(ssr),
            preventFullImport: true,
            skipDefaultConversion: true,
          },
        },
      ],
    ],
  }
}
