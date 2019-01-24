import React, { Component } from 'react';
import '../css/App.css';

import Heading from './Heading';
import Links from './Links';
import About from './About';
import Project from './Project';
import Experience from './Experience';

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			'links': [
				{
					'name': 'linkedin',
					'url': 'https://linkedin.com/in/theflawlesshack'
				}, 
				{
					'name': 'twitter',
					'url': 'https://twitter.com/theflawlesshack'
				},
				{
					'name': 'youtube',
					'url': 'https://youtube.com/theflawlesshack'
				}, 
				{
					'name': 'instagram',
					'url': 'https://instagram.com/theflawlesshack'
				},	
				{
					'name': 'github',
					'url': 'https://github.com/theflawlesshack'
				}, 
				{
					'name': 'devpost',
					'url': 'https://devpost.com/theflawlesshack'
				},
			]
		}
	}

	render() {
		return (
      <div className="App">
				<Heading />
				<Links links={this.state.links} />
				<About />
				<Project />
				<Experience />
      </div>
    );
  }
}

export default App;
