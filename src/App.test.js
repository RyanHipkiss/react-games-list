import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { act } from 'react-dom/test-utils';
import mockFetch from './mock/mockFetch'

// const server = setupServer(
//   rest.get(`https://${process.env.REACT_APP_API_URL}/api/games`, (req, res, ctx) => {
//     return res(ctx.json({test: 'hello'}))
//   })
// )

test('It should call the games API once', async () => {
  const promiseWrapper = new Promise(resolve => {
    resolve({
      json: () => {
        return {test: 'hello'}
      }
    })
  })
  jest.spyOn(global, 'fetch').mockReturnValue(promiseWrapper)
  jest.spyOn(App.prototype, 'fetchGames')
  jest.spyOn(App.prototype, 'setState')

  await act(() => {
    render(<App/>)
  })

  // expect(global.fetch).toHaveBeenCalledTimes(1)
  // expect(global.fetch).toReturnWith(promiseWrapper)
  expect(App.prototype.fetchGames).toReturnWith(promiseWrapper)
  expect(App.prototype.setState).toBeCalledTimes(1)
  expect(App.prototype.setState).toBeCalledWith({
    games: { test: 'hello' }
  })

  global.fetch.mockClear()
})