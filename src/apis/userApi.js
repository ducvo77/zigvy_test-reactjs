import axios from '../axios'

const getAllUser = async () => {
  try {
    const response = await axios.get('/users')
    return response
  } catch (error) {
    console.log(error)
  }
}

export const userApi = {
  getAllUser,
}
