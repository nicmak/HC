import React, { Component } from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import Staff from './Staff'

export default class About extends Component {
	render() {
		return (
    <Tabs
      tabItemContainerStyle={{backgroundColor:'#ef3954'}}
    >
      <Tab label="Who we are?">
        Tab1 Content
      </Tab>
      <Tab label="Our Staff">
        <Staff/>
      </Tab>
      <Tab label="Our Interns">
        
      </Tab>
      <Tab label="Our Advisors">
        Tab3 Content
      </Tab>
    </Tabs>
		)
	}
}