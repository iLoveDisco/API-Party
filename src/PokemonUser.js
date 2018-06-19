import React, { Component } from 'react'

class PokemonUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: {}
    }

    this.fetchUserData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.number !== this.props.match.params.number) {
      this.fetchUserData()
    }
  }

  fetchUserData = () => {
    const { params } = this.props.match
    fetch(`http://pokeapi.co/api/v2/pokemon/${params.number}`)
      .then(response => response.json())
      .then(pokemon => this.setState({ pokemon }))
  }

  render() {
    const { pokemon } = this.state

    return (
      <div className="GithubUser">
        <img src={pokemon.forms.url} alt="" />
        <h2>
          {pokemon.forms.name}
        </h2>
        
      </div>
    )
  }
}

export default GithubUser
