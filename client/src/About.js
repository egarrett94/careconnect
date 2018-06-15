import React from 'react';
import Lemon from './Lemon.jpg';
import LinkedIn from './linkedin.png';
import GitHub from './github.png';
import Email from './email.png';

const About = () => {
	return(
		<div>
			<div className='row about-us-row'>
				<div className='col s12 m12 l8 offset-l2'>
					<h3 className='white-text about-us-title'>About Me</h3>
				</div>
			</div>
			<div className='row'>
				<div className='col s12 m12 l4 offset-l4'>
					<div className='col s12 center'>
						<img className='mostly-human-developer' src={Lemon} alt='Image of Emily Garrett, the developer of this app.'/>
						<br/>
						<h5 className='teal-text text-darken-2'>Emily "Lemon" Garrett</h5>
						<p className='grey-text text-lighten-1'><em>She/Her</em></p>
						<p className='about-desc'>Lemon is passionate about taking the opportunity to utilize the endless resources that technology provides to help those in need. She deeply believes in using technology for more than just creating the slickest new product or game; she believes in employing it to promote inclusivity and create change.</p>
						<div className='col s12 center socials'>
							<a href='http://www.github.com/egarrett94'><img className='social-icons' src={GitHub} alt='img'/></a>
							<a href='https://www.linkedin.com/in/emilymariegarrett94'><img className='social-icons' src={LinkedIn} alt='img'/></a>
							<a href='mail-to:e.marie.garrett@gmail.com'><img className='social-icons' src={Email} alt='img'/></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)

}

export default About;