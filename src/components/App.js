import React, {Component, PropTypes} from 'react';
import Header from './common/Header'

class App extends Component {
  render(){
    return (
      <div className='container-flue'>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App;
