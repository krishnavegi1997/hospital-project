import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Hospital</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to='' class="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link to='/admindashboard' class="nav-link">Admin Dashboard</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header