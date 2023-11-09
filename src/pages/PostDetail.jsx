import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import MainLayout from '../components/MainLayout'
import Post from '../components/Post'
import { useEffect, useState } from 'react'
import { postApi } from '../apis/postApi'

function PostDetail() {
  const [post, setPost] = useState(null)

  const params = useParams()
  useEffect(() => {
    postApi
      .getOnePost(params.id)
      .then((res) => setPost(res))
      .catch((err) => console.log(err))
  }, [params])

  if (!post) return <span>Loading...</span>

  return (
    <MainLayout>
      <Container>
        <Post post={post} />
      </Container>
    </MainLayout>
  )
}

export default PostDetail
