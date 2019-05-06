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

// export const updateVotePost = (postId, vote) =>
//     fetch(`${api}/posts/${postId}`, {
//         method: `post`,
//         headers: headers,
//         body: JSON.stringify({ 'option': vote })
//     })
//     .then(res => res.json())
//     .then(data => data)
