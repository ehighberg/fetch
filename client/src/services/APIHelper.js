import axios from 'axios'

let apiUrl
const apiUrls = {
    production: 'https://mysterious-anchorage-39512.herokuapp.com/',
    development: 'http://localhost:3000/'
}

if (window.location.hostname === 'localhost')
{
    apiUrl = apiUrls.development
} else
{
    apiUrl = apiUrls.production
}

const api = axios.create({
  baseURL: apiUrl
})


export const getUserByEmail = async (email) => {
  try {
    const userList = await api.get('/users')
    const userId = userList.data.filter(user => {
      return user.email === email
    })[0].id
    return userId
  } catch(error) {
    console.error(error)
  }
}
