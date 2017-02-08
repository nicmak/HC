import React, {Component} from 'react'
import './Styles/PhoneViews.css'
export default class PhoneViews extends Component {
	render() {
      console.log(this.props.phoneValue)
		return (
		  <div className='PhoneView'>

		  {
		  	this.props.phoneValue===1 ?
        <div className='pic1'></div>
        :null
		  }
		  {
		  	this.props.phoneValue===2 ?
        <div className='pic2'></div>
        :null
		  }
		  {
		  	this.props.phoneValue===3 ?
        <div className='pic3'></div>
        :null
		  }
		  {
		  	this.props.phoneValue===4 ?
        <div className='pic4'></div>
        :null
		  }

      </div>
		
      

		)
	}
}