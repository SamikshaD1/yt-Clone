const videoContainer = document.querySelector('.list_container');
const loadMore = document.querySelector('.load-more')
let apiKey = "AIzaSyDkdM3unWrxoKQqlqIn2ZfxApeE38sCRVw";
let videos = "https://www.googleapis.com/youtube/v3/videos?";
let channel = "https://www.googleapis.com/youtube/v3/channels?";


function fetchAPI() {
  fetch(
    videos + new URLSearchParams({
      key: apiKey,
      part: "snippet",
      chart: "mostPopular",
      maxResults: 20,
      regionCode: "IN",
    })
  )
    .then(res => res.json())
    .then(data => {
      data.items.forEach((item) => {
        getChannelIcon(item);
        console.log(data);
      });
    })
    .catch((err) => console.log(err));
}

fetchAPI()

const getChannelIcon = (videos) => {
  fetch(channel + new URLSearchParams({
    key: apiKey,
    part: "snippet",
    id: videos.snippet.channelId,
  })
  )
    .then((res) => res.json())
    .then((data) => {
      videos.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
      videoClick = data.items[0].id;
      MakeVideoCard(videos);
    })
}

export default getChannelIcon;

const MakeVideoCard = (data) => {

  videoContainer.innerHTML += `
<div class="vid_list">
<a href="./video-page/index.html"><img src=${data.snippet.thumbnails.high.url} class="thumbnail"></a>
<div class="flex_div">
    <img href"./video-page/index.html" src=${data.channelThumbnail}>
    <div class="vid_info">
        <a href="" style="color: #fff;">${data.snippet.title}</a>
        <p>${data.snippet.channelTitle}</p>
        <p>${data.snippet.publishedAt}</p>
    </div>
</div>
</div> `

}

loadMore.addEventListener("click", fetchAPI);

// Search Bar
const searchInput = document.querySelector('.search-bar')
const searchBtn = document.querySelector('.search-btn');
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
  if (searchInput.value.length) {
    location.href = searchLink + searchInput.value;
  }
})


// sidebar open close
// function openNav() {
//   document.getElementById("mySidebar").style.width = "15%";

//   const navTextblock = document.querySelectorAll(".navText")
//   for (let i = 0; i < navTextblock.length; i++) {
//     navTextblock[i].style.display = "block"

//   }
// }
// function closeNav() {
//   document.getElementById("mySidebar").style.width = "7%";
//   const navText = document.querySelectorAll(".navText");
//   for (let i = 0; i < navText.length; i++) {
//     navText[i].style.display = "none"

//   }
// }


const menuIcon = document.querySelector(".openbtn");
const sidebar = document.querySelector(".sidebar");

menuIcon.onclick = function(){
  sidebar.classList.toggle("small-sidebar");
}
