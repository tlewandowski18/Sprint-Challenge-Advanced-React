import React, { Component } from 'react';
import styled from "styled-components";
import PlayerCard from "./components/PlayerCard"
import SearchBar from "./components/SearchBar"

const Container = styled.div`
  width: 98%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

class App extends Component {
  constructor(){
      super()
      this.state = {
          data: []
      }
  }

  componentDidMount(){
      fetch(`http://localhost:5000/api/players`)
          .then(res => res.json())
          .then(res => {
              this.setState({data: res})
          })
          .catch(err => {
              console.log(err)
          })
  }

  render() {
      
      return (
        <div>
          <SearchBar />
          <Container>
            {this.state.data.map(player => <PlayerCard name={player.name} country={player.country} key={player.id} data-testid={player.name}/>)}
          </Container>
        </div>
      )
  }
}

export default App;
