import React from 'react'
import Nav from '../Nav/Nav.js'
import Footer from '../Footer/Footer.js'

export default function AboutMe() {
  return (
    <div>
      <Nav />
      <section className='aboutme' id='aboutme'>
        <h2 className='aboutme'>About Me</h2>
        <p className='aboutme-p'>Hello! I am a fullstack developer specializing in JavaScript, React, Node/Express, and PostgreSQL. I am a maker at heart and became fascinated with web development when I learned I could use it make something out of nothing. Ever since I was a child putting together puzzles and creating my first app at 11- an astrology
        program on a Commodore 64- I’ve been fascinated by solving complex problems. This interest
        transferred into every job I’ve had and into my decision to make a career change into software
        development.
        </p>
        <p className='aboutme-p'>
        When I'm not coding, you'll find me hanging out (literally!) on a trapeze at my local aerial studio or on my couch reading with my cats. My life goal is to be a crazy cat lady and with three cats, I feel I'm well on my way!
        </p>
      </section>
      <Footer />
    </div>
  )
}