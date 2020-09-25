'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP_BETWEEN_BARS = 50;
const BAR_WIDTH = 40;
const BAR_MAXHEIGHT = 150; // given;
const BAR_BOTTOM_Y = 240;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  // Shadow
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, `rgba(0, 0, 0, 0.3)`);
  // Cloud
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#ffffff`);
  // Intro text
  // ctx.font = `16px PT Mono`;
  // ctx.textBaseline = `hanging`;
  ctx.fillStyle = `#000000`;
  ctx.fillText(`Ура вы победили!`, 150, 30);
  ctx.fillText(`Список результатов:`, 150, 50);


  // bar 1 color
  ctx.fillStyle = `hsl(0, 100%, 50%)`;
  // other bar colors
  ctx.fillStyle = `hsl(240, 100%, 50%)`;
  const getRandomColor = function () {
    return `hsl(240, ${Math.round(Math.random() * 100)}%, 50%)`;
  };

  const maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    const barX = CLOUD_X + GAP_BETWEEN_BARS + (GAP_BETWEEN_BARS + BAR_WIDTH) * i;
    const barY = BAR_BOTTOM_Y - (BAR_MAXHEIGHT * times[i]) / maxTime;
    if (names[i] === `Вы`) {
      ctx.fillStyle = `hsl(0, 100%, 50%)`;
    } else {
      ctx.fillStyle = getRandomColor();
    }
    ctx.fillRect(
        barX,
        barY,
        BAR_WIDTH,
        (BAR_MAXHEIGHT * times[i]) / maxTime
    );
    // Text
    ctx.fillStyle = `#000000`;
    ctx.fillText(
        names[i],
        barX,
        barY + (BAR_MAXHEIGHT * times[i]) / maxTime + 30
    );
    // number
    ctx.fillStyle = `#000000`;
    ctx.fillText(
        Math.round(times[i]),
        barX,
        barY - 20
    );
  }
};
