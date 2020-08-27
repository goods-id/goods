# Storybook for Web

### CSF (Component Story Format)

**Why use CSF instead of `storiesOf` API?**

- Clean code
- Latest release from official storybook
- Easier to integrate with docs

**Elements of CSF:**

- Story meta data (`export default`)
- Story function(s) (named `export`)

### Addons

- [Docs](https://github.com/storybookjs/storybook/tree/master/addons/docs)
  To write components/utils docs from designer, display component props and description.
- [Controls](https://github.com/storybookjs/storybook/tree/master/addons/controls)
  "Storybook Controls gives you a graphical UI to interact with a component's arguments dynamically, without needing to code."
- [Actions](https://github.com/storybookjs/storybook/tree/master/addons/actions)
  To simulate HTML event listener such as onClick, onMouseOver, etc.
- [Links](https://github.com/storybookjs/storybook/tree/master/addons/links)
  To navigate to another story in a component's story.
- [Knobs](https://github.com/storybookjs/storybook/tree/master/addons/knobs)
  To change some props dynamically via storybook UI.
- [A11y](https://github.com/storybookjs/storybook/tree/master/addons/a11y)
  To check HTML tag accessiblity.
- [Viewport](https://github.com/storybookjs/storybook/tree/master/addons/viewport)
  To view canvas in desired viewport without opening browser devtools.
- [Story source](https://github.com/storybookjs/storybook/tree/master/addons/storysource)
  To show story source in the panel. It is useful when developers want to copy example usage of a component.
- [JSX](https://github.com/storybookjs/addon-jsx)
  To show **evaluated** jsx of a story in the panel.

### Parameters and Decorators

- **Global**
  Defined via `preview.js` file.
- **Component** level
  Defined via paramaters and decorators property in `export default` story meta data.
- **Story** level
  Defined via paramaters and decorators property in `story` attributes of a story function.

### Writing Documentation with **Addon docs**

**Guides**:

- Create `<folder-or-component-or-util-name>.docs.tsx` in a desired component or util folder, e.g.: `typography.docs.tsx`, `radius.docs.tsx`.

  Example for component docs:

  ```typescript
  // typography.docs.tsx file
  import { GoodsDocs } from '../utils/storybook.docs'

  const excludedProps = [
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

  const TextDocs: React.FC = () => {
    return (
      <GoodsDocs
        designDesc={`
          Typography plays a great role in making a product’s UI,
          especially content look legible and have a good readability.
          Hence, understanding some basic principles of typography,
          along with knowing what to do with each principles will boost the design and
          user experience of the product.
        `}
        excludedProps={excludedProps}
      >
        {/* Write documentation from designer here  */}
      </GoodsDocs>
    )
  }

  export default TextDocs
  ```

  Example for util docs:

  ```typescript
  // radius.docs.tsx file
  import React from 'react'
  import { GoodsDocs } from '../utils/storybook.docs'

  const RadiusDocs: React.FC = () => {
    return (
      <GoodsDocs
        withoutPropsTable
        withoutStories
        withoutDocsTitle
        designDesc={`
          Corner Radius is used to differentiate between a group of components to the other.
          It also helps to build memorability of shape, whether it is accessible or not.
        `}
      >
        {/* Write documentation from designer here */}
      </GoodsDocs>
    )
  }

  export default RadiusDocs
  ```

- Import the `*.docs.tsx` file to `*.stories.tsx` (for component) or `*.story.tsx` (for util), and use it as value of `parameters.docs.page` property in story meta data

  Example for component story:

  ```typescript
  // typography.stories.tsx file
  import React from 'react'
  import { Story, Meta } from '@storybook/react/types-6-0'
  /* another import(s) (if any) */
  import { Text } from '.'
  import TextDocs from './typography.docs'

  export default {
    title: 'Core/Typography',
    component: Text,
    parameters: { docs: { page: TextDocs } },
  } as Meta
  ```

**Resources**:

- [Addon docs](https://github.com/storybookjs/storybook/tree/master/addons/docs)
- [DocsPage](https://github.com/storybookjs/storybook/blob/master/addons/docs/docs/docspage.md)

### Writing Component Stories

- `export default` story meta data. Must have `title` and `component` properties.
- Use `Story` (imported from `@storybook/react/types-6-0`) to annotate story function such that it can be a react function component and can have `story` property.

### Writing Util Story

- Doesn't need `component` property in story meta data

Example:

```typescript
// radius.story.tsx file
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import radius, { Radius } from '.'
import RadiusDocs from './radius.docs'
import { utilsStoryParameters } from '../utils/storybook'
import { Div } from '../basics/div'
import { Text } from '../typography'

export default {
  title: 'Core/Corner Radius',
  parameters: { docs: { page: RadiusDocs }, ...utilsStoryParameters },
} as Meta

const radiusNames: Radius[] = ['m', 'l', 'full']
const radiusNameAliases = ['fixed-medium', 'fixed-large', 'auto-full']

export const RadiusExample: Story = () => {
  return (
    <Div fDir="row" p="16px" fJustify="space-between" w="100%">
      {radiusNames.map((name, i) => (
        <Div
          key={name}
          w="150px"
          h="100px"
          fAlign="center"
          fJustify="center"
          b="1px solid black"
          radius={radius(name)}
        >
          <Text rule="body" textAlign="center">
            {name}
          </Text>
          <Text rule="body" weight="bold" textAlign="center">
            {`(${radiusNameAliases[i]})`}
          </Text>
        </Div>
      ))}
    </Div>
  )
}
```
