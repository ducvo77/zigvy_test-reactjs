import Header from '../components/Header'

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <div style={{ margin: '150px auto' }}>{children}</div>
    </>
  )
}
