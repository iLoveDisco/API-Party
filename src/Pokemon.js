import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Pokemon.css'
import PokemonUser from './GithubUser'

class Pokemon extends Component {
  state = {
    username: '',
  }

  handleChange = (ev) => {
    this.setState({ username: ev.target.value })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/pokemon/${this.state.username}`)
  }

  render() {
    return (
      <div className="Github">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          alt="Pokemon"
          className="logo"
        />

        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">
              Look up a Pokemon
            </button>
          </div>
        </form>

        <Route path="/pokemon/:username" component={PokemonUser} />
      </div>
    )
  }
}

export default Github
