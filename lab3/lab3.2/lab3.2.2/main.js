let myVideo = document.getElementById("vid");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let speedUp = document.getElementById("speed-up");
let speedDown = document.getElementById("speed-Down");
let mute = document.getElementById("mute");
let reload = document.getElementById("reload");
let control = document.getElementById("range");

play.addEventListener("click", function () {
  if (myVideo.paused) {
    myVideo.play();
  }
});

pause.addEventListener("click", function () {
  if (!myVideo.paused) {
    myVideo.pause();
  }
});

speedUp.addEventListener("click", function () {
  if (myVideo.playbackRate < 3) {
    myVideo.playbackRate += 1;
  }
  console.log("Speed:", myVideo.playbackRate);
});

speedDown.addEventListener("click", function () {
  if (myVideo.playbackRate > 1) {
    myVideo.playbackRate -= 1;
  }
  console.log("Speed:", myVideo.playbackRate);
});

mute.addEventListener("click", function () {
  myVideo.muted = !myVideo.muted;
});

reload.addEventListener("click", function () {
  myVideo.load();
  myVideo.play();
});

myVideo.addEventListener("loadedmetadata", function () {
  control.min = 0;
  control.max = myVideo.duration;
});

myVideo.addEventListener("timeupdate", function () {
  control.value = myVideo.currentTime;
});

control.addEventListener("input", function () {
  myVideo.currentTime = control.value;
});

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case " ":
      event.preventDefault();
      if (myVideo.paused) {
        myVideo.play();
      } else {
        myVideo.pause();
      }
      break;

    case "ArrowRight":
      myVideo.currentTime += 5;
      break;

    case "ArrowLeft":
      myVideo.currentTime -= 5;
      break;

    case "ArrowUp":
      myVideo.volume = Math.min(myVideo.volume + 0.1, 1);
      break;

    case "ArrowDown":
      myVideo.volume = Math.max(myVideo.volume - 0.1, 0);
      break;

    default:
      break;
  }
});
