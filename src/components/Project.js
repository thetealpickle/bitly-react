import React, { Component } from 'react';

class Project extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className='projects--container'>
				<h1>PR App</h1>
				<h2>A web application which organizes and manages live github pull request data.</h2>
			</div>
		);
	}
}

export default Project;
