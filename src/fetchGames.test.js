import { act } from 'react-dom/test-utils'
import { fetchGames } from './fetchGames'

test('it should fetch the data and return', async () => {
    let values = fetchGames()

    expect(values).toStrictEqual([{name: 'hello'}])
})