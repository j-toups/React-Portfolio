import React from 'react'
import { Grid, Cell } from 'react-mdl'
import Header from '../Components/Footer'
import headshot from '../Assets/casual_headshot.jpg'


export default function Landing() {
    return (
       <div style={{width: '100%', margin: 'auto'}}>
         <div>
            <Grid>
                 <Cell col={12}>
                    <Header/>
                    <img  src={headshot}></img>
                    <p>HEY</p>
                    
                 </Cell>     
            </Grid>
         </div>
       </div> 
    )
}
  