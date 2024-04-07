import React from 'react'
import style from './cardstyle.module.css'
import Button from '../buttons/Button'

function Card({name,text,price,image}) {
  return (
    <>
    <div className={`${style.card}`}>

    <img src={image} alt="" />
      <div className={`${style.fooddescription}`}>
        <h3>{name}</h3>
        <p>{text}</p>
        <Button type = {price} />
      </div>

    </div>
    </>
  )
}

export default Card