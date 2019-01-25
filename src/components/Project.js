import React, { Component } from 'react';

import mvpIcon from '../images/mvp.png';

class Project extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className='projects--container'>
				<h2>PR App</h2>
				<h2>A web application which organizes and manages live github pull request data.</h2>
				<img src={mvpIcon} />
				<p>The web application was created as a way to help the engineering team organize and manage pull request data.<br /><br />The application supports filtering pull request by tags, locally saving pull request, andlinking to the original pull request on github.<br /><br />Bitly specific pull request information such as title and desecription were whited out (lol, yes, there is usaully way more text).</p>
			</div>
		);
	}
}

export default Project;
