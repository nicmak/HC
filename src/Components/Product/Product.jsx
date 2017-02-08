import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { connect } from 'react-redux'
import PhoneViews from './PhoneViews'
import './Styles/Product.css'

const mapStateToProps = (state) => {
	return {
		phoneReducer:state.phoneReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		pushButton: (value) => {
			dispatch({
		    type:'PHONE_BUTTON',
		    payload: {
		      value:value
		    }
			})
		}
	}
}

class Product extends Component {

	render() {
		console.log('look',this.props.phoneReducer)
		return (
		<section className='ProductPage-Container'>		   
		    <section className='Product-demo'>
			    <div className='Left-Buttons'>
			      <FloatingActionButton
			        className='button1'
			        backgroundColor='rgba(210, 226, 29, 0.66)'
			        onClick={()=>this.props.pushButton(1)}

			      >
            	<ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton
              className='button1'
			        backgroundColor='rgba(210, 226, 29, 0.66)'
			        onClick={()=>this.props.pushButton(2)}
			      >
            	<ContentAdd />
            </FloatingActionButton>

			    </div>
        <div className='Phone'>
        {
          this.props.phoneReducer.value ? 
          <PhoneViews
            phoneValue={this.props.phoneReducer.value}
          />
          :null
        	
        }
          

        </div>
        <div className='Right-Buttons'>

        <FloatingActionButton
			        className='button1'
			        backgroundColor='rgba(210, 226, 29, 0.66)'
			        onClick={()=>this.props.pushButton(3)}
			      >
            	<ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton
              className='button1'
			        backgroundColor='rgba(210, 226, 29, 0.66)'
			        onClick={()=>this.props.pushButton(4)}
			      >
            	<ContentAdd />
            </FloatingActionButton>
        
        </div>











		    </section>
		   
		    









		    <section className='Problem'>
		      <div className='Picture'>
		      </div>
		      <div className='Explaination'>
		      Deep v 3 wolf moon aesthetic PBR&B. Marfa chicharrones bushwick butcher schlitz, 
		      occupy craft beer freegan roof party. Taxidermy pitchfork letterpress, knausgaard synth 
		      mixtape paleo tumblr. Mumblecore selvage brunch 3 wolf moon, gluten-free gentrify 
		      activated charcoal craft beer kale chips. Bushwick waistcoat pitchfork, synth pintere
		      st humblebrag banh mi you probably haven't heard of them air plant hell of before 
		      they sold out tbh pok pok salvia actually. Pok pok craft beer gastropub activated charcoal. 
		      Vexillologist cronut raclette, selvage hexagon kale chips crucifix.
		      </div>
		    </section>
		    
		    <section className='Solution'>
		      <div className='Picture'>
		      </div>
		      <div className='Explaination'>
		      Deep v 3 wolf moon aesthetic PBR&B. Marfa chicharrones bushwick butcher schlitz, 
		      occupy craft beer freegan roof party. Taxidermy pitchfork letterpress, knausgaard synth 
		      mixtape paleo tumblr. Mumblecore selvage brunch 3 wolf moon, gluten-free gentrify 
		      activated charcoal craft beer kale chips. Bushwick waistcoat pitchfork, synth pintere
		      st humblebrag banh mi you probably haven't heard of them air plant hell of before 
		      they sold out tbh pok pok salvia actually. Pok pok craft beer gastropub activated charcoal. 
		      Vexillologist cronut raclette, selvage hexagon kale chips crucifix.

		      </div>
		    </section>
		    
		    <section className='Satisfied'>
		    <div className='Picture'>
		      </div>
		      <div className='Explaination'>
		      Deep v 3 wolf moon aesthetic PBR&B. Marfa chicharrones bushwick butcher schlitz, 
		      occupy craft beer freegan roof party. Taxidermy pitchfork letterpress, knausgaard synth 
		      mixtape paleo tumblr. Mumblecore selvage brunch 3 wolf moon, gluten-free gentrify 
		      activated charcoal craft beer kale chips. Bushwick waistcoat pitchfork, synth pintere
		      st humblebrag banh mi you probably haven't heard of them air plant hell of before 
		      they sold out tbh pok pok salvia actually. Pok pok craft beer gastropub activated charcoal. 
		      Vexillologist cronut raclette, selvage hexagon kale chips crucifix.

		      </div>
		    </section>
    </section>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Product) 
