const api = "http://192.168.15.70:3001"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getCats = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export function getPosts() {
  return fetch(`${api}/posts`, { headers: headers })
      .then(response => response.json())
}


// export const getAll = () =>
//   fetch(`${api}/books`, { headers })
//     .then(res => res.json())
//     .then(data => data.books)


