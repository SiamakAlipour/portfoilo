import React from 'react'
import './About.css'
function About({ index, active }) {
	return (
		<div className={`about ${active === index ? 'display' : 'notDisplay'}`}>
			<h1>About</h1>
		</div>
	)
}

export default About
