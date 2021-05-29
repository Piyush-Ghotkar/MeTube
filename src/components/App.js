import '../styles/App.css';
import {Helmet} from 'react-helmet';
import {useState} from 'react';
import {Routes,Route} from "react-router-dom";
import {useEffect} from  "react";


import Header from './Header.js'
import DarkBG from './DarkBG.js'
import Sidebar from './Sidebar.js'
import Main from './Main.js'
import Explore from './Explore.js'
import VideoPlayer from './VideoPlayer.js'
import Search from './Search.js'



function App() {

  const [nav,setNav]=useState({"sidebarMin":false, "sidebarActive":'home', "headerbarActive":'all', "isHome":true});
  const [headTitle, setHeadTitle] = useState("MeTube00");

  function setNavSidebar(){
    setNav(prevState => ({
      ...prevState,
      sidebarMin: !nav.sidebarMin
    }));
  }

  function setNavHeaderActive(e){
    if (typeof e === 'string' || e instanceof String){
      setNav(prevState => ({
        ...prevState,
        headerbarActive: e
        }));
    }else{
      setNav(prevState => ({
      ...prevState,
      headerbarActive: e.target.innerText.toLowerCase()
      }));
    }
    
  }

  function setSidebarActive(txt){
    setNav(prevState => ({
      ...prevState,
      sidebarActive: txt
    }));
  }

  function setIsHome(val){
    setNav(prevState => ({
      ...prevState,
      isHome: val,
      sidebarMin: !val
    }));
  }

  function setHeadTitleAsVidoeTitle(title){
    if(title!=="MeTube"){
      title+=" - MeTube";
    }
    setHeadTitle(title);
  }
  

  return (
    <>
      <Helmet>
        <title>{headTitle}</title>
      </Helmet>
      <Sidebar nav={nav} setNavSidebar={setNavSidebar} setSidebarActive={setSidebarActive} setIsHome={setIsHome} setNavHeaderActive={setNavHeaderActive} />
      {
        (nav.isHome===false && nav.sidebarMin===false?
          <DarkBG setNavSidebar={setNavSidebar} />
          :"")
      }
      <Header nav={nav} setNavHeaderActive={setNavHeaderActive}/>

      <Routes>
        <Route  exact path='/'  element={<Main nav={nav} setIsHome={setIsHome} setHeadTitleAsVidoeTitle={setHeadTitleAsVidoeTitle} />} />
        <Route  path="/feed/explore"  element={<Explore nav={nav} setSidebarActive={setSidebarActive} setIsHome={setIsHome} setHeadTitleAsVidoeTitle={setHeadTitleAsVidoeTitle} />} />
        <Route path="/watch/:videoId" element={<VideoPlayer nav={nav} setNavSidebar={setNavSidebar} setSidebarActive={setSidebarActive} setIsHome={setIsHome} setHeadTitleAsVidoeTitle={setHeadTitleAsVidoeTitle} />} />
        <Route path="/result/search_query/:query" element={<Search nav={nav} setNavSidebar={setNavSidebar} setSidebarActive={setSidebarActive} setIsHome={setIsHome} setHeadTitleAsVidoeTitle={setHeadTitleAsVidoeTitle} />} />

      </Routes>
    </>
  );
}

export default App;
