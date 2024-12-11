let nextDom = document.getElementById('next');
let previousDom = document.getElementById('previous');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function() {
    showSlider('next');
}

previousDom.onclick = function() {
    showSlider('previous');
}

let timeRunning = 3000;
let timeAutoNext = 10000;
let runTimeOut;
let runAutoRun = setTimeout(() =>{
    nextDom.click();
}, timeAutoNext);

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemthumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next') {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemthumbnail[0]);
        carouselDom.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemthumbnail[positionLastItem]);
        carouselDom.classList.add('previous');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('previous');
    }, timeRunning);

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() =>{
        nextDom.click();
    }, timeAutoNext);
}