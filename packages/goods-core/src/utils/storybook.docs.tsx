import React, { useContext } from 'react'
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
import { Div, DivProps } from '../basics/div'
import { Image } from '../basics/image'
import { useGoods } from '../goods-context'
import { InBreakpoint, getValueInBp } from '../breakpoints'

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
  const theme = useGoods()
  const text = extractTitle(context)
  return (
    <>
      <Text as="h1" rule="title">
        <span>{getChapter(chapterName)}</span>
        <Text as="span" rule="title" weight={500}>
          {text}
        </Text>
      </Text>
      <Text rule="subtitle" dRule="body-bold" m={theme.spacing('m', '0')}>
        {`Version ${version}`}
      </Text>
      {designDesc && <Text rule="body">{designDesc}</Text>}
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
  const component = !withoutPropsTable && getComponent({ of: '.' }, context)

  React.useEffect(() => {
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
          <Text rule="title" weight={500} m="16px 0px">
            Example
          </Text>
          <Primary />
        </>
      )}
      {children && (
        <>
          {!withoutDocsTitle && (
            <Text rule="title" weight={500} m="16px 0px">
              Documentation
            </Text>
          )}
          {children}
        </>
      )}
      {component && (
        <>
          <Text rule="title" weight={500} m="24px 0px">
            Props
          </Text>
          <ArgsTable exclude={excludedProps} />
        </>
      )}
      {!withoutStories && <Stories />}
    </>
  )
}

interface SectionProps extends Omit<DivProps, 'ref'> {
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
  const { spacing, colors } = useGoods()
  return (
    <Div m={spacing('0', '0', 'l')} fDir="column" w="100%" {...divProps}>
      <Text
        c={colors.black40}
        rule={!tabSpacing ? 'subtitle' : 'body'}
        weight={500}
      >
        {title}
      </Text>
      <Div
        p={spacing('s', noChildTab ? '0' : tabSpacing ? 's' : 'l')}
        w="100%"
        fDir="column"
      >
        {children}
      </Div>
    </Div>
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
  const { colors, spacing, radius } = useGoods()
  return (
    <Div
      fDir="row"
      fAlign="center"
      m={spacing('0', '0', 's')}
      w="100%"
      fWrap="wrap"
    >
      {bullet && (
        <Div
          w="8px"
          h="8px"
          radius={radius('full')}
          bg={colors.black40}
          m={spacing('0', 'xxs', '0', '0')}
        />
      )}
      <Text rule="body" weight={500}>{`${title}:`}</Text>
      &nbsp;
      <Text rule="body" style={{ minWidth: '280px' }}>
        {description}
      </Text>
    </Div>
  )
}

interface GridProps extends Omit<DivProps, 'd'> {
  column?: InBreakpoint<number>
}

function getGridTemplateColumns(
  ...args: Parameters<typeof getValueInBp>
): string {
  const [value, bp] = args
  return `repeat(${getValueInBp(value, bp) || 6}, 1fr)`
}

export const Grid = styled(Div)<GridProps>(props => {
  const { column, theme } = props
  const { breakpoints } = theme
  return {
    display: 'grid',
    width: props.w || '100%',
    gridTemplateColumns: getGridTemplateColumns(column, 'xs'),
    [breakpoints('sm')]: {
      gridTemplateColumns: getGridTemplateColumns(column, ['sm', 'xs']),
    },
    [breakpoints('md')]: {
      gridTemplateColumns: getGridTemplateColumns(column, ['md', 'sm', 'xs']),
    },
    [breakpoints('lg')]: {
      gridTemplateColumns: getGridTemplateColumns(column, [
        'lg',
        'md',
        'sm',
        'xs',
      ]),
    },
    [breakpoints('xl')]: {
      gridTemplateColumns: getGridTemplateColumns(column, [
        'xl',
        'lg',
        'md',
        'sm',
        'xs',
      ]),
    },
  }
})

export const Input = styled.input(({ theme }) => ({
  width: '100%',
  height: '48px',
  backgroundColor: theme.colors.white30,
  borderRadius: theme.radius('l'),
  padding: theme.spacing('xs', 's'),
}))

interface ImageBoxProps extends Omit<DivProps, 'ref'> {
  imageSrc: string
  alt: string
}

export const ImageBox: React.FC<ImageBoxProps> = props => {
  const { imageSrc, alt, ...divProps } = props
  return (
    <Div maxW="100%" w="fit-content" fAlign="center" {...divProps}>
      <Image alt={alt} src={imageSrc} w="100%" />
    </Div>
  )
}
