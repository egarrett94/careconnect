import React, { Component } from 'react';
import axios from 'axios';

class HelperLogin extends Component {
	constructor(props) {
		super(props) 
		this.state = {
			email: '',
			password: ''
		}
		this.handleEmailChange = this.handleEmailChange.bind(this)
		this.handlePasswordChange = this.handlePasswordChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
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

	handleSubmit(e) {
		e.preventDefault()
		axios.post('/auth/login/helper', {
			email: this.state.email,
			password: this.state.password
		}).then(result => {
			console.log(result.data)
			localStorage.setItem('mernToken', result.data.token)
			this.props.liftToken(result.data)
			//storing the user/email/pass in state, but 
			//storing the token in the localStorage.
			console.log('logged in')
		}).catch(err => console.log(err)) 
	}


	render() {

		return(
			<div className='row'>
				<div className='col s12 m6 offset-m3'>
					<form className="login" onSubmit={this.handleSubmit}>
						<h4>Helper Login: </h4>
						Email: <input type='text' value={this.state.email} onChange={this.handleEmailChange} /><br/>
						Password: <input type='password' value={this.state.password} onChange={this.handlePasswordChange} />
						<input className='btn waves-effect waves-light cyan darken-1' type='submit' value='Log In!' />
					</form>
				</div>
			</div>
		)

	}
}

export default HelperLogin;