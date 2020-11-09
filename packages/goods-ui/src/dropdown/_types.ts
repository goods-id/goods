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

export type RenderOptionItem = (item: OptionItem) => React.ReactNode

export interface DropdownInputProps
  extends Omit<InputStyledProps, 'prefix' | 'isLabeled' | 'as' | 'ref'>,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'prefix' | 'as' | 'value' | 'onChange' | 'onKeyDown'
    > {
  clearIcon?: IconButtonProps | React.ReactNode | true
  onClear?(e: React.MouseEvent): void
  onClearIconMouseDown?(e: React.MouseEvent): void
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
  options?: OptionItem[]
  onChange?(
    arg: OptionItem & { name: string; event: React.MouseEvent<HTMLDivElement> }
  ): void
  onKeyDown?(e: React.KeyboardEvent): void
}
