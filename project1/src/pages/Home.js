import React from 'react'
//import Content from '../components/Content'
import TopicBox from '../components/TopicBox'

export default function Home() {
  return (
    <div>
        <h1>Homepage</h1>
       <TopicBox food="kottu" price="250"> <span>this is the description</span></TopicBox>
       <TopicBox food="rice"price="350"> <button>this is a button</button></TopicBox>
       <TopicBox food="milk_rice"price="550">qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
       wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
       aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
       bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
       ssssssssssssss</TopicBox>
       

      
    </div>
  )
}
