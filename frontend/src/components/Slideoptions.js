import React from 'react'
import './Slideoptions.scss'
function Slideoptions({ active, index, onClick }) {
	return (
		<span
			className={`slideoptions ${active === index && 'active'}`}
			onClick={onClick}></span>
	)
	// return <span className='slideoptions' onClick={onClick}></span>
}

export default Slideoptions
