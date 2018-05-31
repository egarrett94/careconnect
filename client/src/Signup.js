import React, { Component } from 'react';
import axios from 'axios';
import { Input } from 'react-materialize';

class Signup extends Component {
	constructor(props) {
		super(props) 
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			age: 0,
			location: 0,
			gender: '',
			selectedType: ''
		}
		this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
		this.handleLastNameChange = this.handleLastNameChange.bind(this)
		this.handleEmailChange = this.handleEmailChange.bind(this)
		this.handlePasswordChange = this.handlePasswordChange.bind(this)
		this.handleLocationChange = this.handleLocationChange.bind(this)
		this.handleAgeChange = this.handleAgeChange.bind(this)
		this.handleGenderChange = this.handleGenderChange.bind(this)
		this.handleRadioChange = this.handleRadioChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleFirstNameChange(e) {
		this.setState({
			firstName: e.target.value
		})
	}
	handleLastNameChange(e) {
		this.setState({
			lastName: e.target.value
		})
	}
	handleEmailChange(e) {
		this.setState({
			email: e.target.value
		})
	}
	handlePasswordChange(e) {
		this.setState({
			password: e.target.value
		})
	}
	handleLocationChange(e) {
		this.setState({
			location: e.target.value
		})
	}
	handleAgeChange(e) {
		this.setState({
			age: e.target.value
		})
	}
	handleGenderChange(e) {
		this.setState({
			gender: e.target.value
		})
	}
	handleRadioChange(e) {
		this.setState({
			selectedType: e.target.value
		})
	}

	handleSubmit(e) {
		e.preventDefault()
		console.log(this.state.selectedType)
		axios.post('/auth/signup', {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			password: this.state.password,
			gender: this.state.gender,
			location: this.state.location,
			age: this.state.age,
			selectedType: this.state.selectedType

		}).then(result => {
			//result.data is where axios puts the stuff 
			//that it gets back from the axios calls
			console.log(result.data)
			//this would be better named as something 
			//related to your app's name but whatever
			localStorage.setItem('mernToken', result.data.token)
			this.props.liftToken(result.data)
			//storing the user/email/pass in state, but 
			//storing the token in the localStorage.
		})
	}


	render() {

		return(
			<div className='row'>
				<div className='col s12 m8 offset-m2'>
					<form className="signup" onSubmit={this.handleSubmit}>
						
						<p><span>First Name: </span><input type='text' value={this.state.firstName} onChange={this.handleFirstNameChange} label="First Name" /></p><br/>
						<p><span>Last Name: </span><input type='text' value={this.state.lastName} onChange={this.handleLastNameChange} /></p><br/>
						<p><span>Zip Code: </span><input type='text' value={this.state.location} onChange={this.handleLocationChange} /></p>
						<p>Gender: <Input s={12} type='select' value={this.state.gender} onChange={this.handleGenderChange}>
							  <option value="woman">Woman</option>
							  <option value="man">Man</option>
							  <option value="non-binary">Non-Binary</option>
							  <option value="genderfluid">Genderfluid</option>
							 </Input></p><br/><br/>
						<p><span>Age: </span><input type='text' value={this.state.age} onChange={this.handleAgeChange} /></p><br/>
						<p><span>Email: </span><input type='text' value={this.state.email} onChange={this.handleEmailChange} /></p><br/>
						<p><span>Password: </span><input type='password' value={this.state.password} onChange={this.handlePasswordChange} /></p>
						
						<div className='radio-buttons'>
							<span>I'm signing up as a: </span> <br/>
								<Input type='radio' name='typeofuser' value='helper' checked={this.state.selectedType === 'helper'} onChange={this.handleRadioChange} label="Helper!" />
								<Input type='radio' name='typeofuser' value='patient' checked={this.state.selectedType === 'patient'} onChange={this.handleRadioChange} label="Patient!" /> <br />
						</div>
						<input type='submit' className='btn waves-effect waves-light pink' value='Sign Up!' />
					</form>
				</div>
			</div>
		)

	}
}

export default Signup;