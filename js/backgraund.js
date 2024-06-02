const images = ['나라.jpg', '배경2.jpg', 'skan.jpg'];

const choseimage = images[Math.floor(Math.random() * images.length)];

const bgImge = document.createElement('img');

const background_img = document.querySelector('body');
bgImge.src = `img/${choseimage}`;

background_img.style.backgroundImage = `url(${bgImge.src})`;
