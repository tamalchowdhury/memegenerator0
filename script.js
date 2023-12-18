function downloadImage() {  
  domtoimage
    .toJpeg(document.querySelector("#meme"), { quality: 0.95 })
    .then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = "my-image-name.jpeg";
      link.href = dataUrl;
      link.click();
    });
}

const caption = document.querySelector("#caption")

caption.addEventListener("input", updateMemeCaption)

function updateMemeCaption(event) {
  const value = event.target.value
  const memeText = document.querySelector("#meme_text")
  memeText.textContent = value

}

const downloadButton = document.querySelector("#download")

downloadButton.addEventListener("click", downloadImage)