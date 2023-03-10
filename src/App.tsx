import { ChangeEvent, useState } from "react";
import { useGames } from "./hooks/useGames";
import { Form } from "./components/Form";
import { Game } from "./types/Game";
import { Card } from "./components/Card";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const { games, error } = useGames(searchTerm)

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value)
  }

  return (
    <>
      <Form onChange={handleSearch} />
      { games && games.map((game: Game, index: number) => {
        return <Card key={index} title={game.title} />
      })}

      { (!games || !games.length || error) && <h1>No Games found</h1>}

      { error && <h1>Whoops we encountered an error!</h1>}
    </>
  );
}

export default App;
