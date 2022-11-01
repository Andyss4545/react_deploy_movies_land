import './App.css';
import React, { useEffect, useState } from 'react';
// import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Components/NavBar/Navbar';
import MovieCard from './Components/MovieCard/MovieCard';
import Footer from './Components/Footer/Footer';
import Banner from '../src/Assets/banner.png'



const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=1087df30'

let  App = () => {

     
   const [query, setQuery] = useState({
          text: ""
   })

   const {text} = query

  let updateSearch = (event) => {
        setQuery(() => ({
             ...query,
             [event.target.name]: event.target.value

        }))

  }

let [state, seState] = useState({
       movies: [],
       erroMessage: ""
})

let {movies} = state


let searchMovies = async(title) => {
  try{
        let Response = await fetch(`${API_URL}&s=${title}`)
        const data = await Response.json()
          seState(() => ({
               ...state,
               movies: data.Search
          }))
  }
  catch(error){
        seState(() => ({
              erroMessage: error
        }))
  }
}


useEffect(() => {

      searchMovies('Batman')

      //eslint-disable-next-line
},[])

  return (
     <React.Fragment>
       <Navbar/>

     <div className="formwrapper">
     <div className="formbox">
          <input 
          name='text' 
          value={text}
          onChange={updateSearch}
          type="text" 
          placeholder="Enter keywords..." 
          />{" "}
          <button onClick={() => searchMovies(text)} >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
     </div>

     <div className="socials"> 
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-telegram"></i>
        <i className="fa-solid fa-envelope"></i>
      </div>

      <div className='banner'>
            <img src={Banner} alt="Banner"/>
      </div>



       {
           movies?.length > 0 ? (
            <div className='container'>
               { movies.map((movie) => {
                  return (
               
                      < MovieCard movies={movie}/>
                  )
                  })
               }

              </div>
           ):(
                <div className='empty'>
                  <h2>No movies available</h2>
                </div>
           )
       }
       
       <Footer/>
     </React.Fragment>
  );
}

export default App;
