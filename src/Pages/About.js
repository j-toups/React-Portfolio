import React from 'react'
import headshot from '../Assets/casual_headshot.jpg';


 const About = () => {
    return (
        <div style={{width: '100%', margin: 'auto'}}>
          
                  <h2>Joseph Toups</h2>
                  <img className="profile-pic"  src={headshot} alt="" />
                  <p> I am a licensed Washington attorney making law go, 'beep bop boop.'</p>
                  <p>I thrive in a supportive problem-solving environment, and the outdoors are my favorite escape.
                My mission is to make quality legal solutions efficient and accessible.</p>
              
        </div>
    )}

export default About