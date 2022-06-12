import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Allof from './component/Allof';
import GlobalStyles from './component/GlobalStyles';
import Hero from './component/Hero/Index';
import ProductData from './component/Products/Data';
import Product from './component/Products/Index';

function App() {
  return (
    <div className="App">
      <Router>
         <GlobalStyles />
      <Allof />

      </Router>
    </div>
  );
}

export default App;
