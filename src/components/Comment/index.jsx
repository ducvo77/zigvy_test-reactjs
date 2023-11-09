import { Button } from 'react-bootstrap'
import './Comment.scss'
import { IMAGES } from '../../ultis/constant'

function Comment({ comment }) {
  return (
    <div className="container-comment">
      <img src={IMAGES.avatar} alt="Avatar" />
      <div className="comment-info">
        <div>
          <h3>{comment?.name}</h3>
          <span>a day ago</span>
        </div>
        <p>{comment?.body}</p>
        <div>
          <Button variant="outline-secondary">Reply to</Button>
          <Button variant="danger">Delete</Button>
        </div>
      </div>
    </div>
  )
}

export default Comment
