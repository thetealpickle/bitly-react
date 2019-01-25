import React, { Component } from 'react';

import vomitIcon from '../images/vomit.png';
import loveIcon from '../images/in-love.png';
import grinIcon from '../images/grinning.png';
import heartIcon from '../images/love.png';

class About extends Component {
	render() {
		return(
		<div id ="about--container">
        		<p>January 2019, I was a Bitly Wintern [A winter intern, hehe, do you get it?].<br /><br />

        		Throughout my time at Bitly I had the opportunity to explore frontend web development.<br />
        		Previous to my experience at Bitly I did not enjoy web development. Working with javascript <img src={vomitIcon} />, angular, ew.<br />
			But, I have come to appreciate web development, in a new light, in a typescript + react <img src={loveIcon} /> light.<br />
        		Thank you to Zee, Vic, Kevin, Makayla, Kathy and my Wintern crew [Shannon, Lubna, Aisha, and Michelle], whoop whoop <img src={heartIcon} /> <br /><br />
        		Because of all of you, WebVR projects wIlL b3 iN mY fUtURe!!<br /><br />
			Extending a huge thank you to everyone at Bitly for all of the warm interactions and knowledge.<br /> I learned something new from everyone I spoke to. Customer Success team, thanks for the fire jams! You are all so dope, it was cool finding out about some of your hobbies like 3D printing and making music!!!
			<br />
			Fun fact, I built this site using React <img src={grinIcon} /></p>
		</div>
		);
	}
}

export default About;
