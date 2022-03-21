const images = ["majo001.jpg","majo002.jpg","majo004.jpg","majo011.jpg","majo013.jpg","majo014.jpg",
"majo018.jpg","majo019.jpg","majo020.jpg","majo021.jpg","majo024.jpg","majo028.jpg","majo035.jpg",
"majo037.jpg","majo038.jpg","majo039.jpg","majo042.jpg","majo043.jpg","majo050.jpg",];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("bgImage");

document.body.appendChild(bgImage);