import { Container, Row } from 'react-bootstrap'
import './Post.scss'
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai'
import Accordion from 'react-bootstrap/Accordion'
import Comment from '../Comment'

function Post() {
  return (
    <Container className="post">
      <Row className="post-content">
        <h2 className="post-title">
          sunt aut facere repellat provident occaecati excepturi optio
          reprehenderit
        </h2>
        <div className="post-info">
          <span>Author: John Smith</span>
          <span>Created at: Sep 20, 2018</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
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
