import '../styles/Main.css';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { getHomeVideos } from '../util/utils.js';
import { getChannelsThumbnails } from '../util/utils.js';
import { concatVideosChannels } from '../util/utils.js';
import { formatVideoDuration } from '../util/utils.js';

import { formatViews } from '../util/utils.js';
import { formatDate } from '../util/utils.js';
import {useState,useEffect,useRef} from 'react';
import {Link} from "react-router-dom";


function Main(props){

    const [videosObj,setVideosObj]=useState();
    const promiseVideos = useRef();
    const promiseChannel=useRef();

    useEffect(()=>{
        props.setIsHome(true);
    },[])

    useEffect(()=>{
        window.scrollTo(0, 0);
        props.setHeadTitleAsVideoTitle("MeTube");
        var videos= getHomeVideos(props.nav.headerbarActive);
        promiseVideos.current=videos;

        promiseVideos.current
        .then(async videos=> {
            var channels= await getChannelsThumbnails(videos);
            promiseChannel.current=channels;
    
            var videosAndChannelThumbnail=concatVideosChannels(videos,channels);
            setVideosObj(videosAndChannelThumbnail);

        });

        
    },[props.nav.headerbarActive]);
        

    return (
    <>
    .
        <div className={(props.nav.sidebarMin?"main-body-minSidebar":"main-body")}> 
            <div className="contents">
                <div className="row">
                    {  
                        videosObj && 
                        videosObj.items.map((item)=> (
                                <Link to={`/watch/${item.id}`}  key={item.id}><div className="item-render single-item-wd">
                                    <div className="thumbnail">
                                        <img className="single-item-wd static-thumb" alt="thumbnail" src={item.snippet.thumbnails.medium.url} />
                                        <div className="video-duration">{formatVideoDuration(item.contentDetails.duration)}</div>
                                        {/* <img className="single-item-wd gif-thumb" alt="thumbnail" src="https://i.ytimg.com/vi/7XDfXH-SROE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgLomgzLQxNf2QPBkluBBep3ZPzw" /> */}
                                    </div>
                                    <div className="details">
                                        <img className="channel-img" alt="channel-thumbnail" src={item.snippet.channelThumbnail} />
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
                                </Link>
                            ))
                    }
                </div>
            </div>
        </div>
    </>
    );
}

export default Main;