import '../styles/Explore.css';
import { getTrendingVideos } from '../util/utils.js';
import {useState,useEffect} from "react"

import { formatViews } from '../util/utils.js';
import { formatDate } from '../util/utils.js';
import { formatVideoDuration } from '../util/utils.js';
import {Link} from "react-router-dom";

import MoreVertIcon from '@material-ui/icons/MoreVert';

function Explore(props){
    const [videosObj,setVideosObj]=useState();

    useEffect(()=>{
        props.setSidebarActive('explore');
        window.scrollTo(0, 0);
        props.setHeadTitleAsVidoeTitle("Explore");
        props.setIsHome(true);


        var videos= getTrendingVideos(props.nav.headerbarActive);

        videos
        .then(videos=> {
            setVideosObj(videos);
        });
    },[])

return (
    <>
    .
    <div className="explore">
        <div className={(props.nav.sidebarMin?"main-body-minSidebar":"main-body")}>
            <div className="trendingVideos">
                <div className="trendingVideos-heading">Trending videos</div>
                <div className="videosList">
                    {
                        videosObj &&
                        videosObj.items.map((video)=>(
                            <Link to={`/watch/${video.id}`}  key={video.id}>
                                <div className="trendingVideos-item">
                                    
                                        <img className="trendingVideos-thumbnail" src={video.snippet.thumbnails.medium.url} alt="videoThumbnail" />
                                        <div className="trendingVideos-duration">{formatVideoDuration(video.contentDetails.duration)}</div>
                                    
                                    <div className="trendingVideos-details">
                                        <div className="trendingVideos-title">{video.snippet.title}</div>
                                        <div className="moreIcon"><MoreVertIcon style={{ fontSize: 20 }}/></div>
                                        <div className="trendingVideos-channelStats">
                                            {video.snippet.channelTitle}
                                            <div className="stats">{formatViews(video.statistics.viewCount)} views
                                                <span style={{fontSize: 10}}> &#183; </span>
                                                {formatDate(video.snippet.publishedAt)}
                                                </div>
                                        </div>
                                        <div className="trendingVideos-description">
                                            {video.snippet.localized.description}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default Explore;