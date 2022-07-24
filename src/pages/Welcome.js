import { Routes, Route, Outlet } from 'react-router-dom'
const Welcome = () => {
  return (
    <section>
      <h1>Weclome page</h1>
      {/* <Routes>
        <Route path='newUser' element={<p>"Welcome new user"</p>} />
      </Routes> */}
      <Outlet/> { /* Use it if you want app component contain nestroute info */}
    </section>
  )
}

export default Welcome