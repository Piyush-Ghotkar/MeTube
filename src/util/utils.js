var key=process.env.REACT_APP_API_KEY;

export async function getHomeVideos(category){
    var url;
    var part;
    if(category!=="all"){
        url="https://www.googleapis.com/youtube/v3/videos";
        part="snippet,statistics,contentDetails";
        var chart="mostPopular";
        var maxResults=16;
        var regionCode="IN";
        var videoCategoryId={
          music:10,
          news:25,
          comedies: 23,
          gaming: 20,
          sports: 17,
          vlogs:22,
          entertainment:24,
          vehicles:2
        };
    
        
        // url+= "?"+"part="+part+"&maxResult="+maxResults+"&q="+q+"&key="+key;  //search query
    
        url+= "?"+"part="+part+"&chart="+chart+"&maxResults="+maxResults+"&key="+key+"&videoCategoryId="+videoCategoryId[category]+"&regionCode="+regionCode;  //category query //+"&regionCode="+regionCode    
    }else{
        url="https://www.googleapis.com/youtube/v3/videos";
        part="snippet,statistics,contentDetails";
        var videosId=[
            "SmpxuqhHfB8",   //sanmay's given ids
            "L7c4wS7T_T8",
            "uzkD5SeuwzM",
            "nLnp0tpZ0ok",
            "f-CBG061wJ8",
            "WB-y7_ymPJ4",
            "wY6UyatwVTA",
            "5WI6MHH7Y7I",
            "giWIr7U1deA",
            "pdtwzObNgFY",
            "ioOs4DG018o",
            "1DuXpDWnA7A",
            "0EqSXDwTq6U",
            "CNpIfP4vtrE",
        
            "VStSK62Bqqs",    //nidhi's given ids
            "9Oh5B9T5Uy0",
            "CXEvcVfUNfM",
            "8ZRypDjPN8U",
            "vAKxe99D0Ww",
            "HRXVQ77ehRQ",
            "mUmLniVCYys",
            "3N5BKkr5ot8",
            "KRA26LhuTP4",
            "7A_ovYw6pYk",
            "LTpmw0Ac6Zs",
            "BwLyVln_9fc",
            "rbCGmC1J1x8",
            "qp1FI8EIbIk",
            "DwBDY91pHio",
            "bwCqWUmu6pk",
            "xwwPP8_wM7I",
        
            "WeWXC_ivl5s" //my ids
        ];

            ShuffleVideoId(videosId);
        var idString="";
        
        for(var i=0; i<videosId.length; i++){
            idString+=videosId[i]+",";
        }
        url+="?"+"part="+part+"&key="+key+"&id="+idString;
    }
    // api params
    
    var videos;
    

    videos=await fetch(url)
                    .then(response => response.json())
                    .then(data=> {return data})
                    .catch((err) => {
                        console.log(err);
                        return err;
                      })

    return videos;

}

export async function getChannelsThumbnails(videosObj){
    var channelsId=[];
    videosObj.items.map( (item)=> 
        channelsId.push(item.snippet.channelId)
    )   

    var url="https://www.googleapis.com/youtube/v3/channels";
    var part="snippet,statistics";
    var idString="";
    for(var i=0; i<channelsId.length; i++){
        idString+=channelsId[i]+",";
    }
    url+="?"+"part="+part+"&key="+key+"&id="+idString;
    
    var channelsObj;
    
    channelsObj= await fetch(url)
                            .then(response=>response.json())
                            .then(data=> {return data})
                            .catch((err)=>{
                                console.log(err)
                            })

    return channelsObj;
}

export async function getVideoById(id){
    var url="https://www.googleapis.com/youtube/v3/videos";
    var part="snippet,statistics";

    url+="?part="+part+"&id="+id+"&key="+key;

    var video=await fetch(url)
                    .then(response=>response.json())
                    .then(data=>{return data})
                    .catch((err)=>{
                        console.log(err)
                    })
    return video;
}

export async function getCommentsById(id){
    var url="https://www.googleapis.com/youtube/v3/commentThreads";
    var part="snippet";
    var maxResults=10;
    var order="relevance";
    url+="?part="+part+"&videoId="+id+"&maxResults="+maxResults+"&order="+order+"&key="+key;
    
    var comments=await fetch(url)
                    .then(response=>response.json())
                    .then(data=>{return data})
                    .catch((err)=>{
                        console.log(err)
                    })

    return comments;
}

export async function getRelatedVideosByID(id){
    var url="https://www.googleapis.com/youtube/v3/search";
    var part="snippet";
    var maxResults=20;
    var type="video";
    url+="?part="+part+"&relatedToVideoId="+id+"&maxResults="+maxResults+"&type="+type+"&key="+key;
    var filterRelatedVideo=[];
    var relatedVideos=await fetch(url)
                    .then(response=>response.json())
                    .then(data=>{
                        
                        for(var i=0;i<data.items.length;i++){
                            if("snippet" in data.items[i]){
                                filterRelatedVideo.push(data.items[i]);
                            }
                        }

                        return data})
                    .catch((err)=>{
                        console.log(err)
                    })
    
    
    
    return filterRelatedVideo;
}

