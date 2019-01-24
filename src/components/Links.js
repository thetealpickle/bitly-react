import React, { Component } from 'react';

import Link from './Link';

class Links extends Component {
	constructor(props) {
		super(props);
	}
	
	createLink = (link) => {
		return(
			<Link name={link.name} url={link.url} />
		);
	}

	render() {
		return(
			<div>
				{this.props.links.map(this.createLink)}
			</div>
		);
	}
};

export default Links;

