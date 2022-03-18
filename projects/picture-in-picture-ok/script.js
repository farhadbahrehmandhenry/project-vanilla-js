var videoEl = document.querySelector('.video');
var startBtn = document.querySelector('.start-btn');
var shareBtn = document.querySelector('.share-btn');

startBtn.disabled = true;

var selectMediaStream = async() => {
  try {
    var mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoEl.srcObject = mediaStream;
    videoEl.onloadedmetadata = () => {
      videoEl.play();
    }
  }
  catch(error) {
    console.log(error);
  }
}

startBtn.addEventListener('click', async() => {
  startBtn.disabled = true;

  await videoEl.requestPictureInPicture();

  startBtn.disabled = false;
});

shareBtn.addEventListener('click', async() => {
  selectMediaStream();
  startBtn.disabled = false;
});

