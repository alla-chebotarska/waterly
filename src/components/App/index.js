import React, { Component } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Content from '../Content';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    }
  }

  componentDidMount(){
    this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Content authUser={this.state.authUser}/>
        </div>
      </Router>
    );
  }
}

export default App;
