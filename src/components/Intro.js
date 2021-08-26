import React from 'react'
import './Intro.scss'

function Intro({ active, index }) {
	return (
		<div className={`intro ${active === index ? 'display' : 'notDisplay'}`}>
			<h1>Siamak Alipour Fard</h1>

			<p>Welcome to my portfoilo</p>
		</div>
	)
}

export default Intro
