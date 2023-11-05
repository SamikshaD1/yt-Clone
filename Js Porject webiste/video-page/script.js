let apiKey = "AIzaSyDkdM3unWrxoKQqlqIn2ZfxApeE38sCRVw";
let videos = "https://www.googleapis.com/youtube/v3/videos?";
let channel = "https://www.googleapis.com/youtube/v3/channels?";
import dates from "../script"

function fetchAPI() {
  fetch(
    videos +
    new URLSearchParams({
      key: apiKey,
      part: "snippet",
      chart: "mostPopular",
      maxResults: 50,
      regionCode: "IN",
    })
  )
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.querySelector(".channel-video").style.src = ``
    })
    .catch((err) => console.log(err));
}

fetchAPI();


//let apiKey = "AIzaSyDkdM3unWrxoKQqlqIn2ZfxApeE38sCRVw";

window.addEventListener("load", () => {
  //logic for rendering yt video
  let videoId = "0t2CyYPI2fw";
  if (YT) {
    new YT.Player('video-container', {
      // height:"300",
      // width:"500",
      videoId,
    })
  }
});

