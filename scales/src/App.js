import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  // useEffect(() => {

    async function fetchScales() {
      const response = await fetch('http://localhost:3000/api/getAll');
      const scales = await response.json();
      console.log(scales)
      // return movies;
    }
    fetchScales()
    // fetchMoviesJSON().then(movies => {
    //   movies; // fetched movies
    // });

 
// });
   


return (
  <div className="App">
  Hello
  </div>
)
}

export default App;
