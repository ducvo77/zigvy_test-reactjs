import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Post from '../components/Post'
import { useEffect, useState } from 'react'
import { postApi } from '../apis/postApi'

function PostDetail() {
  const [post, setPost] = useState({})

  const params = useParams()
  useEffect(() => {
    postApi
      .getOnePost(params.id)
      .then((res) => setPost(res))
      .catch((err) => console.log(err))
  }, [params])

  return (
    <>
      <Header />
      <Container style={{ margin: '160px auto' }}>
        {post?.id ? <Post post={post} /> : <span>Loading...</span>}
      </Container>
    </>
  )
}

export default PostDetail
