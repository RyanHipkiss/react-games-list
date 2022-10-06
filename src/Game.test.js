import { render, screen } from "@testing-library/react"
import Game from "./Game"
import mockGame from './game.mock'

test('it should render the game component', () => {
    render(<Game values={mockGame}/>)
    expect(screen.getByTestId('game-title').textContent).toStrictEqual(mockGame.title)
})