import React from 'react'
import './About.css'

function About({ index, active }) {
	return (
		<div className={`about ${active === index ? 'display' : 'notDisplay'}`}>
			<h1>About Me</h1>
			<h3>Web Developer</h3>
			<h4>
				Majoring in Computer Engineering at Shahid Madani's University
			</h4>
			<p>
				Bio : Hello I am Siamak . I love coding and creating something
				new . When I was 13 , I realized that i love coding and started
				to learn HTML & CSS for creating my own blog template. After
				that I learned how I can make my own website template I started
				to learn some programming languages like Python and C# and I
				decided to choose Computer Engineering at university and I am
				very satisfied for my decision . After that I learned some C++
				at university i decided to continue Web Developing because I
				love JS .
			</p>
		</div>
	)
}

export default About
