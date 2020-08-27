/* eslint-disable global-require */
import React from 'react'
import { Div } from '../basics/div'
import { Text } from '../typography'
import { useGoods } from '../goods-context'
import { GoodsDocs, Section, ImageBox } from '../utils/storybook.docs'

interface SpacingSettingProps {
  title: string
  imageSrc?: string
  imageWidth?: string
  description: string
}

const spacingSettings: SpacingSettingProps[] = [
  {
    title: 'XXXS - 4px',
    imageSrc: require('../../assets/stories/spacing-setting-1.png'),
    imageWidth: '288px',
    description: `
      For body content with title or icons with text,
      we use XXXS to emphasise that both elements are in unity.
      (Closure principle from the Gestalt's law)
    `,
  },
  {
    title: 'XXS - 8px',
    imageSrc: require('../../assets/stories/spacing-setting-2.png'),
    imageWidth: '292px',
    description: `
      We use XXS to help users understand that two similar elements as the above example,
      belong to the same group of content.
    `,
  },
  {
    title: 'XS - 12px',
    imageSrc: require('../../assets/stories/spacing-setting-3.png'),
    imageWidth: '292px',
    description: `
      We use XS to provide rooms between the top and the bottom for the body of the content
      with the content itself, as shown in the card design example above.
    `,
  },
  {
    title: 'S - 16px',
    imageSrc: require('../../assets/stories/spacing-setting-4.png'),
    imageWidth: '252px',
    description: `
      We use S to provide rooms between the left and the right of the content
      with the content itself, as shown in the card design example above.
    `,
  },
  {
    title: 'M - 24px',
    imageSrc: require('../../assets/stories/spacing-setting-5.png'),
    imageWidth: '418px',
    description: `
      We use M to provide rooms for content with bigger typefaces as the example above.
    `,
  },
  {
    title: 'L - 32px',
    imageSrc: require('../../assets/stories/spacing-setting-6.png'),
    imageWidth: '418px',
    description: `
      We use L to provide rooms between the top and the bottom of content
      which consist illustration.
    `,
  },
  {
    title: 'XL - 40px',
    description: `Undefined. Only for desktop.`,
  },
  {
    title: 'XXL - 48px',
    description: `Undefined. Only for desktop.`,
  },
  {
    title: 'XXXL - 56px',
    description: `Undefined. Only for desktop.`,
  },
]

const SpacingSetting: React.FC<SpacingSettingProps> = props => {
  const { title, imageSrc, description, imageWidth } = props
  const is16px = /16px/.test(title)
  const { colors } = useGoods()
  return (
    <Div w="100%" m="16px 0px">
      <Text rule="body" weight="bold" m="0px 0px 16px">
        {title}
      </Text>
      {imageSrc && (
        <ImageBox
          imageSrc={imageSrc}
          alt={title}
          w={imageWidth}
          m="0px 0px 16px"
          bg={is16px ? colors.blue10 : ''}
          p={is16px ? '8px' : ''}
        />
      )}
      <Text rule="body">{description}</Text>
    </Div>
  )
}

const SpacingDocs: React.FC = () => {
  return (
    <GoodsDocs
      withoutPropsTable
      withoutStories
      withoutDocsTitle
      designDesc={`
        Consistent spacing is necessary to create visual balance and
        it makes the user interface (UI) easier for users to scan.
        Apply consistent spacing to improve the quality of the UI so that
        we can provide the best experience for users.
      `}
    >
      <Section title="I. Spacing System" m="40px 0px" noChildTab>
        <Text rule="body" m="16px 0px 0px">
          All spacing on Pomona components and typography use an increments of 4
          pixels. It forms the basic unit of measurement for spacing.
        </Text>
        <ImageBox
          imageSrc={require('../../assets/stories/spacing-system-1.png')}
          alt="Spacing Example"
          w="416px"
          m="32px 0px 0px"
        />
        <Text rule="body" m="16px 0px 0px">
          Pomona UI components line heights are set in increments of 4 pixels
          and spacing is measured from the edges of the components.
        </Text>
        <ImageBox
          imageSrc={require('../../assets/stories/spacing-system-2.png')}
          alt="Line Height 20px"
          w="416px"
          m="32px 0px 0px"
        />
        <Text rule="body" m="16px 0px 0px">
          Components are sized in increments of 20 pixels to match the line
          height of content, in this case the body text. This provide harmonious
          arrangements of components and the content.
        </Text>
        <Text rule="body" m="16px 0px 0px">
          For example, the standard sizes of our receipt picture component have
          been chosen to match the line height of body text.
        </Text>
        <ImageBox
          imageSrc={require('../../assets/stories/spacing-system-3.png')}
          alt="Line Height 20px Example"
          w="408px"
          m="16px 0px 0px"
        />
        <Text rule="body" m="16px 0px 0px">
          To provide rooms between the end point of the content and the bottom
          of the component, we multiplied the spacing sizes between the start
          point of the content with the top of the component with 1.5, then
          modify it to fit the 8 points increment rules to get harmony.
        </Text>
        <Text rule="body" m="16px 0px 0px">
          For example, below we have content with 24px spacing rooms, we
          multiplied it with 1.5 and get 36px. Since 36 is not an increment of
          8, we rolled back the number to 32 to fit the rules. The same
          principles are used on the second example below.
        </Text>
        <Div fDir="row" w="100%" fJustify="space-between" fWrap="wrap">
          <ImageBox
            imageSrc={require('../../assets/stories/spacing-system-4.png')}
            alt="Spacing between End Point and Bottom Example 1"
            w="418px"
            minW="58%"
            m="16px 0px 0px"
          />
          <ImageBox
            imageSrc={require('../../assets/stories/spacing-system-5.png')}
            alt="Spacing between End Point and Bottom Example 2"
            w="292px"
            minW="40%"
            m="16px 0px 0px"
          />
        </Div>
      </Section>
      <Section title="II. Spacing Settings" noChildTab>
        <Text rule="body" m="16px 0px 24px">
          Pomona set spacing standard sizes to define one source of truth for
          both design and engineering team while developing a product.
        </Text>
        <Section title="A. Atoms" tabSpacing>
          {spacingSettings.map(item => (
            <SpacingSetting key={item.title} {...item} />
          ))}
        </Section>
        <Section title="B. Organisms" tabSpacing>
          <SpacingSetting
            title="Cards"
            description="We use the XXS (8px) to provide rooms between 2 cards."
            imageSrc={require('../../assets/stories/spacing-setting-7.png')}
            imageWidth="252px"
          />
        </Section>
      </Section>
    </GoodsDocs>
  )
}

export default SpacingDocs
