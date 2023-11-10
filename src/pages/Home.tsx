import React from 'react'
import Header from '../components/Header'
import HomeContent from '../components/HomeContent'
import { Container } from 'react-bootstrap'

function Home() {
  return (
    <>
      <Header />
      <Container style={{ margin: '150px auto' }}>
        <HomeContent />
      </Container>
    </>
  )
}

export default Home
