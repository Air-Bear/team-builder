import React, {useState} from 'react';
import {Row, Col, Button, Form, FormGroup, Label, Input} from "reactstrap";

function TeamForm (props){
	const [member, setMember] = useState({
		name: "",
		email: "",
		role: "",
		id: Date.now()
	});

	const changeHandler = (event) => {
		setMember({
			...member,
			[event.target.name]: event.target.value
		});
	};

	return(
		<Form onSubmit={event => {
			event.preventDefault();
			props.addMember(member);
			setMember({
				name: "",
				email: "",
				role: "",
				id: Date.now()
			});
		}}>
	        <Row>
	          <Col>
	            <FormGroup sm="4">
	              <Label for="memberName">Name</Label>
	              <Input 
	              	type="text" 
	              	name="name" 
	              	id="memberName" 
	              	placeholder="name" 
	              	value = {member.name}
	              	onChange={changeHandler}
	            />
	            </FormGroup>
	          </Col>
	          <Col>
	            <FormGroup sm="4">
	              <Label for="memberEmail">email</Label>
	              <Input 
	              	type="email" 
	              	name="email" 
	              	id="memberEmail" 
	              	placeholder="email" 
	              	value = {member.email}
	              	onChange={changeHandler}
	            />
	            </FormGroup>
	          </Col>
	          <Col>
	            <FormGroup sm="4">
	              <Label for="roleSelect">role</Label>
	              <Input 
	              	type="select" 
	              	name="role" 
	              	id="roleSelect"
	              	value={member.role}
	              	onChange={changeHandler}
	              >
	                <option>Full-stack web dev</option>
	                <option>Database Manager</option>
	                <option>Front-end Developer</option>
	                <option>Back-end Developer</option>
	                <option>Customer Service Manager</option>
	              </Input>
	            </FormGroup>
	          </Col>
	        </Row>
	        <Button>Submit</Button>
	      </Form>
	);
}

export default TeamForm;