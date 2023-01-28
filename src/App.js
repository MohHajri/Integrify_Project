import './App.css';
import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        {/* <Route path="/home"> */}
          <Home />
        {/* </Route> */}
      {/* </Router> */}
    
    </div>
  );
}

export default App;
