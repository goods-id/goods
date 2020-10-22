import { createContext, useContext } from 'react'
import { BoxProps } from '@pomona/goods-core'

export interface ContextValue {
  /**
   * **name** of Radio Group field. It will be used as name for each
   * Radio Item which becomes children of this Radio Group
   */
  name: string
  /**
   * **Selected value** of Radio Item
   */
  value: string | number
  rtl?: boolean
  cItem?: BoxProps['c']
  cItemSelected?: BoxProps['c']
  cItemDisabled?: BoxProps['c']
  bgItem?: BoxProps['bg']
  bgItemSelected?: BoxProps['bg']
  bgItemDisabled?: BoxProps['bg']
  bgItemAlphaClicked?: BoxProps['bgAlpha']
  filterItemHovered?: BoxProps['filter']
  filterItemDisabled?: BoxProps['filter']
  onChange?: (e: ChangeEventInput) => void | Promise<void>
}

export const RadioContext = createContext<ContextValue>({
  name: '',
  value: '',
})

export function useRadioContext(): ContextValue {
  return useContext(RadioContext)
}
