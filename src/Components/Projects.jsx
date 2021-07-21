import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

import user_direct from '../Assets/user_direct.png';
import mysql from '../Assets/MYSQL.PNG'
import paws from '../Assets/paws.png'
import budge from '../Assets/budge-it.PNG'
import letseat from '../Assets/lets_eat_caputre.JPG'
import fitness from '../Assets/Fitness.PNG'

const Cards = () => {
  return (
    <div>
    <div>
      <Row>
        <Col>
        <Card>
          <CardImg top width="100%" src={user_direct} alt="" />
            <CardBody>
              <CardTitle tag="h5">mySQL Directs People</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">A user/employee directory</CardSubtitle>
              <CardText>Built with mySQL, JavaScript, Node.js, and React.js</CardText>
              <a href="https://github.com/j-toups/React-DIrects-People">
              <Button>GitHub</Button>
              </a>
              <br></br>
              <br></br>
              <a href="https://user-directoryyyyyy.herokuapp.com/">
              <Button>Heroku</Button>
              </a>
            </CardBody>
        </Card>
        </Col>
        <Col>
        <Card>
          <CardImg top width="100%" src={mysql} alt="" />
            <CardBody>
              <CardTitle tag="h5">mMySQL Mischief Managed</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">A Node.js App for Managers </CardSubtitle>
              <CardText>Allows a manager to add, edit, and delete employee information</CardText>
              <a href="https://github.com/j-toups/React-DIrects-People">
              <Button>GitHub</Button>
              </a>
              <br></br>
              <br></br>
              <a href="https://youtu.be/a7l_E4nHKkM">
              <Button>YouTube</Button>
              </a>
            </CardBody>
        </Card>
        </Col>
        <Col>
        <Card>
          <CardImg top width="100%" src={budge} alt="" />
            <CardBody>
              <CardTitle tag="h5">Budge-It</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">A Budget Tracker Tool</CardSubtitle>
              <CardText>Built with mySQL, JavaScript, and React.js</CardText>
              <a href ="https://github.com/j-toups/Budge-It">
              <Button>GitHub</Button>
              </a>
              <br></br>
              <br></br>
              <a href="https://mysterious-hollows-82099.herokuapp.com/">
              <Button>Heroku</Button>
              </a>
            </CardBody>
        </Card>
        </Col>
        
        
      </Row> 
    </div>
    <div>
      <Row>
        <Col>
          <Card>
            <CardImg top width="100%" src={paws} alt="" />
              <CardBody>
                <CardTitle tag="h5">Paws N Claws</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">A Pet Adoption App</CardSubtitle>
                <CardText>Built with mySQL, JavaScript, and React.js</CardText>
                <a href="https://github.com/j-toups/Paws-and-Claws">
                <Button>GitHub</Button>
                </a>
                <br></br>
                <br></br>
                <a href="https://pawsandclawss.herokuapp.com/">
                <Button>Heroku</Button>
                </a>
              </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardImg top width="100%" src={fitness} alt="" />
              <CardBody>
                <CardTitle tag="h5">Fit Goose</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">A Fitness Tracker App</CardSubtitle>
                <CardText>Built with Mongoose, MongoDB, JavaScript, and Models, and Routes</CardText>
                <a href="https://github.com/j-toups/Fit_Goose">
                <Button>GitHub</Button>
                </a>
                <br></br>
                <br></br>
                <a href="https://afternoon-wildwood-14941.herokuapp.com/?id=60eb9a3e4be1ec00152f9b10">
                <Button>Heroku</Button>
                </a>
              </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardImg top width="100%" src={letseat} alt="" />
              <CardBody>
                <CardTitle tag="h5">Let's Eat</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">A Food and Drink Pairing App </CardSubtitle>
                <CardText>Built with HTML, CSS, Tailwinds, Javascript, JQuery, and APIs</CardText>
                <a href="https://github.com/j-toups/letseats">
                <Button>GitHub</Button>
                </a>
                <br></br>
                <br></br>
                <a href = "https://j-toups.github.io/letseat/">
                <Button>GitHub Pages</Button>
                </a>
              </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
    </div>
  );
};

export default Cards;

