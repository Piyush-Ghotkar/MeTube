import '../styles/Header.css';

import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header(){
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
 
        <div className="header-top-margin">   {/*TODO: use react .header-top/bottom-margin */}
            <hr className="header-hr" />

            <div className="top-nav">
                <ul>
                    <li className="active">All</li>
                    <li>Live</li>
                    <li>Music</li>
                    <li>Technology</li>
                    <li>Coding</li>
                    <li>Comedies</li>
                    <li>Trailers</li>
                    <li>Cricket</li>
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