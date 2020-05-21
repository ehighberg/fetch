import axios from 'axios'

let apiUrl
export let wsUrl

const apiUrls = {
  production: 'https://mysterious-anchorage-39512.herokuapp.com/',
  development: 'http://localhost:3000/'
}

const wsUrls = {
  production: 'wss://mysterious-anchorage-39512.herokuapp.com/cable',
  development: 'ws://localhost:3000/cable'
}

if (window.location.hostname === 'localhost')
{
  apiUrl = apiUrls.development
  wsUrl = wsUrls.development
} else
{
  apiUrl = apiUrls.production
  wsUrl = wsUrls.production
}

const api = axios.create({
  baseURL: apiUrl
})


export const getUserByEmail = async (email) =>
{
  try
  {
    const userList = await api.get('/users')
    const userId = userList.data.filter(user =>
    {
      return user.email === email
    })[0].id
    return userId
  } catch (error)
  {
    console.error(error)
  }
}

export const getAllRooms = async () =>
{
  try
  {
    const rooms = await api.get('/rooms')
    return rooms.data
  } catch (error)
  {
    console.error(error)
  }
}

export const getRoomWithDetail = async (roomId) =>
{
  try
  {
    const room = await api.get(`/roomwithdetails/${roomId}`)
    return room.data
  } catch (error)
  {
    console.error(error)
  }
}

export const createNewPost = async (postData) =>
{
  try
  {
    const newPost = await api.post(`/posts`, postData)
    return newPost.data
  } catch (error)
  {
    console.error(error)
  }
}

export const getAllUsers = async () =>
{
  try
  {
    const users = await api.get('/users')
    return users.data
  } catch (error)
  {
    console.error(error)
  }
}

export const getUserById = async (user_id) =>
{
  try
  {
    const user = await api.get(`/users/${user_id}`)
    return user.data
  } catch (error)
  {
    console.error(error)
  }
}

export const getUsersByFieldAndQuery = async (searchType, query) =>
{
  try
  {
    const users = await getAllUsers()

    switch (searchType)
    {
      case 'tag':
        return users.data.filter(user =>
        {
          const userTags = user.tags.map(tag => tag.name)
          return userTags.includes(query)
        })

      case 'team':
        return users.data.filter(user =>
        {
          return user.team.name.includes(query)
        })

      default:
        return users.data.filter(user =>
        {
          return user[searchType].includes(query)
        })
    }

  } catch (error)
  {
    console.error(error)
  }
}
