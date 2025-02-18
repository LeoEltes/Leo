// File: src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header.js';
import FrontPage from './components/FrontPage/FrontPage.js';
import Blog from './components/Blog/Blog.js';
//import C2Component from './components/C2Components/C2Component'; // Import the C2Component
//import C2Script from './Scripts/C2Script'; // Import C2Script

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/" element={<>
            {/*<P5Component script={Script1} /> {/* Pass Script1 or Script2 as needed */}
            <FrontPage />
            {/*<C2Component script={C2Script}/> {/* Add C2Component here */}
          </>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
