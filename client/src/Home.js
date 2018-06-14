import React, { Component } from 'react';
import HelperIcon from './helpericon.png';
import PatientIcon from './patienticon.png';
import HomeImage from './homeimage.jpeg';
import {Link} from 'react-router-dom';

class Home extends Component { 
	
	constructor(props) {
		super(props);
		
	}

	render() {
		return(

		<div>
			<div className='row mainpage'>
				<div className='col s12 m4 typeselect'>
					<div className='row'>
						<div className='col s12 patientselect'>
							<Link to='/patients'><img className='selecticon' src={PatientIcon} alt='patient icon with a clipboard on it'/></Link>
							<Link to='/patients'><h5> I'm a Patient! </h5></Link>
						</div>
						<div className='col s12 helperselect'>
							<Link to='/helpers'><img className='selecticon' src={HelperIcon} alt='helper icon with a heart on it'/></Link>
							<Link to='/helpers'><h5> I'm a Helper! </h5></Link>
						</div>
					</div>
				</div>
				<div className='col s12 m8 maininfo'>
					<img className='homeimage' src={HomeImage} alt='hands in a circle, grasping each other to evoke a sense of community and support'/>
					<h5>You aren't in this alone.</h5>
					<p>Get some help with housework, child care, cooking or running errands.</p>
				</div>
			</div>
		</div>

		)
	}
}

export default Home;