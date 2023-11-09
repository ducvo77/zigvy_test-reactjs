import { Container } from 'react-bootstrap'
import Post from '../Post'
import './MainContent.scss'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { postApi } from '../../apis/postApi'

function MainContent() {
  const [items, setItems] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const [index, setIndex] = useState(2)

  useEffect(() => {
    postApi
      .getSomePosts()
      .then((res) => setItems(res))
      .catch((err) => console.log(err))
  }, [])

  const fetchMoreData = () => {
    postApi
      .getPostByIndex(index)
      .then((res) => {
        setItems((prevItems) => [...prevItems, ...res])

        res.length > 0 ? setHasMore(true) : setHasMore(false)
      })
      .catch((err) => console.log(err))

    setIndex((prevIndex) => prevIndex + 1)
  }
  console.log(index)

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
    >
      <Container id="home">
        {items?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Container>
    </InfiniteScroll>
  )
}

export default MainContent
