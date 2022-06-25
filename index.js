let imgName = document.getElementById('image-name')
let imgSrc = document.getElementById('card-image')
let imgLikesCount = document.getElementById('like-count')
// let imgCommentList = document.getElementById('comments-list')
//Getting the image, title and the comments (GET METHOD)

function displayImageAndDetails(){
    const imageDetails = fetch (" http://localhost:3000/shoes/1")
    .then(resp => resp.json())
    .then(data => renderImageAndDetails(data))
    return imageDetails
}
displayImageAndDetails()

function renderImageAndDetails(imageDetails){
  imgName.textContent = imageDetails.name;
  imgSrc.src = imageDetails.image;
  imgLikesCount.textContent =`${imageDetails.likes} likes`;
 

  
}











//sliding image
var images = [
    "heels.jpeg",
    "orange.jpeg",
    "glowy.jpeg"
    
  ]
  var imageHead = document.getElementById("images");
  var i = 0;
setInterval(function() {
      imageHead.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
        i =  0;
      }
}, 2000);

//text color
var colors = ["white", "pink", "black"]
var currentColor = 0
var textColor = document.getElementsByTagName("h1")

function changeColor() {
  --currentColor
  if (currentColor < 0) currentColor = colors.length -1
  for (var i = 0; i < textColor.length; i++) {
    textColor[i].style.color = colors[(currentColor +i) % colors.length]
  }
}

setInterval(changeColor, 2000)


