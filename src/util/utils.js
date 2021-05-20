import { Shuffle } from "@material-ui/icons";

var key=process.env.REACT_APP_API_KEY2;

export async function getHomeVideos(category){
    console.log("inside get videos");
    if(category!=="all"){
        var url="https://www.googleapis.com/youtube/v3/videos";
        var part="snippet,statistics";
        var chart="mostPopular"
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
    
        url+= "?"+"part="+part+"&chart="+chart+"&maxResults="+maxResults+"&key="+key+"&videoCategoryId="+videoCategoryId[category];  //category query //+"&regionCode="+regionCode    
    }else{
        var url="https://www.googleapis.com/youtube/v3/videos";
        var part="snippet,statistics";
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
            "xwwPP8_wM7I"];

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
    console.log("inside get Channels thumb");
    videosObj.items.map( (item)=> 
        channelsId.push(item.snippet.channelId)
    )   

    var url="https://www.googleapis.com/youtube/v3/channels";
    var part="snippet";
    var idString="";
    for(var i=0; i<channelsId.length; i++){
        idString+=channelsId[i]+",";
    }
    // console.log(idString);
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


export function formatViews(views){
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
  }else{
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
    console.log("concat called");
    
        videos.items.map((item)=>{
            for(var i=0;i<channels.items.length;i++){
                if(item.snippet.channelId===channels.items[i].id){
                    item.snippet.channelThumbnail=channels.items[i].snippet.thumbnails.medium.url;
                    break;
                }
            }
    }
    )
    
    return videos;
}

function ShuffleVideoId(array){
    array.sort(() => Math.random() - 0.5);
}