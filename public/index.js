var csstricks = {
  init: function () {
    csstricks.randomizeBackgrounds();
  },

  generateRandomPoints: function (minSpread, maxSpread) {
    let points = {};
    points.a = `${getRandomInt(800, 1000)},${getRandomInt(
      minSpread,
      maxSpread
    )}`;
    points.b = `${getRandomInt(600, 800)},${getRandomInt(
      minSpread,
      maxSpread
    )}`;
    points.c = `${getRandomInt(400, 600)},${getRandomInt(
      minSpread,
      maxSpread
    )}`;
    points.d = `${getRandomInt(200, 400)},${getRandomInt(
      minSpread,
      maxSpread
    )}`;
    points.e = `${getRandomInt(0, 200)},${getRandomInt(minSpread, maxSpread)}`;
    return points;
  },

  randomizeHeader: function () {
    let newPoints = csstricks.generateRandomPoints(120, 190);
    let downFacingPoints = `M-4,-4 L1004,-4 L1004,100 L${newPoints.a} L${newPoints.b} L${newPoints.c} L${newPoints.d} L${newPoints.e} L-4,100 L-4,-4 Z`;
    $("#jagged-top").attr("d", downFacingPoints);
  },

  randomizeBackgrounds: function () {
    csstricks.randomizeHeader();
    requestInterval(function () {
      csstricks.randomizeHeader();
    }, 2000);
  },
};

var csstricks1 = {
  init: function () {
    csstricks1.randomizeBackgrounds();
  },

  generateRandomPoints: function (minSpread, maxSpread) {
    let points = {};
    points.a = `${getRandomInt(800, 1000)},${getRandomInt(
      minSpread,
      maxSpread
    )}`;
    points.b = `${getRandomInt(600, 800)},${getRandomInt(
      minSpread,
      maxSpread
    )}`;
    points.c = `${getRandomInt(400, 600)},${getRandomInt(
      minSpread,
      maxSpread
    )}`;
    points.d = `${getRandomInt(200, 400)},${getRandomInt(
      minSpread,
      maxSpread
    )}`;
    points.e = `${getRandomInt(0, 200)},${getRandomInt(minSpread, maxSpread)}`;
    return points;
  },

  randomizeHeader: function () {
    let newPoints = csstricks1.generateRandomPoints(120, 190);
    let downFacingPoints = `M-4,-4 L1004,-4 L1004,100 L${newPoints.a} L${newPoints.b} L${newPoints.c} L${newPoints.d} L${newPoints.e} L-4,100 L-4,-4 Z`;
    $(".jagged-top1").attr("d", downFacingPoints);
  },

  randomizeBackgrounds: function () {
    csstricks1.randomizeHeader();
    requestInterval(function () {
      csstricks1.randomizeHeader();
    }, 2000);
  },
};

csstricks.init();
csstricks1.init();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function requestInterval(fn, delay) {
  var requestAnimFrame = (function () {
      return (
        window.requestAnimationFrame ||
        function (callback, element) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    })(),
    start = new Date().getTime(),
    handle = {};
  function loop() {
    handle.value = requestAnimFrame(loop);
    var current = new Date().getTime(),
      delta = current - start;
    if (delta >= delay) {
      fn.call();
      start = new Date().getTime();
    }
  }
  handle.value = requestAnimFrame(loop);
  return handle;
}

$(document).ready(function () {
  var html = "";
  for (var i = 1; i <= 50; i++) {
    html +=
      '<div class="shape-container--' +
      i +
      ' shape-animation"><div class="random-shape"></div></div>';
  }

  document.querySelector(".shape").innerHTML += html;

  var $allShapes = $("[class*='shape-container--']");
});
