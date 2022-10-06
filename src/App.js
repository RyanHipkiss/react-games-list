import React from 'react';
import {Game} from './Game';
import { useGames } from './useGames';

export default function App() {
  const { Games } = useGames()

  return (
    <div data-testid="games">
      {Games && Games.map((game, index) => {
        return <Game key={index} values={game} />
      })}
    </div>
  )
}