var duration="PT13M16S";
var iso8601DurationRegex = /(-)?P(?:([.,\d]+)Y)?(?:([.,\d]+)M)?(?:([.,\d]+)W)?(?:([.,\d]+)D)?T(?:([.,\d]+)H)?(?:([.,\d]+)M)?(?:([.,\d]+)S)?/;
var matches = duration.match(iso8601DurationRegex);
// var seconds=duration.slice(-3,-1);
// var minutes=duration.slice(-6,-4);


// var formattedDuration=minutes+":"+seconds
console.log(seconds);
console.log(minutes);
// console.log(formattedDuration);
