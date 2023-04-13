import './App.css';
import Sidebar from './sidebar.js';
import Visual from './visual.js';
import Graph from './graph.js';
import Alert from './alert.js';
import { useEffect, useState } from "react";
let { data } = require("./Database.json")
function App() {
  
  //  useEffect(()=>{
  //     props.alerts = alerts;
  //  },[alerts])
  return (
      <div className="sidebar">
         <Sidebar/>
      </div>
  );
}

export default App;

  //    return (
  //     // <div className="d-flex justify-content-center w-100">
  //       <div className="w-100 row gx-5 d-flex justify-content-center">
  //       <div className='temp col-sm-10 col-md-5 col-lg-5 col-xl-2 my-1 mx-1'>
  //         <Dropdown/>
  //         <img className='image' src={Temperature}></img>
  //         <h1 className='hdg'>{data[Math.floor(count)].temp}</h1>
  //         <h2 className="down">Temperature</h2>
  //       </div>
  //       <div className='temp col-sm-10 col-md-5 col-lg-5 col-xl-2 my-1 mx-1'>
  //           <Dropdown/>
  //           <img className='image'src={humidity}></img>
  //           <h1 className='hdg'>{data[Math.floor(count)].humi}</h1>
  //           <h2 className="down">Humidity</h2>
  //       </div>
  //           <div className='temp col-sm-10 col-md-5 col-lg-5 col-xl-2 my-1 mx-1'>
  //           <Dropdown/>
  //           <img className='image'src={CO2}></img>
  //           <h1 className='hdg'>{data[Math.floor(count)].CO2}</h1>
  //           <h2 className="down">CO2</h2>
  //       </div>
  //           <div className='temp col-sm-10 col-md-5 col-lg-5 col-xl-2 my-1 mx-1'>
  //           <Dropdown/>
  //           <img className='image' src={VOC}></img>
  //           <h1 className='hdg'>{data[Math.floor(count)].VOC}</h1>
  //           <h2 className="down">VOC</h2>
  //       </div>
  //     </div>
  //   // </div>
  // );
