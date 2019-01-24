import React, { Component } from 'react';

class Link extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className='link--container'>
				<a href={this.props.url}>{this.props.name}</a>
			</div>
		);
	}
}

export default Link;
