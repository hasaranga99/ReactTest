import React from 'react'
import './topicbox.css'

export default function TopicBox(props) {
  const topic = "My favourite food is kottu"
  const item = "and rice"
  const a = 20;
  const b = 30;
  const c = a+b;
 
  return (
    <div>
      <div className="topicbox">
        <span className='text'>{topic} {item} {c} {props.food} and price is {props.price} </span>
        {props.children}
      </div>
    </div>
  )
}
