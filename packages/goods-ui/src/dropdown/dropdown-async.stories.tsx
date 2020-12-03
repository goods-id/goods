import React, { useCallback, useState } from 'react'
import { Story } from '@storybook/react/types-6-0'
import { Box, Image, Skeleton, Text } from '@pomona/goods-core'
import { DropdownAsync } from './dropdown-async'
import { DropdownAsyncProps, FetchOptionsHandler } from './_types'
import { Input } from '../input'
import { ChangeEventInput } from '../@types/global'
import {
  commonFormConditions as commonConditions,
  isWithValue,
  Template,
  ConditionBox,
} from '../_utils/storybook'

export default {
  title: 'Component/Dropdown Async',
  component: DropdownAsync,
}

interface RandomUser {
  name: { title: string; first: string; last: string }
  id: { name: string; value: string | null }
  picture: { large: string; medium: string; thumbnail: string }
}

const BASE_URL = 'https://randomuser.me/api/'
const label = 'User'
const placeholder = 'Choose a user'
const supText = 'Choose a user you want to be'
const noOptionsMessage = 'User not found'
const initialValue = 'FN-03035027547-Mr-Joel-Tiller'
const controledInitialValue = 'PPS-1249572T-Ms-Sharron-Graves'
const initialSearch = 'Ms Sharron Graves'

const fetchUsers: FetchOptionsHandler = async ({ page, limit }) => {
  try {
    const response = await fetch(
      `${BASE_URL}?page=${
        page + 1
      }&results=${limit}&seed=goods&inc=name,id,picture`
    )
    const data: { results?: RandomUser[] } = await response.json()
    if (data?.results) {
      return data.results.map(({ name, id }, i) => {
        const { title, first, last } = name
        const value = `${id.name}-${id.value || ''}-${title}-${first}-${last}`
        return {
          value,
          label: `${title} ${first} ${last}`,
          key: `${value}-${i + page * limit + 1}`,
        }
      })
    }
    return []
  } catch {
    return []
  }
}

export const DropdownAsyncExample: Story<DropdownAsyncProps> = args => {
  return (
    <Box h='200px'>
      <DropdownAsync
        {...args}
        id='user'
        name='user'
        fetchOptions={fetchUsers}
      />
    </Box>
  )
}

DropdownAsyncExample.args = {
  autoFilter: true,
  label,
  placeholder,
  supText,
  noOptionsMessage,
  w: '400px',
  maxW: 'calc(100vw - 32px)',
}

export const DropdownAsyncControlled: Story<DropdownAsyncProps> = args => {
  const [{ value, initSearch }, setValue] = useState({
    value: controledInitialValue,
    initSearch: initialSearch,
  })
  return (
    <Box h='200px'>
      <DropdownAsync
        {...args}
        id='user'
        name='user'
        value={value}
        initialSearch={initSearch}
        fetchOptions={fetchUsers}
        onChange={({ value: val, label: lbl }) => {
          setValue({ value: val, initSearch: lbl || '' })
        }}
      />
    </Box>
  )
}

DropdownAsyncControlled.args = {
  autoFilter: true,
  label,
  placeholder,
  supText,
  noOptionsMessage,
  w: '400px',
  maxW: 'calc(100vw - 32px)',
}

export const Basic: Story = () => {
  return (
    <Template key='basic' title='Basic'>
      {commonConditions.map(cond => {
        const dashed = cond.replace(/\s/g, '-').toLowerCase()
        return (
          <ConditionBox key={dashed} title={cond}>
            <DropdownAsync
              key={`user-basic-${dashed}`}
              id={`user-basic-${dashed}`}
              name={`user-basic-${dashed}`}
              autoFilter
              fetchOptions={fetchUsers}
              placeholder={placeholder}
              noOptionsMessage={noOptionsMessage}
              w
              value={isWithValue(cond) ? initialValue : undefined}
              readOnly={cond === 'Read only'}
              disabled={cond === 'Disabled'}
              isError={cond === 'Error'}
              label={
                cond === 'No label' || cond === 'No label and support text'
                  ? undefined
                  : label
              }
              supText={
                cond === 'No support text' ||
                cond === 'No label and support text'
                  ? undefined
                  : supText
              }
            />
          </ConditionBox>
        )
      })}
    </Template>
  )
}

Basic.parameters = { docs: { disable: true } }

