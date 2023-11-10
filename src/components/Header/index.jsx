import './Header.scss'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { changeValue } from '../../features/search/searchSlice'
import { Link } from 'react-router-dom'

function NavScrollExample() {
  const dispatch = useDispatch()
  const searchValue = useSelector((state) => state.search)

  const handleInputChange = (e) => {
    dispatch(changeValue(e.target.value))
  }

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary header-wrapper"
      style={{ borderBottom: '1px solid #c5c5c5' }}
    >
      <Container>
        <Navbar>
          <Link to={'/'}>
            <img
              src={
                'https://png.pngtree.com/png-vector/20230120/ourmid/pngtree-beauty-logo-design-png-image_6568470.png'
              }
              alt="Logo"
              style={{ width: '100px' }}
            />
          </Link>
        </Navbar>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse
          id="navbarScroll"
          style={{ display: 'flex', justifyContent: 'right' }}
        >
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchValue}
              onChange={handleInputChange}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavScrollExample
