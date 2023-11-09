import { Container } from 'react-bootstrap'
import Post from '../Post'
import './HomeContent.scss'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { postApi } from '../../apis/postApi'

function HomeContent() {
  const [posts, setPosts] = useState(null)
  const [hasMore, setHasMore] = useState(true)
  const [index, setIndex] = useState(1)

  useEffect(() => {
    postApi
      .getSomePosts()
      .then((res) => setPosts(res))
      .catch((err) => console.log(err))
  }, [])

  const fetchMoreData = () => {
    postApi
      .getPostByIndex(index)
      .then((res) => {
        setPosts((prev) => [...prev, ...res])
        res.length > 0 ? setHasMore(true) : setHasMore(false)
      })
      .catch((err) => console.log(err))
    setIndex((prevIndex) => prevIndex + 1)
  }

  if (!posts) return <span>Loading...</span>

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={fetchMoreData}
      hasMore={hasMore}
    >
      <Container id="home">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Container>
    </InfiniteScroll>
  )
}

export default HomeContent
