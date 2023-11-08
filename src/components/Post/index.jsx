import './Post.module.scss'

function Post() {
  return (
    <div className="post">
      <div className="post-">
        <h1 className="post-title">Post title</h1>
        <div className="post-info">
          <span>author: John Smith</span>
          <span>Created at: Sep 20, 2018</span>
        </div>
        <p>
          blob/master/mockup/homepage.pngblob/master/mockup/homepage.pngblob/master/mockup/homepage.png
          blob/master/mockup/homepage.png
        </p>
      </div>
      <div>
        <span>2 replies</span>
        <div>
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
        </div>
      </div>
    </div>
  )
}

export default Post
