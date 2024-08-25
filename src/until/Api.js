const GOOGLE_API_KEY="AIzaSyAPkcBPN9vxYddx3iQ0IIHQwrKaHGnNOxI"
 const YOUTUBE_VEDIOS_API="GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+ GOOGLE_API_KEY;
 console.log(YOUTUBE_VEDIOS_API)
 
export default YOUTUBE_VEDIOS_API