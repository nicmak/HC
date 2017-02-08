import React, { Component } from 'react'
import Email from './Email'
import './Styles/Contact.css'

export default class Contact extends Component {




	render() {
		return (
			<div>
			  <div className='contactImage'>
			    <h1>
			    Got A Question?
			    </h1>
			    <p>Don't be shy, we promise we will get back to you.</p>
			  </div>
			  <div className='email-container'>
          <Email/>
			  </div>
			  <div className="telephone">
			    <h3 className='number'>Call Us Today to Learn More at 1-844-688-9868 (Toll Free)</h3>
			    <p>Hours of Operation: Mon-Sun 9am - 9pm Eastern Time</p>
			  </div>
			</div>

		)
	}
}