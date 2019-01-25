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

	experiences = [{type:'image', ref:jpg0}, 
			{type: 'image', ref: jpg1}, 
			{type: 'image', ref: jpg2}, 
			{type: 'image', ref: png0}, 
			{type: 'image', ref: png1}, 
			{type: 'image', ref: jpg3}, 
			{type: 'image', ref: jpg4}, 
			{type: 'image', ref: jpg5}, 
			{type: 'image', ref: jpg6}, 
			{type: 'image', ref: jpg7}, 
			];

	createExperienceCard = (experience) => {
		return ( <ExperienceCard obj={experience} />);
	}

	render() {
		return(
			<div className='experience--overview'>
				<h2>Experiences</h2>
				<div className='experiences--container'>
					{this.experiences.map(this.createExperienceCard)}
				</div>
			</div>
		);
	}
}

export default Experience;
