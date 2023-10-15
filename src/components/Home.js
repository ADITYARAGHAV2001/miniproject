import React from 'react'
import DrawingCanvas from './Drawing'

const Home = () => {
    return (
        <div>
            <div className="container d-flex align-items-center" style = {{height : '500px'}}>
                <DrawingCanvas />
            </div>
        </div>
    )
}

export default Home
