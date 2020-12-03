import React, { forwardRef, memo } from 'react'
import styled, { CSSObject } from 'styled-components'
import {
  Box,
  BoxProps,
  BoxStyled,
  color,
  ColorProps,
  Icon,
  IconProps,
  mergeClass,
  Text,
} from '@pomona/goods-core'
import { useRect } from '@pomona/goods-helper'
import { InputStyled } from '../input/input-styled'
import { LabelStyled } from '../input/label-styled'
import { isIconButtonProps } from '../_utils'
import { DropdownInputProps, MenuComponentProps, OptionItem } from './_types'

export const ValueContainer = styled(BoxStyled)<{
  textWidth?: string
  lineClamp?: number
}>(({ textWidth, lineClamp = 1 }) => ({
  '& > span, & > p': {
    display: 'block',
    WebkitLineClamp: lineClamp,
    lineClamp,
    textOverflow: 'ellipsis',
    whiteSpace: lineClamp > 1 ? 'normal' : 'nowrap',
    overflow: 'hidden',
    maxWidth: textWidth,
    color: 'inherit',
    WebkitBoxOrient: 'vertical' as CSSObject['WebkitBoxOrient'],
  },
}))

export const DropdownInput = memo(
  forwardRef<HTMLInputElement, DropdownInputProps>(
    (
      {
        id = `${Date.now()}`,
        isMenuOpen = false,
        searchedValue = '',
        selectedLabel = '',
        selectedValue = '',
        renderOptionItem,
        onSearch,
        placeholder = '',
        clearIcon,
        onClear,
        onClearIconMouseDown,
        chevronIcon,
        w = true,
        c = 'black30',
        b = '1px solid transparent',
        supColor = 'black20',
        supErrorColor = 'red60',
        supRule = 'caption',
        supText = '',
        label = '',
        labelProps,
        prefix,
        prefixContainer,
        suffix,
        suffixContainer,
        className,
        isError,
        disabled,
        pb,
        pt,
        pr,
        pl,
        h,
        minH = '48px',
        radius,
        focusProps,
        ...props
      },
      ref
    ) => {
      const {
        ref: prefixRef,
        rect: { width: prefixWidth },
      } = useRect<HTMLDivElement>()
      const paddingLeft = pl || `${prefixWidth + 12}px`

      const isClearIconShown =
        !!clearIcon && !disabled && !!(selectedLabel || searchedValue)
      const { ref: suffixRef, rect: suffixRect } = useRect<HTMLDivElement>([
        isClearIconShown,
      ])
      const paddingRight = pr || `${suffixRect.width}px`

      let renderedItemSelected: React.ReactNode = null
      if (selectedLabel && !searchedValue) {
        let child: React.ReactNode = selectedLabel
        if (typeof renderOptionItem === 'function') {
          child = renderOptionItem({
            value: selectedValue,
            label: selectedLabel,
            context: 'input',
            disabled,
          })
        }

        let top = '50%'
        let bottom = ''
        let offset = '-50%'
        if (label) {
          top = ''
          bottom = '0px'
          offset = '-20%'
        }

        renderedItemSelected = (
          <ValueContainer
            as='label'
            htmlFor={id}
            id={`${id}-dummy-input`}
            title={selectedLabel}
            posi='absolute'
            top={top}
            bottom={bottom}
            transform={`translateY(${offset})`}
            pl={paddingLeft}
            pr={paddingRight}
            w
            cursor={disabled ? 'not-allowed' : 'text'}
            textWidth='100%'
            fDir='row'
            fAlign='center'
            c={disabled ? 'black20' : c}
          >
            {typeof child === 'string' || typeof child === 'number' ? (
              <Text as='span' rule='body' c='inherit'>
                {child}
              </Text>
            ) : (
              child
            )}
          </ValueContainer>
        )
      }

      return (
        <>
          <Box w={w} posi='relative'>
            <InputStyled
              id={id}
              type='text'
              value={searchedValue}
              placeholder={selectedLabel ? '' : placeholder}
              autoComplete='off'
              isLabeled={Boolean(label)}
              c={c}
              b={b}
              w={w}
              minH={minH}
              isError={isError}
              className={mergeClass(isError ? 'error' : '', className)}
              pb={label && selectedLabel ? 'xxxs' : pb}
              pt={label && selectedLabel ? 'm' : pt}
              pr={paddingRight}
              pl={paddingLeft}
              prefix={prefix ? 'true' : ''}
              h={h}
              disabled={disabled}
              radius={radius}
              focusProps={{
                pb: label ? 'xxxs' : pb,
                pt: label ? 'm' : pt,
                ...focusProps,
              }}
              onChange={onSearch}
              {...props}
              ref={ref}
            />
            {renderedItemSelected}
            {label && (
              <LabelStyled
                key={`${id}-label`}
                id={`${id}-label`}
                htmlFor={id}
                className={selectedLabel ? 'label-input-filled' : ''}
                isError={isError}
                left={paddingLeft}
                {...labelProps}
                style={{
                  left: typeof paddingLeft === 'string' ? paddingLeft : '',
                }}
              >
                {label}
              </LabelStyled>
            )}
          </Box>
          {prefix && (
            <Box
              posi='absolute'
              overflow='hidden'
              left='0px'
              d='flex'
              fDir='row'
              fJustify='center'
              fAlign='center'
              pl='xs'
              h={h || minH}
              {...prefixContainer}
              as='span'
              ref={prefixRef}
            >
              {isIconButtonProps(prefix) ? (
                <Icon
                  name={prefix?.icName}
                  c={prefix?.icColor}
                  rotate={prefix?.icRotate}
                  size={prefix?.icSize}
                />
              ) : (
                prefix
              )}
            </Box>
          )}
          <Box
            posi='absolute'
            right='0px'
            pr='xxs'
            fDir='row'
            fJustify='center'
            fAlign='center'
            h={h || minH}
            {...suffixContainer}
            as='span'
            ref={suffixRef}
          >
            {isClearIconShown && (
              <Box
                as='span'
                mr='xxs'
                cursor='pointer'
                onClick={onClear}
                onMouseDown={onClearIconMouseDown}
              >
                {clearIcon === true ? (
                  <Icon name='close' c='black30' size='small' />
                ) : isIconButtonProps(clearIcon) ? (
                  <Icon
                    name={clearIcon.icName}
                    c={clearIcon.icColor}
                    size={clearIcon.icSize}
                    rotate={clearIcon.icRotate}
                  />
                ) : (
                  clearIcon
                )}
              </Box>
            )}
            {suffix && (
              <Box as='span' mr='xxs'>
                {isIconButtonProps(suffix) ? (
                  <Icon
                    name={suffix.icName}
                    c={suffix.icColor}
                    size={suffix.icSize}
                    rotate={suffix.icRotate}
                    transition='inherit'
                  />
                ) : (
                  suffix
                )}
              </Box>
            )}
            <BoxStyled
              as='label'
              htmlFor={id}
              cursor={disabled ? 'not-allowed' : 'pointer'}
              pointEvents={isMenuOpen ? 'none' : undefined}
              transition='transform 0.2s ease-in'
            >
              {chevronIcon ? (
                isIconButtonProps(chevronIcon) ? (
                  <Icon
                    name={chevronIcon.icName}
                    c={chevronIcon.icColor}
                    size={chevronIcon.icSize}
                    rotate={chevronIcon.icRotate}
                    transition='inherit'
                  />
                ) : (
                  chevronIcon
                )
              ) : (
                <Icon
                  name='chevron'
                  c={disabled ? 'black20' : 'black30'}
                  size='normal'
                  rotate={isMenuOpen ? 'right' : 'left'}
                  transition='inherit'
                />
              )}
            </BoxStyled>
          </Box>
          {typeof supText === 'string' || typeof supText === 'number' ? (
            <Text
              c={isError ? supErrorColor : supColor}
              rule={supRule}
              my='xxxs'
              pl='xs'
              as='span'
            >
              {supText}
            </Text>
          ) : (
            supText
          )}
        </>
      )
    }
  )
)

