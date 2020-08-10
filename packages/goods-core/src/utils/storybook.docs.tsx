import React, { useContext } from 'react'
import styled from 'styled-components'
import {
  DocsContext,
  StringSlot,
  defaultTitleSlot,
  DocsPageProps,
  Props,
  Primary,
  Stories,
  Description,
  getComponent,
} from '@storybook/addon-docs/dist/blocks'
import { Text } from '../typography'
import { Div, DivProps } from '../basics/div'
import { useGoods } from '../goods-context'

interface TitleProps {
  slot?: StringSlot
  version?: string
  designDesc?: string
}

export interface GoodsDocsProps
  extends Omit<TitleProps, 'slot'>,
    DocsPageProps {
  withoutPropsTable?: boolean
  withoutStories?: boolean
  excludedProps?: string[]
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
  slot,
  version = '1.0.0',
  designDesc,
}) => {
  const context = useContext(DocsContext)
  const { selectedKind = '' } = context
  const [chapterName] = selectedKind.split('/')
  const theme = useGoods()
  const text = slot ? slot(context) : defaultTitleSlot(context)
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
    titleSlot,
    descriptionSlot,
    primarySlot,
    propsSlot,
    storiesSlot,
    designDesc,
    version,
    withoutPropsTable,
    excludedProps = defaultExcludedProps,
    withoutStories,
    children,
  } = props

  const context = useContext(DocsContext)
  const component = getComponent({ of: '.' }, context)

  React.useEffect(() => {
    document.body.classList.add('scroll')
    return () => {
      document.body.classList.remove('scroll')
    }
  }, [])

  return (
    <>
      <Title slot={titleSlot} designDesc={designDesc} version={version} />
      <Description slot={descriptionSlot} />
      {!withoutStories && (
        <>
          <Text rule="title" weight={500} m="16px 0px">
            Example
          </Text>
          <Primary slot={primarySlot} />
        </>
      )}
      {children && (
        <>
          <Text rule="title" weight={500} m="16px 0px">
            Documentation
          </Text>
          {children}
        </>
      )}
      {!withoutPropsTable && component && (
        <>
          <Text rule="title" weight={500} m="24px 0px">
            Props
          </Text>
          <Props slot={propsSlot} exclude={excludedProps} />
        </>
      )}
      <Stories slot={storiesSlot} />
    </>
  )
}

interface SectionProps {
  title: string
  tabSpacing?: boolean
  children: React.ReactNode
}

export const Section: React.FC<SectionProps> = ({
  title,
  tabSpacing = false,
  children,
}) => {
  const { spacing, colors } = useGoods()
  return (
    <Div m={spacing('0', '0', 'l')} fDir="column">
      <Text
        c={colors.black40}
        rule={!tabSpacing ? 'subtitle' : 'body'}
        weight={500}
      >
        {title}
      </Text>
      <Div p={spacing('s', 'l')} fDir="column">
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
    <Div fDir="row" fAlign="center" m={spacing('0', '0', 's')}>
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
      <Text rule="body">{description}</Text>
    </Div>
  )
}

interface GridProps extends Omit<DivProps, 'd'> {
  column?: number
}

export const Grid = styled(Div)<GridProps>(props => ({
  display: 'grid',
  width: props.w || '100%',
  gridTemplateColumns: `repeat(${props.column || 6}, 1fr)`,
}))

export const Input = styled.input(({ theme }) => ({
  width: '100%',
  height: '48px',
  backgroundColor: theme.colors.white30,
  borderRadius: theme.radius('l'),
  padding: theme.spacing('xs', 's'),
}))
