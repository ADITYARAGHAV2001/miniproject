import React from 'react'

const Card = (props) => {
  return (
    <div>
          <div className="card" style={{ width: '18rem'}}>
              <img src={props.image} className="card-img-top" alt="..."/>
                  <div className="card-body">
                      <h5 className="card-title">{props.name}</h5>
                      <h6 className="card-title">{props.rollno}</h6>
                      <h6 className="card-title">{props.class}</h6>
                  </div>
          </div>
    </div>
  )
}

export default Card
