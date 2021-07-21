import React from 'react'
import headshot from '../Assets/casual_headshot.jpg';
import { Grid, Cell } from 'react-mdl';
import '../Components/style.css';
import  Button  from '../Components/Button';

 const About = () => {
    return (
        <div>
            <Grid>
                 <Cell col={12}>
                    <div className ='photo-box'>
                        <div className='innerBox'>
                            <img className='photo'src={headshot} style={{width:'100%', height:'100%'}}></img>
                        </div>
                    </div>
                 </Cell>
                 <br></br>
                 <Cell col ={12}>
                     <div className='photo-box'>
                     <div className='innerBox'>
                        <p> I am a licensed Washington attorney making law go, 'beep bop boop.' 
                            <br></br>
                            <br></br>
                            I thrive in a supportive problem-solving environment, and the outdoors are my favorite escape.
                            <br></br>
                            <br></br>
                            My mission is to make quality legal solutions efficient and accessible</p>
                            
                    </div>
                    </div>
                </Cell>
                <Cell>
                    <div className='button-box'>
                        <div>
                            <Button/>
                        </div>
                    </div>
                </Cell>     
            </Grid>
        </div>
    )}

export default About