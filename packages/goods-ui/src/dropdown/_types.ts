import { BoxProps, ColorProps, TypographyRuleProps } from '@pomona/goods-core'
import { InputStyledProps } from '../input/input-styled'
import { LabelStyledProps } from '../input/label-styled'
import { IconButtonProps, ChangeEventInput } from '../@types/global'

export interface OptionItem {
  value: string
  label?: string
  disabled?: boolean
}

export interface OptionItemWithHidden extends OptionItem {
  hidden?: boolean
}

export type RenderOptionItem = (
  item: OptionItem & { context: 'input' | 'menu' }
) => React.ReactNode

export interface DropdownInputProps
  extends Omit<InputStyledProps, 'prefix' | 'isLabeled' | 'as' | 'ref'>,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'prefix' | 'as' | 'value' | 'onChange' | 'onKeyDown'
    > {
  clearIcon?: IconButtonProps | React.ReactNode | true
  onClear?(e: React.MouseEvent): void
  onClearIconMouseDown?(e: React.MouseEvent): void
  chevronIcon?: IconButtonProps | React.ReactNode
  prefix?: IconButtonProps | React.ReactNode
  label?: string
  labelProps?: LabelStyledProps
  supText?: React.ReactNode
  supColor?: ColorProps['c']
  supRule?: TypographyRuleProps['rule']
  supErrorColor?: ColorProps['c']
  isMenuOpen?: boolean
  searchedValue?: string
  selectedLabel?: string
  selectedValue?: string
  renderOptionItem?: RenderOptionItem
  onSearch?(e: ChangeEventInput): void | Promise<void>
}

export interface MenuComponentProps extends Omit<BoxProps, 'onSelect'> {
  id: string
  noOptionsMessage: string
  options: OptionItemWithHidden[]
  selected: string
  focused: string
  bgFocused: BoxProps['bg']
  isOpen?: boolean
  renderOptionItem?: RenderOptionItem
  onSelect(e: React.MouseEvent<HTMLDivElement>): void
  onItemHover(e: React.MouseEvent<HTMLDivElement>): void
}

export interface DropdownProps
  extends Omit<
      DropdownInputProps,
      'selectedLabel' | 'selectedValue' | 'onClear' | 'onClearIconMouseDown'
    >,
    Pick<Partial<MenuComponentProps>, 'renderOptionItem' | 'noOptionsMessage'> {
  value?: string
  containerProps?: Omit<BoxProps, 'ref'>
  menuComponent?: React.ComponentType<MenuComponentProps>
  isMenuOpen?: boolean
  menuWidth?: BoxProps['w']
  menuOffsetTop?: string
  menuOffsetLeft?: string
  menuContainerProps?: Omit<BoxProps, 'onSelect'>
  options?: OptionItem[]
  onChange?(
    arg: OptionItem & { name: string; event: React.MouseEvent<HTMLDivElement> }
  ): void
  onKeyDown?(e: React.KeyboardEvent): void
}

export type FetchOptionsHandler = (arg: {
  search: string
  page: number
  limit: number
}) => Promise<OptionItem[]>

export interface DropdownAsyncProps extends Omit<DropdownProps, 'options'> {
  /**
   * Async function to fetch options.
   *
   * Receive object of `{search: string; page: number; limit: number}`
   * as params, `page` is zero-based.
   *
   * Must return array of object `{value: string; label?: string;
   * disabled?: boolean}`
   *
   * Fired when:
   *
   * 1. the component mounted,
   *
   * 2. an item of `fetchDeps` array changed,
   *
   * 3. searched value changes (if `autoFilter` is `false`), or
   *
   * 4. scroll position of menu container is in the bottom, it only
   *    happen if previous length of returned option array is more
   *    than zero
   *
   * Condition 1 and 2 will send params
   * ```typescript
   * { search: '', page: 0, limit: fetchLimit }
   * ```
   * `fetchLimit` is taken from `fetchLimit` props
   *
   * Condition 3 will send params
   * ```typescript
   * { search: event.target.value, page: 0, limit: fetchLimit }
   * ```
   * `event` is change event of HTML Input Element
   *
   * Condition 4 will send params
   * ```typescript
   * { search: searchedState, page: pageState, limit: fetchLimit }
   * ```
   * `searchedState` and `pageState` are taken from state
   *
   * @default () => Promise.resolve([])
   */
  fetchOptions?: FetchOptionsHandler
  /**
   * Dependency array to trigger `fetchOptions` when one of its item changed
   * @default []
   */
  fetchDeps?: unknown[]
  /**
   * It will be passed to as `limit` value in params of `fetchOptions`
   * async function
   * @default 10
   */
  fetchLimit?: number
  /**
   * To activate auto filter. If `true`, `fetchOptions` will not be
   * fired when condition 3 occurs. Use it when your API service does
   * not handle search
   * @default false
   */
  autoFilter?: boolean
  /**
   * Color for spinner
   * @default "blue50"
   */
  loadingColor?: ColorProps['c']
}
