import React, { forwardRef, memo } from 'react'
import { Box, BoxProps } from '@pomona/goods-core'
import { ContextValue, AccordionContext } from './accordion.context'

export interface AccordionGroupProps extends ContextValue, BoxProps {}

export const AccordionGroup = memo(
  forwardRef<HTMLDivElement, AccordionGroupProps>(
    (
      {
        activeIndex,
        children,
        onClickAccordion,
        cOpen = 'blue50',
        cClose = 'black30',
        bgOpen = 'white20',
        bgClose = 'white10',
        ...props
      },
      ref
    ) => {
      return (
        <AccordionContext.Provider
          value={{
            activeIndex,
            onClickAccordion,
            cOpen,
            cClose,
            bgOpen,
            bgClose,
          }}
        >
          <Box {...props} ref={ref}>
            {children}
          </Box>
        </AccordionContext.Provider>
      )
    }
  )
)

AccordionGroup.displayName = 'AccordionGroup'
