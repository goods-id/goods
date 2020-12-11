import React, { forwardRef, memo } from 'react'
import styled, { StyledComponentPropsWithAs } from 'styled-components'
import {
  BoxStyled,
  BoxStyledProps,
  color,
  Icon,
  Text,
  TypographyProps,
  TypographyRuleProps,
} from 'goods-core'
import { useRadioContext } from './radio.context'

interface RadioItemBoxStyledProps extends Omit<BoxStyledProps, 'hoverProps'> {
  bgClicked?: BoxStyledProps['bg']
  bgAlphaClicked?: BoxStyledProps['bgAlpha']
  filterHovered?: BoxStyledProps['filter']
}

const RadioItemBoxStyled = styled(BoxStyled)<RadioItemBoxStyledProps>(
  ({ theme, bgAlphaClicked, bgClicked, filterHovered }) => {
    return {
      '&:hover': color({ theme, filter: filterHovered }),
      '&:active': color({ theme, bg: bgClicked, bgAlpha: bgAlphaClicked }),
      input: { display: 'none' },
    }
  }
)

type RadioItemBoxProps = StyledComponentPropsWithAs<
  'label',
  RadioItemBoxStyledProps
>

export interface RadioItemProps
  extends Omit<RadioItemBoxProps, 'name' | 'as'>,
    TypographyProps,
    TypographyRuleProps {
  value: string | number
  disabled?: boolean
  isFit?: boolean
  rtl?: boolean
  hideIcon?: boolean
  icon?: React.ReactElement | null
  iconSelected?: React.ReactElement | null
  iconDisabled?: React.ReactElement | null
}

const defaultIcon = <Icon name='radio' c='black20' />
const defaultIconSelected = <Icon name='radioActive' c='blue50' />
const defaultIconDisabled = <Icon name='radioDisabled' c='black20' />

export const RadioItem = memo(
  forwardRef<HTMLInputElement, RadioItemProps>(
    (
      {
        id: idProps,
        value: itemValue,
        isFit = false,
        rtl: rtlProps,
        disabled = false,
        hideIcon = false,
        py = 'xxxs',
        px = 'xxs',
        m = 'xxxs',
        minH = 32,
        fAlign = 'center',
        radius = 'm',
        filterHovered: filterHoveredProps,
        filter: filterProps,
        bg: bgProps,
        bgClicked: bgClickedProps,
        bgAlphaClicked: bgAlphaClickedProps,
        c: cProps,
        cursor: cursorProps = 'pointer',
        icon = defaultIcon,
        iconSelected = defaultIconSelected,
        iconDisabled = defaultIconDisabled,
        rule = 'body',
        dRule,
        textOver,
        textDecor,
        wordSpace,
        wordWrap,
        wordBreak,
        whiteSpace,
        lineClamp,
        lineBreak,
        fontFam,
        fSize,
        letterSpace,
        lineHeight,
        weight,
        textAlign,
        fontStyle,
        children,
        ...props
      },
      ref
    ) => {
      const {
        name,
        value,
        rtl: rtlContext = false,
        bgItem,
        bgItemAlphaClicked = 0.2,
        bgItemDisabled,
        bgItemSelected,
        cItem,
        cItemDisabled,
        cItemSelected,
        filterItemDisabled,
        filterItemHovered,
        onChange,
      } = useRadioContext()

      const id = idProps || `${name}-${itemValue}`
      const inputId = `radio-item-${id}`
      const boxId = `radio-item-label-${id}`

      const isSelected = itemValue === value
      const rtl = typeof rtlProps === 'boolean' ? rtlProps : rtlContext

      let bgClicked: BoxStyledProps['bg'] =
        bgClickedProps || iconSelected?.props.c || 'blue50'

      let bgAlphaClicked: number | undefined =
        bgAlphaClickedProps || bgItemAlphaClicked

      let filter = filterProps
      let filterHovered = filterHoveredProps || filterItemHovered
      let bg = bgItem
      let c = cItem
      let cursor = cursorProps
      if (disabled) {
        bgClicked = undefined
        bgAlphaClicked = undefined
        filterHovered = undefined
        filter = filterItemDisabled
        bg = bgItemDisabled
        c = cItemDisabled
        cursor = 'not-allowed'
      } else if (isSelected) {
        bg = bgItemSelected
        c = cItemSelected
        cursor = 'default'
      }

      if (bgProps) bg = bgProps
      if (cProps) c = cProps

      return (
        <RadioItemBoxStyled
          id={boxId}
          htmlFor={inputId}
          py={py}
          px={px}
          m={m}
          minH={minH}
          fAlign={fAlign}
          radius={radius}
          fDir={rtl ? 'row-reverse' : 'row'}
          fJustify={rtl ? 'flex-end' : 'flex-start'}
          filterHovered={filterHovered}
          filter={filter}
          bg={bg}
          c={c}
          bgClicked={bgClicked}
          bgAlphaClicked={bgAlphaClicked}
          cursor={cursor}
          w={isFit || 'fit-content'}
          {...props}
          as='label'
        >
          <input
            ref={ref}
            id={inputId}
            type='radio'
            value={itemValue}
            name={name}
            checked={isSelected}
            disabled={disabled}
            onChange={onChange}
          />
          {!hideIcon &&
            (isSelected ? iconSelected : disabled ? iconDisabled : icon)}
          {typeof children === 'string' || typeof children === 'number' ? (
            <Text
              as='span'
              c='inherit'
              mr={rtl ? 'xs' : undefined}
              ml={rtl ? undefined : 'xs'}
              rule={rule}
              dRule={dRule}
              textOver={textOver}
              textAlign={textAlign}
              textDecor={textDecor}
              wordBreak={wordBreak}
              wordSpace={wordSpace}
              wordWrap={wordWrap}
              whiteSpace={whiteSpace}
              lineClamp={lineClamp}
              lineBreak={lineBreak}
              fontFam={fontFam}
              fSize={fSize}
              letterSpace={letterSpace}
              lineHeight={lineHeight}
              weight={weight}
              fontStyle={fontStyle}
            >
              {children}
            </Text>
          ) : (
            children
          )}
        </RadioItemBoxStyled>
      )
    }
  )
)

RadioItem.displayName = 'RadioItem'
