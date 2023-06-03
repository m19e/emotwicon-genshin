import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import "styles/globals.css"
import { Default } from "components/Stamps/SEO"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Default />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
