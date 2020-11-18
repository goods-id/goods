import React, { useContext, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import {
  DocsContext,
  extractTitle,
  Primary,
  Stories,
  Description,
  getComponent,
  ArgsTable,
} from '@storybook/addon-docs/dist/blocks'
import { Text } from '../typography'
import { Box, BoxProps } from '../basics/div'
import { Image } from '../basics/image'

interface TitleProps {
  version?: string
  designDesc?: string
}

export interface GoodsDocsProps extends TitleProps {
  withoutPropsTable?: boolean
  withoutStories?: boolean
  excludedProps?: string[]
  withoutDocsTitle?: boolean
}

const defaultExcludedProps = [
  'onClick',
  'onChange',
  'onKeyUp',
  'onKeyDown',
  'onKeyPress',
  'onFocus',
  'onBlur',
  'onMouseOver',
  'onMouseLeave',
  'onMouseEnter',
  'onMouseOut',
]

const includedPropsFormComponent = [
  'onChange',
  'onKeyDown',
  'onFocus',
  'onBlur',
]

const formComponents = [
  'Input',
  'Checkbox',
  'Radio',
  'Switch',
  'Dropdown',
  'Dropdown Async',
]

function getChapter(chapterName: string): string {
  if (/^(core|atom|molecule)$/i.test(chapterName)) {
    return `Design ${chapterName} - `
  }
  return `${chapterName} - `
}

export const Title: React.FC<TitleProps> = ({
  version = '1.0.0',
  designDesc,
}) => {
  const context = useContext(DocsContext)
  const { kind = '' } = context
  const [chapterName] = kind.split('/')
  const text = extractTitle(context)
  return (
    <>
      <Text as='h1' rule='title'>
        <span>{getChapter(chapterName)}</span>
        <Text as='span' rule='title' weight={500}>
          {text}
        </Text>
      </Text>
      <Text rule='subtitle' dRule='body-bold' my='m'>
        {`Version ${version}`}
      </Text>
      {designDesc && <Text rule='body'>{designDesc}</Text>}
    </>
  )
}

export const GoodsDocs: React.FC<GoodsDocsProps> = props => {
  const {
    designDesc,
    version,
    withoutPropsTable,
    excludedProps = defaultExcludedProps,
    withoutStories,
    withoutDocsTitle,
    children,
  } = props

  const context = useContext(DocsContext)
  const title = extractTitle(context)
  const component = !withoutPropsTable && getComponent({ of: '.' }, context)

  const excluded = useMemo(() => {
    if (title === 'Button') {
      return excludedProps.filter(prop => prop !== 'onClick')
    }
    if (formComponents.includes(title)) {
      return excludedProps.filter(
        prop => !includedPropsFormComponent.includes(prop)
      )
    }
    return excludedProps
  }, [title])

  useEffect(() => {
    document.body.classList.add('scroll')
    return () => {
      document.body.classList.remove('scroll')
    }
  }, [])

  return (
    <>
      <Title designDesc={designDesc} version={version} />
      <Description />
      {!withoutStories && (
        <>
          <Text rule='title' weight={500} my='s'>
            Example
          </Text>
          <Primary />
        </>
      )}
      {children && (
        <>
          {!withoutDocsTitle && (
            <Text rule='title' weight={500} my='s'>
              Documentation
            </Text>
          )}
          {children}
        </>
      )}
      {component && (
        <>
          <Text rule='title' weight={500} my='m'>
            Props
          </Text>
          <ArgsTable exclude={excluded} />
        </>
      )}
      {!withoutStories && <Stories />}
    </>
  )
}

interface SectionProps extends Omit<BoxProps, 'ref'> {
  title: string
  tabSpacing?: boolean
  noChildTab?: boolean
  children: React.ReactNode
}

export const Section: React.FC<SectionProps> = ({
  title,
  tabSpacing = false,
  children,
  noChildTab = false,
  ...divProps
}) => {
  return (
    <Box mb='l' fDir='column' w='100%' {...divProps}>
      <Text c='black40' rule={!tabSpacing ? 'subtitle' : 'body'} weight={500}>
        {title}
      </Text>
      <Box
        py='s'
        px={noChildTab ? '0' : tabSpacing ? 's' : 'l'}
        w='100%'
        fDir='column'
      >
        {children}
      </Box>
    </Box>
  )
}

interface PointProps {
  title: string
  description: string
  bullet?: boolean
}

export const Point: React.FC<PointProps> = ({
  title,
  description,
  bullet = false,
}) => {
  return (
    <Box fDir='row' fAlign='center' mb='s' w='100%' fWrap='wrap'>
      {bullet && <Box w='8px' h='8px' radius='full' bg='black40' mr='xxs' />}
      <Text rule='body' weight={500}>{`${title}:`}</Text>
      &nbsp;
      <Text rule='body' style={{ minWidth: '280px' }}>
        {description}
      </Text>
    </Box>
  )
}

export const Input = styled.input(({ theme }) => ({
  width: '100%',
  height: '48px',
  backgroundColor: theme.colors?.white30,
  borderRadius: theme.radius('l'),
  padding: theme.spacing('xs', 's'),
}))

interface ImageBoxProps extends Omit<BoxProps, 'ref'> {
  imageSrc: string
  alt: string
}

export const ImageBox: React.FC<ImageBoxProps> = props => {
  const { imageSrc, alt, ...rest } = props
  return (
    <Box maxW='100%' w='fit-content' fAlign='center' {...rest}>
      <Image alt={alt} src={imageSrc} w='100%' />
    </Box>
  )
}
