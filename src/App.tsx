import React, { Component } from 'react'
import './App.css'
import SiteBar from './home/Navbar'
import Auth from './components/auth/Auth'

type AppState = {
  token: string
}

// Using TS with Legacy, React.Component takes in three generic types(can view w/ tooltip), but we focus on the first two:
// React.Component<P , S> where P is for prop types and S is for state types

export default class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      token: '',
    }
  }
  // no need for binding if fns are arrow fns
  // will need to bind if using regular fns

  // componentWillMount is deprecated (use didMount instead)
  // give definition/use case
  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.setState({
        // ! is a non-null assertion expression operator (TS)
        token: localStorage.getItem('token')!,
      })
    }
    console.log(this.state.token)
  }

  updateToken = (newToken: string) => {
    localStorage.setItem('token', newToken)
    this.setState({ token: newToken })
    console.log(this.state.token)
  }

  clearToken = () => {
    localStorage.clear()
    this.setState({ token: '' })
  }

  // ADD IN ONCE WORKOUTINDEX IS ADDED

  // protectedViews = () => {
  //   return this.state.token === localStorage.getItem('token') ? (
  //     <WorkoutIndex token={this.state.token} />
  //   ) : (
  //     <Auth updateToken={this.updateToken} />
  //   )
  // }

  render() {
    return (
      <div className='App'>
        <SiteBar clickLogout={this.clearToken} />
        <Auth updateToken={this.updateToken} />
        {/* {this.protectedViews()} */}
      </div>
    )
  }
}
