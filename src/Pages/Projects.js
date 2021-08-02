import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Footer from '../Components/Footer';
import Cards  from '../Components/Projects';
import '../Components/style.css';



export default class Project extends React.Component{
    render() {
    return (
        <div className='bodyOdy'>
          <div>
            <Grid className='project-grid'>
                 <Cell col={12}>
                   <Cards/>
                 </Cell>     
            </Grid>
         </div>
         <Footer/>
    </div>
    )}
};
