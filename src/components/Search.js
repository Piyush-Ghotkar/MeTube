import '../styles/Search.css';

import { useParams } from "react-router-dom";
import { getSearchList } from '../util/utils.js';
import {useState,useEffect} from "react"
import { formatViews } from '../util/utils.js';
import { formatDate } from '../util/utils.js';
import { formatVideoDuration } from '../util/utils.js';
import { getChannelsThumbnails } from '../util/utils.js';
import { concatVideosChannels } from '../util/utils.js';
import {Link} from "react-router-dom";
import MoreVertIcon from '@material-ui/icons/MoreVert';


function Search(props){
    const [videosObj,setVideosObj]=useState();
    const {query}=useParams();

    useEffect(()=>{
        props.setSidebarActive('');
        window.scrollTo(0, 0);
        props.setHeadTitleAsVideoTitle(query);
        props.setIsHome(true);


        var videos= getSearchList(query);

        videos
        .then(async videos=> {
            var channels= await getChannelsThumbnails(videos);
            // TODO: get video view and duration from another request
            var videosAndChannelThumbnail=concatVideosChannels(videos,channels);
            setVideosObj(videosAndChannelThumbnail);
        });
    },[query])

    return (
        <>
        .
        <div className="search">
            <div className={(props.nav.sidebarMin?"main-body-minSidebar":"main-body")}>
                <div className="searchVideos">
                {
                    videosObj &&
                    videosObj.items.map((video)=>(
                        <Link to={`/watch/${video.id.videoId}`}  key={video.id.videoId}>
                        <div className="searchVideos-item">
                            <img className="searchVideos-thumbnail" src={video.snippet.thumbnails.medium.url} alt="videoThumbnail" />
                            <div className="searchVideos-details">
                                <div className="searchVideos-title">
                                    <div dangerouslySetInnerHTML={{__html: video.snippet.title}}></div>
                                </div>
                                <div className="moreIcon"><MoreVertIcon style={{ fontSize: 20 }}/></div>
                                <div className="searchVideos-channelStats">
                                    <div className="searchVideos-stats">
                                            {/* {formatViews(video.statistics.viewCount)} views
                                            <span style={{fontSize: 10}}> &#183; </span> */}
                                            {formatDate(video.snippet.publishedAt)}
                                    </div>
                                    <div className="searchVideos-channel">
                                        <img className="searchVideos-channel-img" alt="channel-thumbnail" src={video.snippet.channelThumbnail} />
                                        <div className="searchVideos-channelName">{video.snippet.channelTitle}</div>
                                    </div>    
                                </div>
                                <div className="searchVideos-description">
                                    {video.snippet.description}
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

export default Search;