export const GOOGLE_API_KEY = "AIzaSyDB5OFdm91t6_0W3RvgEQ4zVnHC9CU_-ME";

export const YOUTUBE_FETCH_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_URL =
  "https://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULT_URL =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&key=" +
  GOOGLE_API_KEY +
  "&q=";

export const OFFSET_YOUTUBE_LIVECHAT = 25;
