import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import landingPhoto from '../Assets/mtn_landscape.jpg';


export default function Landing(){
    return(
        <div>
            <Jumbotron style={{backgroundImage:`url(${landingPhoto})`, backgroundSize:'cover'}}>
                <Container >
                </Container>
            </Jumbotron>
        </div>
    )
}

