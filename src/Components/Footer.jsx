import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import landingPhoto from '../Assets/mnt_landscape.jpg';


export default function Header(){
    return (
        <div>
          <div className="footer">
            <footer class="py-1 bg-dark fixed-bottom">
              <div class="container">
                <p class="m-0 text-center text-white">
                Copyright &copy; Joseph Toups 2021
                </p>
              </div>
            </footer>
          </div>  
        </div>
    )
}

