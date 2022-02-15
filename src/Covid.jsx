import { useState, useEffect } from "react";
import React from "react";

const Covid = () => {
  const [data, setData] = useState([]);
  const [time,setTime]= useState();
  const D=()=> {
      setInterval(()=>{
        let date=new Date().toLocaleTimeString();
setTime(date)
      },1000)
      
      
  }

  const getCovid = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const json = await res.json();
      const actualData = json.statewise[0];
      console.log(actualData);
      setData(actualData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovid();
    D();
  }, []);

  return (
    <>
      <div id="container"> 
      <h1 class="timer">{time}</h1>
      <h1 class="vineet">COVID TRACKER</h1>
     <div class="row1"><div id="box" class="col bg-info">
          <h3>Uttar pradesh</h3>
          <p>Covid Tracker</p>
        </div>
      
        <div id="box" class="col bg-primary">
          <h3>deaths Cases</h3>
          <p>{data.deaths}</p>
        </div>
        <div id="box" class="col bg-dark">
          <h3>recovered Cases</h3>
          <p>{data.recovered}</p>
        </div>
        </div>
        <div class="row1">
        <div id="box" class="col  bg-secondary">
          <h3>Active Cases</h3>

          <p>{data.active}</p>
        </div>
        
        <div id="box" class="col bg-success">
          <h3>lastupdatedtime Cases</h3>
          <p>{data.lastupdatedtime}</p>
        </div>
        <div id="box" class="col bg-danger">
          <h3>deltadeaths Cases</h3>
          <p>{data.deltadeaths}</p>
        </div>
        </div>
      </div>
    </>
  );
};
export default Covid;
