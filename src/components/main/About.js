import React, { Component } from 'react';
import '../main/About.css'
import jose from "../../media/jose-profile.jpeg"
import kisub from "../../media/Me.png"
import jalamang from "../../media/jj-profile2.jpg"



export default class About extends Component {
  render() {
    return (
      <main className = "TBD">
          <h2> About our team  </h2>
          <div className ="about-background">
              <img className = "about-jose-profile"src ={jose} alt ="jose's profile"/>
              <article className = "about-jose-bio">
                <h3>Jose Bourdon, Team Lead</h3>
                <p> Former Facebook IT Employee who seeks new challenges. I am a Full Stack Software Engineer that specializes in the MERN stack. On the side I'm pursuing an IBM Full Stack Cloud Developer Certification and I'm a volunteer co-organizer for NYC Coders. My extracurricular activities include running marathons, traveling, watching anime, playing video games and building computers.</p>
              </article>

              <img className = "about-ki-sub-profile" src ={kisub} alt ="kisub's profile"/>
              <article  className = "about-ki-sub-bio">
              <h3>Ki Sub Lee</h3>
              <p>Full Stack Web developer with a background in studio art. 
              I have a great interest in building visually beautiful and engaging apps. I am currently working to understand how tech can help more people learn about stories that often remain untold and preserve those stories for the future generations to come, starting right here in the USA.
              During my spare time, I like to run, paint, or play soccer.</p>
              </article>

              <img className = "about-jalamang-profile"src ={jalamang} alt ="jalamang's profile"/>
              <article className = "about-jalamang-bio">
                <h3>Jalamang Janka</h3>
                  Self-motivated, results-driven, and passionate about technology, constantly learning and self-educating in today's ever-changing IT field in order to meet the demands of the employer. I completed a bachelor's degree in Computer Information Systems with fundamental knowledge in Java, Python, CSS, JavaScript, and SQL/Oracle Database.
              </article>
            </div>

      </main>
    );
  }
}
