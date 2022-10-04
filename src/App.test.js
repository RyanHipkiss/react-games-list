import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { act } from 'react-dom/test-utils';

const server = setupServer(
  rest.get(`https://${process.env.REACT_APP_API_URL}/api/games`, (req, res, ctx) => {
    return res(ctx.json({test: 'hello'}))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders text', async () => {

  await act(async() => {
    render(<App/>)
  })

  await waitFor(() => {
    expect(JSON.parse(screen.getByTestId('json').textContent)).toStrictEqual({test: 'hello'})
  })
});
