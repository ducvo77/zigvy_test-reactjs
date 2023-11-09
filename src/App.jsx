import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header'
import PostList from './components/MainContent'

function App() {
  return (
    <main id="wrapper-app">
      <Header />
      <PostList />
    </main>
  )
}

export default App
