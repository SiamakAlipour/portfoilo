import React from 'react'
import './App.css'
import Intro from './Intro'
import Slide from './Slide'
import { useSelector } from 'react-redux'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
function App() {
	const slide = useSelector((state) => state.slide)
	return (
		<div className='app'>
			<Slide />
			{/* introduction */}
			<Intro index={0} active={slide} />
			{/* about me*/}
			<About index={1} active={slide} />
			{/* projects */}
			<Projects index={2} active={slide} />
			{/* contact */}
			<Contact index={3} active={slide} />
		</div>
	)
}

export default App
