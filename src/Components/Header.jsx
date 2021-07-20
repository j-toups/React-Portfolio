import React from "react";
import "./Header.css";
import { Jumbotron, Container } from 'reactstrap';
import landingPhoto from '../Assets/mnt_landscape.jpg';


export default function Header(){
    return (
        <div>
            <Jumbotron style={{backgroundImage:`url(${landingPhoto})`, backgroundSize:'cover'}}>
                <Container>
                    <div class="header">
                        <h1 class="header h1">Coder [at Law]</h1>
                        <div class="header">
                            <ul>
                                <li><a href="https://github.com/j-toups">Git Hub</a></li>
                                <li><a href="#contact">Contact</a></li>
                                <li><a href="#work">Recent Work</a></li>
                                <li><a href="#aboutme">About</a></li> 
                            </ul>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
        </div>
    )
}