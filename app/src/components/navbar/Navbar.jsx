import React from 'react'
import style from './navbarstyle.module.css'
import Button from '../buttons/Button'

function navbar() {
  return (
    <>
    <nav>
    <div className={`${style.navpart1}`}>
    <h1>F<span>oo</span>dy Z<span>o</span>ne</h1>
    <input type="text" placeholder='Search Foods...' />
    </div>

    <div className={`${style.navpart2}`}>
      <Button type = 'All'/>
      <Button type = 'BreakFast'/>
      <Button type = 'Lunch'/>
      <Button type = 'Dinner'/>
    </div>
    </nav>
    </>
  )
}

export default navbar