// import {api_key,api_key2} from './config.js';

export async function getHomeVideos(category){
    // api params
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
    var key=process.env.REACT_APP_API_KEY;
    
    // url+= "?"+"part="+part+"&maxResult="+maxResults+"&q="+q+"&key="+key;  //search query

    url+= "?"+"part="+part+"&chart="+chart+"&maxResults="+maxResults+"&key="+key+"&videoCategoryId="+videoCategoryId[category];  //category query
    
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