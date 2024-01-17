import "./modules/sliders.js";

function app() {
  const videoWrapper = document.getElementById("allinone-video");
  const iframe = document.querySelector("#vimeo-video iframe");
  const player = new Vimeo.Player(iframe);

  if (videoWrapper) {
    videoWrapper.addEventListener("click", () => {
      player.play();
      document.getElementById("video-placeholder").style.display = "none";
      document.getElementById("play-video").style.display = "none";
    });
  }
}
document.addEventListener("DOMContentLoaded", app);
