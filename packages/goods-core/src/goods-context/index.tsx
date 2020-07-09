import * as React from 'react'
import { ThemeProvider, ThemeContext, DefaultTheme } from 'styled-components'
import GlobalStyle from '../global-style'
import defaultTheme from '../theme'

interface GoodsProviderProps {
  noGlobalStyle?: boolean
  theme?: DefaultTheme
}

export const useGoods = (): DefaultTheme => React.useContext(ThemeContext)

export const GoodsProvider: React.FC<GoodsProviderProps> = ({
  noGlobalStyle = false,
  theme = defaultTheme,
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      {!noGlobalStyle && <GlobalStyle />}
      {children}
    </ThemeProvider>
  )
}
