import React from 'react'
import Search from '../Search/Search'
import './Pokedex.css'

function Pokedex() {
  return (
    <div className='wrapper'>
        <h1 id='heading'>Pokedex</h1>
      <Search/>
    </div>
  )
}

export default Pokedex
