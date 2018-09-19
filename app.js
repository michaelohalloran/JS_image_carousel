
const defaultImg = "http://via.placeholder.com/350x150/ff0000/fff?text=Default";
let imagePlace = 0;
// let images = ['1','2','3','4','5','6','7'];
let images = ['brainardRoad.jpg','brainardMtn.jpg','evans_clouds.jpg','fireSky.jpg','sunset.jpg','ward.jpg'];
// let imageColors = ['000','111','222','333','FF0000', '00FF00', '0000FF'];

//run fn right when window loads
window.onload = startImg;

function startImg() {
    document.getElementById('myImage').src = defaultImg;
    setInterval(swapImages,2000);
}

function swapImages() {
     //get the image from the DOM
     let myImage = document.getElementById('myImage');
     //we will pick the image src color to be our current array position
    //  myImage.src = `http://via.placeholder.com/350x150/${imageColors[imagePlace]}/fff?text=Image${images[imagePlace]}`;
    // console.log('before starting swapImages, imagePlace is', imagePlace);
    myImage.src = images[imagePlace];
    //increment what place we're at in our image array
    //when we hit the end, reset to 0
    imagePlace >= images.length - 1 ? imagePlace = 0 : imagePlace++;
    console.log(`imagePlace: ${imagePlace}`);
}