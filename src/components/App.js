import '../styles/App.css';
import {Helmet} from 'react-helmet';
import {useState} from 'react';

import Header from './Header.js'
import Sidebar from './Sidebar.js'
import Main from './Main.js'


function App() {

  const [nav,setNav]=useState({"sidebarMin":false, "sidebarActive":'home', "headerbarActive":'all'});

  function setNavSidebar(){
    setNav(prevState => ({
      ...prevState,
      sidebarMin: !nav.sidebarMin
    }));
  }

  function setNavHeaderActive(e){
    setNav(prevState => ({
      ...prevState,
      headerbarActive: e.target.innerText.toLowerCase()
    }));
  }

  function setSidebarActive(txt){
    setNav(prevState => ({
      ...prevState,
      sidebarActive: txt
    }));
  }


  return (
    <>
      <Helmet>
        <title>MeTube</title>
      </Helmet>
      <Sidebar nav={nav} setNavSidebar={setNavSidebar} setSidebarActive={setSidebarActive} />
      <Header nav={nav} setNavHeaderActive={setNavHeaderActive} />
      <Main nav={nav}  />
    
     
    </>
  );
}

export default App;
