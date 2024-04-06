import React from 'react'
import style from './cardstyle.module.css'
import Button from '../buttons/Button'

function Card({name}) {
  return (
    <div>
        <img src="" alt="" />
        <div className={`${style.fooddescription}`}>
            <h3>{name}</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, tempora!</p>
            <Button type = '$10.00' />
        </div>
    </div>
  )
}

export default Card