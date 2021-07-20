import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

export default class Cards extends React.Component {
  render() {
  return (
    <div>
    <div>
      <Card className= 'project-card'>
        <CardImg top width="100%" src="../Assets/budge-it.PNG" alt="" />
        <CardBody>
          <CardTitle tag="h5">Budge-It</CardTitle>
          <CardText></CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
    </div>
    <div>
      <Card>
      <CardImg top width="100%" src="../Assets/MYSQL.PNG" alt="" />
        <CardBody>
          <CardTitle tag="h5">MySQL</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
    </div>
    </div>
  )}
};

