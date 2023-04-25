import React from 'react'

const index = () => {
  return (
    <div>index</div>
  )
}

export default index

export async function getStaticPaths(){
    const {pats} = import("/data/data.json")
    console.log(pats)
}