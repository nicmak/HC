import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import AppBar from 'material-ui/AppBar'
import './Styles/NavBar.css'

const style = {
 	button: {
 		fontFamily:'Poppins',
    color:'#ef3954',
    textTransform:'capitalize'
 	}
 }
export default class NavBar extends Component {
 

	render() {
		
	
  

		return (
		<section>
		  <AppBar
		    className='NavBar'
		    style={{backgroundColor:'white'}}
		    title="HyperCare"
		    titleStyle={{fontFamily:'Poppins', color:'#ef3954'}}
		    showMenuIconButton={false}		
		  >
		    <FlatButton
	        label='Home'
	        href='/'
	        hoverColor='rgba(255, 87, 34, 0.5)'
	        labelStyle={style.button}
	      />
		    <FlatButton
	        label='Product'
	        href='/product'
	        hoverColor='rgba(255, 87, 34, 0.5)'
	        labelStyle={style.button}
	      />
	      <FlatButton
	        label='Contact Us'
	        href='/contact'
	        hoverColor='rgba(255, 87, 34, 0.5)'
	        labelStyle={style.button}
	      />
	      <FlatButton
	        label='About Us'
	        href='/about'
	        hoverColor='rgba(255, 87, 34, 0.5)'
	        labelStyle={style.button}
	      />
	    </AppBar>

		</section>

		)
	}
}