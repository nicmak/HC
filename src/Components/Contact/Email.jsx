import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import {orange500} from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton';

import './Styles/Email.css'

export default class Email extends Component {

	
	render() {
		const styles = {
	  nameStyle: {
	    borderColor: orange500

	  }
  }
		return (
    
    <section>
      <div className='emailFill'>
        <div className='names'>
          <label>First Name</label>
	        <TextField
	          className="name"
	          hintText='First Name'
	          underlineFocusStyle={styles.nameStyle}
	          inputStyle={{color:'rgba(29, 4, 4, 0.59)'}}

	        />
	        <label>Last Name</label>
	        <TextField
	          className='name'
	          hintText='Last Name'
	          underlineFocusStyle={styles.nameStyle}
	          inputStyle={{color:'rgba(29, 4, 4, 0.59)'}}

	        />
	        <label>Email Address</label>
	        <TextField
	          className='name'
	          hintText='Email Address'
	          underlineFocusStyle={styles.nameStyle}
	          inputStyle={{color:'rgba(29, 4, 4, 0.59)'}}
	        />
	        <RaisedButton
	          label='Submit'
	          backgroundColor='orange'
	        />

        </div>
        <div className='message'>
      	<label>Message</label>
        <TextField
          hintText='Enter your message here...'
          underlineFocusStyle={styles.nameStyle}
          multiLine={true}
          style={{width:'450px'}}
          inputStyle={{color:'rgba(29, 4, 4, 0.59)'}}
        />
        </div>
        <div className='contact-info'>
          <label>Our Toll Free Number</label>
          <p>1-844-688-9868</p>
          <br/>
          <label>Our Email</label>
          <p>Information: info@hypercare.ca</p>
          <p>Support: support@hypercare.ca</p>
          <br/>
          <label>Our Headquarters</label>
          <p>88 College Street</p>
          <p>Toronto, Ontario</p>
          <p>Canada</p>
          <br/>

        </div>
      </div>
      
    </section>
		)
	}
}