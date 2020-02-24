import React, { Component } from 'react';

class App extends Component {
  constructor(){
      super()
      this.state = {
          data: {}
      }
  }

  componentDidMount(){
      fetch(`http://localhost:5000/api/players`)
          .then(res => res.json())
          .then(res => {
              console.log(res)
          })
          .catch(err => {
              console.log(err)
          })
  }

  render() {
      return (
          <div>Hello World</div>
      )
  }
}

export default App;
