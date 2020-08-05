import React, { Component } from 'react';
import { Route, Redirect, Link, NavLink, Switch, withRouter } from 'react-router-dom';

const Privacy = () => <h4>Privacy settings</h4>;
const Profile = () => <h4>Profile settings</h4>;

function Settings() {
  return (
    <div>
      <h3>Login2 Page</h3>
      <Route path="/settings/privacy" component={Privacy} />
      <Route path="/settings/profile" component={Profile} />
    </div>
  );
}

function Register() {
  return <h3>En vagyok a register page</h3>
}

function Login() {
  return <h3>Login page</h3>
}

function Timeline() {
  return <h3>Timeline page</h3>
}

function NotFound() {
  return <p>Ouch! Not found!</p>
}

class App extends Component {
  
  constructor(props) {
    super(props);

    // létrehozunk egy staet-t
    this.state = { loggedIn: false };
    // bond-oljuk az eventHanlder-t : errea azért van szükség, rá bind-olni a this-ét, elég csúnya a react-ban, ez a class típusú komponensekre vonatkozik, lassan viszont a standard a függvény típusú komponens írása ahol ez már nincs meg
    this.onloginToggle = this.onloginToggle.bind(this);
    this.toPrivacySettings = this.toPrivacySettings.bind(this);
  }
  // ez egy short hand (class property másnéven), ugyanaz mintha constructor() {} használnék
  // state = { loggedIn: false }

  onloginToggle() {
    this.setState({ loggedIn: !this.state.loggedIn });
  }

  toPrivacySettings() {
    this.props.history.push('/settings/privacy');
  }

  render() {
    // destructering : a következő ugyanezt jelenti : const loggedIn = this.state.loggedIN;
    // kapja le ezeket a változókat/propertyket erről a objektumról/state-ről és pakolja bele ugyanolyan nevű változókba 
    const { loggedIn } = this.state;

    return (
      <div className="App">
        <h2>I am the app!</h2>
        <NavLink to='/settings'> To settings </NavLink>
        <NavLink to='/register'> To register </NavLink>
        <Link to='/timeline'> To timeline </Link>
        <Link to='/login'> To login </Link>
        <button onClick={this.toPrivacySettings}>To privacy settings programmatic</button>
        <button onClick={this.onloginToggle}>{loggedIn ? 'Log out' : 'Log in'}</button>
        {/* ternary operator : ha loggeind-elve vagok akkor ez egyébként az */}
        {loggedIn ? (
        <Switch>
          <Route path='/timeline' component={Timeline}/>
          <Route path="/settings" component={Settings} />
          <Redirect from='/(register|login)' to='/settings' exact />
          <Redirect from='/' to='/settings' exact />  
          <Route component={NotFound}/>
        </Switch>
        ) : (
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path="/register" component={Register} />
          <Redirect to='/login' />
        </Switch>
        )}  
      </div>
    );
  }
}

// ezzel többek között ezt is elérjük kívülről : this.props.history.push('');
export default withRouter(App);

