import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./App.css";
import log from "./img/log.png";
import video from "./img/surf.mp4";


function Splash() {


  return (
    <>
    <div className="splash">
    <video loop autoplay="" muted><source src={video} type="video/mp4"/></video>
        <section>
            <img src={log} alt="TM"></img>
            <p>TOM MILKOWSKI IS AN ARTIST FROM NEW JERSEY & BASED IN LOS ANGELES.</p>
            <Link to="/projects">SEE PROJECTS</Link>
        </section>
    </div>


    </>
  );
}

export default Splash;