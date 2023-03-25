//import logo from './logo.svg';
//import './App.css';
import React, { useState } from "react";
import Tours  from "./components/Tours.js";
import datas from './datas'

const App = () => {

  const [tours, setTours] = useState(datas)

  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0 ){
    return(
      <div className="refresh">
        <h2>No tours left</h2>
        <button className="btn-white" onClick={() => setTours(datas)}>
          Refresh
        </button>
      </div>
    )
    
  }

  return (
    <div>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
