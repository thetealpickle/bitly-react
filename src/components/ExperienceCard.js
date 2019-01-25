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

        componentDidMount() {
		this.imageRef.current.addEventListener('load', this.setSpans);
        }	

	render() {
		return(
			<div style={{gridRowEnd: `span ${this.state.spans}`}}>
				<img ref={this.imageRef} src={this.props.image}/>
			</div>
		);
	}
}

export default ExperienceCard;
