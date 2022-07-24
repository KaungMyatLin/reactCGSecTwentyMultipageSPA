import { Routes, Route, Redirect } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import MainHeader from './components/MainHeader'
function App() {
  return (
    <div>
      <MainHeader/>
      <main>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          {/* <Route path="/welcome/*" element={<Welcome/>} /> Use it if you want component contain nestroute info */}
          <Route path="/welcome" element={<Welcome/>} >
            <Route path='newUser' element={<p>"Welcome new user"</p>} />
          </Route>
          <Route path="/products" element={<Products/>} />
          <Route path="/products/:productId" element={<ProductDetail/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
