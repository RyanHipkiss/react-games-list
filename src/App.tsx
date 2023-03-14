import { ChangeEvent, useState } from "react";
import { useGames } from "./hooks/useGames";
import { Form } from "./components/Form";
import { Game } from "./types/Game";
import { Card } from "./components/Card";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const { games, error } = useGames(searchTerm)

  console.log(error)
  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value)
  }

  return (
    <>
      <Form onChange={handleSearch} />
      { error && <h1 data-testid="AppError">Whoops we encountered an error!</h1>}

      { !error && (
        <>
          { (!games || !games.length) && <h1 data-testid="AppNoGamesText">No Games found</h1>}

          { games && games.map((game: Game, index: number) => {
            return <Card key={index} title={game.title} />
          })}
        </>
      )}
    </>
  );
}

export default App;
