import React from 'react'
import NetflixLanding from './NetflixLanding'
import first from "../assets/img7.jpg"
import second from"../assets/img6.jpg"
import third from "../assets/img3.jpg"
import "../component/card.css"

function Slides() {
  return (
   <>
   
   <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active h-50" id='caro1'>
      <img src={first} class="d-block w-100" alt="..." style={{width:"100%",height:"100vh"}}/>
    </div>
    <div class="carousel-item">
      <img src={second} class="d-block w-100" alt="..." style={{width:"100%",height:"90vh"}}/>
    </div>
    <div class="carousel-item">
      <img src={third}class="d-block w-100 " alt="..." style={{width:"100%",height:"90vh"}}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
   </>
  )
}

export default Slides