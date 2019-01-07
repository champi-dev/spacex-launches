import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import './App.css'

import logo from './logo.svg'
import Launches from './components/Launches'
import Launch from './components/Launch'

const client = new ApolloClient({
  uri: '/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App" style={styles.container}>
            <img src={logo} alt="spacex" style={styles.image} />
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </div>
        </Router>
      </ApolloProvider>
    )
  }
}

const styles = {
  container: {
    padding: '1.5rem',
    maxWidth: '60rem',
    margin: '0 auto'
  },
  image: {
    width: '18.75rem',
    display: 'block',
    margin: 'auto',
    marginBottom: '3rem'
  }
}

export default App
