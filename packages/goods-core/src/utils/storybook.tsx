import React from 'react'
import { Parameters } from '@storybook/addons'
import { ViewportAddonParameter } from '@storybook/addon-viewport/dist/models/ViewportAddonParameter'

interface Params extends Parameters {
  viewport?: ViewportAddonParameter
}

export type Story<P = Record<string, unknown>> = React.FC<P> & {
  story?: { parameters?: Params; name?: string }
}

type LogValueBase = string | number | boolean | null
type LogValue = {
  [key: string]: LogValueBase | LogValue | (LogValueBase | LogValue)[]
}

export interface LogProps {
  value: LogValue | (LogValueBase | LogValue)[]
}

export const Log: React.FC<LogProps> = ({ value }) => {
  return (
    <pre>
      <code>{JSON.stringify(value, null, 2)}</code>
    </pre>
  )
}

export const utilsStoryParameters = {
  controls: { disabled: true },
  knobs: { disabled: true },
  viewMode: 'docs',
}
