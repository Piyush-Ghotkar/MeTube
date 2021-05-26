var publishedAt="2021-05-19T16:54:16Z";
var date= new Date(publishedAt);
Months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var formattedDate=Months[date.getMonth()]+" "+date.getDate()+", "+date.getFullYear()

console.log(formattedDate);