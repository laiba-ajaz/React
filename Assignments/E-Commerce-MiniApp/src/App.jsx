
import { Route, Routes } from 'react-router-dom';
import Product from './Product';
import ProductDetail from './ProductDetail';
import Bar from './layout/bar';
import './app.css'

export default function App() {
  return (
    <>

      <Bar />


      <Routes>
        <Route path='/productDetail/:id' element={<ProductDetail />}></Route>
        <Route path='/' element={<Product />}></Route>
      </Routes>
    </>
  )

}