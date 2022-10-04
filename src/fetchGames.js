export const fetchGames = () => {
    return [{
        name: 'hello'
    }]
}

//


//   apiOptions = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
//       'X-RapidAPI-Host': process.env.REACT_APP_API_URL
//     }
//   };

// fetchGames(filters) {
//     return fetch(`https://${process.env.REACT_APP_API_URL}/api/games`, this.apiOptions)
//       .then(response => {
//         return response.json()
//       })
//       .catch(err => console.error(err))

//   }