import axios from '../axios'

const getSomePosts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: 'get',
        url: `/posts?_start=0&_limit=5`,
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })

const getPostByIndex = (index) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: 'get',
        url: `/posts?_start=${index * 5}&_limit=5`,
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })

export const postApi = {
  getSomePosts,
  getPostByIndex,
}
