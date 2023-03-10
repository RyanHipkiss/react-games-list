const fetcher = (url, params) => fetch(url, {
    params: {...params},
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
    }
}).then(res => res.json())


export default fetcher