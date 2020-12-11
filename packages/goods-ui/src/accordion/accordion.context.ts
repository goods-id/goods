import { createContext, useContext } from 'react'
import { BoxProps } from 'goods-core'

export interface ContextValue {
  activeIndex?: number
  onClickAccordion: (
    index: number,
    event: React.MouseEvent<HTMLDivElement>
  ) => void | Promise<void>
  cOpen?: BoxProps['c']
  cClose?: BoxProps['c']
  bgOpen?: BoxProps['c']
  bgClose?: BoxProps['c']
}

export const AccordionContext = createContext<ContextValue>({
  activeIndex: undefined,
  onClickAccordion: () => {},
})

export function useAccordionContext(): ContextValue {
  return useContext(AccordionContext)
}
