import React from 'react';
import background from '../Assets/mnt_landscape.jpg'
import { Grid, Cell } from 'react-mdl';
import '../Components/style.css';
import Footer from '../Components/Footer'
import Demo from '../Components/Banner'


export default class Landing extends React.Component{
   render() {
    return (
      <div>
         <Grid>
               <Cell col={12}>
                  <div className ='photo-box'>
                     <div className='innerBox'>
                        <img className='photo'src={background} style={{width:'100%', height:'100%'}} alt=""></img>
                        
                     </div>
                  </div>
               </Cell>    
              
               <br></br> 
               <br></br>
               <Cell>
                  <Demo></Demo>

               </Cell>
               <Footer></Footer>
         </Grid>
         
      </div>
   )}
};
  