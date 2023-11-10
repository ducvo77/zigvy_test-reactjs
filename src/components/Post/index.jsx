import './Post.scss'
import { Container, Row } from 'react-bootstrap'
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai'
import Accordion from 'react-bootstrap/Accordion'
import Comment from '../Comment'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useMemo } from 'react'

function Post({ post }) {
  const comments = useSelector((state) => state.comment)
  const users = useSelector((state) => state.user)

  const location = useLocation()
  const isHomePage = useMemo(() => location.pathname === '/', [location])

  const filterCommentsByPostId = comments.filter(
    (comment) => comment.postId === post.id
  )

  useEffect(() => {
    document.title = 'Post: ' + post?.title
  }, [post])

  return (
    <Container className="post">
      <Row className="post-content">
        <h2 className="post-title">
          {isHomePage ? (
            <Link to={`/posts/${post?.id}`}>{post?.title}</Link>
          ) : (
            post?.title
          )}
        </h2>
        <div className="post-info">
          <span>
            Author: {users?.filter((user) => user.id === post?.userId)[0]?.name}
          </span>
          <span>Created at: Sep 20, 2023</span>
        </div>
        <p>{post?.body}</p>
      </Row>
      <Row className="post-comments">
        <Accordion defaultActiveKey={!isHomePage && post?.id.toString()}>
          <Accordion.Item eventKey={post?.id.toString()}>
            <Accordion.Header className="comment-actions">
              <div className="comment-actions">
                <div className="comment-action">
                  <AiOutlineHeart />
                  <span>20</span>
                </div>
                <div className="comment-action">
                  <AiOutlineComment />
                  <span>{filterCommentsByPostId?.length}</span>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="wrapper-comment">
                {filterCommentsByPostId?.map((comment) => (
                  <Comment key={comment.id} comment={comment} />
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
    </Container>
  )
}

export default Post