interface OptionBoxProps
  extends Omit<OptionItem, 'key'>,
    Pick<
      MenuComponentProps,
      'renderOptionItem' | 'selected' | 'focused' | 'onSelect' | 'onItemHover'
    > {
  cSelected?: IconProps['c']
  bgFocused?: BoxProps['bg']
  keyValue?: string
}

type MouseEventHandler = ((e: React.MouseEvent) => void) | undefined

export const OptionBox = memo<OptionBoxProps>(
  ({
    cSelected = 'blue50',
    bgFocused: bgFocusedProps = 'blue10',
    renderOptionItem,
    value,
    keyValue,
    label,
    disabled,
    selected,
    focused,
    onSelect,
    onItemHover,
  }) => {
    const dataKey = keyValue || value
    const isSelected = value === selected
    const isFocused = dataKey === focused
    const text = label || value

    let cursor: BoxProps['cursor'] = 'pointer'
    let c: BoxProps['c'] = 'black30'
    let bgFocused = bgFocusedProps
    let onClick: MouseEventHandler = onSelect
    let onMouseOver: MouseEventHandler = onItemHover
    if (isSelected) {
      cursor = 'default'
      c = cSelected
      bgFocused = ''
    } else if (disabled) {
      cursor = 'not-allowed'
      c = 'black20'
      bgFocused = ''
      onClick = undefined
      onMouseOver = undefined
    }

    let rendered: React.ReactNode = text
    if (typeof renderOptionItem === 'function') {
      rendered = renderOptionItem({
        value,
        disabled,
        label: text,
        context: 'menu',
      })
    }

    return (
      <ValueContainer
        data-value={value}
        data-key={dataKey}
        data-disabled={disabled}
        data-selected={isSelected}
        title={text}
        onClick={onClick}
        onMouseOver={onMouseOver}
        w
        minH='32px'
        posi='relative'
        radius='m'
        fDir='row'
        fAlign='center'
        px='xxs'
        my='xxxs'
        cursor={cursor}
        bg={isFocused ? bgFocused : undefined}
        textWidth='calc(100% - 32px)'
        c={c}
      >
        {typeof rendered === 'string' || typeof rendered === 'number' ? (
          <Text as='span' rule='body' c='inherit'>
            {rendered}
          </Text>
        ) : (
          rendered
        )}
        {isSelected && (
          <Box posi='absolute' right='-4px'>
            <Icon name='checked' c={cSelected} />
          </Box>
        )}
      </ValueContainer>
    )
  }
)

interface MenuBoxProps {
  cScrollBar?: ColorProps['c']
  bgScrollBar?: ColorProps['bg']
}

export const MenuBox = styled(BoxStyled)<MenuBoxProps>(
  ({ cScrollBar = 'blue50', bgScrollBar = 'white20', theme }) => {
    const { color: c, backgroundColor: bg } =
      color({ theme, c: cScrollBar, bg: bgScrollBar }) || {}

    return {
      scrollbarColor: `${c} ${bg}`,
      scrollbarWidth: 'thin',
      '::-webkit-scrollbar': {
        width: '4px',
      },
      '::-webkit-scrollbar-track': {
        backgroundColor: bg,
        borderRadius: '4px',
      },
      '::-webkit-scrollbar-thumb': {
        height: '32px',
        backgroundColor: c,
        borderRadius: '4px',
      },
    }
  }
)

export const DefaultMenuComponent = memo(
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
                  key={opt.key || opt.value}
                  renderOptionItem={renderOptionItem}
                  selected={selected}
                  cSelected={bC}
                  focused={focused}
                  bgFocused={bgFocused}
                  onSelect={onSelect}
                  onItemHover={onItemHover}
                  {...opt}
                  keyValue={opt.key}
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
