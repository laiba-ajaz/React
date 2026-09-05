import {Link , Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home';
import QuotesAPI from './Components/QuotesAPI';
import ProductAPI from './Components/PoductAPI';
import UsersAPI from './Components/UserAPI';
import TodoAPI from './Components/TodoAPI';
import DevicesAPI from './Components/DevicesAPI';
import WeatherAPI from './Components/WeatherAPI';
import CryptoCurrency from './Components/CryptoCurrency';
import ISS from './Components/ISS';
function App() {
  return (
    <>
     

    

    <Routes>
      <Route path="/" element={<Home />} />
  
      <Route path="/todo" element={<TodoAPI />} />
      <Route path="/users" element={<UsersAPI />} />
      <Route path="/quotes" element={<QuotesAPI />} />
      <Route path="/products" element={<ProductAPI />} />
      <Route path="/devices" element={<DevicesAPI />} />
      <Route path="/weather" element={<WeatherAPI />} />
      <Route path="/crypto" element={<CryptoCurrency />} />
      <Route path="/iss" element={<ISS />} />
    </Routes>
    </>
  );
}

export default App;