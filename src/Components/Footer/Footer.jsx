import React, { Component } from 'react'
import './Styles/Footer.css'

export default class Footer extends Component {
	render() {
		return (
      <div className='Footer'>
		      <table className="Table">
		        <tr>
		          <th>Company</th>
		          <th>Legal</th>
		          <th>Contact</th>
		        </tr>
		        <tr>
		          <td>About Us</td>
		          <td>Privacy Policy</td>
		          <td>Contact Us</td>
		        </tr>
		        <tr><td>Mission</td></tr>
		        <tr><td>Partner</td></tr>
		        <tr><td>Career</td></tr>
		      </table>
      </div>
		)
	}
}