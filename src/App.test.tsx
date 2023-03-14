import { render, screen } from "@testing-library/react"
import App from "./App"

jest.mock('./hooks/useGames', () => ({
  useGames: jest.fn().mockReturnValueOnce({
    games: [
      { title: 'Game 1' },
      { title: 'Game 2' }
    ],
    error: null
  }).mockReturnValueOnce({
    games: [],
    error: null
  }).mockReturnValueOnce({
    games: [],
    error: true
  }).mockReturnValueOnce({
    games: [],
    error: null
  }).mockReturnValueOnce({
    games: [
      { title: 'Game 1' },
      { title: 'Game 2' }
    ],
    error: null
  })
}))

describe('renders the App', () => {
  it('should render the games titles', () => {
    render(<App />)
    
    const cards = screen.queryAllByTestId('CardTitle')
    
    expect(cards[0].innerHTML).toBe('Game 1')
    expect(cards[1].innerHTML).toBe('Game 2')
    expect(cards).toHaveLength(2)
  })

  it('should render the form', () => {
    render(<App />)
    expect(screen.getByTestId('GameSearchForm')).toBeInTheDocument()
  })

  it('should render an error if the hook fails', () => {
    render(<App />)
    expect(screen.getByTestId('AppError')).toBeInTheDocument()
  })

  it('should render a "no games found" if the hook is empty', () => {
    render(<App />)
    expect(screen.getByTestId('AppNoGamesText')).toBeInTheDocument()
  })
})