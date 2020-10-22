import React, { forwardRef, memo } from 'react'
import { Box, BoxProps } from '@pomona/goods-core'
import { ContextValue, RadioContext } from './radio.context'

export interface RadioGroupProps
  extends ContextValue,
    Omit<BoxProps, 'onChange'> {}

export const RadioGroup = memo(
  forwardRef<HTMLDivElement, RadioGroupProps>(
    (
      {
        children,
        name,
        value,
        rtl = false,
        cItem = 'black30',
        cItemSelected,
        cItemDisabled,
        bgItem = 'white10',
        bgItemSelected,
        bgItemDisabled,
        bgItemAlphaClicked = 0.2,
        filterItemHovered = 'brightness(95%)',
        filterItemDisabled = 'opacity(50%)',
        onChange,
        ...props
      },
      ref
    ) => {
      let d: BoxProps['d']
      let gTempCol: BoxProps['gTempCol']
      let fJustifyItems: BoxProps['fJustifyItems']
      if (rtl) {
        d = 'grid'
        gTempCol = 'max-content'
        fJustifyItems = 'flex-end'
      }
      return (
        <RadioContext.Provider
          value={{
            name,
            value,
            rtl,
            cItem,
            cItemSelected: cItemSelected || cItem,
            cItemDisabled: cItemDisabled || cItem,
            bgItem,
            bgItemSelected: bgItemSelected || bgItem,
            bgItemDisabled: bgItemDisabled || bgItem,
            bgItemAlphaClicked,
            filterItemDisabled,
            filterItemHovered,
            onChange,
          }}
        >
          <Box
            role='radiogroup'
            d={d}
            gTempCol={gTempCol}
            fJustifyItems={fJustifyItems}
            {...props}
            ref={ref}
          >
            {children}
          </Box>
        </RadioContext.Provider>
      )
    }
  )
)

RadioGroup.displayName = 'RadioGroup'
