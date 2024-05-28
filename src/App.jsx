import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Dashboard from './components/Dashboard'
import Products from './components/Products'

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout/>}>
                  <Route index element={<Dashboard/>}/>
                  <Route path="products" element={<Products/>}/>
              </Route>
              <Route path="login" element={<div>this is login page</div>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
