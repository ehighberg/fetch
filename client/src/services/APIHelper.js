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
    const userId = userList.filter(user =>
    {
      return user.email === email
    })
    console.log(userId)
    return 1
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

export const createNewPost = async (roomId, postData) =>
{
  try
  {
    // const status = await api.post(`/rooms/${roomId}/posts`)
    // return status.data
    console.log(roomId)
    console.log(postData)
  } catch (error)
  {
    console.error(error)
  }
}