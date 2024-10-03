
import './App.css';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Navbar from './Components/NavBar/Navigation';
import MainPage from './Components/HomePage/MainPage';
import DisplayContent from './Components/DisplayContent/DisplayContent';
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <MainPage /> */}
      {/* <DisplayContent /> */}
      <PlaceOrder />
    </div>
  );
}

export default App;
