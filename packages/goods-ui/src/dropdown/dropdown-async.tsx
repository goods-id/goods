import React, { forwardRef, memo } from 'react'
import { Box, Spinner } from 'goods-core'
import { DefaultMenuComponent, DropdownInput } from './_base'
import { useDropdownAsync } from './hooks/dropdown-async'
import { DropdownAsyncProps } from './_types'
import { toCssValue } from '../_utils'
import { getDefaultInputAndMenuProps } from './_helpers'

export const DropdownAsync = memo(
  forwardRef<HTMLInputElement, DropdownAsyncProps>(
    (
      {
        id = `${Date.now()}`,
        autoFilter = false,
        readOnly = false,
        disabled = false,
        isError = false,
        value = '',
        name = '',
        initialSearch = '',
        fetchDeps,
        fetchLimit,
        fetchOptions,
        noOptionsMessage = 'No data',
        renderOptionItem,
        suffix,
        loadingColor = 'blue50',
        loadingComponent: Loader = Spinner,
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
        menuContainerProps,
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
          isLoading,
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
      ] = useDropdownAsync({
        ref,
        autoFilter,
        disabled,
        readOnly,
        name,
        value,
        initialSearch,
        fetchDeps,
        fetchLimit,
        fetchOptions,
        onChange,
        onBlur: onBlurProps,
        onFocus: onFocusProps,
        onKeyDown: onKeyDownProps,
        onSearch: onSearchProps,
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

      const {
        bCError,
        bSError,
        bWError,
        bgError,
        bgHover,
        menuTop,
        bC,
        bS,
        bW,
      } = getDefaultInputAndMenuProps({
        focusProps,
        hoverProps,
        errorProps,
        isError,
        menuOffsetTop,
        inputRect,
      })

      const inputId = `dropdown-async-${id}`

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
              bg: bgError,
              ...errorProps,
            }}
            suffix={
              isLoading ? (
                <>
                  <Loader c={loadingColor} />
                  {suffix}
                </>
              ) : (
                suffix
              )
            }
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
            bW={bW || props.bW}
            bS={bS || props.bS}
            bC={bC || props.bC}
            top={menuTop}
            left={toCssValue(menuOffsetLeft)}
            w={menuWidth}
            {...menuContainerProps}
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
