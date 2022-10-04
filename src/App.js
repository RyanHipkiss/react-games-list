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
      games: this.fetchGames([])
    }
  }

  fetchGames(filters) {
    fetch(`https://${process.env.REACT_APP_API_URL}/api/games`, this.apiOptions)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  render() {
    return <div>Hello World</div>
  }
}
