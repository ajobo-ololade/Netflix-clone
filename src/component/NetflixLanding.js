import React from 'react'


function NetflixLanding() {
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 sticky-top">
  <div className="container">
    <a className="navbar-brand text-danger" href="#">NETFLIX</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">TV Shows</a>
        </li>
        <li className="nav-link text-white">Movies</li>
        <li className="nav-link text-white">News & Popular</li>
        <li className="nav-link text-white">My List</li>
  
      </ul>
      <div className="navbar-nav ms-auto">
      <i class="uil uil-search text-light me-2 mt-2"></i>
      <a href="#" className="nav-link text-white ">Kids</a>
        
        <i class="uil uil-bell text-light mt-2"></i>
      </div>
    </div>
  </div>
</nav>
     

      


      

    </>

  )
}

export default NetflixLanding