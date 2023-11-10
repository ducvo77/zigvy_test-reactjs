import React, { useEffect } from 'react'
import Header from '../components/Header'
import HomeContent from '../components/HomeContent'
import { Container } from 'react-bootstrap'

function Home() {
  useEffect(() => {
    document.title = 'Zigvy Project Test'
  }, [])

  return (
    <>
      <Header />
      <Container style={{ margin: '160px auto' }}>
        <HomeContent />
      </Container>
    </>
  )
}

export default Home
