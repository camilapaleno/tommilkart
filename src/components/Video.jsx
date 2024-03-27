import React, { useState } from "react";
import {Link} from "react-router-dom";

function Video(prop) {
  
  return (
    <>
      <div className='frame'>
        <div className="head-wrapper">
          <div className="head">
            <Link to="/projects" id="back"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            </Link>
            <div className="info">
              <h1>{prop.name}</h1>
              <p>{prop.description}</p>
            </div>
          </div>
        </div>


        <div className="video-wrapper">
          <iframe title="iframe" src={prop.source} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
          

        
      </div>
    </>
  );
}

export default Video;