export const Prefixed: Story = () => {
  return (
    <Template key='prefixed' title='Prefixed'>
      {commonConditions.map(cond => {
        const dashed = cond.replace(/\s/g, '-').toLowerCase()
        return (
          <ConditionBox key={dashed} title={cond}>
            <DropdownAsync
              key={`user-prefixed-${dashed}`}
              id={`user-prefixed-${dashed}`}
              name={`user-prefixed-${dashed}`}
              autoFilter
              fetchOptions={fetchUsers}
              placeholder={placeholder}
              noOptionsMessage={noOptionsMessage}
              w
              value={isWithValue(cond) ? initialValue : undefined}
              readOnly={cond === 'Read only'}
              disabled={cond === 'Disabled'}
              isError={cond === 'Error'}
              label={
                cond === 'No label' || cond === 'No label and support text'
                  ? undefined
                  : label
              }
              supText={
                cond === 'No support text' ||
                cond === 'No label and support text'
                  ? undefined
                  : supText
              }
              prefix={{ icName: 'profile' }}
            />
          </ConditionBox>
        )
      })}
    </Template>
  )
}

Prefixed.parameters = { docs: { disable: true } }

export const WithClearIcon: Story = () => {
  return (
    <Template title='With Clear Icon'>
      {commonConditions.map(cond => {
        const dashed = cond.replace(/\s/g, '-').toLowerCase()
        return (
          <ConditionBox key={dashed} title={cond}>
            <DropdownAsync
              w
              clearIcon
              key={`user-clear-icon-${dashed}`}
              id={`user-clear-icon-${dashed}`}
              name={`user-clear-icon-${dashed}`}
              autoFilter
              fetchOptions={fetchUsers}
              placeholder={placeholder}
              noOptionsMessage={noOptionsMessage}
              value={isWithValue(cond) ? initialValue : undefined}
              readOnly={cond === 'Read only'}
              disabled={cond === 'Disabled'}
              isError={cond === 'Error'}
              label={
                cond === 'No label' || cond === 'No label and support text'
                  ? undefined
                  : label
              }
              supText={
                cond === 'No support text' ||
                cond === 'No label and support text'
                  ? undefined
                  : supText
              }
            />
          </ConditionBox>
        )
      })}
      <ConditionBox title='Custom clear icon'>
        <DropdownAsync
          w
          key='user-clear-icon-custom'
          id='user-clear-icon-custom'
          name='user-clear-icon-custom'
          autoFilter
          fetchOptions={fetchUsers}
          placeholder={placeholder}
          noOptionsMessage={noOptionsMessage}
          label={label}
          supText={supText}
          clearIcon={{ icName: 'rejected', icColor: 'black30' }}
        />
      </ConditionBox>
    </Template>
  )
}

WithClearIcon.parameters = { docs: { disable: true } }

export const CustomMenuPlacementAndWidth: Story = () => {
  const [containerWidth, setContainerWidth] = useState('50%')
  const [menuWidth, setMenuWidth] = useState('150%')
  const [menuOffsetTop, setMenuOffsetTop] = useState('20px')
  const [menuOffsetLeft, setMenuOffsetLeft] = useState('')

  const onChange = useCallback((e: ChangeEventInput) => {
    const { name, value } = e.target
    switch (name) {
      case 'containerWidth':
        return setContainerWidth(value)
      case 'menuWidth':
        return setMenuWidth(value)
      case 'menuOffsetTop':
        return setMenuOffsetTop(value)
      case 'menuOffsetLeft':
        return setMenuOffsetLeft(value)
      default:
        return undefined
    }
  }, [])

  return (
    <Template title='Custom Width and Menu Placement'>
      <Box
        d='grid'
        gAutoFlow='row'
        gTempCol='repeat(auto-fit, 150px)'
        gCol={{ xs: '1', lg: '1 / span 2', xl: '1 / span 3' }}
        gap='16px'
        fJustify='center'
      >
        <Input
          type='text'
          name='containerWidth'
          value={containerWidth}
          label='Container width'
          onChange={onChange}
        />
        <Input
          type='text'
          name='menuWidth'
          value={menuWidth}
          label='Menu width'
          onChange={onChange}
        />
        <Input
          type='text'
          name='menuOffsetTop'
          value={menuOffsetTop}
          label='Menu offset top'
          onChange={onChange}
        />
        <Input
          type='text'
          name='menuOffsetLeft'
          value={menuOffsetLeft}
          label='Menu offset left'
          onChange={onChange}
        />
      </Box>
      {commonConditions.map(cond => {
        const dashed = cond.replace(/\s/g, '-').toLowerCase()
        return (
          <ConditionBox key={dashed} title={cond}>
            <DropdownAsync
              key={`user-custom-width-placement-${dashed}`}
              id={`user-custom-width-placement-${dashed}`}
              name={`user-custom-width-placement-${dashed}`}
              autoFilter
              fetchOptions={fetchUsers}
              placeholder={placeholder}
              noOptionsMessage={noOptionsMessage}
              value={isWithValue(cond) ? initialValue : undefined}
              readOnly={cond === 'Read only'}
              disabled={cond === 'Disabled'}
              isError={cond === 'Error'}
              label={
                cond === 'No label' || cond === 'No label and support text'
                  ? undefined
                  : label
              }
              supText={
                cond === 'No support text' ||
                cond === 'No label and support text'
                  ? undefined
                  : supText
              }
              w={containerWidth}
              menuWidth={menuWidth}
              menuOffsetTop={menuOffsetTop}
              menuOffsetLeft={menuOffsetLeft}
            />
          </ConditionBox>
        )
      })}
    </Template>
  )
}

