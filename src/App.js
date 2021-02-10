import { Component } from 'react';
import './App.css';
import BlackNavbar from './Components/Navbar/BlackNavbar';
import UggNavbar from './Components/Navbar/NavbarFeatures';
import 'bootstrap/dist/css/bootstrap.css';
import MiddleNav from './Components/Navbar/MiddleNav';
import Footer from './Components/Footer/Footer';
import Imagess from './Components/Assets/Img/Image';
import Data from './data.json';

// let imageData = {
//   "throwImage": "https://www.ugg.com/gift-boutique/ana-knit-throw/14884.html?dwvar_14884_color=CHMB#zoom",
//   "throwName": "ANA KNIT THROW",
//   "priceColors": "$98 / 4 Colors"
// }


class App extends Component {
  constructor(){
    super()
    this.state = {
      imageData: Data
    }
  }
  render() {
  return (
    <div className="App">
     <BlackNavbar />
     <UggNavbar />
    <MiddleNav />
     <Imagess imageData={this.state.imageData} />
     <Footer />
    </div>

  );
}
}
export default App;