import '../styles/Header.css';

import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CloseIcon from '@material-ui/icons/Close';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import {useEffect} from  "react";


function Header(props){

    const [mobileSearchBar, setMobileSearchBar] = useState(false);

    var query="";
    let navigate = useNavigate();

    function updateInputValue(input){
        query=input.target.value.trim();
    }

    function searchQueryByEnter(e){
        if(e.code === "Enter"){
            searchQuery();
        }
    }

    function searchQuery(){
        
        if(query!==""){
            navigate("/result/search_query/"+query);
            setMobileSearchBar(false);
        }
    }
    

return (
    <>
    <div className="header">
        <div className="header-top-margin">
        <div className="inputs">
            
            <div className="mobileSearchIcon">
                <div className="header-icon-text" onClick={()=>setMobileSearchBar(true)}>
                    <SearchIcon className="mobSearch-icon" style={{ fontSize: 25 }} />
                    
                </div>
            </div>

            <div className="desktopSearch">
                <input type="text" placeholder="Search" onChange={updateInputValue} onKeyPress={searchQueryByEnter}/>
                <div className="header-icon-text" onClick={searchQuery}>
                    <SearchIcon className="search-icon" style={{ fontSize: 20 }} />
                    <div className="header-txt-1 search-hover-txt">Search</div>
                </div>
            </div>

            <div className="position-block" ></div>

            <div className="header-icon-text">
                <MicIcon className="mic-icon" />
                <div className="header-txt-1 mic-hover-txt">Search with your voice</div>
            </div>

            <div className="position-block right-margin-f-create" ></div>
            
            <div className="rightSideIcons">
                <div className="header-icon-text">   {/* use signOut here */}
                    <VideoCallIcon className="create-icon" />
                    <div className="header-txt-1">Create</div>
                </div>

                <div className="position-block right-margin-g-apps" ></div> {/* use signOut here */}

                <div className="header-icon-text">
                    <AppsIcon className="create-icon" />
                    <div className="header-txt-1 apps-hover-txt">MeTube Apps</div>
                </div>

                <div className="position-block right-margin-g-apps" ></div>

                <div className="header-icon-text"> {/* use signOut here /option icon insted*/}
                    <NotificationsIcon className="create-icon" />
                    <div className="header-txt-1 apps-hover-txt">Notifications</div>
                </div>

                <div className="position-block right-margin-g-apps " ></div>
                <AccountCircleIcon className="account-icon rightSideIcons"  style={{ fontSize: 34 }} />
                </div>
            </div>

        <div className={(mobileSearchBar?"ActiveMobileSearch":"mobileSearch")}>
            <input type="text" placeholder="Search" onChange={updateInputValue} />
            <div className="header-icon-text" onClick={searchQuery}>
                <SearchIcon className="search-icon" style={{ fontSize: 20 }} onKeyPress={searchQueryByEnter}/>
                <div className="header-txt-1 search-hover-txt">Search</div>
                <CloseIcon className="close-icon" style={{ fontSize: 20 }} onClick={()=>setMobileSearchBar(false)} />
            </div>
        </div>

        </div>
 
        <div className={(props.nav.sidebarMin?"header-bottom-margin":"header-top-margin")+(props.nav.isHome?(props.nav.sidebarActive!=="home"?" no-top-nav":""):" no-top-nav") }>
   
            <hr className="header-hr" />

            <div className="top-nav">
                <ul>
                    <li onClick={props.setNavHeaderActive} className={(props.nav.headerbarActive==="all"?"active":"")}>All</li>
                    <li onClick={props.setNavHeaderActive} className={(props.nav.headerbarActive==="music"?"active":"")}>Music</li>
                    <li onClick={props.setNavHeaderActive} className={(props.nav.headerbarActive==="news"?"active":"")}>News</li>
                    <li onClick={props.setNavHeaderActive} className={(props.nav.headerbarActive==="sports"?"active":"")}>Sports</li>
                    <li onClick={props.setNavHeaderActive} className={(props.nav.headerbarActive==="comedies"?"active":"")}>Comedies</li>
                    <li onClick={props.setNavHeaderActive} className={(props.nav.headerbarActive==="vlogs"?"active":"")}>Vlogs</li>
                    <li onClick={props.setNavHeaderActive} className={(props.nav.headerbarActive==="entertainment"?"active":"")}>Entertainment</li>
                    <li onClick={props.setNavHeaderActive} className={(props.nav.headerbarActive==="vehicles"?"active":"")}>Vehicles</li>

                </ul>    
            </div>

            <hr className="header-hr" />
        </div>
    </div>
  

    </>
);
}

export default Header;


// TODO: implement sign in feature and change icons accordingly
//       drop down for "YouTube Apps"