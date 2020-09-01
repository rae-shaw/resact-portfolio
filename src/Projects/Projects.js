import React from 'react'
import Nav from '../Nav/Nav.js'
import Footer from '../Footer/Footer.js'

export default function Projects() {
  return (
    <>
      <Nav />

      <section className='project1' id='projects'>
        <h2>PROJECTS</h2>
          <section>
            <h2>Use these links in making more info </h2>
          </section>

          <section>
            <h3>Movementum</h3>
            <img src='MovementumLandingPage.png' className='screenshot' alt='Screenshot of the Movementum className Planning Landing Page.'/>
            <p className='projects-p'>Project Description: Built using HTML, CSS, JavaScript, React, Node and PostgreSQL, Movementum is a className planning tool designed by and for movement instructors. It fills a gap in className and lesson planning specifically for movement instructors, like dance, yoga, and aerial arts instructors.
            Instructors can create folders for classNamees and organize their lesson plans by className. Instructors can keep track of their students' progress.</p> 
            <div className= 'links'>
              <a href="https://movementum.rachaelleeshaw.now.sh" className='fs intextlink' target="_blank">Live Site Link</a>
              <a href="https://github.com/rae-shaw/movementum-client" target="_blank" className='fs intextlink'>GitHub Client Side Repo Link</a>
              <a href="https://github.com/rae-shaw/movementum-api" target="_blank" className='fs intextlink'>GitHub Server Side Repo Link</a>  
              </div>
          </section>

          <section>
            <h3>Sky Candy Curriculum Database</h3>
            <img src='LandingPage.png' className='screenshot' alt='Screenshot of the Sky Candy Curriculum Database.'/>
            <p className='projects-p'>Project Description: Built using HTML, CSS, JavaScript, React, Node and PostgreSQL and made for Sky Candy Austin, an aerial studio in Austin, TX, this will hold all of the curriculum for the aerial classNamees. Sky Candy staff will be able to access, add, delete and update skills. Skills can be searched by a variety of filters including age, level, name, and apparatus.</p>
            <p className='projects-p'>Eventually, on a larger scope, there will be differentiated log-ins for teachers, admin, and front desk staff with different levels of access. There will also be the ability to update, add, or delete from tables other than just the skills table.</p> 
            <div className= 'links'>
              <a href="https://sky-candy-database.rachaelleeshaw.now.sh/" className='fs intextlink' target="_blank">Live Site Link</a>
              <a href="https://github.com/rae-shaw/Sky-Candy-Curriculum-Database" target="_blank" className='fs intextlink'>GitHub Client Side Repo Link</a>
              <a href="https://github.com/rae-shaw/sky-candy-database-api" target="_blank" className='fs intextlink'>GitHub Client Side Repo Link</a>
            </div>
          </section>

          <section>
            <h3>Who Would Be Your Best Friend at Hogwarts?</h3>
            <img src='first_page.png' className='screenshot' alt='Screenshot of the Who Would be Your Best Friend at Hogwarts? Quiz. There is text that reads: Ready to find out who would be your best friend at Hogwarts? Below is a button that reads: Lets do this.'/>
            <p className='projects-p'>Project Description: Built using HTML, CSS, JavaScript and jQuery, this web app is designed for users to find out who their best friend at Hogwarts would be. Users answer a series of questions which inform an API call to PotterAPI.</p> 
            <div className= 'links'>
              <a href="https://rae-shaw.github.io/Who-Would-Be-You-Best-Friend-at-Hogwarts/" className='fs intextlink' target="_blank">Live Site Link</a>
              <a href="https://github.com/rae-shaw/Who-Would-Be-You-Best-Friend-at-Hogwarts" target="_blank" className='fs intextlink'>GitHub Repo Link</a>
            </div>
          </section>
        </section>
            
        <Footer />
    </>
  )
}

   