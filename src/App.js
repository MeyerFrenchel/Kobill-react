
import './App.css';
import ContactHeader from './Components/ContactHeader/ContactHeader';
import DropdownNavbar from './Components/DropdownNavbar/DropdownNavbar';
import Navbar from './Components/Navbar/Navbar';
import Circle from './assets/img/cercle.png';
import Products from './Components/Products/Products';


function App() {
  return (
    <div className="App">
      <div className='circle'>
      <img className='circle-img' src={Circle} alt=""/>
      </div>
      
      <ContactHeader/>
      <Navbar/>
      <DropdownNavbar/>
      <Products/>
    </div>
  );
}

export default App;
