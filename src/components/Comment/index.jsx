import { Button } from 'react-bootstrap'
import './Comment.scss'

function Comment({ comment }) {
  if (!comment) return <div>Loading...</div>

  return (
    <div className="container-comment">
      <img
        src={
          'https://dulich3mien.vn/wp-content/uploads/2023/04/Anh-Avatar-doi-26.jpg'
        }
        alt="Avatar"
      />
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
