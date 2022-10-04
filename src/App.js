import React, { useEffect, useState } from 'react';
import { fetchGames } from './fetchGames'

export default function App() {
  const [state, setState] = useState({games: []})
  useEffect(() => {
    setState({ 
      games: fetchGames()
    })
  }, [])

  return <div data-testid="games">{JSON.stringify(state.games)}</div>
}