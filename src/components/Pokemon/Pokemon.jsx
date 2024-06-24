import React from 'react'

function Pokemon({id,Name,Image}) {
  return (
    <div>
      <div>{id}</div>
      <div>{Name}</div>
      <div><img src={Image} alt="" /></div>
    </div>
  )
}

export default Pokemon
