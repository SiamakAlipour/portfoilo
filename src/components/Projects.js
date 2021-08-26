import React from 'react'
import './Projects.scss'
import { projectsData as data } from '../projectsData'
import ProjectPosts from './ProjectPosts'
import { Pagination } from '@material-ui/lab'
function Projects({ index, active }) {
	return (
		<div
			className={`projects ${
				active === index ? 'display' : 'notDisplay'
			}`}>
			<h1>Projects</h1>
			<Pagination count={2} />
			<ProjectPosts />
		</div>
	)
}

export default Projects
