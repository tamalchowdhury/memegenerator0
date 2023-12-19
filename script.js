function downloadImage() {
  domtoimage
    .toJpeg(document.querySelector("#meme"), { quality: 0.95 })
    .then(function (dataUrl) {
      var link = document.createElement("a")
      link.download = "my-image-name.jpeg"
      link.href = dataUrl
      link.click()
    })
}

const caption = document.querySelector("#caption")
const caption2 = document.querySelector("#caption2")

caption.addEventListener("input", updateMemeCaption)
caption2.addEventListener("input", updateMemeCaption2)

function updateMemeCaption(event) {
  const value = event.target.value
  const memeText = document.querySelector("#meme_text")
  memeText.textContent = value
}

function updateMemeCaption2(event) {
  const value = event.target.value
  const memeText = document.querySelector("#meme_text_2")
  memeText.textContent = value
}

const downloadButton = document.querySelector("#download")

downloadButton.addEventListener("click", downloadImage)

// get base 64 image

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"]
    if (!allowedTypes.includes(file.type)) {
      window.alert("Only jpg, png & gif image files are allowed!")
      return
    }
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

// upload image

// Take file from the computer and store it into the state
function uploadImage(event) {
  getBase64(event.currentTarget.files[0]).then((imageData) => {
    const memeImage = document.querySelector("#meme")
    memeImage.style.backgroundImage = `url(${imageData})`
  })
}

const file = document.querySelector("#file")

file.addEventListener("change", uploadImage)
