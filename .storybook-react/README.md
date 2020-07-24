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
- [Docs](https://github.com/storybookjs/storybook/tree/master/addons/docs)
  To write components/utils docs from designer, display component props and description.

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
  import { DocsPageProps } from '@storybook/addon-docs/dist/blocks'
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

  const TextDocs: React.FC<DocsPageProps> = props => {
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
        {...props}
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
  import { DocsPageProps } from '@storybook/addon-docs/dist/blocks'
  import { GoodsDocs } from '../utils/storybook.docs'

  const RadiusDocs: React.FC<DocsPageProps> = props => {
    return (
      <GoodsDocs
        withoutPropsTable
        withoutStories
        designDesc={`
          Corner Radius is used to differentiate between a group of components to the other.
          It also helps to build memorability of shape, whether it is accessible or not.
        `}
        {...props}
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
  /* another import(s) (if any) */
  import { Text } from '.'
  import TextDocs from './typography.docs'

  export default {
    title: 'Core/Typography',
    component: Text,
    parameters: { docs: { page: TextDocs } },
  }
  ```

**Resources**:

- [Addon docs](https://github.com/storybookjs/storybook/tree/master/addons/docs)
- [DocsPage](https://github.com/storybookjs/storybook/blob/master/addons/docs/docs/docspage.md)

### Writing Component Stories

- `export default` story meta data. Must have `title` and `component` properties.
- At least 1 simple usage without knobs
- At least 1 example with knobs for all defined props
- Use `Story` (imported from `goods-core/src/utils/storybook`) to annotate story function such that it can be a react function component and can have `story` property.

### Writing Util Story

- Doesn't need `component` property in story meta data
- Only 1 story function and it must be named by `' '` (space) in `story.name` property and return empty react element

Example:

```typescript
// radius.story.tsx file
import React from 'react'
import RadiusDocs from './radius.docs'
import { Story } from '../utils/storybook'

export default {
  title: 'Core/Corner Radius',
  parameters: { docs: { page: RadiusDocs } },
}

export const radius: Story = () => <></>
radius.story = { name: ' ' }
```
