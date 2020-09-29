import { Property as CSS } from 'csstype'
import {
  system,
  get,
  compose,
  ThemeType,
  Config,
  ResponsiveValue,
} from '@styled-system/core'

import { isNumber } from './core'

export interface TransitionProps<Theme extends ThemeType = ThemeType> {
  /**
   * **Transition**
   *
   * The **transition** CSS property is a shorthand property for transition-property, transition-duration, transition-timing-function, and transition-delay.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
   */
  transition?: ResponsiveValue<CSS.Transition, Theme>
  /**
   * **Transition Delay**
   *
   * The **transition-delay** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay)
   */
  tDelay?: ResponsiveValue<CSS.TransitionDelay | number, Theme>
  /**
   * **Transition Duration**
   *
   * The **transition-duration** CSS property sets the length of time a transition animation should take to complete. By default, the value is 0s, meaning that no animation will occur.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration)
   */
  tDuration?: ResponsiveValue<CSS.TransitionDuration | number, Theme>
  /**
   * **Transition Property**
   *
   * The **transition-property** CSS property sets the CSS properties to which a transition effect should be applied.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property)
   */
  tProperty?: ResponsiveValue<CSS.TransitionProperty, Theme>
  /**
   * **Transition Timing Function**
   *
   * The **transition-timing-function** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
   *
   * [MDN reference for timing function](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function)
   */
  tTimingFunction?: ResponsiveValue<CSS.TransitionTimingFunction, Theme>
}

export interface AnimationProps<Theme extends ThemeType = ThemeType> {
  /**
   * **Animation**
   *
   * The **animation** shorthand CSS property applies an animation between styles.
   * It is a shorthand for animation-name, animation-duration, animation-timing-function,
   * animation-delay, animation-iteration-count, animation-direction, animation-fill-mode,
   * and animation-play-state.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
   */
  animation?: ResponsiveValue<CSS.Animation, Theme>
  /**
   * **Animation Delay**
   *
   * The **animation-delay** CSS property specifies the amount of time to wait from applying
   * the animation to an element before beginning to perform the animation.
   * The animation can start later, immediately from its beginning, or immediately and partway
   * through the animation.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay)
   */
  aDelay?: ResponsiveValue<CSS.AnimationDelay | number, Theme>
  /**
   * **Animation Direction**
   *
   * The **animation-direction** CSS property sets whether an animation should play forward,
   * backward, or alternate back and forth between playing the sequence forward and backward.
   *
   * **Syntax**:
   * `'normal' | 'reverse' | 'alternate' | 'alternate-reverse'`
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction)
   */
  aDir?: ResponsiveValue<CSS.AnimationDirection, Theme>
  /**
   * **Animation Duration**
   *
   * The **animation-duration** CSS property sets the length of time that an animation takes to
   * complete one cycle.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration)
   */
  aDuration?: ResponsiveValue<CSS.AnimationDuration | number, Theme>
  /**
   * **Animation Fill Mode**
   *
   * The **animation-fill-mode** CSS property sets how a CSS animation applies styles to
   * its target before and after its execution.
   *
   * **Syntax**:
   * `'none' | 'forwards' | 'backwards' | 'both'`
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode)
   */
  aFillMode?: ResponsiveValue<CSS.AnimationFillMode, Theme>
  /**
   * **Animation Iteration Count**
   *
   * The **animation-iteration-count** CSS property sets the number of times
   * an animation sequence should be played before stopping.
   *
   * If multiple values are specified, each time the animation is played the next value
   * in the list is used, cycling back to the first value after the last one is used.
   *
   * **Syntax**:
   * `'infinite' | number`
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count)
   */
  aIterCount?: ResponsiveValue<CSS.AnimationIterationCount, Theme>
  /**
   * **Animation Name**
   *
   * The **animation-name** CSS property specifies the names of one or more [@keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)
   * at-rules describing the animation or animations to apply to the element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name)
   */
  aName?: ResponsiveValue<CSS.AnimationName, Theme>
  /**
   * **Animation Play State**
   *
   * The **animation-play-state** CSS property sets whether an animation is running or paused.
   *
   * **Syntax**:
   * `'running' | 'paused'`
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state)
   */
  aPlayState?: ResponsiveValue<CSS.AnimationPlayState, Theme>
  /**
   * **Animation Timing Function**
   *
   * The **animation-timing-function** CSS property sets how an animation progresses
   * through the duration of each cycle.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)
   *
   * [MDN reference for timing function](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function)
   */
  aTimingFunction?: ResponsiveValue<CSS.AnimationTimingFunction, Theme>
}

