import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./App.css";
import {portfolio} from './Projects';

import title from './img/title.png';

function Home() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map(p => ({
      ...p,
      filtered: p.category.includes(filter)
    }));
    setProjects(filtered);
  }, [filter]);

  return (
    <>
    <div className="hero">
        <section>
            <div className="title">
                <img src={title}></img>
            </div>
            <div className="bio">
              <p>TOM MILKOWSKI IS AN ARTIST FROM NEW JERSEY & BASED IN LOS ANGELES.  TOM MILKOWSKI IS AN ARTIST FROM NEW JERSEY & BASED IN LOS ANGELES. TOM MILKOWSKI IS AN ARTIST FROM NEW JERSEY & BASED IN LOS ANGELES. </p>
            </div>
            <div className="socials">
              <a href="mailto:tfmilkowski@gmail.com">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
              </a>
              <a href="https://instagram.com/tommilkowski" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                </svg>
              </a>
            </div>
        </section>

    </div>


      <div className="portfolio">
        <div className="portfolio__labels">
          <a 
            active={filter === "all"} 
            onClick={() => setFilter("all")}
            className={filter === "all" ? 'selected-label' :'default-label'}
          >
            All
          </a>
          <a
            active={filter === "art"}
            onClick={() => setFilter("art")}
            className={filter === "art" ? 'selected-label' :'default-label'}
          >
            Art
          </a>
          <a
            active={filter === "music"}
            onClick={() => setFilter("music")}
            className={filter === "music" ? 'selected-label' :'default-label'}
          >
            Music
          </a>
          <a
           
            active={filter === "skit"}
            onClick={() => setFilter("skit")}
            className={filter === "skit" ? 'selected-label' :'default-label'}
          >
            Skits
          </a>
          <a
            
            active={filter === "video"}
            onClick={() => setFilter("video")}
            className={filter === "video" ? 'selected-label' :'default-label'}
          >
            Video
          </a>
          <a
            
            active={filter === "fashion"}
            onClick={() => setFilter("fashion")}
            className={filter === "fashion" ? 'selected-label' :'default-label'}
          >
            Fashion
          </a>
        </div>

        <div className="portfolio__container">
          <ul>
            {projects.map(item =>
              item.filtered === true ? 
              <li key={item.name} className='card'>
                  <Link className='card_path' to={item.source}>
                    <div className="card_preview">
                        <img src={item.preview} />
                    </div>
                    <div className="card_info">
                        <p><small>1/1/2011{item.date}</small></p>  
                        <br></br>
                        <p><b>{item.title}</b></p>
                        
                        <p className="type">{item.type}</p>
                        <br></br>
                        <p>{item.description}</p>
                        <br></br>
                        <p>{item.tools}</p>
                                          
                    </div>
                  </Link>
              </li> : ""
            )} 
          </ul>
        </div>     
      </div>

    </>
  );
}

export default Home;