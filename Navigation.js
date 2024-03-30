import React from 'react'
import Button from './Form/Button/Button'
export default function Navigation() {
  return (
    <div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img style={{width:"50px", height:"50px"}} src='/images/contactphoto.jpg'alt='none' />
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact Us</a>
        </li>
       
      </ul>
    <Button text="Login"/>
   
    </div>  
  </div>
</nav>
    </div>
  )
}
