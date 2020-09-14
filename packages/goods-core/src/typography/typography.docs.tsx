import React from 'react'
import { Div } from '../basics/div'
import { Line } from '../basics/line'
import { Image } from '../basics/image'
import { useGoods } from '../goods-context'
import { GoodsDocs, Section, Point } from '../utils/storybook.docs'
import { Text } from '.'
import {
  TypographyDesktopRule,
  TypographyMobileRule,
  typographyDesktopRuleSettings,
  typographyMobileRuleSettings,
} from '../@goods-system/typography'

const LineHeightImg = require('../../assets/stories/line-height.png')
const CharSpacingImg = require('../../assets/stories/character-spacing.png')
const SettingGuideImg = require('../../assets/stories/settings-guide.png')

const desktopRules: { id: TypographyDesktopRule; [key: string]: string }[] = [
  {
    id: 'title',
    title: 'Title',
    subtitle: 'Light,34,40,-0.5',
    example: 'Quick brown fox jump over …',
  },
  {
    id: 'subtitle',
    title: 'Subtitle',
    subtitle: 'Med,21,32,-0.25',
    example: 'Quick brown fox jump over the lazy dog',
  },
  {
    id: 'body',
    title: 'Body',
    subtitle: 'Reg,14,20,0',
    example: 'Quick brown fox jump over the lazy dog',
  },
  {
    id: 'body-bold',
    title: 'Body Bold',
    subtitle: 'Med,14,20,0',
    example: 'Quick brown fox jump over the lazy dog',
  },
  {
    id: 'caption',
    title: 'Caption',
    subtitle: 'Reg,11,16,0.25',
    example: 'Quick brown fox jump over the lazy dog',
  },
  {
    id: 'button',
    title: 'Button ',
    subtitle: 'Med,14,20,0.25',
    example: 'This is Button',
  },
]

const mobileRules: { id: TypographyMobileRule; [key: string]: string }[] = [
  {
    id: 'title',
    title: 'Title',
    subtitle: 'Med,21,32,-0.25',
    example: 'Quick brown fox jump over the lazy dog',
  },
  {
    id: 'subtitle',
    title: 'Subtitle',
    subtitle: 'Med,14,20,0',
    example: 'Quick brown fox jump over the lazy dog',
  },
  {
    id: 'body',
    title: 'Body',
    subtitle: 'Reg,14,20,0',
    example: 'Quick brown fox jump over the lazy dog',
  },
  {
    id: 'caption',
    title: 'Caption',
    subtitle: 'Reg,11,16,0.25',
    example: 'Quick brown fox jump over the lazy dog',
  },
  {
    id: 'big-button',
    title: 'Big Button',
    subtitle: 'Med,14,20,0.5',
    example: 'This is Button',
  },
  {
    id: 'med-small-button',
    title: '*Med-Small Button',
    subtitle: 'Med,11,16,0.75',
    example: 'This is Button',
  },
]

interface RulesProps {
  title: string
  subtitle: string
  example: string
  rule?: TypographyMobileRule
  dRule?: TypographyDesktopRule
}

const Rules: React.FC<RulesProps> = ({
  title,
  subtitle,
  example,
  rule,
  dRule,
}) => {
  const { spacing } = useGoods()
  const { fontSize, fontWeight, letterSpacing, lineHeight } = rule
    ? typographyMobileRuleSettings[rule]
    : dRule
    ? typographyDesktopRuleSettings[dRule]
    : { fontSize: '', fontWeight: undefined, letterSpacing: '', lineHeight: '' }

  return (
    <Div fDir="row" m={spacing('0', '0', 'l')} fAlign="center" fWrap="wrap">
      <Div w="217px" fDir="column">
        <Text size="16px" lineHeight="24px">
          {title}
        </Text>
        <Text size="16px" weight={300} lineHeight="24px" c="black20">
          {subtitle}
        </Text>
      </Div>
      <Div fDir="column" minW="280px">
        <Text
          rule={rule}
          dRule={dRule}
          size={fontSize}
          weight={fontWeight}
          letterSpace={letterSpacing}
          lineHeight={lineHeight}
          c="black40"
        >
          {example}
        </Text>
      </Div>
    </Div>
  )
}

