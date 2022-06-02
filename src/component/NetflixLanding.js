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
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">TV Shows</a>
        </li>
        <li className="nav-link">Movies</li>
        <li className="nav-link">News & Popular</li>
        <li className="nav-link">My List</li>
  
      </ul>
      <form className="d-flex">
        
        <i class="uil uil-search text-light me-3"></i>
        
        <i class="uil uil-bell text-light"></i>
      </form>
    </div>
  </div>
</nav>
     

      


      

    </>

  )
}

export default NetflixLanding