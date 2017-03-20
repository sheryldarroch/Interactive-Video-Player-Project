const video = document.getElementById('video');
const cap1 = document.getElementById('cap-1');
const cap2 = document.getElementById('cap-2');
const cap3 = document.getElementById('cap-3');
const cap4 = document.getElementById('cap-4');
const cap5 = document.getElementById('cap-5');
const cap6 = document.getElementById('cap-6');
const cap7 = document.getElementById('cap-7');
const cap8 = document.getElementById('cap-8');
const cap9 = document.getElementById('cap-9');
const cap10 = document.getElementById('cap-10');
const cap11 = document.getElementById('cap-11');
const cap12 = document.getElementById('cap-12');
const cap13 = document.getElementById('cap-13');
const cap14 = document.getElementById('cap-14');
const cap15 = document.getElementById('cap-15');
const cap16 = document.getElementById('cap-16');

myList = document.querySelectorAll('.transcript-container span');

//remove highlight from previous section and add highlight to current section
function highlightNextLine (id) {
  id.previousElementSibling.style.color = "#384047";
  id.style.color = "#FFB90F";
} 

// on click jump to time 
function playVidOfHiLitedCap (id, time) {
  id.addEventListener('click', () => {
      for(let i = 0; i < myList.length; i += 1) {
      let span = myList[i];
      //find span that is highlighted and return to original font color
      if (span.style.color === "#FFB90F") {
        span.style.color = "#384047"; 
      //set video time to beginning time of video that corresponds to span that is clicked
        video.currentTime = time;
      }
      };
  });
}
                      
// highlight section of caption that corresponds with video
video.ontimeupdate = function() {
  let time = video.currentTime;
  if (time > 0.24 && time <= 4.13) {
    cap1.style.color = "#FFB90F";
  } else if(time > 4.13 && time <= 7.535) {
    highlightNextLine(cap2);
  } else if(time > 7.536 && time <= 11.27) {
    highlightNextLine(cap3);
  } else if(time > 11.28 && time <= 13.96) {
    highlightNextLine(cap4);
  } else if(time > 13.97 && time <= 17.94) {
    //special code because previousSiblingElement doesn't work for first span in paragraph
    cap4.style.color = "#384047";
    cap5.style.color = "#FFB90F";
  } else if(time > 17.95 && time <= 22.37) {
    highlightNextLine(cap6);
  } else if(time > 22.38 && time <= 26.88) {
    highlightNextLine(cap7);
  } else if(time > 26.89 && time <= 30.92) {
    highlightNextLine(cap8);
  } else if(time > 32.10 && time <= 34.73) {
    highlightNextLine(cap9);
  } else if(time > 34.746 && time <= 39.43) {
    highlightNextLine(cap10);
  } else if(time > 39.44 && time <= 41.19) {
    highlightNextLine(cap11);
  } else if(time > 42.35 && time <= 46.30) {
    //special code because previousSiblingElement doesn't work for first span in paragraph
    cap11.style.color = "#384047";
    cap12.style.color ="#FFB90F";
  } else if(time > 43.61 && time <= 49.27) {
    highlightNextLine(cap13);
  } else if(time > 49.28 && time <= 53.76) {
    highlightNextLine(cap14);
  } else if(time > 53.77 && time <= 57.78) {
    highlightNextLine(cap15);
  } else if(time > 57.79 && time <= 58.99) {
    highlightNextLine(cap16);
  } else if(time > 59.00) {
    cap16.style.color = "#384047";
  }
};

// play appropriate time of video when caption clicked
playVidOfHiLitedCap(cap1, '0.01');
playVidOfHiLitedCap(cap2, '4.13');
playVidOfHiLitedCap(cap3, '7.535');
playVidOfHiLitedCap(cap4, '11.27');
playVidOfHiLitedCap(cap5, '13.96');
playVidOfHiLitedCap(cap6, '17.94');
playVidOfHiLitedCap(cap7, '22.37');
playVidOfHiLitedCap(cap8, '26.88');
playVidOfHiLitedCap(cap9, '32.10');
playVidOfHiLitedCap(cap10, '34.73');
playVidOfHiLitedCap(cap11, '39.43');
playVidOfHiLitedCap(cap12, '42.35');
playVidOfHiLitedCap(cap13, '46.30');
playVidOfHiLitedCap(cap14, '49.27');
playVidOfHiLitedCap(cap15, '53.76');
playVidOfHiLitedCap(cap16, '57.78');