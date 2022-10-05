import mockGame from "./game.mock"
import { useGames } from "./useGames"
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { renderHook, waitFor } from '@testing-library/react'

const server = setupServer(
    rest.get(`https://${process.env.REACT_APP_API_URL}/api/games`, (req, res, ctx) => {
        return res(ctx.json([mockGame]))
    })
)

beforeAll(() => server.listen())
afterAll(() => server.close())


test('it should call the API and return a valid structure', async () => {
    const { result } = renderHook(() => useGames())

    await waitFor(() => {
        expect(result.current.Games).toStrictEqual([mockGame])
    })
})