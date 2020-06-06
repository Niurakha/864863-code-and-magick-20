'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_GAP = 50;
var FONT_GAP = 5;
var FONT_HEIGHT = 15;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getRandomIntInclusive = function (min, max) {
  return Math.random() * (max - min + 1) + min;
};

window.renderStatistics = function (ctx, players, times) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');

  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16 PT Mono';
  ctx.textBaseline = 'hanging';

  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2 + FONT_HEIGHT + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP * 4 + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - GAP * 2);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP * 4 + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - GAP - FONT_HEIGHT - FONT_GAP - (BAR_HEIGHT * times[i]) / maxTime - GAP * 2);

    ctx.fillStyle = players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(228,' + (getRandomIntInclusive(0, 100)) + '%, 26%)';
    ctx.fillRect(CLOUD_X + GAP * 4 + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT + CLOUD_Y - GAP * 2 - FONT_HEIGHT - FONT_GAP, BAR_WIDTH, (-1 * BAR_HEIGHT * times[i]) / maxTime);
  }
};
