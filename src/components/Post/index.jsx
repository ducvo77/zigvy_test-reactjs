import { Container, Row } from 'react-bootstrap'
import './Post.scss'
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai'
import Accordion from 'react-bootstrap/Accordion'
import Comment from '../Comment'
import { useEffect, useMemo, useState } from 'react'
import { userApi } from '../../apis/userApi.js'
import { commentApi } from '../../apis/commentApi.js'
import { Link, useLocation } from 'react-router-dom'

function Post({ post }) {
  const [users, setUsers] = useState([])
  const [comments, setComments] = useState([])

  const location = useLocation()
  const isHomePage = useMemo(() => location.pathname === '/', [location])

  useEffect(() => {
    userApi
      .getAllUser()
      .then((res) => {
        setUsers(res)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    commentApi
      .getCommentByPostId(post?.id)
      .then((res) => setComments(res))
      .catch((err) => console.log(err))
  }, [post])

  return (
    <Container className="post">
      <Row className="post-content">
        <h2 className="post-title">
          {isHomePage ? (
            <Link to={`/posts/${post.id}`}>{post?.title}</Link>
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
        <Accordion defaultActiveKey={!isHomePage && post.id.toString()}>
          <Accordion.Item eventKey={post.id.toString()}>
            <Accordion.Header className="comment-actions">
              <div className="comment-actions">
                <div className="comment-action">
                  <AiOutlineHeart />
                  <span>20</span>
                </div>
                <div className="comment-action">
                  <AiOutlineComment />
                  <span>{comments?.length}</span>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="wrapper-comment">
                {comments?.map((comment) => (
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
