import React, { Component } from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'

export default class About extends Component {
	render() {
		return (
    <Tabs
      tabItemContainerStyle={{backgroundColor:'#ef3954'}}
    >
      <Tab label="Who we are?">
        Tab1 Content
      </Tab>
      <Tab label="The Team">
      </Tab>
      <Tab label="The Advisors">
        Tab3 Content
      </Tab>
    </Tabs>
		)
	}
}