import React from 'react';
import map from '../Assets/Seattle_map.png'
import { Grid, Cell } from 'react-mdl';
import '../Components/style.css';



export default class Contact extends React.Component{
   render() {
    return (
      <div>
         <Grid>
               <Cell col={12}>
                  <div className ='photo-box'>
                     <div className='innerBox'>
                        <img className='photo'src={map} style={{width:'100%', height:'100%'}}></img>
                     </div>
                  </div>
               </Cell>     
               <Cell>
                  <p></p>
                  
               </Cell>
         </Grid>
      </div>
   )}
};
  