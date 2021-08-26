import React from 'react'
import './ProjectPosts.scss'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import GitHubIcon from '@material-ui/icons/GitHub'
import { projectsData as data } from '../projectsData'

function ProjectPosts() {
	return (
		<div className='projectPosts'>
			<div className='projectPosts__items'>
				<h1>{data[0].name}</h1>
				<h2>{data[0].language}</h2>
				<div className='projectPosts__items--footer'>
					<a href={data[0].github}>
						<GitHubIcon />
					</a>
				</div>
			</div>
			<div className='projectPosts__items'>test</div>
			<div className='projectPosts__items'>test</div>
			<div className='projectPosts__items'>test</div>
			<div className='projectPosts__items'>test</div>
			<div className='projectPosts__items'>test</div>
		</div>
	)
}

export default ProjectPosts
