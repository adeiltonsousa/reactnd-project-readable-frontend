const api = "http://localhost:3001"

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getCategories = () => {
  return fetch(`${api}/categories`, { headers })
    .then(response => response.json())
    .then(ret => ret.categories)
}

export function getPosts() {
  return fetch(`${api}/posts`, { headers: headers })
      .then(response => response.json())
}

export const sendpost = (post) => {	
  return fetch(`${api}/posts`, { 	
    method: 'POST',	
    headers: {
      ...headers,
     'Accept': 'application/json',
     'Content-type': 'application/json'
    },	
    body: JSON.stringify(post)
  })
  .then(response => response.json())
}


export const votePost = (postId, voteType) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({option: voteType}),
  })