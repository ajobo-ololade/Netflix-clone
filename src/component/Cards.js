import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "../component/card.css"

function Cards() {
    const [allUser, setallUser] = useState([])
  const [isloading, setisloading] = useState(true)
  const [error, seterror] = useState("")
  // const url = "https://api.themoviedb.org/3/discover/movie?api_key=ee3db26c13a95de355febc98d8b68dbf"
const url="https://imdb-api.com/API/AdvancedSearch/k_s7l8kj1r/?genres=action,adventure"
  useEffect(() => {
    makeRequest()
  }, [])
  const makeRequest = () => {
    axios.get(url).then((res) => {
      if (res.status === 200) {
        console.log(res.data.results)
        setallUser(res.data.results)
        setisloading(false)

      }
      else {
        console.log(`an error occured`)


      }

    }).catch((err) => {
      seterror(err)
    })
  }
  return (
      <>
       <div className="container-fluid">
        <div className="row"> 
          {allUser.map((user,index)=>(

             <div className="card"  style={{width:"15%",height:"auto",margin:"10px"}}>
             {/* <img src={`https://image.tmdb.org/t/p/w185` + user.backdrop_path} className="card-img-top" alt="..."/> */}
             <img src={ user.image} className="card-img-top" alt="..."/>
   
             <div className="card-body">
               {/* <h5 className="card-title">{user.original_title}</h5> */}
               <h5 className="card-title">{user.title}</h5>
               
               {/* <a href={`https://image.tmdb.org/t/p/w185` + user.backdrop_path} ><i class="uil uil-eye text-danger"></i></a> */}
               <a href={ user.image} ><i class="uil uil-eye text-danger"></i></a>
             </div>
           </div>
   
            
          ))}

       
       

        </div>
      </div>

      <div>
      
      </div>
      </>

  )
}

export default Cards