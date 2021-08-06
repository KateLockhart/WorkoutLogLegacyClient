import React from 'react';
import './App.css';
import SiteBar from './home/Navbar';
import Auth from './components/auth/Auth';

type AppProps = {
  password: string;
  username: string;
  token: string;
};

type AppState = {
  setPassword: string;
  setUsername: string;
  setToken: string;
};

//  Using TS with Legacy, React.Component takes in three generic types(can view w/ tooltip), but we focus on the first two:
//  React.Component<P , S> where P is for prop types and S is for state types

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps){
    super(props);
    this.state = {
      setPassword: '',
      setUsername: '',
      setToken: '',
    };
  }

  // give definition/use case
  componentWillMount() {
    console.log('')
  }

  // give definition/use case
  componentDidMount() {

  }

  // make update token(setting the token) logic
  // const updateToken = (newToken) => {
  //   localStorage.setItem('token', newToken);
  //   setSessionToken(newToken);
  //   console.log(sessionToken);
  // }

  // make clearing token logic
  // const clearToken = () => {
  //   localStorage.clear();
  //   setSessionToken('');
  // }

  // make the logic for the protected view(auth vs workouts) and call in return
  // const protectedViews = () => {
  //   return (sessionToken === localStorage.getItem('token') ? <WorkoutIndex token={sessionToken} />
  //   : <Auth updateToken={updateToken} />)
  // }

  render() {
    return (
      <div className="App">
        {/* SiteBar(needs to pass clear token logic for button) and protected views should be only contents of App.tsx div */}
        <SiteBar />
        <Auth />
      </div>
    );
  }

}