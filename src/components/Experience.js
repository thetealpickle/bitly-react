import React, { Component } from 'react';
import ExperienceCard from './ExperienceCard';

import jpg0 from '../images/0.JPG';
import jpg1 from '../images/1.JPG';
import jpg2 from '../images/2.JPG';
import png0 from '../images/3.PNG';
import png1 from '../images/4.PNG';
import jpg3 from '../images/5.JPG';
import jpg4 from '../images/6.JPG';
import jpg5 from '../images/7.JPG';
import jpg6 from '../images/8.JPG';
import jpg7 from '../images/9.JPG';

class Experience extends Component {
	constructor(props) {
		super(props);
		
		this.state = { spans: 0 };
	}

	experiences = [jpg0, jpg1, jpg2, png0, png1, jpg3, jpg4, jpg5, jpg6, jpg7];	

	createExperienceCard = (experience) => {
		return ( <ExperienceCard image={experience} />);
	}

	render() {
		return(
			<div className='experience--overview'>
				<div className='experiences--container'>
					{this.experiences.map(this.createExperienceCard)}
				</div>
			</div>
		);
	}
}

export default Experience;
