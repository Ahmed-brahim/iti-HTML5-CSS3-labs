let videoElement = document.querySelector("#vid");
let paths = [
  "../arcane/e1.mp4",
  "../arcane/e2.mp4",
  "../arcane/e3.mp4",
  "../arcane/e4.mp4",
  "../arcane/e5.mp4",
  "../arcane/e6.mp4",
  "../arcane/e7.mp4",
  "../arcane/e8.mp4",
];
for (let i = 0; i < paths.length; i++) {
  document.querySelector(".aside")
          .innerHTML += `<button id="${i}" class="btn">Video ${i + 1}</button>`;
}

document.querySelectorAll(".btn").forEach((ele) => {
  ele.addEventListener("click", function(){
    videoElement.src = paths[+ele.id];
    videoElement.play();
  });
});

videoElement.addEventListener("click", function () {
  if (videoElement.paused) 
  {
    videoElement.play();
  } 
  else
  {
    videoElement.pause();
  }
});

videoElement.addEventListener("dblclick", function () {
  videoElement.muted = !videoElement.muted;
});
