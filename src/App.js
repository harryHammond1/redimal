import React from 'react';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar'
import SideBar from './components/SideBar';
import Article from './components/Article';

function App() {
  return ( <div className='app'>
    <NavBar />
    <MainPage />
    <SideBar />
    <Article />
    
    </div>
  );
}

export default App;
