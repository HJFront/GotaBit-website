import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from 'src/createEmotionCache'
import InitTheme from 'src/components/InitTheme'
import InitI18n from 'src/components/InitI18n'
import ErrorBoundary from 'src/components/ErrorBoundary'
import GlobalStyles from '@mui/material/GlobalStyles'
import CooikeProvider from 'src/components/CooikeProvider'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <ErrorBoundary>
      <InitI18n>
        <CacheProvider value={emotionCache}>
          <Head>
            <meta name='viewport' content='initial-scale=1, width=device-width' />
          </Head>
          <InitTheme>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <GlobalStyles
              styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' }, body: { overflowX: 'hidden' } }}
            />
            <CooikeProvider>
              <Component {...pageProps} />
            </CooikeProvider>
          </InitTheme>
        </CacheProvider>
      </InitI18n>
    </ErrorBoundary>
  )
}
