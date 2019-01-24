import React, { Component } from 'react';

class ExperienceCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className='experience--container'>
				<img src={this.props.url} />
			</div>
		);
	}
}

export default ExperienceCard;
