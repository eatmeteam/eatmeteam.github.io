import React from 'react'
import {Link} from 'react-router-dom'


export default function navbar() {
    return (

        // <!-- Navigation Bar -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-dark">
          {/* <!-- Home Button --> */}
          <Link to='/'><a class="navbar-brand">Eat Me Team</a></Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          {/* <!-- End Home button --> */}
          {/* <!-- Start Navbar button --> */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">

                <li class="nav-item active">
                    <Link to='/'><a class="nav-link active">Home</a></Link>
                </li>

                {/* <!-- Member --> */}
                <li class="nav-item dropdown active">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Member
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link to='/pp'><a class="dropdown-item">PP</a></Link>
                    <div class="dropdown-divider"></div>
                    <Link to='/tong'><a class="dropdown-item">Tong</a></Link>
                    <div class="dropdown-divider"></div>
                    <Link to='/tim'><a class="dropdown-item">Tim</a></Link>
                    </div>
                </li>
                {/* <!-- End Member --> */}
                {/* <!-- Workshop --> */}
                <li class="nav-item dropdown active">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Workshop
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">29 APRIL 2020</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">2 MAY 2020</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">4 MAY 2020</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">9 MAY 2020</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">16 MAY 2020</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">23 MAY 2020</a>
                    </div>
                </li>
                {/* <!-- End Workshop --> */}
              </ul>
              {/* <!-- Github --> */}
              <ul class="navbar-nav mr-right" >
                <li class="topbar-right active" style={{marginTop: '-10%', marginBottom: '-10%'}}>
                  <a class="nav-link" href="https://github.com/eatmeteam/eatmeteam.github.io" target="_blank"><img class="rounded-circle" style={{width: "100px"}} src="https://drl.chaosforge.org/images/GitHub_Logo.png"></img></a>
                </li>
              </ul>
              {/* <!-- End Github --> */}
          </div>
          {/* <!-- End Navbar button --> */}
        </nav>
        // <!-- End Navigation Bar -->
    )
}