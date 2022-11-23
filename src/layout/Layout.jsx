import React from 'react'
import TopStrip from '../components/common/TopStrip'
import NavBar from '../components/common/NavBar'
import Footer from '../components/common/Footer'


function Layout({ children }) {
  return (
    <>
        <TopStrip/>
        <NavBar/>
        <main>{children}</main>
        <Footer/>
    </>
  )
}

export default Layout