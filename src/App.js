// App.js
import './App.css';
import 'primereact/resources/themes/lara-light-cyan/theme.css';   // theme
import 'primereact/resources/primereact.min.css';                 // core css

import 'primeflex/primeflex.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
