import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/style.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import DefaultLayout from './layouts/DefaultLayout';
import Home from './components/Home';


const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(<>
  <Router>
    <Routes>
        <Route path="/" element={<DefaultLayout>
          <Home/>
        </DefaultLayout>} />
    </Routes>
  </Router></>
);
