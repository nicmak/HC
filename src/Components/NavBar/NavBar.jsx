import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import AppBar from 'material-ui/AppBar'
import './Styles/NavBar.css'


export default class NavBar extends Component {
	render() {
		return (
		<section>
		  <AppBar
		    style={{backgroundColor:'#ef3954'}}
		    title="HyperCare"
		    titleStyle={{fontFamily:'Poppins'}}
		    showMenuIconButton={false}		    
		  />

		</section>

		)
	}
}