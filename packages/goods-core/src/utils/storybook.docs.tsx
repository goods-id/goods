import React, { useContext } from 'react'
import {
  DocsContext,
  StringSlot,
  defaultTitleSlot,
  DocsPageProps,
  Props,
  Primary,
  Stories,
  Description,
} from '@storybook/addon-docs/dist/blocks'
import { Text } from '../typography'
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

export const Title: React.FC<TitleProps> = ({
  slot,
  version = '1.0.0',
  designDesc,
}) => {
  const context = useContext(DocsContext)
  const theme = useGoods()
  const text = slot ? slot(context) : defaultTitleSlot(context)
  return (
    <>
      <Text as="h1" rule="title">
        <span>Design Core -&nbsp;</span>
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
    excludedProps,
    withoutStories,
    children,
  } = props
  return (
    <>
      <Title slot={titleSlot} designDesc={designDesc} version={version} />
      <Description slot={descriptionSlot} />
      {!withoutStories && (
        <>
          <Text rule="title" weight={500}>
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
      {!withoutPropsTable && (
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
