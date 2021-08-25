import React from 'react'
import './Contact.css'
function Contact({ index, active }) {
	return (
		<div
			className={`contact ${
				active === index ? 'display' : 'notDisplay'
			}`}>
			<h1>Contact</h1>
		</div>
	)
}

export default Contact
