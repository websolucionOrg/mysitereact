import '@/styles/globals.css'
import "../styles/index.sass"

import { LayoutSite } from '@/src/components/layout/LayoutSite'

export default function App({ Component, pageProps }) {
  return( 
  <> 
    <LayoutSite>
       <Component {...pageProps} />
    </LayoutSite>
  </>
  )
}
