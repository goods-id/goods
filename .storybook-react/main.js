const path = require('path')
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin')
const displayedHtmlProps = [
  'id',
  'className',
  'name',
  'onClick',
  'onChange',
  'onKeyUp',
  'onKeyDown',
  'onKeyPress',
  'onFocus',
  'onBlur',
  'onMouseOver',
  'onMouseLeave',
  'onMouseEnter',
  'onMouseOut',
  'size',
  'rotate',
  'p',
  'm',
  'style',
  'href',
  'target',
]

const sourceLoaderOptions = {
  rule: {
    test: [/\.(stories|story)\.tsx?$/],
    include: [
      path.resolve(__dirname, '../packages/goods-core/src'),
      path.resolve(__dirname, '../packages/goods-ui/src'),
    ],
  },
  loaderOptions: {
    prettierConfig: { printWidth: 80 },
    parser: 'typescript',
  },
}

module.exports = {
  stories: [
    '../packages/goods-core/src/**/*.{story,stories}.{ts,tsx}',
    '../packages/goods-ui/**/*.{story,stories}.{ts,tsx}',
  ],

  addons: [
    {
      name: '@storybook/addon-docs',
      options: { sourceLoaderOptions },
    },
    '@storybook/addon-controls',
    {
      name: '@storybook/addon-storysource',
      options: sourceLoaderOptions,
    },
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport/register',
    'storybook-addon-jsx',
  ],

  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      tsconfigPath: path.resolve(
        __dirname,
        '../packages/goods-core/tsconfig.json'
      ),
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: props => {
        if (displayedHtmlProps.includes(props.name)) {
          return true
        }
        if (props.name === 'key') {
          return false
        }
        if (props.parent) {
          return !/(html|dom|aria|svg)/i.test(props.parent.name)
        }
        return !/aria/i.test(props.name)
      },
    },
  },

  webpackFinal: config => {
    config.module.rules.push({
      test: /\.(stories|story)\.tsx?$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { parser: 'typescript' },
        },
      ],
      enforce: 'pre',
    })

    config.module.rules.push({
      test: /\.(stories|story)\.mdx$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-transform-react-jsx'],
          },
        },
        {
          loader: '@mdx-js/loader',
          options: {
            compilers: [createCompiler({})],
          },
        },
      ],
    })

    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
}
