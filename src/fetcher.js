const apiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_API_URL
  }
}

export function fetcher(...args) {
  return fetch(...args, apiOptions).then(res => res.json())
}