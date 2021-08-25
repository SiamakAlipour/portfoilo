import React from 'react'
import './Intro.css'
function Intro({ active, index }) {
	return (
		<div className={`intro ${active === index ? 'display' : 'notDisplay'}`}>
			<h1>Intro Component</h1>
		</div>
	)
}

export default Intro
