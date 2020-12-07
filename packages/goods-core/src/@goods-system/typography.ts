import { Property as CSS } from 'csstype'
import { CSSObject, DefaultTheme } from 'styled-components'
import {
  system,
  get,
  TransformFn,
  ThemeType,
  Config,
  ResponsiveValue,
} from '@styled-system/core'

import { breakpointConstants, createMediaQuery } from '../breakpoints'

const commonRules = ['title', 'subtitle', 'body', 'caption'] as const

export const typographyDesktopRules = [
  ...commonRules,
  'body-bold',
  'button',
] as const

export const typographyMobileRules = [
  ...commonRules,
  'big-button',
  'med-small-button',
] as const

export type TypographyDesktopRule = typeof typographyDesktopRules[number]
export type TypographyMobileRule = typeof typographyMobileRules[number]
export type TypographyRule = TypographyDesktopRule | TypographyMobileRule

type TextBasicSettings = {
  fontWeight: 300 | 400 | 500
  fontSize: '34px' | '21px' | '14px' | '11px'
  lineHeight: '40px' | '32px' | '20px' | '16px'
  letterSpacing: '0.75px' | '0.5px' | '0.25px' | '0px' | '-0.25px' | '-0.5px'
}

type TypographyRuleSettings = {
  [rule in TypographyRule]?: TextBasicSettings
}

export const typographyDesktopRuleSettings: TypographyRuleSettings = {
  title: {
    fontWeight: 300,
    fontSize: '34px',
    lineHeight: '40px',
    letterSpacing: '-0.5px',
  },
  subtitle: {
    fontWeight: 500,
    fontSize: '21px',
    lineHeight: '32px',
    letterSpacing: '-0.25px',
  },
  caption: {
    fontWeight: 400,
    fontSize: '11px',
    lineHeight: '16px',
    letterSpacing: '0.25px',
  },
  button: {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.25px',
  },
  body: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
  },
  'body-bold': {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
  },
}

export const typographyMobileRuleSettings: TypographyRuleSettings = {
  title: {
    fontWeight: 500,
    fontSize: '21px',
    lineHeight: '32px',
    letterSpacing: '-0.25px',
  },
  subtitle: {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
  },
  caption: {
    fontWeight: 400,
    fontSize: '11px',
    lineHeight: '16px',
    letterSpacing: '0.25px',
  },
  body: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
  },
  'big-button': {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.5px',
  },
  'med-small-button': {
    fontWeight: 500,
    fontSize: '11px',
    lineHeight: '16px',
    letterSpacing: '0.75px',
  },
}

export interface TypographyRuleProps<Theme extends ThemeType = ThemeType> {
  /**
   * Typography rule for mobile and/or desktop `(min-width: theme.breakpoints.lg)`.
   *
   * If `rule !== big-button` or `rule !== med-small-button`,
   * it can be used as desktop rule in case desktop rule was `undefined`.
   *
   * If `rule = { xs: 'title', lg: 'subtitle' }`,
   * `"title"` will be a typography rule for mobile view, and `"subtitle"` will be a typography rule for desktop view
   * */
  rule?: ResponsiveValue<TypographyRule, Theme>
  /**
   * Typography rule for desktop `(min-width: theme.breakpoints.lg)`. It will be used if `rule.lg` was `undefined`
   * */
  dRule?: TypographyDesktopRule
}

const allowedProperties: (keyof TextBasicSettings)[] = [
  'fontSize',
  'fontWeight',
  'letterSpacing',
  'lineHeight',
]

function filterRuleStyle(ruleStyle: Partial<TextBasicSettings>) {
  return allowedProperties.reduce((obj, prop) => {
    const value = ruleStyle[prop]
    if (value) obj[prop] = value
    return obj
  }, {})
}

export function typographyRule(
  props: TypographyRuleProps & { theme?: DefaultTheme } = {}
): CSSObject {
  const { theme, rule } = props
  const dRule = (typeof rule === 'object' && rule?.lg) || props.dRule
  const mRule = rule && typeof rule === 'object' ? rule.xs : rule
  const mRuleBased = mRule && typographyMobileRuleSettings[mRule]
  const dRuleBased = dRule
    ? typographyDesktopRuleSettings[dRule]
    : mRule && typographyDesktopRuleSettings[mRule]
  const mRuleStyle = filterRuleStyle(mRuleBased || {})
  const dRuleStyle = filterRuleStyle(dRuleBased || {})
  const { lg } = theme?.breakpoints || breakpointConstants
  if (lg) {
    const breakpointLg = createMediaQuery(lg)
    return { ...mRuleStyle, [breakpointLg]: dRuleStyle }
  }
  return { ...mRuleStyle }
}

