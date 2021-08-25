import React from 'react'
import './Projects.css'
function Projects({ index, active }) {
	return (
		<div
			className={`projects ${
				active === index ? 'display' : 'notDisplay'
			}`}>
			<h1>Projects</h1>
		</div>
	)
}

export default Projects
