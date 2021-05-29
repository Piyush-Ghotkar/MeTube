import '../styles/Header.css';

import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header(props){
return (
    <>
    <div className="header">
        <div className="header-top-margin">
        <div className="inputs">
            
            <input type="text" placeholder="Search" />
            <div className="header-icon-text">
                <SearchIcon className="search-icon" style={{ fontSize: 20 }} />
                <div className="header-txt-1 search-hover-txt">Search</div>
            </div>

            <div className="position-block" ></div>

            <div className="header-icon-text">
                <MicIcon className="mic-icon" />
                <div className="header-txt-1 mic-hover-txt">Search with your voice</div>
            </div>

            <div className="position-block right-margin-f-create" ></div>
               
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

            <div className="position-block right-margin-g-apps" ></div>
            
            <AccountCircleIcon className="account-icon"  style={{ fontSize: 34 }} />

        </div>
        </div>
 
        <div className={(props.nav.sidebarMin?"header-bottom-margin":"header-top-margin")+(props.nav.isHome?(props.nav.sidebarActive==="explore"?" no-top-nav":""):" no-top-nav") }>
   
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