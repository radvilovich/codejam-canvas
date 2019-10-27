const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;

//picture1(ctx, width, height);

function picture1(ctx, width, height) {
    const rectWidth = width / 4;
    const rectHeight = height / 4;
    const colors = [
        ["00BCD4", "FFEB3B","FFEB3B","00BCD4"],
        ["FFEB3B", "FFC107","FFC107","FFEB3B"],
        ["FFEB3B", "FFC107","FFC107","FFEB3B"],
        ["00BCD4", "FFEB3B","FFEB3B","00BCD4"]
    ];
    let startX = 0;
    let startY = 0;
    colors.forEach((line) => {
        startX = 0;
        line.forEach((color) => {
            ctx.beginPath();
            ctx.rect(startX, startY, rectWidth, rectHeight);
            startX += rectWidth;
            ctx.fillStyle = "#" + color;
            ctx.fill();
            ctx.closePath();
        });
        startY += rectHeight;
    });
}
