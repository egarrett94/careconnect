import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar} from 'react-materialize';

class Nav extends Component {

	constructor(props) {
		super(props)

		this.state = {
			user: this.props.user,
			
		}
	}

	render(){
		return(
			<Navbar className='yellow darken-2 right'>
				<li><Link to='/'>Home</Link></li>
		        <li><Link to='/helpers'>Helper Portal</Link></li>
		        <li><Link to='/patients'>Patient Portal</Link></li>
		        <li><Link to='/about'>About The Developer</Link></li>
			</Navbar>
	
		)
	}

}

export default Nav;
