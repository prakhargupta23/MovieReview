import React, { useRef, useEffect, useState } from 'react';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';

export default function FirstPage() {
  const [strings] = useState(["Prakhar Gupta", "Web Developer", "UI Designer"]);
  const typedRef = useRef(null); // Define the typedRef here

  useEffect(() => {
    const typedOptions = {
      strings,
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };

    if (typedRef.current) {
      const typed = new Typed(typedRef.current, typedOptions);

      return () => {
        typed.destroy();
      };
    }
  }, [strings]);

  return (
    <div>
      <div className="header">
        <nav>
          {/* <img src="img/logo1-removebg-preview.png" class="logo"> */}
          <ul>
            <li><a href="">HOME</a></li>
            <li><a href="">ABOUT</a></li>
            <li><a href="">PORTFOLIO</a></li>
            <li><a href="">SERVICES</a></li>
          </ul>
        </nav>

        <div className="text-box">
          <h1>I'm <span className="auto-input" ref={typedRef}></span></h1>
          
          {/* <p>Hey there, you can reach out to me <br/> if you want to learn Web Development</p> */}
          {/* <a href="">Contact Me</a>
          <a href="" class="btn">Download CV</a> */}
          <div class="group">
            <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input placeholder="Search" type="search" class="input" />
          </div>
          {/* <button class="btn">Button</button> */}
          <Link className='go' to="/api-page">
            <button class="btn">Button</button>
          </Link>
        </div>
        {/* <img src="img/rbg.png" alt="" class="user-img"> */}
      </div>
    </div>
  );
}
