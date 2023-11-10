import { Container } from 'react-bootstrap'
import Post from '../Post'
import './HomeContent.scss'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { postApi } from '../../apis/postApi'
import { useDispatch, useSelector } from 'react-redux'
import { setPostList } from '../../features/post/postSlice'

function HomeContent() {
  const dispatch = useDispatch()
  const postLists = useSelector((state) => state.post)
  const searchValue = useSelector((state) => state.search)
  const [filterData, setFilterData] = useState([])

  const [hasMore, setHasMore] = useState(true)
  const [index, setIndex] = useState(postLists.length / 10 + 1 || 1)
  const [mouted, setMouted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (index === 1) {
      setLoading(true)
      postApi
        .getSomePosts()
        .then((res) => dispatch(setPostList(res)))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }
  }, [dispatch, index])

  const fetchMoreData = () => {
    if (!loading) {
      setLoading(true)
      postApi
        .getPostByIndex(index)
        .then((res) => {
          dispatch(setPostList([...postLists, ...res]))
          res.length > 0 ? setHasMore(true) : setHasMore(false)
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIndex((prevIndex) => prevIndex + 1)
          setLoading(false)
        })
    }
  }

  useEffect(() => {
    if (searchValue !== '' && !mouted && !loading) {
      setLoading(false)
      postApi
        .getAllPosts()
        .then((res) => dispatch(setPostList(res)))
        .catch((err) => console.log(err))
        .finally(() => {
          setMouted(true)
          setLoading(true)
        })
    }
  }, [searchValue, dispatch, mouted, loading])

  useEffect(() => {
    if (searchValue === '') return setFilterData(postLists)
    const array = postLists.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    )

    setFilterData(array)
  }, [postLists, searchValue])

  if (!postLists.length) return <span>Loading...</span>
  console.log(postLists)
  return (
    <InfiniteScroll
      dataLength={postLists.length}
      next={fetchMoreData}
      hasMore={hasMore}
    >
      <Container id="home">
        {filterData.length ? (
          filterData.map((post) => <Post key={post.id} post={post} />)
        ) : (
          <h4>No matching posts!</h4>
        )}
      </Container>
    </InfiniteScroll>
  )
}

export default HomeContent
