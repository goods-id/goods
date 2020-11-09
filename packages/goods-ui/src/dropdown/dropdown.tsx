import React, { forwardRef, memo } from 'react'
import { Box, Text } from '@pomona/goods-core'
import { DropdownInput, MenuBox, OptionBox, ValueContainer } from './_base'
import { useDropdown } from './hooks/dropdown'
import { DropdownProps, MenuComponentProps } from './_types'
import { toCssValue } from '../_utils'

const DefaultMenuComponent = memo(
  forwardRef<HTMLDivElement, MenuComponentProps>(
    (
      {
        options,
        renderOptionItem,
        noOptionsMessage,
        id,
        isOpen,
        focused,
        bgFocused,
        selected,
        onSelect,
        onItemHover,
        top,
        left,
        bW = '1px',
        bS = 'solid',
        bC = 'blue50',
        radius = 'm',
        w = true,
        ...props
      },
      ref
    ) => {
      const shownOptions = options.filter(opt => !opt.hidden)
      const totalShownOptions = shownOptions.length
      return (
        <Box
          id={`${id}-container`}
          d={isOpen ? 'flex' : 'none'}
          posi='absolute'
          top={top}
          left={left}
          w={w}
          maxH='148px'
          bg='white10'
          z={10}
          px='xxxs'
          py='2px'
          bW={bW}
          bS={bS}
          bC={bC}
          radius={radius}
          {...props}
        >
          <MenuBox
            ref={ref}
            id={id}
            w
            pr='xxxs'
            maxH='100%'
            overflow='scroll'
            cScrollBar={bC}
          >
            {totalShownOptions ? (
              shownOptions.map(opt => (
                <OptionBox
                  key={opt.value}
                  renderOptionItem={renderOptionItem}
                  selected={selected}
                  cSelected={bC}
                  focused={focused}
                  bgFocused={bgFocused}
                  onSelect={onSelect}
                  onItemHover={onItemHover}
                  {...opt}
                />
              ))
            ) : (
              <ValueContainer
                w
                px='xxs'
                py='xs'
                lineClamp={2}
                textWidth='100%'
                title={noOptionsMessage}
                c='black30'
              >
                <Text as='span' rule='body'>
                  {noOptionsMessage}
                </Text>
              </ValueContainer>
            )}
          </MenuBox>
        </Box>
      )
    }
  )
)

export const Dropdown = memo(
  forwardRef<HTMLInputElement, DropdownProps>(
    (
      {
        id = `${Date.now()}`,
        readOnly = false,
        disabled = false,
        isError = false,
        value = '',
        name = '',
        options = [],
        noOptionsMessage = 'No data',
        renderOptionItem,
        radius = 'm',
        w,
        maxW,
        focusProps,
        errorProps,
        hoverProps,
        containerProps,
        isMenuOpen: isMenuOpenProps,
        menuComponent: MenuComponent = DefaultMenuComponent,
        menuWidth = true,
        menuOffsetTop,
        menuOffsetLeft,
        onFocus: onFocusProps,
        onBlur: onBlurProps,
        onSearch: onSearchProps,
        onKeyDown: onKeyDownProps,
        onChange,
        ...props
      },
      ref
    ) => {
      const [
        {
          isMenuOpen,
          inputAndMenuRadius,
          focusedValue,
          searchedValue,
          selectedValue,
          selectedLabel,
          filteredOptions,
          menuRef,
          inputRef,
          inputRect,
        },
        {
          onClick,
          onFocus,
          onSearch,
          onBlur,
          onSelect,
          onItemHover,
          onClear,
          onClearIconMouseDown,
          onMenuMouseDown,
          onMenuMouseMove,
          onKeyDown,
        },
      ] = useDropdown({
        ref,
        value,
        name,
        readOnly,
        disabled,
        options,
        onChange,
        onFocus: onFocusProps,
        onBlur: onBlurProps,
        onSearch: onSearchProps,
        onKeyDown: onKeyDownProps,
        isMenuOpen: isMenuOpenProps,
      })

      const {
        inputBotLeft,
        inputBotRight,
        inputTopLeft,
        inputTopRight,
        menuBotLeft,
        menuBotRight,
        menuTopLeft,
        menuTopRight,
      } = inputAndMenuRadius

      let { bW, bS, bC } = focusProps || {}
      let { bg: bgHover } = hoverProps || {}
      const {
        bW: bWError = '1px',
        bS: bSError = 'solid',
        bC: bCError = 'red60',
        bg: bgError = 'red10',
      } = errorProps || {}
      if (isError) {
        bW = bWError
        bS = bSError
        bC = bCError
        bgHover = bgError
      }

      const inputId = `dropdown-${id}`
      const { height } = inputRect
      const menuOffsetTopValue = toCssValue(menuOffsetTop)
      const menuTop = menuOffsetTopValue
        ? `calc(${height - 1}px + ${menuOffsetTopValue})`
        : `${height - 1}px`

      return (
        <Box
          id={`${inputId}-container`}
          posi='relative'
          my='xxs'
          w={w}
          maxW={maxW}
          {...containerProps}
          onKeyDown={onKeyDown}
        >
          <DropdownInput
            w
            id={inputId}
            readOnly={readOnly}
            disabled={disabled}
            isError={isError}
            name={name}
            searchedValue={searchedValue}
            selectedLabel={selectedLabel}
            selectedValue={selectedValue}
            renderOptionItem={renderOptionItem}
            radius={radius}
            bTopLeftRad={inputTopLeft}
            bTopRightRad={inputTopRight}
            bBotLeftRad={inputBotLeft}
            bBotRightRad={inputBotRight}
            focusProps={focusProps}
            hoverProps={hoverProps}
            isMenuOpen={isMenuOpen}
            onSearch={onSearch}
            onClick={onClick}
            onFocus={onFocus}
            onBlur={onBlur}
            onClear={onClear}
            onClearIconMouseDown={onClearIconMouseDown}
            {...props}
            ref={inputRef}
            errorProps={{
              bW: bWError,
              bS: bSError,
              bC: bCError,
              ...errorProps,
            }}
          />
          <MenuComponent
            ref={menuRef}
            id={`${inputId}-list`}
            isOpen={isMenuOpen}
            noOptionsMessage={noOptionsMessage}
            radius={radius}
            bTopLeftRad={menuTopLeft}
            bTopRightRad={menuTopRight}
            bBotLeftRad={menuBotLeft}
            bBotRightRad={menuBotRight}
            bW={bW}
            bS={bS}
            bC={bC}
            top={menuTop}
            left={toCssValue(menuOffsetLeft)}
            w={menuWidth}
            options={filteredOptions}
            renderOptionItem={renderOptionItem}
            selected={selectedValue}
            focused={focusedValue}
            bgFocused={bgHover}
            onSelect={onSelect}
            onItemHover={onItemHover}
            onMouseDown={onMenuMouseDown}
            onMouseMove={onMenuMouseMove}
          />
        </Box>
      )
    }
  )
)
