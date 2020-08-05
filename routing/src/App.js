import React from 'react';
import { Route } from 'react-router-dom';

const Privacy = () => <h4>Privacy settings</h4>;
const Profile = () => <h4>Profile settings</h4>;

function Settings() {
  return (
    <div>
      <h3>
      </h3>
    </div>
  );
}

function Register() {
  return <h3>En vagyok a register page</h3>
}

function App() {
  return (
    <div className="App">
      <h2>Hi!</h2>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  );
}

export default App;
