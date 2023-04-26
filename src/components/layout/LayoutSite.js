import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
export const LayoutSite = ({children}) => {
  return (
    <>   
      <Header />
      <main> {children} </main>
      <Footer />
    </>
  )
}
