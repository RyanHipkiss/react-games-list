import React, { useEffect } from 'react';
import { useGames } from './useGames';

export default function App() {
  const { Games } = useGames()

  useEffect(() => {
  }, [])

  return <div data-testid="games">{JSON.stringify(Games)}</div>
}