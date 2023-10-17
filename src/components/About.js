import React from 'react'
import Card from './Card'
import Rohit from '../images/Rohit.jpg'
import Aditya from '../images/Aditya.jpg'
import Sarthak from '../images/Sarthak.jpg'


const About = () => {
  return (
    <div>
    <h1 className='my-3'>Developers</h1>
    <div className='d-flex justify-content-around my-5'>
      <Card image = {Rohit} name = "Rohit Kumar" rollno = "06111503120" class = "IT-1"/>
              <Card image={Aditya} name="Aditya" rollno="00511503120" class="IT-1" />
              <Card image={Sarthak} name="Sarthak Maheshwari" rollno="06811503120" class="IT-1" />
    </div>
    </div>
  )
}

export default About
