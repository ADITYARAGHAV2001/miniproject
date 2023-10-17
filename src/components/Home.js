import React from 'react'
import DrawingCanvas from './Drawing'

const Home = () => {
    return (
        <div>
            <h2 className='my-3'>Draw a Number in the below given area</h2>
            <div className="container d-flex align-items-center" style = {{height : '400px'}}>
                <DrawingCanvas />
            </div>
        </div>
    )
}

export default Home
