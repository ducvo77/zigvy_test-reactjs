import axios from '../axios'

const getAllPosts = async () => {
  try {
    const response = await axios.get('/posts')
    return response
  } catch (error) {
    console.log(error)
  }
}

const getSomePosts = async () => {
  try {
    const response = await axios.get('/posts?_start=0&_limit=10')
    return response
  } catch (error) {
    console.log(error)
  }
}

const getPostByIndex = async (index) => {
  try {
    const response = await axios.get(`/posts?_start=${index * 10}&_limit=10`)
    return response
  } catch (error) {
    console.log(error)
  }
}

const getOnePost = async (id) => {
  try {
    const response = await axios.get(`/posts/${id}`)
    return response
  } catch (error) {
    console.log(error)
  }
}

export const postApi = {
  getSomePosts,
  getPostByIndex,
  getAllPosts,
  getOnePost,
}
