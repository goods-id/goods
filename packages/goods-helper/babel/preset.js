/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
const { name } = require('../package.json')

function join(...args) {
  return `${name}/lib/${args.join('/')}`
}

function kebabCase(str = '') {
  return str
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
    .toLowerCase()
    .replace(/^-/, '')
}

function transform(importName = '') {
  switch (importName) {
    case 'useDerivedStateFromProp':
    case 'useInfiniteScroll':
    case 'useRect':
      return join('hooks', kebabCase(importName.replace(/^use/i, '')))
    default:
      return name
  }
}

module.exports = () => {
  return {
    plugins: [
      [
        require('babel-plugin-transform-imports'),
        {
          [name]: {
            transform,
            preventFullImport: true,
            skipDefaultConversion: true,
          },
        },
      ],
    ],
  }
}
