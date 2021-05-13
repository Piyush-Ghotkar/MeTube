import yt_icon from '../imgs/yt_icon.png'
import '../styles/Sidebar.css';
import '../styles/ScrollBar.css';


import HomeIcon from '@material-ui/icons/Home';
import { grey } from '@material-ui/core/colors';
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


function Siderbar(props){
    return (
        <>
        <div className="sidebar">
            <div className="sidebar-top">
                <MenuIcon onClick={props.setNavSidebar} className="ham-menu" style={{ color: grey[700] }} />
                {/* <img  src={menu} alt="Ham-menu"/> */}
                <img className="site-icon" src={yt_icon} alt="Youtube Icon" />
                    <div className="site-name">MeTube</div>
            </div>
            
            <div className="content">
                <ul className={(props.nav.sidebarMin?"close-max":"")}> 
                    <li onClick={()=>{props.setSidebarActive('home')}} className={(props.nav.sidebarActive=='home'?"active":"")}>
                        <HomeIcon className={(props.nav.sidebarActive=='home'?"active-icon ":"") +" li-icon "}  />
                         <div className="sidebar-txt">Home</div>
                    </li>
                    <li onClick={()=>{props.setSidebarActive('explore')}} className={(props.nav.sidebarActive=='explore'?"active":"")}>
                        <ExploreIcon className={(props.nav.sidebarActive=='explore'?"active-icon":"")+" li-icon "}/>
                            <div className="sidebar-txt">
                             Explore
                            </div>
                    </li>
                    <li onClick={()=>{props.setSidebarActive('subscriptions')}} className={(props.nav.sidebarActive=='subscriptions'?"active":"")}>
                        <SubscriptionsIcon className={(props.nav.sidebarActive=='subscriptions'?"active-icon":"")+" li-icon smaller-icon"}  style={{ fontSize: 20 }}/>
                            <div className="sidebar-txt">
                             Subscriptions
                            </div>
                    </li>
                    
                    <hr />
                    
                    <li onClick={()=>{props.setSidebarActive('library')}} className={(props.nav.sidebarActive=='library'?"active":"")}>
                        <VideoLibraryIcon className={(props.nav.sidebarActive=='library'?"active-icon":"")+" li-icon "}/>
                            <div className="sidebar-txt">
                             Library
                            </div>
                    </li>
                    <li onClick={()=>{props.setSidebarActive('history')}} className={(props.nav.sidebarActive=='history'?"active":"")}>
                        <HistoryIcon className={(props.nav.sidebarActive=='history'?"active-icon":"")+" li-icon "} style={{ fontSize: 22.5 }}/>
                            <div className="sidebar-txt">
                             History
                            </div>
                    </li>
                    <li onClick={()=>{props.setSidebarActive('watchLater')}} className={(props.nav.sidebarActive=='watchLater'?"active":"")}>
                        <WatchLaterIcon className={(props.nav.sidebarActive=='watchLater'?"active-icon":"")+" li-icon smaller-icon"} style={{ fontSize: 20 }}/>
                            <div className="sidebar-txt">
                             Watch later
                            </div>
                    </li>
                    <li onClick={()=>{props.setSidebarActive('likedVideos')}} className={(props.nav.sidebarActive=='likedVideos'?"active":"")}>
                        <ThumbUpAltIcon className={(props.nav.sidebarActive=='likedVideos'?"active-icon":"")+" li-icon smaller-icon"} style={{ fontSize: 20 }}/>
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


            <div className="min-sidebar">
                <ul className={(props.nav.sidebarMin?"":"close-min")}> 
                        <li onClick={()=>{props.setSidebarActive('home')}} className={(props.nav.sidebarActive=='home'?"active":"")}>
                            <div className="li-content">
                                <HomeIcon className={(props.nav.sidebarActive=='home'?"active-icon ":"") +" li-icon "} style={{ fontSize: 25 }} />
                                <div className="sidebar-txt">Home</div>
                            </div>
                        </li>
                        <li onClick={()=>{props.setSidebarActive('explore')}} className={(props.nav.sidebarActive=='explore'?"active":"")}>
                            <div className="li-content">
                                <ExploreIcon className={(props.nav.sidebarActive=='explore'?"active-icon":"")+" li-icon "}/>
                                    <div className="sidebar-txt">
                                    Explore
                                    </div>
                            </div>
                        </li>
                        <li onClick={()=>{props.setSidebarActive('subscriptions')}} className={(props.nav.sidebarActive=='subscriptions'?"active":"")} >
                            <div className="li-content">
                                <SubscriptionsIcon className={(props.nav.sidebarActive=='subscriptions'?"active-icon":"")+" li-icon smaller-icon"} style={{ fontSize: 20 }}/>
                                    <div className="sidebar-txt">
                                    Subscriptions
                                    </div>
                            </div>
                        </li>
                        <li onClick={()=>{props.setSidebarActive('library')}} className={(props.nav.sidebarActive=='library'?"active":"")}>
                            <div className="li-content">
                                <VideoLibraryIcon className={(props.nav.sidebarActive=='library'?"active-icon":"")+" li-icon "} />
                                <div className="sidebar-txt">
                                Library
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    );
}

export default Siderbar;

