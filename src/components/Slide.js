import React from 'react'
import Slideoptions from './Slideoptions'
import './Slide.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setSlideIndex } from '../store/actions/actions'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

function Slide() {
	const slide = useSelector((state) => state.slide)
	const dispatch = useDispatch()

	return (
		<div className='slide'>
			<Slideoptions
				index={0}
				active={slide}
				onClick={() => dispatch(setSlideIndex(0))}
			/>

			<Slideoptions
				index={1}
				active={slide}
				onClick={() => dispatch(setSlideIndex(1))}
			/>

			<Slideoptions
				index={2}
				active={slide}
				onClick={() => dispatch(setSlideIndex(2))}
			/>

			<Slideoptions
				index={3}
				active={slide}
				onClick={() => dispatch(setSlideIndex(3))}
			/>
		</div>
	)
}

export default Slide
