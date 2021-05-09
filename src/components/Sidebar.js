import menu from '../imgs/menu.png';
import yt_icon from '../imgs/yt_icon.png'
import '../styles/Sidebar.css';
import '../styles/ScrollBar.css';


import HomeIcon from '@material-ui/icons/Home';
import { red,grey } from '@material-ui/core/colors';
import MenuIcon from '@material-ui/icons/Menu';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TheatersIcon from '@material-ui/icons/Theaters';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import CompassCalibrationIcon from '@material-ui/icons/CompassCalibration';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';

// const yt_red_color=#FF0000;

function Siderbar(){
    return (
        <>
        <div className="sidebar">
            <div className="sidebar-top">
                <MenuIcon className="ham-menu" style={{ color: grey[700] }} />
                {/* <img  src={menu} alt="Ham-menu"/> */}
                <img className="site-icon" src={yt_icon} alt="Youtube Icon" />
                    <div className="site-name">MeTube</div>
            </div>
            
            <div className="content">
                <ul>
                    <li className="active">
                        <HomeIcon className="active-icon li-icon " />
                         <div className="sidebar-txt">Home</div>
                    </li>
                    <li>
                        <ExploreIcon className="li-icon"/>
                            <div className="sidebar-txt">
                             Explore
                            </div>
                    </li>
                    <li >
                        <SubscriptionsIcon className="li-icon smaller-icon" style={{ fontSize: 20 }}/>
                            <div className="sidebar-txt">
                             Subscriptions
                            </div>
                    </li>
                    
                    <hr />
                    
                    <li>
                        <VideoLibraryIcon className="li-icon"/>
                            <div className="sidebar-txt">
                             Library
                            </div>
                    </li>
                    <li>
                        <HistoryIcon className="li-icon" style={{ fontSize: 22.5 }}/>
                            <div className="sidebar-txt">
                             History
                            </div>
                    </li>
                    <li>
                        <WatchLaterIcon className="li-icon smaller-icon" style={{ fontSize: 20 }}/>
                            <div className="sidebar-txt">
                             Watch later
                            </div>
                    </li>
                    <li>
                        <ThumbUpAltIcon className="li-icon smaller-icon" style={{ fontSize: 20 }}/>
                            <div className="sidebar-txt">
                             Liked videos
                            </div>
                    </li>

                    <hr />

                    <div className="sidebar-txt-2">
                        MORE FROM METUBE 
                    </div>

                    <li>
                        <YouTubeIcon className="li-icon smaller-icon" style={{ fontSize: 25 }}/>
                            <div className="sidebar-txt">
                             MeTube Premium
                            </div>
                    </li>
                    <li>
                        <TheatersIcon className="li-icon smaller-icon" />
                            <div className="sidebar-txt">
                             Movies
                            </div>
                    </li>
                    <li>
                        <SportsEsportsIcon className="li-icon smaller-icon" />
                            <div className="sidebar-txt">
                             Gaming
                            </div>
                    </li>
                    <li>
                        <CompassCalibrationIcon className="li-icon smaller-icon" />
                            <div className="sidebar-txt">
                             Live
                            </div>
                    </li>
                    <li>
                        <EmojiObjectsIcon className="li-icon smaller-icon" />
                            <div className="sidebar-txt">
                             Learning
                            </div>
                    </li>

                    <hr />

                    <li>
                        <SettingsIcon className="li-icon smaller-icon" />
                            <div className="sidebar-txt">
                             Setting
                            </div>
                    </li>
                    <li>
                        <FlagIcon className="li-icon smaller-icon" />
                            <div className="sidebar-txt">
                             Report
                            </div>
                    </li>
                    <li>
                        <HelpIcon className="li-icon smaller-icon" />
                            <div className="sidebar-txt">
                             Help
                            </div>
                    </li>
                    <li>
                        <FeedbackIcon className="li-icon smaller-icon" />
                            <div className="sidebar-txt">
                             Send feedback
                            </div>
                    </li>

                    <hr />

                    <div className="sidebar-txt-3">
                    About Press Copyright <br />
                    Contact us Creators <br />
                    Advertise Developers<br />
                    <br />
                    Terms Privacy Policy & Safety <br />
                    How YouTube works<br />
                    Test new features<br />
                    <br />
                    © 2021 Google LLC<br />
                    
                    </div>
                </ul>
            </div>

        </div>
        </>
    );
}

export default Siderbar;