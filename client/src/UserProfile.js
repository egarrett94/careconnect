import React from 'react';

const UserProfile = (props) => {
	return (
		<div>
			<p>Hello, {props.user.firstName}</p>
			<a onClick={props.logout}>Log Out!</a>
		</div>
	)
}

export default UserProfile;