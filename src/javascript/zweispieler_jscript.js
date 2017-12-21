
  var canvas = document.getElementById('zweispieler_canvas');

  canvas.width = canvas.scrollWidth;
  canvas.height = canvas.scrollHeight;

  var ctx = canvas.getContext('2d');

  var snow = new Image();
  snow.src = 'images/snowBlock.jpg';

  for (var x = 100; x <= 800; x += 100) {
  ctx.drawImage(snow, x, 100, 50, 50);
  ctx.drawImage(snow, x, 200, 50, 50);
  ctx.drawImage(snow, x, 300, 50, 50);
  ctx.drawImage(snow, x, 400, 50, 50);
  }

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


  var blocks = new Image();
  blocks.src = 'images/ice_Block.jpg';

//die dazuwischen
  for (var x = 150; x <= 750; x += 100) {
    ctx.drawImage(blocks, x, 100, 50, 50);
    ctx.drawImage(blocks, x, 200, 50, 50);
    ctx.drawImage(blocks, x, 300, 50, 50);
    ctx.drawImage(blocks, x, 400, 50, 50);
  }

  for (var x = 100; x <= 800; x += 50) {
    ctx.drawImage(blocks, x, 150, 50, 50);
    ctx.drawImage(blocks, x, 250, 50, 50);
    ctx.drawImage(blocks, x, 350, 50, 50);
  }
  //rand oben
  for (var x = 150; x <= 850; x += 50) {
    ctx.drawImage(blocks, x, 50, 50, 50);
  }
  //rand unten
  for (var x = 50; x <= 750; x += 50) {
    ctx.drawImage(blocks, x, 450, 50, 50);
  }
  //rand rechts
  for (var y = 150; y <= 400; y += 50) {
    ctx.drawImage(blocks, 50, y, 50, 50);
  }
  //rand links
  for (var y = 100; y <= 350; y += 50) {
    ctx.drawImage(blocks, 850, y, 50, 50);
  }

  //var penguRechts = new Image();
  //penguRechts.src = 'images/pengu_nachLinks.png';

  //ctx.drawImage(penguRechts, 850, 450, 50, 50);

  // var penguLinks = new Image();
  // penguLinks.src = 'images/pengu_nachRechts.png';

  // ctx.drawImage(penguLinks, 50, 50, 50, 50);

  window.onload=function() {
  var xlinks = 50;
  var ylinks =50;
  var xrechts = 850;
  var yrechts = 450;
  var key, pos = 0;
  var canvas = document.getElementById("zweispieler_canvas");
  var ctx = canvas.getContext("2d");
  var penguLinks = new Image();
  var penguRechts = new Image();
  var bombe = new Image();

  penguLinks.onload=function() {
    ctx.drawImage(penguLinks, xlinks, ylinks, 50, 50);
  }

  penguRechts.onload=function() {
    ctx.drawImage(penguRechts, xrechts, yrechts, 50, 50);
  }


  bombe.src ='images/bomb.png';
  penguLinks.src ='images/pengu_nachRechts.png';
  penguRechts.src ='images/pengu_nachLinks.png';
  document.onkeydown=function(e) {
    pos = 1;
    key = window.event?e.keyCode:e.which;
  }

  document.onkeyup=function(e) { pos = 0; }
  setInterval (function() {

    if (key == 32) {
    ctx.drawImage(bombe, xlinks, ylinks, 50, 50);
    }
    if(pos == 0) return;

    // Guin läuft nach links
    if(key == 65) {
      if (xlinks == 50){
        xlinks -= 0;
      }
      else {
      xlinks -= 1;
      }
      // 1.Eisblock blocken
      if (xlinks == 150 && (ylinks >= 51 && ylinks <= 149)) {
        xlinks = 151;
        return;
      }
    }

    // Guin läuft nach oben
    if(key == 87) {

      //alert('guin nach oben');

      if (ylinks == 50){
        ylinks -= 0;
      }
      else {
      ylinks -= 1;
      }
    // 1.Eisblock blocken
      if (ylinks == 150 && (xlinks >= 51 && xlinks <= 149)) {
        ylinks = 151;
        return;
      }
    }

    // Guin löuft nach rechts
    if(key == 68) {

        //alert('guin nach rechts');

      if (xlinks == 850){
        xlinks += 0;
      }
      else {
      xlinks +=1;
      }
      // 1.Eisblock blocken
      if ((xlinks + 50) == 101 && (ylinks >= 51 && ylinks <= 149)) {
        xlinks = 50;
        return;
      }
    }

    // Guin läuft nach unten
    if(key == 83) {
      if (ylinks == 450){
        ylinks += 0;
      }
      else {
      ylinks += 1;
      }
      // 1.Eisblock blocken
      if (ylinks == 51 && (xlinks >= 51 && xlinks < 149)) {
        ylinks = 50;
        return;
      }
      // 2.Eisblock blocken
      if ((ylinks - 50) == 100 && (xlinks >= 51 && xlinks <= 149)) {


        return;
      }
    }

    ctx.drawImage(penguLinks, xlinks, ylinks, 50, 50);
  }, 3);

  document.onkeyup=function(e) { pos = 0; }
  setInterval (function() {
    if (key == 16) {
    ctx.drawImage(bombe, xrechts, yrechts, 50, 50);
    }
    if(pos == 0) return;
    if(key == 37) {
      if (xrechts == 50){
        xrechts -= 0;
      }
      else {
      xrechts -= 1;
      }
    }
    if(key == 38 && y > 50) {
      if (yrechts == 50){
        yrechts -= 0;
      }
      else {
      yrechts -= 1;
      }
    }
    if(key == 39) {
      if (xrechts == 850){
        xrechts += 0;
      }
      else {
      xrechts += 1;
      }
    }
    if(key == 40) {
      if (yrechts == 450){
        yrechts += 0;
      }
      else {
      yrechts += 1;
      }
    }
    ctx.drawImage(penguRechts, xrechts, yrechts, 50, 50);
  }, 3);
  }