export async function getTrendingVideos(){
    var url="https://www.googleapis.com/youtube/v3/videos";
    var part="snippet,statistics,contentDetails";
    var chart="mostPopular";
    var maxResults=30;
    var regionCode="IN";

    url+= "?"+"part="+part+"&chart="+chart+"&maxResults="+maxResults+"&key="+key+"&regionCode="+regionCode;  //category query //+"&regionCode="+regionCode    
    var videos;
    
    videos=await fetch(url)
                    .then(response => response.json())
                    .then(data=> {return data})
                    .catch((err) => {
                        console.log(err);
                        return err;
                      })

    return videos;
}

export async function getSearchList(q){
    var url="https://www.googleapis.com/youtube/v3/search";
    var part="snippet";
    var maxResults=20;
    var type="video";
    url+="?part="+part+"&q="+q+"&maxResults="+maxResults+"&type="+type+"&key="+key;
    var videos;
    videos=await fetch(url)
                    .then(response => response.json())
                    .then(data=> {return data})
                    .catch((err) => {
                        console.log(err);
                        return err;
                      })

    return videos;
}


export function formatViews(views){
    try{
        views=  views.toString();
    }catch(err){
        views="";
    }

  if(views.length<=3){
    return views;
  }else if(views.length<=6){
      if(views.length===6){
          return views.slice(0, 3)+"K";
      }else if(views.length===5){
          return views.slice(0, 2)+"."+views.slice(2, 3)+"K";
      }else{
          return views.slice(0, 1)+"."+views.slice(1, 2)+"K";
      }
  }else if(views.length<=9){
      if(views.length===9){
          return views.slice(0, 3)+"M";
      }else if(views.length===8){
          return views.slice(0, 2)+"M";
      }else{
          return views.slice(0, 1)+"."+views.slice(1, 2)+"M";
      }
  }else if(views.length>9){
      return views.slice(0, 1)+"."+views.slice(1, 2)+"B";
  }
}


export function formatDate(publishedAt){
  var publish= new Date(publishedAt);
  var today=new Date();

  if((today.getFullYear()-publish.getFullYear()) > 0 ){
      if((today.getFullYear()-publish.getFullYear())===1){
          return today.getFullYear()-publish.getFullYear() + " year ago";
      }else{
          return today.getFullYear()-publish.getFullYear() + " years ago";
      }
  }else if((today.getMonth()-publish.getMonth()) > 0 ){
      if((today.getMonth()-publish.getMonth())===1){
          return today.getMonth()-publish.getMonth() + " month ago";
      }else{
          return today.getMonth()-publish.getMonth() + " months ago";
      }
  }else if((today.getDate()-publish.getDate()) > 0 ){
      if((today.getDate()-publish.getDate())===1){
        return today.getDate()-publish.getDate() + " day ago";
      }else{
        return today.getDate()-publish.getDate() + " days ago";
      }
  }else{
      if((today.getHours()-publish.getHours())===1){
        return today.getHours()-publish.getHours() + " hour ago";
      }else{
        return today.getHours()-publish.getHours() + " hours ago";
      }
  }
}

export function concatVideosChannels(videos,channels){
        videos.items.map((item)=>{
            for(var i=0;i<channels.items.length;i++){
                if(item.snippet.channelId===channels.items[i].id){
                    item.snippet.channelThumbnail=channels.items[i].snippet.thumbnails.default.url;
                    break;
                }
            }
    }
    )
    
    return videos;
}

export function concatVideosChannelsCommentsRelatedVideos(videos,channels,comments,relatedVideos){
    videos.items.map((item)=>{
        for(var i=0;i<channels.items.length;i++){
            if(item.snippet.channelId===channels.items[i].id){
                item.snippet.channelThumbnail=channels.items[i].snippet.thumbnails.default.url;
                item.statistics.subscriberCount=channels.items[i].statistics.subscriberCount;
                item.commentThread=comments.items;
                item.relatedVideos=relatedVideos; 
                break;
            }
        }
    })
    
    return videos;
}

function ShuffleVideoId(array){
    array.sort(() => Math.random() - 0.5);
}

export function PlayerViewsFormatter(views){
    var digitLength=views.length;
    var numberOfComma=parseInt(digitLength/3);
    if(digitLength%3==0){
        numberOfComma--;
    }
    for(var i=1;i<=numberOfComma;i++){
        views=views.slice(0, digitLength-(3*i)) + "," + views.slice(digitLength-(3*i));
    } 
    return views;  
}

export function PlayerDateFormatter(publishedAt){
    var date= new Date(publishedAt);
    var Months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var formattedDate=Months[date.getMonth()]+" "+date.getDate()+", "+date.getFullYear()
    return formattedDate;
}

export function formatVideoDuration(duration){
    try{
         var iso8601DurationRegex = /(-)?P(?:([.,\d]+)Y)?(?:([.,\d]+)M)?(?:([.,\d]+)W)?(?:([.,\d]+)D)?T(?:([.,\d]+)H)?(?:([.,\d]+)M)?(?:([.,\d]+)S)?/;
        var matches = duration.match(iso8601DurationRegex);
        var hours= matches[6] === undefined ? 0 : matches[6];
        var minutes= matches[7] === undefined ? 0 : matches[7];
        var seconds=matches[8] === undefined ? 0 : matches[8];
        if(hours=="0"){
            if(seconds.length!==2){
                var seconds="0"+seconds;
            }
            var formattedDuration=minutes+":"+seconds;
        }else{
            var formattedDuration=hours+":"+minutes+":"+seconds;
        }
    } catch(err){
        var formattedDuration="0:00"
    }
   
    return formattedDuration;
}