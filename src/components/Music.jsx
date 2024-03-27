import React, { useState } from "react";
import {Link} from "react-router-dom";

function Video(prop) {
  
  return (
    <>
      <div className='frame'>
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

        <div className="spotify-wrapper">
          <iframe src={prop.source} width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
          

        
      </div>
    </>
  );
}

export default Video;
