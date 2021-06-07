import '../styles/VideoPlayer.css';
import {useEffect,useState, useReducer} from  "react";
import { useParams } from "react-router-dom";
import { getCommentsById, getVideoById } from '../util/utils.js';
import { getChannelsThumbnails } from '../util/utils.js';
import { getRelatedVideosByID } from '../util/utils.js';
import { PlayerViewsFormatter } from '../util/utils.js';
import { PlayerDateFormatter } from '../util/utils.js';
import { formatViews } from '../util/utils.js';
import { formatDate } from '../util/utils.js';
import { concatVideosChannelsCommentsRelatedVideos } from '../util/utils.js';
import {Link} from "react-router-dom";


import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ReplyIcon from '@material-ui/icons/Reply';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MoreVertIcon from '@material-ui/icons/MoreVert';




function VideoPlayer(props){
    const {videoId}=useParams();
    const [video, setVideo] = useState();
    const [showMoreDescription,toggleShow]=useReducer(
        (showMoreDescription)=>!showMoreDescription,true);
  
    useEffect(() => {
        props.setIsHome(false);
        props.setSidebarActive("");
        props.updateHistory(videoId);
        var videoPromise=getVideoById(videoId);
        videoPromise
        .then(async videos=> {
            props.setHeadTitleAsVideoTitle(videos.items[0].snippet.localized.title);
            var channels= await getChannelsThumbnails(videos);
            var comments=await getCommentsById(videos.items[0].id)
            var relatedVideos= await getRelatedVideosByID(videos.items[0].id)
            var videosAndChannelThumbnail=concatVideosChannelsCommentsRelatedVideos(videos,channels,comments,relatedVideos);
            setVideo(videosAndChannelThumbnail);
        })
        window.scrollTo(0, 0);
    }, [videoId])

    var mobileScreenSize = window.matchMedia("(max-width: 600px)");
    var playerWidth="890";
    var playerHeight="510";
    if (mobileScreenSize.matches) { // If media query matches
        playerWidth="100%";
        playerHeight="230";
    }
    

    return (
        <>d
            <div className="watch-body">
                <div className="watch-contents">
                    {
                        video &&
                            video.items.map((item)=>(
                                <>
                                <div className="playerColumn" key={item.id}>
                                    <div className="video-container">
                                        <iframe className="fixed" width={playerWidth} height={playerHeight} src={"//www.youtube.com/embed/"+item.id} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                    <div className="videoTitle">
                                        {item.snippet.localized.title}
                                    </div>
                                    <div className="video-statDetails">
                                        <div className="player-views">
                                            {PlayerViewsFormatter(item.statistics.viewCount)} views
                                            <span style={{fontSize: 10}}> &#183; </span>
                                                {PlayerDateFormatter(item.snippet.publishedAt)}

                                            <div className="player-icons">
                                                <div className="player-stat player-stat-mobile-margin" >
                                                <div className="stat-hover-txt">I like this</div>
                                                    <ThumbUpIcon className="player-icon" />
                                                    <div className="player-icon-txt">
                                                        {formatViews(item.statistics.likeCount)}
                                                    </div>
                                                </div>

                                                <div className="player-stat" >
                                                    <div className="stat-hover-txt">I dislike this</div>
                                                    <ThumbDownIcon className="player-icon" />
                                                    <div className="player-icon-txt">
                                                        {formatViews(item.statistics.dislikeCount)}
                                                    </div>
                                                    
                                                </div>

                                                <div className="player-stat" >
                                                    <ReplyIcon className="player-icon shareIcon" style={{ fontSize: 27 }}  />
                                                    <div className="player-icon-txt">
                                                        SHARE
                                                    </div>
                                                    <div className="stat-hover-txt">Share</div>
                                                </div>

                                                <div className="player-stat" >
                                                    <PlaylistAddIcon className="player-icon" />
                                                    <div className="player-icon-txt">
                                                        SAVE
                                                    </div>
                                                    <div className="stat-hover-txt">Save</div>
                                                </div>

                                                <div className="player-stat last-stat" >
                                                <MoreHorizIcon className="player-icon lastIcon" style={{ fontSize: 27 }}/>
                                                </div>

                                            </div>
                                        </div>
                                        <hr className="header-hr" />
                                    </div>

                                    <div className="channel-description">
                                        <div className="row1">
                                            <img className="channelThumb" src={item.snippet.channelThumbnail} alt="channelThumbnail"/>
                                            <div className="name-subs">
                                                <div className="channelName">{item.snippet.channelTitle}
                                                    <div className="channelName-hover-txt">
                                                        {item.snippet.channelTitle}
                                                    </div>
                                                </div>
                                                <div className="channelSubs">{formatViews(item.statistics.subscriberCount)+" subscribers"}</div>
                                            </div>
                                            <div className="subscribeButton">SUBSCRIBE</div>
                                        </div>
                                        <div className="row2">
                                            <div className={"videoDescription "+(showMoreDescription?"lessDescription":"")}>
                                                {item.snippet.localized.description}
                                            </div>
                                            <div className={"show-txt"+(showMoreDescription?"":" show-txt-reducedMargin")} onClick={toggleShow}>SHOW {(showMoreDescription?"MORE":"LESS")}</div>
                                        </div>
                                    </div>
                                    <hr className="header-hr" />

                                    <div className="commentsSection">
                                        <div className="commentsCount">
                                            {PlayerViewsFormatter(item.statistics.commentCount)} Comments
                                        </div>
                                        <div className="comments">
                                            {(item.commentThread?
                                            item.commentThread.map((comment)=>(
                                                <div className="comment" key={comment.id}>
                                                    <img className="comment-profileImg" src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}/>
                                                    <div className="comment-details">
                                                        <div className="comment-profileName">{comment.snippet.topLevelComment.snippet.authorDisplayName}
                                                            <div className="comment-profileName-hover-txt">{comment.snippet.topLevelComment.snippet.authorDisplayName}</div>
                                                        </div>
                                                        <div className="comment-publishedAt">{formatDate(comment.snippet.topLevelComment.snippet.publishedAt)}</div>
                                                        <div className="comment-displayTxt" dangerouslySetInnerHTML={{ __html: comment.snippet.topLevelComment.snippet.textDisplay }}></div>
                                                        <div className="comment-response">
                                                        <ThumbUpIcon className="comment-icons" style={{ fontSize: 17 }}/>
                                                            <div className="comment-likeTxt">{formatViews(comment.snippet.topLevelComment.snippet.likeCount)}</div>
                                                        <ThumbDownIcon className="comment-icons" style={{ fontSize: 17 }}/>
                                                        <div className="comment-reply">REPLY</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )):<div className="noComments">Comments are turned off. <a href="https://support.google.com/youtube/answer/9706180?hl=en">Learn more</a></div>)
                                            }
                                        </div>
                                    </div>

                                </div>
                                 
                                <div className="relatedVideosColumn">
                                    <div className="relatedVideo-content">
                                        {
                                            item.relatedVideos.map((video)=>(
                                                <Link to={`/watch/${video.id.videoId}`} key={video.id.videoId}>
                                                <div className="relatedVideo-item" >
                                                    
                                                    <img className="relatedVideo-thumbnail-img" src={video.snippet.thumbnails.medium.url} alt="videoThumbnail" />
                                                    
                                                    <div className="relatedVideo-details">
                                                        <div className="relatedVideo-details-title">
                                                            {video.snippet.title}
                                                            
                                                        </div>
                                                        <div className="relatedVideo-channelName">
                                                            {video.snippet.channelTitle}
                                                        </div>
                                                        <div className="relatedVideo-publishedAt">
                                                            {formatDate(video.snippet.publishedAt)}
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="relatedVideo-more">
                                                        <MoreVertIcon style={{ fontSize: 20 }}/>
                                                        {/*  TODO: drop down for add to libray n watch later
                                                        <div className="relatedVideo-more-dropdown">
                                                            <ul>
                                                                <li>Add to Library</li>
                                                                <li>Save to Watch Later</li>
                                                            </ul>
                                                        </div> */}
                                                    </div>
                                                </div>
                                                </Link>
                                            ))
                                        }
                                            
                                    </div>
                                </div>
                                </>
                            ))
                            
                    }
                </div>
            </div>
        </>
    );
}

export default VideoPlayer;