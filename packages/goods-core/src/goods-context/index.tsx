import * as React from 'react'
import { ThemeProvider, ThemeContext, DefaultTheme } from 'styled-components'
import GlobalStyle from '../global-style'
import { goodsTheme } from '../theme'

interface GoodsProviderProps {
  noGlobalStyle?: boolean
  theme?: DefaultTheme
}

export interface WithGoodsProps {
  theme: DefaultTheme
}

export const useGoods = (): DefaultTheme => React.useContext(ThemeContext)

export const GoodsProvider: React.FC<GoodsProviderProps> = ({
  noGlobalStyle = false,
  theme = goodsTheme,
  children,
}) => {
  return (
    <ThemeProvider theme={theme as DefaultTheme}>
      {!noGlobalStyle && <GlobalStyle />}
      {children}
    </ThemeProvider>
  )
}

export const withGoods = <P extends WithGoodsProps>(
  Component: React.ComponentType<P>
): React.FC<Omit<P, keyof WithGoodsProps>> => props => {
  const theme = useGoods()
  return <Component {...(props as P)} theme={theme} />
}
