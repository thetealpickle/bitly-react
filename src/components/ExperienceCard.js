import React, { Component } from 'react';

class ExperienceCard extends Component {
	constructor(props) {
		super(props);
		
		this.imageRef = React.createRef();
		this.state = { spans: 0};
	}

        setSpans = () => {
                console.log(this.imageRef.current.clientHeight);

                const height = this.imageRef.current.clientHeight;
                const spans = Math.ceil(height / 10);
                this.setState({ spans });
        }

	setImageOrVideo = () => {
		if (this.props.obj.type == 'image') {
			return (<img ref={this.imageRef} src={this.props.obj.ref}/>);
		} else {
			return (
				<video ref={this.imageRef} controls>
					<source src={this.props.obj.ref} type='video/mov' />
				</video>
			);
		}
	}
	
        componentDidMount() {
		this.imageRef.current.addEventListener('load', this.setSpans);
        }	

	render() {
		return(
			<div style={{gridRowEnd: `span ${this.state.spans}`}}>
				{this.setImageOrVideo()}
			</div>
		);
	}
}

export default ExperienceCard;
