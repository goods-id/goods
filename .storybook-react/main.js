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
]

module.exports = {
  stories: [
    '../packages/goods-core/src/**/*.{story,stories}.{ts,tsx}',
    '../packages/goods-ui/**/*.{story,stories}.{ts,tsx}',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-docs/register',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport/register',
    'storybook-addon-jsx',
    {
      name: '@storybook/addon-storysource',
      options: {
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
      },
    },
  ],
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

    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [['react-app', { flow: false, typescript: true }]],
          },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
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
                return !/(html|dom|aria)/i.test(props.parent.name)
              }
              return !/aria/i.test(props.name)
            },
          },
        },
      ],
      exclude: /node_modules/,
    })

    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
}
