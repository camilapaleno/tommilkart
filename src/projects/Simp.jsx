import React from "react";
import {Link} from "react-router-dom";
import Simp1 from "../img/simp1.jpeg";
import Simp2 from "../img/simp2.jpeg";
import Simp3 from "../img/simp3.jpeg";
import Simp4 from "../img/simp4.jpeg";
import Simp5 from "../img/simp5.jpeg";
import Simp6 from "../img/simp6.jpeg";


function Simp() {
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
            <h1>Simp Shirt</h1>
            <p>Simp.</p>
          </div>
        </div>

        <div className="gallery-wrapper">
            <img src={Simp1}></img>
            <img src={Simp2}></img>
            <img src={Simp3}></img>
            <img src={Simp4}></img>
            <img src={Simp5}></img>
            <img src={Simp6}></img>

        </div>
          

        
      </div>
    </>
  );
}

export default Simp;