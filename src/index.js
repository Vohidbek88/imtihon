import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Ammallar from './components/Ammallar';
import Statistika from './components/Statistika';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='/statistika' element={<Statistika/>}/>
        <Route path='/amallar' element={<Ammallar/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


