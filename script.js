const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
url1 = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json';
url2 = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json';
url3 = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/image.png';

async function getPicture(url){
    const response = await fetch(url);
    return await response.json();
}

//picture(ctx, width, height, 4, url1);
//picture(ctx, width, height, 32, url2);

function getColor(color) {
    if(typeof color === 'string') {
        return '#' + color;
    } else {
        return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    }
}

async function picture(ctx, width, height, pictureCount, url) {
    const rectWidth = width / pictureCount;
    const rectHeight = height / pictureCount;
    const colors = await getPicture(url);
    let startX = 0;
    let startY = 0;
    colors.forEach((line) => {
        startX = 0;
        line.forEach((color) => {
            const colorString = getColor(color);
            ctx.beginPath();
            ctx.rect(startX, startY, rectWidth, rectHeight);
            startX += rectWidth;
            ctx.fillStyle = colorString;
            ctx.fill();
            ctx.closePath();
        });
        startY += rectHeight;
    });
}

picture3(ctx, width, height);
function picture3(ctx, width, height) {
    // Создаем объект изображения
    const img = new Image();

    // Привязываем функцию к событию onload
    // Это указывает браузеру, что делать, когда изображение загружено
        img.onload = function() {
	    ctx.drawImage(img, 0, 0, width, height);
    };

    // Загружаем файл изображения
    img.src = url3;
}