
import { renderHook, waitFor } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { useGames } from './useGames'

const mockedGames = [
    {title: 'Game 1'},
    {title: 'Game 2'}
]

const server = setupServer(
    rest.get('https://free-to-play-games-database.p.rapidapi.com/api/games', (req, res, ctx) => {
        return res(ctx.json(mockedGames))
    })
)

beforeAll(() => server.listen())
afterAll(() => server.close())

test('it should call the API and return a valid structure', async () => {
    const { result } = renderHook(() => useGames(''))

    expect(result.current).toHaveProperty('games')
    expect(result.current).toHaveProperty('error')
    await waitFor(() => {
        expect(result.current.games).toStrictEqual(mockedGames)
    })
})

test('it should return an empty array if none of the titles match the searchTerm', async () => {
    const { result } = renderHook(() => useGames('Empty'))

    await waitFor(() => {
        expect(result.current.games).toStrictEqual([])
    })
})

test('it should correctly filter the games by title', async () => {
    const { result } = renderHook(() => useGames('Game 2'))

    await waitFor(() => {
        expect(result.current.games).toStrictEqual([
            {title: 'Game 2'}
        ])
    })
})