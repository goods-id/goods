import { RadioGroup, RadioGroupProps } from './radio-group'
import { RadioItem, RadioItemProps as RadioItemPropsBase } from './radio-item'

type RadioGroupType = typeof RadioGroup

interface CompoundedComponent extends RadioGroupType {
  Item: typeof RadioItem
}

export const Radio = RadioGroup as CompoundedComponent
Radio.Item = RadioItem

export type RadioProps = RadioGroupProps
export type RadioItemProps = RadioItemPropsBase