const TextDocs: React.FC = () => {
  const { colors, spacing } = useGoods()
  return (
    <GoodsDocs
      designDesc={`
        Typography plays a great role in making a product’s UI,
        especially content look legible and have a good readability.
        Hence, understanding some basic principles of typography,
        along with knowing what to do with each principles will boost the design and
        user experience of the product.
      `}
    >
      <Section title="I. Brief">
        <Div fDir="row" fAlign="center" fWrap="wrap">
          <Div>
            <Text weight={500} size="96px" lineHeight="128px" c="black40">
              Aa
            </Text>
          </Div>
          <Line
            w="2px"
            h="216px"
            bg={colors.black30}
            m={spacing('0', 'l', '0', 'xxxl')}
          />
          <Div fDir="column" minW="300px" maxW="600px">
            <Text weight={500} size="32px" lineHeight="40px" c="blue50">
              Rubik
            </Text>
            <Div m={spacing('s', '0', '0')}>
              <Text rule="body">
                Rubik is a sans serif font family with slightly rounded corners.
                You can find this font free and open sources at Google Font.
              </Text>
            </Div>
            <Div m={spacing('s', '0', '0')}>
              <Text rule="body">
                This font has 5 different weights from Lights (300), Regular
                (400), Medium (500), Bold (700), Black (900).
              </Text>
            </Div>
            <Div m={spacing('s', '0', '0')}>
              <Text rule="body">
                The reason we chose this font was because of the characteristic
                of the character with its slightly rounded corner that fits
                Pomona’s brand image.
              </Text>
            </Div>
          </Div>
        </Div>
      </Section>
      <Section title="II. Typography Components">
        <Point
          bullet
          title="Font Size"
          description="the size of the font we use"
        />
        <Point
          bullet
          title="Line Height"
          description="spacing between lines of text; space above and below lines of text"
        />
        <Point
          bullet
          title="Character Spacing"
          description="(commonly known as spacing) spacing between characters"
        />
        <Point
          bullet
          title="Type Scale"
          description="multiplier used for determining the size of font larger or smaller than base size"
        />
        <Point
          bullet
          title="Base Size"
          description="font size used as a regular body text and starting point of type scale"
        />
        <Div fDir="column" fJustify="center" fAlign="center">
          <Image
            src={LineHeightImg}
            alt="Line Height"
            m={spacing('xxl', '0', '0')}
            maxW="100%"
          />
          <Image
            src={CharSpacingImg}
            alt="Character Spacing"
            m={spacing('xxl', '0', '0')}
            maxW="100%"
          />
        </Div>
      </Section>
      <Section title="III. Typography Rules">
        <Text rule="body" c="black40">
          These type settings are derived from base font size of 14pt and scale
          of Major Third (1.250). These are just basic settings and can be
          derived into multiple styles by changing its color or adding other UI
          elements such as background.
        </Text>
        <Div fDir="column" m="32px 0px" fAlign="center">
          <Image alt="Setting Guide" src={SettingGuideImg} maxW="100%" />
        </Div>
        <Point
          title="Do"
          description="change font color and adding UI Element such as background color"
        />
        <Point
          title="Don`t"
          description="change basic settings such as Size, Line Height, and Spacing"
        />
        <Div p="40px 0px" fDir="column">
          <Section title="a. Desktop Rules" tabSpacing>
            {desktopRules.map(item => (
              <Rules
                key={item.id}
                dRule={item.id}
                title={item.title}
                subtitle={item.subtitle}
                example={item.example}
              />
            ))}
          </Section>
          <Section title="b. Mobile Rules" tabSpacing>
            {mobileRules.map(item => (
              <Rules
                key={item.id}
                rule={item.id}
                title={item.title}
                subtitle={item.subtitle}
                example={item.example}
              />
            ))}
            <Div m="40px 0px 0xp">
              <Text rule="caption" c="black40">
                * Medium and small button label must be used on button sized
                less than 40px
              </Text>
            </Div>
          </Section>
        </Div>
      </Section>
    </GoodsDocs>
  )
}

export default TextDocs
