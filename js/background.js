const background = document.body;

function init() {
    background.style.backgroundImage = `url(${generateImageUrl()})`;
}

function generateImageUrl() {
    let num = Math.floor(Math.random() * 50) + 1;
    num = String(num).padStart(2, "0");
    const imageUrl = `https://www.ghibli.jp/gallery/chihiro0${num}.jpg`;

    return imageUrl;
}

init();