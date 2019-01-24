import React, { Component } from 'react';
import ExperienceCard from './ExperienceCard';

import jpg0 from '../images/0.JPG';
import jpg1 from '../images/1.JPG';
import jpg2 from '../images/2.JPG';

class Experience extends Component {
	constructor(props) {
		super(props);
	}

	experiences = [jpg0, jpg1, jpg2];	
	
	createExperienceCard = (experienceUrl) => {
		return <img src={experienceUrl} />;
	}

	render() {
		return(
			<div className='experience--container'>
				{this.experiences.map(this.createExperienceCard)}
			</div>
		);
	}
}

export default Experience;
