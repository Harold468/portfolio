import React from "react";
import {Link} from 'react-router-dom'
function Nav(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span><img src="favicon.ico" /></span>Harold's Portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/example">Example</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="OSEI_FRIMPONG_KWABENA_HAROLD_current_resume.pdf">My Resume</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
}

export default Nav;