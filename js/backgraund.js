const images = ['나라.jpg', '배경2.jpg', 'skan.jpg'];

const choseimage = images[Math.floor(Math.random() * images.length)];

const bgImge = document.createElement('img');

bgImge.src = `img/${choseimage}`;

document.body.appendChild(bgImge);
