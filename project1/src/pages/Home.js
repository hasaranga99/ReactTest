import React from 'react'
//import Content from '../components/Content'
import TopicBox from '../components/TopicBox'

export default function Home() {
  return (
    <div>
        <h1>Homepage</h1>
       <TopicBox food="kottu" price="250"/>
       <TopicBox food="rice"price="350"/>
       <TopicBox food="milk_rice"price="550"/>
       

      
    </div>
  )
}
