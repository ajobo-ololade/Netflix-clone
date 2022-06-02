import React from 'react'
import NetflixLanding from './NetflixLanding'
import first from "../assets/img1.jpg"
import second from"../assets/img2.png"
import third from "../assets/img3.jpg"
// import "../component/style.css"

function Slides() {
  return (
   <>
   
   <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active h-50" id='caro1'>
      <img src={first} className="d-block w-100" alt="..." style={{width:"100%",height:"80vh"}}/>
    </div>
    <div className="carousel-item">
      <img src={second} className="d-block w-100" alt="..." style={{width:"100%",height:"80vh"}}/>
    </div>
    <div className="carousel-item">
      <img src={third}className="d-block w-100 " alt="..." style={{width:"100%",height:"80vh"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   </>
  )
}

export default Slides