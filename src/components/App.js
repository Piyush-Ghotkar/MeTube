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
import History from './History.js'




function App() {

  const [nav,setNav]=useState({"sidebarMin":false, "sidebarActive":'home', "headerbarActive":'all', "isHome":true});
  const [headTitle, setHeadTitle] = useState("MeTube");
  var mobileScreenSize = window.matchMedia("(max-width: 600px)");

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
    if (!mobileScreenSize.matches) {
      setNav(prevState => ({
        ...prevState,
        isHome: val,
        sidebarMin: !val
      }));
    }else{
      setNav(prevState => ({
        ...prevState,
        isHome: val
      }));
    }
  }

  function setHeadTitleAsVideoTitle(title){
    if(title!=="MeTube"){
      title+=" - MeTube";
    }
    setHeadTitle(title);
  }
  
  function updateHistory(newVideoId){
    var prevHistory;
    var updatedHistory;
    if(window.sessionStorage.getItem("videoHistory")){
      prevHistory=window.sessionStorage.getItem("videoHistory");
      updatedHistory=[newVideoId].concat(prevHistory)
      // updatedHistory=[...new Set(updatedHistory)];
    }else{
      var updatedHistory=[newVideoId];
    }
    window.sessionStorage.setItem("videoHistory", updatedHistory);
  }

  useEffect(() => {
    if (mobileScreenSize.matches) { // If media query matches
      setNavSidebar();
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>{headTitle}</title>
      </Helmet>
      <Sidebar nav={nav} setNavSidebar={setNavSidebar} setSidebarActive={setSidebarActive} setIsHome={setIsHome} setNavHeaderActive={setNavHeaderActive} />
      {
        ((nav.isHome===false && nav.sidebarMin===false)||(mobileScreenSize.matches  && nav.sidebarMin===false)?
          <DarkBG setNavSidebar={setNavSidebar} />
          :"")
      }
      <Header nav={nav} setNavHeaderActive={setNavHeaderActive}/>

      <Routes>
        <Route  exact path='/'  element={<Main nav={nav} setIsHome={setIsHome} setHeadTitleAsVideoTitle={setHeadTitleAsVideoTitle} />} />
        <Route  path="/feed/explore"  element={<Explore nav={nav} setSidebarActive={setSidebarActive} setIsHome={setIsHome} setHeadTitleAsVideoTitle={setHeadTitleAsVideoTitle} />} />
        <Route path="/watch/:videoId" element={<VideoPlayer nav={nav} setNavSidebar={setNavSidebar} setSidebarActive={setSidebarActive} setIsHome={setIsHome} setHeadTitleAsVideoTitle={setHeadTitleAsVideoTitle} updateHistory={updateHistory} />} />
        <Route path="/result/search_query/:query" element={<Search nav={nav} setNavSidebar={setNavSidebar} setSidebarActive={setSidebarActive} setIsHome={setIsHome} setHeadTitleAsVideoTitle={setHeadTitleAsVideoTitle} />} />
        <Route  path="/feed/history"  element={<History nav={nav} setSidebarActive={setSidebarActive} setIsHome={setIsHome} setHeadTitleAsVideoTitle={setHeadTitleAsVideoTitle} />} />

      </Routes>
    </>
  );
}

export default App;
