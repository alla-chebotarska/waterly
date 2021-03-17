import React, { Component } from 'react';
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
        <div>
          <Content authUser={this.state.authUser} firebase={this.props.firebase}/>
        </div>
    );
  }
}

export default App;
