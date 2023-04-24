import React from 'react'
import Header from '../Header/Header'

export const LayoutSite = ({children}) => {
  return (
    <>   
    <Header />
    <main> {children} </main>
    </>
  )
}
