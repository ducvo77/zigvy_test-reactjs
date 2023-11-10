import { Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <>
      <div className="d-flex justify-content-center container">
        <div
          className="row"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div className="alert alert-warning w-100 d-flex  justify-content-center mt-5">
            Oops! Page not found 404 .
          </div>
          <Image
            className="mx-5"
            style={{ width: '550px' }}
            src={
              'https://raw.githubusercontent.com/shaimaa4739/Practice-React/main/src/Assets/Images/undraw_warning_cyit.png'
            }
          />
          <Link
            to={'/'}
            style={{
              width: 'fit-content',
              margin: '0 auto',
            }}
          >
            <Button variant="success">Home Page</Button>
          </Link>
        </div>
      </div>
    </>
  )
}
