import { Button } from 'react-bootstrap'
import './Comment.scss'

function Comment() {
  return (
    <div className="container-comment">
      <img
        src="https://dulich3mien.vn/wp-content/uploads/2023/04/Anh-Avatar-doi-26.jpg"
        alt="Avatar"
      />
      <div className="comment-info">
        <div>
          <h3>Han solo</h3>
          <span>a day ago</span>
        </div>
        <p>
          sum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
        </p>
        <div>
          <Button variant="outline-secondary">Reply to</Button>
          <Button variant="danger">Delete</Button>
        </div>
      </div>
    </div>
  )
}

export default Comment
