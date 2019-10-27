const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
url1 = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json';
url2 = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json';

async function getPicture(url){
    const response = await fetch(url);
    return await response.json();
}

getPicture(url1);

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
