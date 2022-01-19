// @flow
import React, { type Node } from 'react'

import Layout from 'src/components/Layout'
import theme from 'src/utils/theme/theme.css'

const App = ({ Component, pageProps } = {}) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default App
