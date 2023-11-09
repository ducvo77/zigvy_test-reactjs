import axios from '../axios'

const getCommentByPostId = async (postId) => {
  try {
    const response = await axios.get(`/comments?postId=${postId}`)
    return response
  } catch (error) {
    console.log(error)
  }
}

export const commentApi = {
  getCommentByPostId,
}
