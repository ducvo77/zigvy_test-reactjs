import { Container } from 'react-bootstrap'
import Post from '../Post'
import './MainContent.scss'

function PostList() {
  return (
    <Container id="home">
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  )
}

export default PostList
