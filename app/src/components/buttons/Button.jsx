import React from 'react'
import style from './buttonstyle.module.css'

function Button({type}) {
  return (
    <>
    <button className={`${style.btn}`}>{type}</button>
    </>
  )
}

export default Button