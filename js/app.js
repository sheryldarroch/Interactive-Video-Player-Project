const video = document.getElementsByClassName('video');
const cap1 = document.getElementById('cap-1');
const cap2 = document.getElementById('cap-2');

video.ontimeupdate = function() {
  let time = video.currentTime;
  if (time <= 4.13) {
    cap1.className = "highlighted";
  } else if(time >4.13 && time <= 7.535) {
      cap2.className = "highlighted";
  }
};