import { Property as CSS } from 'csstype'
import { system, get, ConfigStyle } from '@styled-system/core'
import { CSSObject, DefaultTheme } from 'styled-components'

import { ThemeType } from '../theme'
import { Config, ResponsiveValue } from '../@types/global'
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
   * If `rule !== big-button` or `rule !== med-small-button`,
   * it can be used as desktop rule in case desktop rule was `undefined`.
   * If `rule = { xs: 'title', lg: 'subtitle' }`,
   * `"title"` will be a typography rule for mobile view, and `"subtitle"` will be a typography rule for desktop view
   * */
  rule?: ResponsiveValue<TypographyRule, Theme>
  /**
   * Typography rule for desktop `(min-width: theme.breakpoints.lg)`. It will be used if `rule.lg` was `undefined`
   * */
  dRule?: TypographyDesktopRule
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
  const { lg } = theme?.breakpoints || breakpointConstants
  if (lg) {
    const breakpointLg = createMediaQuery(lg)
    return { ...mRuleBased, [breakpointLg]: dRuleBased }
  }
  return { ...mRuleBased }
}

export interface TypographyProps<
  Theme extends ThemeType = ThemeType,
  TLength = string | number
> {
  /**
   * Font family.
   * */
  fontFam?: ResponsiveValue<CSS.FontFamily, Theme>
  /**
   * Font size. It will override font size value obtained from `rule` or `dRule`.
   *
   * Example - `fSize={{ xs: '14px', lg: '21px' }}`. Font size 14px for mobile view and 21px for desktop view
   * @example fSize={{ xs: '14px', lg: '21px' }}
   * @description Font size 14px for mobile view and 21px for desktop view
   * */
  fSize?: ResponsiveValue<CSS.FontSize<TLength>, Theme>
  /**
   * Letter spacing. It will override letter spacing value obtained from `rule` or `dRule`.
   *
   * The letter-spacing CSS property sets the spacing behavior between text characters.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
   * */
  letterSpace?: ResponsiveValue<CSS.LetterSpacing<TLength>, Theme>
  /**
   * Line height. It will override line height value obtained from `rule` or `dRule`.
   *
   * The line-height CSS property sets the amount of space used for lines, such as in text. On block-level elements,
   * it specifies the minimum height of line boxes within the element.
   *
   * On non-replaced inline elements, it specifies the height that is used to calculate line box height.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
   * */
  lineHeight?: ResponsiveValue<CSS.LineHeight<TLength>, Theme>
  /**
   * Font weight. It will override font weight value obtained from `rule` or `dRule`.
   *
   * The font-weight CSS property specifies the weight (or boldness) of the font.
   *
   * The font weights available to you will depend on the font-family you are using. Some fonts are only available in normal and bold.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
   * */
  weight?: ResponsiveValue<CSS.FontWeight, Theme>
  /**
   * The text-align CSS property specifies the horizontal alignment of an inline or table-cell box.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
   */
  textAlign?: ResponsiveValue<CSS.TextAlign, Theme>
  /**
   * The font-style CSS property specifies whether a font should be styled with a normal, italic,
   * or oblique face from its font-family.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)
   */
  fontStyle?: ResponsiveValue<CSS.FontStyle, Theme>
}

const addImportant = (name: keyof TypographyProps) =>
  ((n, scale, props: TypographyProps & TypographyRuleProps) => {
    const value = get(scale, n, n)
    const propValue = props[name]
    const isResponsive = typeof propValue === 'object'
    const isAnyRule = Boolean(props.rule || props.dRule)
    if (/!important$/.test(value) || isResponsive || !isAnyRule) {
      return value
    }
    return `${value} !important`
  }) as ConfigStyle['transform']

const config: Config<TypographyProps> = {
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

export const typography = system(config)
