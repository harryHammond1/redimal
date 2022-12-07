import React from 'react';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar'
import SideBar from './components/SideBar';

function App() {
  return ( <div className='app'>
    <NavBar />
    <MainPage />
    <SideBar />
    </div>
  );
}

export default App;
