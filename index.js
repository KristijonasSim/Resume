import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WorkPages from './Pages/title_page/title_page';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App/>}/>
      <Route path='Work' element={<WorkPages/>}/>
    </Routes>
  </BrowserRouter>
);

