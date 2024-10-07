
import './App.css';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Navbar from './Components/NavBar/Navigation';
import CartContextProvider from './Components/CartContext';
import MainPage from './Components/HomePage/MainPage';
import DisplayContent from './Components/DisplayContent/DisplayContent';
import Checkout from './Components/Checkout/Checkout';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">

        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path="/display" element={<DisplayContent />} />
            <Route path="/order/:id" element={<PlaceOrder />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/" element={<MainPage />} />
          </Routes>
        </CartContextProvider>
      </div>
    </Router>
  );
}

export default App;
