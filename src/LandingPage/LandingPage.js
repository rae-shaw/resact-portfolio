import React from 'react'
import Nav from '../Nav/Nav.js'
import Footer from '../Footer/Footer.js'

export default function LandingPage() {
	return (
		<section>
			<Nav />
			<main>
	      <h1>Hi New Friends! I'm Rachael, a fullstack developer. </h1>
	      <img src='headshot.jpg' alt='Black and white headshot of a woman with short curly hair' className='headshot'/>
	    </main>
	  	<Footer />
	  </section>
	)
}