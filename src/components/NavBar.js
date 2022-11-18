import React from 'react'
import { Menu } from './MojaveLib'

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
          <a href="index.html" class="navbar-brand p-0">
            <h1 class="m-0">
              <i class="fa fa-user-tie me-2"></i>Mojave
            </h1>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"><span class="fa fa-bars"></span></button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0">
              {Menu.map(menu =>(
                <a href={`/${menu.link}`} class="nav-item nav-link ">{menu.name}</a>
              ))}
              {/* <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
                <div class="dropdown-menu m-0">
                  <a href="blog.html" class="dropdown-item">Blog Grid</a>
                  <a href="detail.html" class="dropdown-item">Blog Detail</a>
                </div>
              </div> */}
              {/* <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div class="dropdown-menu m-0">
                  <a href="price.html" class="dropdown-item">Pricing Plan</a>
                  <a href="feature.html" class="dropdown-item">Our features</a>
                  <a href="team.html" class="dropdown-item">Team Members</a>
                  <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                  <a href="quote.html" class="dropdown-item">Free Quote</a>
                </div>
              </div> */}
            </div>
          </div>
        </nav>
    </div>
  )
}

export default NavBar