export interface TypographyProps<Theme extends ThemeType = ThemeType> {
  /**
   * **Box Orient**
   *
   * The **box-orient** CSS property sets whether an element lays out its contents
   * horizontally or vertically.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/box-orient)
   */
  boxOrient?: ResponsiveValue<CSS.BoxOrient, Theme>
  /**
   * **Text Overflow**
   *
   * The **text-overflow** CSS property sets how hidden overflow
   * content is signaled to users. It can be clipped, display an
   * ellipsis ('…'), or display a custom string.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow)
   * */
  textOver?: ResponsiveValue<CSS.TextOverflow, Theme>
  /**
   * **Text Decoration**
   *
   * The **text-decoration** CSS property sets the appearance of
   * decorative lines on text. It is a shorthand for text-decoration-line,
   * text-decoration-color, text-decoration-style, and the newer
   * text-decoration-thickness property.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
   * */
  textDecor?: ResponsiveValue<CSS.TextDecoration, Theme>
  /**
   * **Word Spacing**
   *
   * The **word-spacing** CSS property sets the length of space
   * between words and between tags.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing)
   * */
  wordSpace?: ResponsiveValue<CSS.WordSpacing, Theme>
  /**
   * **Word Wrap**
   *
   * The **overflow-wrap** CSS property applies to inline elements,
   * setting whether the browser should insert line breaks within
   * an otherwise unbreakable string to prevent text from overflowing
   * its line box.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap)
   * */
  wordWrap?: ResponsiveValue<CSS.WordWrap, Theme>
  /**
   * **Word Break**
   *
   * The **word-break** CSS property sets whether line breaks
   * appear wherever the text would otherwise overflow its
   * content box.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break)
   * */
  wordBreak?: ResponsiveValue<CSS.WordBreak, Theme>
  /**
   * **White Space**
   *
   * The **white-space** CSS property sets how white space
   * inside an element is handled.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/line-break)
   * */
  whiteSpace?: ResponsiveValue<CSS.WhiteSpace, Theme>
  /**
   * **Line Clamp**
   *
   * The **-webkit-line-clamp** CSS property allows limiting of
   * the contents of a block container to the specified number of
   * lines.

   * It only works in combination with the display property set
   * to -webkit-box or -webkit-inline-box and the -webkit-box-orient
   * property set to vertical.
   *
   * In most cases you will also want to set overflow to hidden,
   * otherwise the contents won't be clipped but an ellipsis will
   * still be shown after the specified number of lines.
   *
   * When applied to anchor elements, the truncating can happen
   * in the middle of the text, not necessarily at the end.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp)
   * */
  lineClamp?: ResponsiveValue<CSS.LineClamp, Theme>
  /**
   * **Line Break**
   *
   * The **line-break** CSS property sets how to break lines of
   * Chinese, Japanese, or Korean (CJK) text when working with
   * punctuation and symbols.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/line-break)
   * */
  lineBreak?: ResponsiveValue<CSS.LineBreak, Theme>
  /**
   * **Font family**
   *
   * The **font-family** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
   * */
  fontFam?: ResponsiveValue<CSS.FontFamily, Theme>
  /**
   * **Font size**
   *
   * It will override font size value obtained from `rule` or `dRule`.
   *
   * The **font-size** CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative <length> units, such as em, ex, and so forth.
   *
   * **Example**: `fSize={{ xs: '14px', lg: '21px' }}`. Font size 14px for mobile view and 21px for desktop view
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)
   * */
  fSize?: ResponsiveValue<CSS.FontSize, Theme>
  /**
   * **Letter spacing**
   *
   * It will override letter spacing value obtained from `rule` or `dRule`.
   *
   * The **letter-spacing** CSS property sets the spacing behavior between text characters.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
   * */
  letterSpace?: ResponsiveValue<CSS.LetterSpacing, Theme>
  /**
   * **Line height**
   *
   * It will override line height value obtained from `rule` or `dRule`.
   *
   * The **line-height** CSS property sets the amount of space used for lines, such as in text. On block-level elements,
   * it specifies the minimum height of line boxes within the element.
   *
   * On non-replaced inline elements, it specifies the height that is used to calculate line box height.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
   * */
  lineHeight?: ResponsiveValue<CSS.LineHeight, Theme>
  /**
   * **Font weight**
   *
   * It will override font weight value obtained from `rule` or `dRule`.
   *
   * The **font-weight** CSS property specifies the weight (or boldness) of the font.
   *
   * The font weights available to you will depend on the font-family you are using. Some fonts are only available in normal and bold.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
   * */
  weight?: ResponsiveValue<CSS.FontWeight, Theme>
  /**
   * **Text Align**
   *
   * The **text-align** CSS property specifies the horizontal alignment of an inline or table-cell box.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
   */
  textAlign?: ResponsiveValue<CSS.TextAlign, Theme>
  /**
   * **Font Style**
   *
   * The **font-style** CSS property specifies whether a font should be styled with a normal, italic,
   * or oblique face from its font-family.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)
   */
  fontStyle?: ResponsiveValue<CSS.FontStyle, Theme>
}

const addImportant = (
  name: keyof TypographyProps
): TransformFn<TypographyProps & TypographyRuleProps> => (n, scale, props) => {
  if (!props) return ''
  const value = get(scale, n, n) as string
  const propValue = props[name]
  const isResponsive = typeof propValue === 'object'
  const isAnyRule = Boolean(props.rule || props.dRule)
  if (!value || /!important$/.test(value) || isResponsive || !isAnyRule) {
    return value
  }
  return `${value} !important`
}

const config: Config<TypographyProps> = {
  boxOrient: { properties: ['boxOrient', 'WebkitBoxOrient', 'MozBoxOrient'] },
  textOver: { property: 'textOverflow' },
  textDecor: { property: 'textDecoration' },
  wordSpace: { property: 'wordSpacing' },
  wordWrap: true,
  wordBreak: true,
  whiteSpace: true,
  lineClamp: { properties: ['lineClamp', 'WebkitLineClamp'] },
  lineBreak: true,
  fontFam: { property: 'fontFamily' },
  fSize: { property: 'fontSize', transform: addImportant('fSize') },
  letterSpace: {
    property: 'letterSpacing',
    transform: addImportant('letterSpace'),
  },
  lineHeight: { property: 'lineHeight', transform: addImportant('lineHeight') },
  weight: { property: 'fontWeight', transform: addImportant('weight') },
  textAlign: true,
  fontStyle: true,
}

export const typography = system<TypographyProps>(config)
