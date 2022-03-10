const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

// 1st, Video
function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  .then(localMediaStream =>{
      video.srcObject = localMediaStream;
      // video.src = window.URL.createObjectURL(localMediaStream);
      video.play()
  })
  .catch(error => {
      console.error('Error', error);
  });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
      ctx.drawImage(video, 0, 0, width, height);
      // take the pixels out
      let pixels = ctx.getImageData(0, 0, width, height);
      // mess with them
      // pixels = redEffect(pixels);

      pixels = rgbSplit(pixels);

      // pixels = greenScreen(pixels);
      ctx.putImageData(pixels, 0, 0);
      }, 16);
  }

// Take Photo
function takePhoto() {
  // sound
  snap.currentTime = 0;
  snap.play();

  // take data from canvas
  const data = canvas.toDataURL('image/jpeg')
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome');
  link.textContent = 'Download Image';
  link.innerHTML = `<img src="${data}" alt="Handsome" />`
  strip.insertBefore(link, strip.firstChild);
}

// Filters
function redEffect(pixels) {
  for(let i = 0; i < pixels.data.length; i += 4) {
      pixels.data[i + 0] = pixels.data[i + 0] + 100;// red
      pixels.data[i + 1] = pixels.data[i + 1] - 50;// green
      pixels.data[i + 2] = pixels.data[i + 2] * 0.5// blue
  }
  return pixels;
}

function rgbSplit(pixels) {
  for(let i = 0; i < pixels.data.length; i += 4) {
      pixels.data[i - 550] = pixels.data[i + 0] + 100;// red
      pixels.data[i + 200] = pixels.data[i + 1] - 50;// green
      pixels.data[i - 350] = pixels.data[i + 2] * 0.5// blue
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
      levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
      red = pixels.data[i + 0]
      green = pixels.data[i + 1]
      blue = pixels.data[i + 2]
      alpha = pixels.data[i + 3]

      if (red >= levels.rmin
          && green >= levels.gmin
          && blue >= levels.bmin
          && red <= levels.rmax
          && green <= levels.gmax
          && blue <= levels.bmax) {
              pixels.data[i + 3] = 0;
          }
  }
}

getVideo();

// once the video is played, it's gonna paint it on the canvas
video.addEventListener('canplay', paintToCanvas);
