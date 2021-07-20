import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Footer from '../Components/Footer';
import Cards  from '../Components/Projects';



export default class Projects extends React.Component{
    render() {
    return (
        <div>
          <div style={{width: '100%', margin: 'auto'}}>
            <Grid className='project-grid'>
                 <Cell col={12}>
                   <Cards/>
                   <p>WHATS UP</p>
                 </Cell>     
            </Grid>
         </div>
         <Footer/>
    </div>
    )}
};
