import useSWR from 'swr'
import fetcher from './fetcher'

//This is getting called multiple times.
export const useGames = (searchTerm: string) => {
    let { data, error } = useSWR('https://free-to-play-games-database.p.rapidapi.com/api/games', fetcher)

    if (data) {
        data = data.filter((game: any) => {
            return game.title.toLowerCase().includes(searchTerm.toLowerCase())
        })
    }

    return {
        games: data, 
        error: error
    }
}