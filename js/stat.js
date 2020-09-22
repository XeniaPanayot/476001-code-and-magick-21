'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;

const TEXT_GAP = 10;
const TEXT_HEIGHT = 10;
const textIntroduction = TEXT_HEIGHT * 2 + TEXT_GAP * 2;

const GAP_BETWEEN_BARS = 50;
const BAR_WIDTH = 40;
const BAR_HEIGHT = 150; // CLOUD_HEIGHT - TEXT_GAP - TEXT_HEIGHT - TEXT_HEIGHT - TEXT_GAP;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {
  const maxElement = arr[0];
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

  // bar 1 color
  ctx.fillStyle = `hsl(0, 100%, 50%)`;
  // other bar colors
  ctx.fillStyle = `hsl(240, 100%, 50%)`;

  const maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    ctx.fillRect(
        CLOUD_X + GAP_BETWEEN_BARS + (GAP_BETWEEN_BARS + BAR_WIDTH) * i,
        CLOUD_Y + textIntroduction + TEXT_HEIGHT + TEXT_GAP * 2,
        BAR_WIDTH,
        (BAR_HEIGHT * times[i]) / maxTime
    );
    // Text
    ctx.fillText(
        names[i],
        CLOUD_X + GAP_BETWEEN_BARS + (GAP_BETWEEN_BARS + BAR_WIDTH) * i,
        (CLOUD_Y + CLOUD_HEIGHT) - (TEXT_GAP + TEXT_HEIGHT)
    );
  }
};
//  Отрицательное значение — отрисовка снизу вверх
// ctx.fillRect(currentBarX, BarCoordinate.INITIAL_Y, BarSize.WIDTH, -barHeight);

//   maxTime     times[i]
// ----------- = --------
//  barWidth        X
//  X = (barWidth * times[i]) / maxTime


