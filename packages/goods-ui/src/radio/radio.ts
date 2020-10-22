import { RadioGroup } from './radio-group'
import { RadioItem } from './radio-item'

type RadioGroupType = typeof RadioGroup

interface CompoundedComponent extends RadioGroupType {
  Item: typeof RadioItem
}

export const Radio = RadioGroup as CompoundedComponent
Radio.Item = RadioItem

export { RadioGroupProps } from './radio-group'
export { RadioItemProps } from './radio-item'
