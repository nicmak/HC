import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import './Styles/NavBar.css'



const styles = {
  buttons: {
    color:'#ef3954',
    textTransform: 'capitalize',
    fontFamily:'Poppins, sans-serif'
  }
}

export default class NavBar extends Component {
	render() {
		
		const rightElements = (
			<div className='NavBar-Buttons'>
			  <FlatButton 
          label='Home' 
          labelStyle={styles.buttons}
          href='/'
          hoverColor='rgba(226, 111, 74, 0.5)'
        />
			  <FlatButton 
          label='Product' 
          labelStyle={styles.buttons}
          href='/product'
          hoverColor='rgba(226, 111, 74, 0.5)'
        />
        <FlatButton 
          label='Contact Us' 
          labelStyle={styles.buttons}
          href='/contact'
          hoverColor='rgba(226, 111, 74, 0.5)'
        />
        <FlatButton 
          label='About Us' 
          labelStyle={styles.buttons}
          href='/about'
          hoverColor='rgba(226, 111, 74, 0.5)'
        />
      </div>
		)

		// const leftElement = (
  //     <div className='logo'>
  //     Hypercare
  //     </div>
		// )
		return (
		  <AppBar
		    className="NavBar"
        title='Hypercare'
		    titleStyle={{
		    	color:'#ef3954',
		    	fontFamily:'Poppins, sans-serif'
		    }}
		    showMenuIconButton={false}
		    style={{backgroundColor:'white'}}
		    iconElementRight={rightElements}
		    // #ef3954
		  >
		  </AppBar>
		)
	}
}