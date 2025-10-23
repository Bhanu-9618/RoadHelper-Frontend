import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import carousalimg1 from './assets/images/carousalimg1.jpg'
import carousalimg2 from './assets/images/carousalimg2.jpg'
import carousalimg3 from './assets/images/carousalimg3.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>

      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner" >
          <div className="carousel-item active" >
            <img src={carousalimg1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-sm-block d-flex flex-column justify-content-center align-items-center h-75 " >
              <h5 className="carousel-title ">Welcome to RoadHelper</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousalimg2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-sm-block d-flex flex-column justify-content-center align-items-center h-75 ">
              <h5 className="carousel-title ">Find Nearby Garages</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousalimg3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-sm-block d-flex flex-column justify-content-center align-items-center h-75">
              <h5 className="carousel-title ">Ride Home Without Worry</h5>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </>

  )
}

export default App
