import Home from './Home';
import Pagesbar from './Pagesbar';
import { useState, useEffect } from "react";
import Single from './Single';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

export default function App() { 
  const [activePage,setActivePage] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {
            <div className="App">
              <h1 id="web-title">Test application</h1>
              <Home currentPage={activePage+1} itemno = {activePage}/>
              <Pagesbar start={activePage+1} />
            </div>
            }>            
          </Route>
          <Route path='product' element={<Single />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
