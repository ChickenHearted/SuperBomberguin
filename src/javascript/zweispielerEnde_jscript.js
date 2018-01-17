
  var canvas = document.getElementById('zweispieler_canvas');

  canvas.width = canvas.scrollWidth;
  canvas.height = canvas.scrollHeight;

  var ctx = canvas.getContext('2d');

  var ice = new Image();
  ice.src = 'images/iceBlock.png';

 //oberste & unterste 3
  for (var x = 0; x <= 900; x += 50) {
    ctx.drawImage(ice, x, 0, 50, 50);
    ctx.drawImage(ice, x, 500, 50, 50);
    ctx.drawImage(ice, x, 550, 50, 50);
    ctx.drawImage(ice, x, 600, 50, 50);
  }

  //rechts & links
  for (var y = 50; y <= 550; y += 50) {
    ctx.drawImage(ice, 900, y, 50, 50);
    ctx.drawImage(ice, 0, y, 50, 50);
  }

  var zweispieler = new Image();
  zweispieler.src = 'images/zweispielerModus.jpg';
  ctx.drawImage(zweispieler, 350, 550, 250, 50);

  var kO = new Image();
  //K.O
  kO.src = 'images/KO.jpg';
  ctx.drawImage(kO, 50, 50, 850, 450);
