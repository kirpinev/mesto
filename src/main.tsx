import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { App } from 'app/containers/App'
import { GlobalStyle } from './uikit'

import { store } from 'app/store'

const Main = () => (
  <>
    <GlobalStyle />
    <App />
  </>
)

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.querySelector('#root')
)
