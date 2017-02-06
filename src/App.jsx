import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'


export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <section>
          <NavBar/>
          {this.props.children}
          <Footer/>
        </section>
      </MuiThemeProvider>
    );
  }
}


