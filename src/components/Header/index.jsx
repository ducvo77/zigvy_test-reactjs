import './Header.scss'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { changeValue } from '../../features/search/searchSlice'
import { Link } from 'react-router-dom'
import { IMAGES } from '../../ultis/constant'

function NavScrollExample() {
  const dispatch = useDispatch()
  const searchValue = useSelector((state) => state.search)

  const handleInputChange = (e) => {
    dispatch(changeValue(e.target.value))
  }

  const handleSearchClick = (e) => {
    e.preventDefault()
    if (searchValue === '') {
      return
    }
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary header-wrapper">
      <Container>
        <Navbar>
          <Link to={'/'}>
            <img src={IMAGES.logo} alt="Logo" style={{ width: '100px' }} />
          </Link>
        </Navbar>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse
          id="navbarScroll"
          style={{ display: 'flex', justifyContent: 'right' }}
        >
          <Form className="d-flex" onSubmit={handleSearchClick}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchValue}
              onChange={handleInputChange}
            />
            <Button type="submit" variant="outline-success">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavScrollExample
