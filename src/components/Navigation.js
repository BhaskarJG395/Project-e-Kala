import React from 'react'
import{useState,useEffect} from 'react'
import '../App.css'
import { Link,NavLink } from 'react-router-dom'
export default function NavigationBar(){
    return (
        <div>
            {/* Navigation bar starts here */}
          <nav className="navbar navbar-expand-lg bg-body-tertiary cust-bg-col-4">
            {/* Logo  */}
            {/* <a className="navbar-brand" to="#">
                <img src="/img/logo.png" alt="Bootstrap" width="30" height="24"/>
            </a> */}

            <div className="container-fluid ">
                <NavLink className="text-light" to="/home">BookMyPortrait</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link active mx-2 text-light" aria-current="page" to="/home">Home</NavLink>
                        {/* <NavLink className="nav-link text-light" to="/features">Features</NavLink> */}
                        <NavLink className="nav-link text-light" to="/cart">MyCart</NavLink>
                        <NavLink className="nav-link text-light" to="/feedback">Feedback</NavLink>
                        <NavLink className="nav-link text-light" to="/contact">Contact</NavLink>
                        <NavLink className="nav-link text-light" to="/login">SignIn/Registration</NavLink>
                        <NavLink className="nav-link text-light" to="/cart">Cart</NavLink>
                    </div>
                </div>
            
            </div>

            {/* search box starts from here... */}
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-light mx-2" type="submit">Search</button>
            </form>
            {/*search box ends here*/}
          
          </nav>
          {/* Navigation bar ends here  */}
        </div>
    )
}