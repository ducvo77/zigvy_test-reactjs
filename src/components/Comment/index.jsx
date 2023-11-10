import { Button } from 'react-bootstrap'
import './Comment.scss'
import { IMAGES } from '../../ultis/constant'

function Comment({ comment }) {
  if (!comment) return <div>Loading...</div>

  return (
    <div className="container-comment">
      <img src={IMAGES.avatar} alt="Avatar" />
      <div className="comment-info">
        <div>
          <h3>{comment?.name}</h3>
          <span>a day ago</span>
        </div>
        <p>{comment?.body}</p>
        <Button variant="outline-secondary">Reply to</Button>
      </div>
    </div>
  )
}

export default Comment
