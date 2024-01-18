import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import ContactPage from './components/ContactPage';
import './product.css';
import './App.css';
import './contact.css';



function App () {
return (

  <Router>
  <NavBar />
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductPage />} />
    <Route path='/contact' element={< ContactPage />} />
  </Routes>
  <Footer />
</Router>


  )


}

export default App;
