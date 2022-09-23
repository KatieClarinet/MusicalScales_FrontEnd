import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

    async function fetchScales() {
      const response = await fetch('http://localhost:3000/api/getAll');
      const scales = await response.json();
      console.log(scales)
    }
    fetchScales()

return (
  <div className="App">
  Hello
  </div>
)
}

export default App;
