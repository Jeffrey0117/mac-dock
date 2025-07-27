const d = document;
let x = null, y = null;
const D = document.querySelector('.dock_container');
const R = document.querySelector('.right_click_container');
const E = ['mousemove', 'mouseenter'];

E.forEach(e => d.addEventListener(e, onMouseUpdate, false));
d.addEventListener('contextmenu', rightClick, false);
d.addEventListener('click', Click, false);

//TRACK X,Y OF MOUSE: dock show with mouse
function onMouseUpdate(e) {
    x = e.pageX;
    y = e.pageY;

    if (e.pageY > 500) {
        D.classList.add('dock_show');
        console.log("dock shown");
    } else {
        D.classList.remove('dock_show');
    }
}

function rightClick(e) {
    x = e.pageX;
    y = e.pageY;
    R.style.position = "absolute";
    R.style.top = `${y}px`;
    R.style.left = `${x}px`;
    R.style.visibility = "visible";
    R.style.opacity = "1";
    e.preventDefault();
}

function Click() {
    R.style.opacity = "0";
    R.style.visibility = "hidden";
}

// 初始化背景模糊效果和載入動畫
const bg = document.querySelector('.bg');
let loadText = document.querySelector('.loading-text');
let load = 0;
let int = setInterval(blurring, 30);

function blurring() {
    load++;
    if (load > 99) {
        clearInterval(int);
        loadText.style.display = 'none';
    }
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// 數值縮放函數 (來自 Stack Overflow)
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// 右鍵選單項目的懸停效果
let items = document.querySelectorAll('.right_click');
items.forEach((item) => {
    item.addEventListener("mouseover", () => {
        item.classList.add('over');
    });

    item.addEventListener("mouseleave", () => {
        item.classList.remove('over');
    });
});

// Firefox 圖示點擊事件
document.querySelectorAll('a')[0].addEventListener('click', () => {
    d.body.style.backgroundImage = "url('https://user-media-prod-cdn.itsre-sumo.mozilla.net/uploads/images/2020-08-10-09-01-06-821563.png')";
    d.body.style.backgroundSize = "1280px 720px";
});