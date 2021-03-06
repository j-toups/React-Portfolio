import React from 'react';
import map from '../Assets/Seattle_map.png'
import { Grid, Cell } from 'react-mdl';
import '../Components/style.css';
import Footer from '../Components/Footer'




export default class Contact extends React.Component{
   render() {
    return (
      <div className='bodyOdy'>
         <Grid>
               <Cell col={12}>
                  <div className ='photo-box'>
                     <div className='innerBox'>
                        <img className='photo'src={map} style={{width:'100%', height:'100%'}} alt=""></img>
                     </div>
                  </div>
               </Cell>     
               <Cell>
               <div className='photo-box'>
                     <div >
                     <br/>
                        <p> Email: coderatlaw@gmail.com </p>
                           
                        <p>Follow me on <a href ="https://github.com/j-toups">Git Hub!</a> </p>
                            
                        <p>Let's connect on <a href="https://www.linkedin.com/in/joseph-toups-05376884">LinkedIn</a></p>
                            
                    </div>
                    </div>
                  
               </Cell>
               <Footer></Footer>
         </Grid>
      </div>
   )}
};
  