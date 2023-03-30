import './App.css';
import React, {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './components/Landing';
import Dash from './components/Dash';
import CreateChore from './components/CreateChore';


import { LoggedUserProvider } from './context/loggedUserContext';

function App() {
  return (
    <main>
      <LoggedUserProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing/>}/>
          <Route exact path="/Dash" element={<Dash/>}/>
          <Route exact path="/CreateChore" element={<CreateChore/>}/>
        </Routes>
      </BrowserRouter>
      </LoggedUserProvider>
    </main>
  );
}

export default App;
