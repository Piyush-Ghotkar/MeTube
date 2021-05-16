import '../styles/Main.css';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { getHomeVideos } from '../util/utils.js';
import { formatViews } from '../util/utils.js';
import { formatDate } from '../util/utils.js';
import {useState,useEffect} from 'react';


function Main(props){

    const [videosObj,setVideosObj]=useState();
    const [promise,setPromise]=useState();
    
    useEffect(()=>{
        var videos=getHomeVideos(props.nav.headerbarActive);
        setPromise(videos);
    },[props.nav.headerbarActive]);
        

 
   if(promise){
    promise
    .then(videos=> {setVideosObj(videos.items); });
   }

    return (
    <>
    d
        <div className={(props.nav.sidebarMin?"main-body-minSidebar":"main-body")}> 
            <div className="contents">
                <div className="row">
                    {  
                        videosObj  && 
                        videosObj.map((item)=> (
                                <div className="item-render single-item-wd" key={item.id}>
                                    <div className="thumbnail">
                                        <img className="single-item-wd static-thumb" alt="thumbnail" src={item.snippet.thumbnails.medium.url} />

                                        {/* <img className="single-item-wd gif-thumb" alt="thumbnail" src="https://i.ytimg.com/vi/7XDfXH-SROE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgLomgzLQxNf2QPBkluBBep3ZPzw" /> */}
                                    </div>
                                    <div className="details">
                                        <img className="channel-img" alt="channel-thumbnail" src="https://yt3.ggpht.com/ytc/AAUvwnhcca0yLfWqq-WMdr4Gv1HwJnoyq_Qvr8pRWF1Kmg=s68-c-k-c0x00ffffff-no-rj" />

                                        <div className="details-txt">
                                            <div className="details-title">
                                                {item.snippet.title}
                                            </div>
                                            <div className="channel-name">
                                                {item.snippet.channelTitle}
                                            </div>
                                            <div className="views-age">
                                                {formatViews(item.statistics.viewCount)} views
                                                <span style={{fontSize: 10}}> &#183; </span>
                                                {formatDate(item.snippet.publishedAt)}
                                            </div>
                                        </div>
                                        <div className="details-hover-options">
                                            <MoreVertIcon className="more-icon" />
                                        </div>
                                    </div>
                                </div>
                           ))
                       
                    }

                </div>
            </div>
        </div>
    </>
    );
}

export default Main;