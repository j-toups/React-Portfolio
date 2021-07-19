import React from 'react'
import { Grid, Cell } from 'react-mdl'
import headshot from '../Assets/casual_headshot.jpg';


export default function About() {
    return (
        <div>
          <Grid>
              <Cell col={6}>
                  <h2>Joseph Toups</h2>
                  <img className="profile-pic"  src={headshot} alt="" />
                  <p> I am a licensed Washington attorney making law go, 'beep bop boop.'</p>
                  <p>I thrive in a supportive problem-solving environment, and the outdoors are my favorite escape.
                My mission is to make quality legal solutions efficient and accessible.</p>
              </Cell>  
          </Grid>
        </div>
    )
}