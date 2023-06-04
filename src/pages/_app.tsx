import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import { Analytics as VercelAnalytics } from "@vercel/analytics/react"

import "styles/globals.css"
import { Analytics } from "utils/Analytics"

import { Default } from "components/Stamps/SEO"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Analytics />
      <Default />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
      <VercelAnalytics />
    </>
  )
}

export default App
