import React from "react";
import {Link} from "react-router-dom";
import Guy1 from "../img/guy1.png";
import Guy2 from "../img/guy2.png"
import Guy3 from "../img/guy3.png"


function Pastel() {
  return (
    <>
      <div className='frame'>
        <div className="head">
          <Link to="/projects" id="back">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </Link>
          <div className="info">
            <h1>Pastel Guy</h1>
            <p>Digital Art made from scans of my paintings.</p>
          </div>
        </div>

        <div className="gallery-wrapper">
            <img src={Guy1}></img>
            <img src={Guy2}></img>
            <img src={Guy3}></img>
        </div>
          

        
      </div>
    </>
  );
}

export default Pastel;