CustomMenuPlacementAndWidth.parameters = { docs: { disable: true } }

const fetchUsersWithImage: FetchOptionsHandler = async ({ page, limit }) => {
  try {
    const response = await fetch(
      `${BASE_URL}?page=${
        page + 1
      }&results=${limit}&seed=goods&inc=name,id,picture`
    )
    const data: { results?: RandomUser[] } = await response.json()
    if (data?.results) {
      return data.results
        .filter(user => user.picture?.thumbnail)
        .map(({ name, id, picture }) => {
          const { title, first, last } = name
          return {
            value: `${picture.thumbnail}-${id.name}-${
              id.value || ''
            }-${title}-${first}-${last}`,
            label: `${title} ${first} ${last}`,
          }
        })
    }
    return []
  } catch {
    return []
  }
}

const renderUser: DropdownAsyncProps['renderOptionItem'] = ({
  value,
  label: userLabel,
  disabled,
}) => {
  const [src] = value.split('-')
  return (
    <>
      <Image
        alt={label}
        src={src}
        s='24px'
        radius='full'
        mr='xxs'
        shadow='low'
        b='1px solid'
        bC='black40'
        filter={disabled ? 'grayscale(100%)' : undefined}
      />
      <Text as='span' rule='body' style={{ width: 'calc(100% - 64px)' }}>
        {userLabel}
      </Text>
    </>
  )
}

export const CustomRenderOptionItem: Story = () => {
  return (
    <Template key='prefixed' title='Custom Render Option Item'>
      {commonConditions.map(cond => {
        const dashed = cond.replace(/\s/g, '-').toLowerCase()
        return (
          <ConditionBox key={dashed} title={cond}>
            <DropdownAsync
              key={`user-custom-render-${dashed}`}
              id={`user-custom-render-${dashed}`}
              name={`user-custom-render-${dashed}`}
              autoFilter
              fetchOptions={fetchUsersWithImage}
              placeholder={placeholder}
              noOptionsMessage={noOptionsMessage}
              w
              value={
                isWithValue(cond)
                  ? `${BASE_URL}portraits/thumb/men/94.jpg-${initialValue}`
                  : undefined
              }
              readOnly={cond === 'Read only'}
              disabled={cond === 'Disabled'}
              isError={cond === 'Error'}
              renderOptionItem={renderUser}
              label={
                cond === 'No label' || cond === 'No label and support text'
                  ? undefined
                  : label
              }
              supText={
                cond === 'No support text' ||
                cond === 'No label and support text'
                  ? undefined
                  : supText
              }
            />
          </ConditionBox>
        )
      })}
    </Template>
  )
}

CustomRenderOptionItem.parameters = { docs: { disable: true } }

const Loader = () => {
  return (
    <Box d='grid' gTempCol='repeat(3, 8px)' gap='2px'>
      {Array.from({ length: 3 }, (_, index) => (
        <Skeleton key={index} radius='full' s='8px' bg='orange90' />
      ))}
    </Box>
  )
}

export const CustomLoadingComponent: Story = () => {
  return (
    <Template key='prefixed' title='Custom Loading Component'>
      {commonConditions.map(cond => {
        const dashed = cond.replace(/\s/g, '-').toLowerCase()
        return (
          <ConditionBox key={dashed} title={cond}>
            <DropdownAsync
              key={`user-custom-loading-component-${dashed}`}
              id={`user-custom-loading-component-${dashed}`}
              name={`user-custom-loading-component-${dashed}`}
              autoFilter
              loadingComponent={Loader}
              fetchOptions={fetchUsers}
              placeholder={placeholder}
              noOptionsMessage={noOptionsMessage}
              w
              value={isWithValue(cond) ? initialValue : undefined}
              readOnly={cond === 'Read only'}
              disabled={cond === 'Disabled'}
              isError={cond === 'Error'}
              label={
                cond === 'No label' || cond === 'No label and support text'
                  ? undefined
                  : label
              }
              supText={
                cond === 'No support text' ||
                cond === 'No label and support text'
                  ? undefined
                  : supText
              }
            />
          </ConditionBox>
        )
      })}
    </Template>
  )
}

CustomLoadingComponent.parameters = { docs: { disable: true } }
