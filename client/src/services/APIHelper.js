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
    return users
  } catch (error)
  {
    console.error(error)
  }
}
