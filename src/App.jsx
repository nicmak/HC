import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './Components/NavBar/NavBar.jsx'
import Footer from './Components/Footer/Footer'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


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


