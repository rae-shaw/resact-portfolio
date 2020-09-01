import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
	return (
		<>
		<img src='rlslogo.png' className='logo' alt='purple and yellow logo with the letters R, L, and Shaw'/>
		<div className="container">
    		<div className="bar1"></div>
    		<div className="bar2"></div>
    		<div className="bar3"></div>
		</div>
	    <div>
	      <Link to = '/about'>about</Link>
	      <Link to = '/projects'>projects</Link>
	      <Link to = '/writing'>writing</Link>
	      <Link to = '/resume'>resume</Link>
	    </div>

  </>
		)
}

	    // <div className="laptopsize">
     //      <a href="#projects" className="item_menu">projects</a>
     //      <a href="#aboutme" className="item_menu">about me</a>
     //      <a href="#contactinfo" className="item_menu">contact</a>
	    // </div>