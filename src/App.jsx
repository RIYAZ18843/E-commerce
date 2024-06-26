import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import LandingPage from './stores/pages/LandingPage';
import MobilePage from './stores/pages/MobilePage';
import CompPage from './stores/pages/CompPage';
import WatchPage from './stores/pages/WatchPage';
import MenPage from './stores/pages/MenPage';
import WomanPage from './stores/pages/WomanPage';
import FurniturePage from './stores/pages/FurniturePage';
import FridgePage from './stores/pages/FridgePage';
import KitchenPage from './stores/pages/KitchenPage';
import AcPage from './stores/pages/AcPage';
import MobileSingle from './stores/singles/MobileSingle';
import UserCart from './stores/UserCart';
import ComputerSingle from './stores/singles/ComputerSingle';
import FurnitureSingle from './stores/singles/FurnitureSingle';
import KitchenSingle from './stores/singles/KitchenSingle';
import AcSingle from './stores/singles/AcSingle';
import MenSingle from './stores/singles/MenSingle';
import WatchSingle from './stores/singles/WatchSingle';
import WomanSingle from './stores/singles/WomanSingle';
import FridgeSingle from './stores/singles/FridgeSingle';
import Login from './stores/pages/Login';
import About from './stores/pages/About';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/mobiles' element={<MobilePage />} />
        <Route path='/computers' element={<CompPage />} />
        <Route path='/watch' element={<WatchPage />} />
        <Route path='/men' element={<MenPage />} />
        <Route path='/woman' element={<WomanPage />} />
        <Route path='/fridge' element={<FridgePage />} />
        <Route path='/furniture' element={<FurniturePage />} />
        <Route path='/kitchen' element={<KitchenPage />} />
        <Route path='/ac' element={<AcPage />} />
        
        {/* Single item routes */}
        <Route path='/mobiles/:id' element={<MobileSingle />} />
        <Route path='/ac/:id' element={<AcSingle />} />
        <Route path='/computers/:id' element={<ComputerSingle />} />
        <Route path='/furniture/:id' element={<FurnitureSingle />} />
        <Route path='/kitchen/:id' element={<KitchenSingle />} />
        <Route path='/men/:id' element={<MenSingle />} />
        <Route path='/watch/:id' element={<WatchSingle />} />
        <Route path='/woman/:id' element={<WomanSingle />} />
        <Route path='/fridge/:id' element={<FridgeSingle />} />
        
        {/* Other routes */}
        <Route path='/cart' element={<UserCart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About/>} />
        
      </Routes>
    </div>
  );
};

export default App;
