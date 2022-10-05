import useSWR from "swr";
import { fetcher } from './fetcher'

function useGames() {
    const { data, error } = useSWR(() => `https://${process.env.REACT_APP_API_URL}/api/games`, fetcher)

    return { Games: data, Error: error}
}

export { useGames }