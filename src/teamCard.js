import React from 'react';
import {Col, Card, CardBody, CardTitle, CardSubtitle, CardText} from "reactstrap";

function TeamBuilder (props){
	return(
		<Col>
          <Card>
            <CardBody >
              <CardTitle>{props.member.name}</CardTitle>
              <CardSubtitle>{props.member.role}</CardSubtitle>
              <CardText>{props.member.email}</CardText>
            </CardBody>
          </Card>
        </Col>
    );
}

export default TeamBuilder;