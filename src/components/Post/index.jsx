import { Container, Row } from 'react-bootstrap'
import './Post.scss'
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai'
import Accordion from 'react-bootstrap/Accordion'
import Comment from '../Comment'

function Post({ post }) {
  return (
    <Container className="post">
      <Row className="post-content">
        <h2 className="post-title">{post?.title}</h2>
        <div className="post-info">
          <span>Author: John Smith</span>
          <span>Created at: Sep 20, 2018</span>
        </div>
        <p>{post?.body}</p>
      </Row>
      <Row className="post-comments">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="comment-actions">
              <div className="comment-actions">
                <div className="comment-action">
                  <AiOutlineHeart />
                  <span>20</span>
                </div>
                <div className="comment-action">
                  <AiOutlineComment />
                  <span>20</span>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="wrapper-comment">
                <Comment />
                <Comment />
                <Comment />
                <Comment />
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        {/* <div>
          <div>
            <span>avatar</span>
            <div>
              <div>
                <h4>Vo cong Duc</h4>
                <span>a day ago</span>
              </div>
              <p>asfdlkalsflaskdlaskldkalskdlaskdl</p>
              <button>Reply to</button>
            </div>
          </div>
        </div> */}
      </Row>
    </Container>
  )
}

export default Post
