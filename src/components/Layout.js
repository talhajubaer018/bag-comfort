import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Provider } from 'react-redux'

import store from '../store'

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <div className=''>
        <Header />
        <main>
          {children}
        </main>
        {/* <Footer /> */}
      </div>
    </Provider>
  )
}

export default Layout