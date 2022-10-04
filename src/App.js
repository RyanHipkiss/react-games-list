import React from 'react';

export default class App extends React.Component {

  apiOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': process.env.REACT_APP_API_URL
    }
  };

  lastFilters = null

  constructor(props) {
    super(props);
    this.state = {
      games: []
    }
  }

  componentDidMount() {
    this.fetchGames([]).then(result => this.setState({
      games: result
    }))
  }

  fetchGames(filters) {
    return fetch(`https://${process.env.REACT_APP_API_URL}/api/games`, this.apiOptions)
      .then(response => {
        return response.json()
      })
      .catch(err => console.error(err))
  }

  render() {
    return <div data-testid="json">{JSON.stringify(this.state.games)}</div>
  }
}
