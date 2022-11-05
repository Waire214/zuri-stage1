import './App.css';
import { Contact } from './pages/contact/Contact';
import { Layout } from './pages/layout/Layout';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="contact" element={<Contact />} />
        
      </Routes>
    </div>
  );
}

export default App;
