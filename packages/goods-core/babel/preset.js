/* eslint-disable global-require */
const goodsCore = require('../package.json').name

const goodsCoreLib = `${goodsCore}/lib/`
const goodsCoreSsr = `${goodsCore}/ssr/`

function join(...args) {
  return `${goodsCoreLib}${args.join('/')}`
}

function joinSsr(...args) {
  return `${goodsCoreSsr}${args.join('/')}`
}

const createTransformFn = (ssr = false) => (importName = '') => {
  switch (importName) {
    case 'BasicDiv':
    case 'Box':
    case 'BoxStyled':
    case 'Div':
    case 'DivStyled':
      return join('basics', 'div')

    case 'Text':
      return join('typography')
    case 'Icon':
      return ssr ? joinSsr('icon', 'icon-ssr') : join('icon')

    case 'BasicImage':
    case 'Image':
    case 'ImageStyled':
      return join('basics', 'image')

    case 'BasicSkeleton':
    case 'Skeleton':
    case 'SkeletonAnimation':
    case 'SkeletonStyled':
      return join('basics', 'skeleton')

    case 'BasicSpinner':
    case 'Spinner':
      return join('basics', 'spinner')

    case 'RichText':
      return join('basics', 'rich-text')

    case 'BasicLine':
    case 'Line':
      return join('basics', 'line')

    case 'Anchor':
    case 'AnchorStyled':
    case 'BasicAnchor':
      return join('basics', 'anchor')

    case 'goodsTheme':
    case 'overrideGoodsTheme':
    case 'overrideTheme':
    case 'theme':
    case 'zIndices':
      return join('theme')

    case 'GoodsProvider':
    case 'useGoods':
    case 'withGoods':
      return join('goods-context')

    case 'isNumber':
    case 'merge':
    case 'mergeClass':
    case 'sort':
      return join('@goods-system', 'core')

    case 'layout':
    case 'interaction':
    case 'color':
    case 'flexbox':
    case 'background':
    case 'position':
    case 'border':
    case 'shadow':
    case 'grid':
    case 'list':
    case 'table':
    case 'image':
      return join('@goods-system', importName)

    case 'margin':
    case 'padding':
    case 'spacing':
      return join('@goods-sytem', 'spacing')

    case 'animation':
    case 'getAnimationName':
    case 'motion':
    case 'transform':
    case 'transition':
      return join('@goods-system', 'motion')

    case 'typography':
    case 'typographyDesktopRules':
    case 'typographyDesktopRuleSettings':
    case 'typographyMobileRules':
    case 'typographyMobileRuleSettings':
    case 'typographyRule':
      return join('@goods-system', 'typography')

    case 'active':
    case 'after':
    case 'before':
    case 'customSelector':
    case 'disabled':
    case 'focus':
    case 'hover':
      return join('@goods-system', 'custom-selector')

    case 'spacingConstants':
      return join('spacing')
    case 'radiusConstants':
      return join('radius')
    case 'breakpointConstants':
    case 'createMediaQuery':
    case 'getValueInBp':
      return join('breakpoints')

    case 'black':
    case 'blue':
    case 'getInverseBw':
    case 'green':
    case 'hexToRgb':
    case 'hexToRgba':
    case 'orange':
    case 'red':
    case 'white':
      return join('color')

    case 'IconRotate':
    case 'IconSize':
    case 'Svg':
      return join('icon', 'svg', '_base')
    case 'iconName':
      return join('icon', '_types')
    default:
      return goodsCore
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
          [goodsCore]: {
            transform: createTransformFn(ssr),
            preventFullImport: true,
            skipDefaultConversion: true,
          },
        },
      ],
    ],
  }
}