export interface TransformProps<Theme extends ThemeType = ThemeType> {
  /**
   * **Transform**
   *
   * The **transform** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS [visual formatting model](https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model).
   *
   * **Syntax**:
   * `'none' | <transform-list>`
   *
   * where
   *
   * `<transform-list> = <transform-function>+`
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
   *
   * [MDN reference for transform function](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function)
   */
  transform?: ResponsiveValue<CSS.Transform, Theme>
  /**
   * **Transform Box**
   *
   * The **transform-box** CSS property defines the layout box to which the transform and
   * transform-origin properties relate.
   *
   * **Syntax**:
   * `'content-box' | 'border-box' | 'fill-box' | 'stroke-box' | 'view-box'`
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-box)
   */
  transformBox?: ResponsiveValue<CSS.TransformBox, Theme>
  /**
   * **Transform Origin**
   *
   * The **transform-origin** CSS property sets the origin for an element's transformations.
   *
   * **Syntax**:
   * `[ <length-percentage> | left | center | right | top | bottom ] |
   * [ [ <length-percentage> | left | center | right ] &&
   * [ <length-percentage> | top | center | bottom ] ] <length>?`
   *
   * where
   *
   * `<length-percentage> = <length> | <percentage>`
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)
   */
  transformOrigin?: ResponsiveValue<CSS.TransformOrigin, Theme>
  /**
   * **Transform Style**
   *
   * The **transform-style** CSS property sets whether children of an element are positioned
   * in the 3D space or are flattened in the plane of the element.
   *
   * **Syntax**:
   * `'flat' | 'preserve-3d'`
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style)
   */
  transformStyle?: ResponsiveValue<CSS.TransformStyle, Theme>
}

export interface MotionProps<Theme extends ThemeType = ThemeType>
  extends TransitionProps<Theme>,
    AnimationProps<Theme>,
    TransformProps<Theme> {}

const getTime = (n, scale) =>
  get(scale, n, isNumber(n) ? (n > 0 ? `${n}ms` : '0s') : n)

const transitionConfig: Config<TransitionProps> = {
  transition: true,
  tDelay: { property: 'transitionDelay', transform: getTime },
  tDuration: { property: 'transitionDuration', transform: getTime },
  tProperty: { property: 'transitionProperty' },
  tTimingFunction: { property: 'transitionTimingFunction' },
}

export const transition = system<TransitionProps>(transitionConfig)

const animationConfig: Config<AnimationProps> = {
  animation: true,
  aDelay: { property: 'animationDelay', transform: getTime },
  aDir: { property: 'animationDirection' },
  aDuration: { property: 'animationDuration', transform: getTime },
  aFillMode: { property: 'animationFillMode' },
  aIterCount: { property: 'animationIterationCount' },
  aName: { property: 'animationName' },
  aPlayState: { property: 'animationPlayState' },
  aTimingFunction: { property: 'animationTimingFunction' },
}

export const animation = system<AnimationProps>(animationConfig)

const transformConfig: Config<TransformProps> = {
  transform: true,
  transformBox: true,
  transformOrigin: true,
  transformStyle: true,
}

export const transform = system<TransformProps>(transformConfig)

export const motion = compose<MotionProps>(transition, animation, transform)
