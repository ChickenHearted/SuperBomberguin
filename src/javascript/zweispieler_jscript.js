
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
    ctx.drawImage(penguLinks, xlinks, ylinks, 40, 40);
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
      // 1.Reihe, 1.Eisblock nach links blocken
      if (xlinks == 150 && (ylinks >= 61 && ylinks <= 149)) {
        xlinks = 151;
        return;
        // 1.Reihe, 2.Eisblock nach links blocken
      } else if (xlinks == 250 && (ylinks >= 61 && ylinks <= 149)) {
        xlinks = 251;
        return;
        // 1.Reihe, 3.Eisblock nach links blocken
      } else if (xlinks == 350 && (ylinks >= 61 && ylinks <= 149)) {
        xlinks = 351;
        return;
        // 1.Reihe, 4.Eisblock nach links blocken
      } else if (xlinks == 450 && (ylinks >= 61 && ylinks <= 149)) {
        xlinks = 451;
        return;
        // 1.Reihe, 5.Eisblock nach links blocken
      } else if (xlinks == 550 && (ylinks >= 61 && ylinks <= 149)) {
        xlinks = 551;
        return;
        // 1.Reihe, 6.Eisblock nach links blocken
      } else if (xlinks == 650 && (ylinks >= 61 && ylinks <= 149)) {
        xlinks = 651;
        return;
        // 1.Reihe, 7.Eisblock nach links blocken
      } else if (xlinks == 750 && (ylinks >= 61 && ylinks <= 149)) {
        xlinks = 751;
        return;
        // 1.Reihe, 8.Eisblock nach links blocken
      } else if (xlinks == 850 && (ylinks >= 61 && ylinks <= 149)) {
        xlinks = 851;
        return;
      }

      // 2.Reihe, 1.Eisblock nach links blocken
      if (xlinks == 150 && (ylinks >= 161 && ylinks <= 249)) {
        xlinks = 151;
        return;
        // 2.Reihe, 2.Eisblock nach links blocken
      } else if (xlinks == 250 && (ylinks >= 161 && ylinks <= 249)) {
        xlinks = 251;
        return;
        // 2.Reihe, 3.Eisblock nach links blocken
      } else if (xlinks == 350 && (ylinks >= 161 && ylinks <= 249)) {
        xlinks = 351;
        return;
        // 2.Reihe, 4.Eisblock nach links blocken
      } else if (xlinks == 450 && (ylinks >= 161 && ylinks <= 249)) {
        xlinks = 451;
        return;
        // 2.Reihe, 5.Eisblock nach links blocken
      } else if (xlinks == 550 && (ylinks >= 161 && ylinks <= 249)) {
        xlinks = 551;
        return;
        // 2.Reihe, 6.Eisblock nach links blocken
      } else if (xlinks == 650 && (ylinks >= 161 && ylinks <= 249)) {
        xlinks = 651;
        return;
        // 2.Reihe, 7.Eisblock nach links blocken
      } else if (xlinks == 750 && (ylinks >= 161 && ylinks <= 249)) {
        xlinks = 751;
        return;
        // 2.Reihe, 8.Eisblock nach links blocken
      } else if (xlinks == 850 && (ylinks >= 161 && ylinks <= 249)) {
        xlinks = 851;
        return;
      }

      // 3.Reihe, 1.Eisblock nach links blocken
      if (xlinks == 150 && (ylinks >= 262 && ylinks <= 349)) {
        xlinks = 151;
        return;
        // 3.Reihe, 2.Eisblock nach links blocken
      } else if (xlinks == 250 && (ylinks >= 262 && ylinks <= 349)) {
        xlinks = 251;
        return;
        // 3.Reihe, 3.Eisblock nach links blocken
      } else if (xlinks == 350 && (ylinks >= 262 && ylinks <= 349)) {
        xlinks = 351;
        return;
        // 3.Reihe, 4.Eisblock nach links blocken
      } else if (xlinks == 450 && (ylinks >= 262 && ylinks <= 349)) {
        xlinks = 451;
        return;
        // 3.Reihe, 5.Eisblock nach links blocken
      } else if (xlinks == 550 && (ylinks >= 262 && ylinks <= 349)) {
        xlinks = 551;
        return;
        // 3.Reihe, 6.Eisblock nach links blocken
      } else if (xlinks == 650 && (ylinks >= 262 && ylinks <= 349)) {
        xlinks = 651;
        return;
        // 3.Reihe, 7.Eisblock nach links blocken
      } else if (xlinks == 750 && (ylinks >= 262 && ylinks <= 349)) {
        xlinks = 751;
        return;
        // 3.Reihe, 8.Eisblock nach links blocken
      } else if (xlinks == 850 && (ylinks >= 262 && ylinks <= 349)) {
        xlinks = 851;
        return;
      }

      // 4.Reihe, 1.Eisblock nach links blocken
      if (xlinks == 150 && (ylinks >= 362 && ylinks <= 449)) {
        xlinks = 151;
        return;
        // 4.Reihe, 2.Eisblock nach links blocken
      } else if (xlinks == 250 && (ylinks >= 362 && ylinks <= 449)) {
        xlinks = 251;
        return;
        // 4.Reihe, 3.Eisblock nach links blocken
      } else if (xlinks == 350 && (ylinks >= 362 && ylinks <= 449)) {
        xlinks = 351;
        return;
        // 4.Reihe, 4.Eisblock nach links blocken
      } else if (xlinks == 450 && (ylinks >= 362 && ylinks <= 449)) {
        xlinks = 451;
        return;
        // 4.Reihe, 5.Eisblock nach links blocken
      } else if (xlinks == 550 && (ylinks >= 362 && ylinks <= 449)) {
        xlinks = 551;
        return;
        // 4.Reihe, 6.Eisblock nach links blocken
      } else if (xlinks == 650 && (ylinks >= 362 && ylinks <= 449)) {
        xlinks = 651;
        return;
        // 4.Reihe, 7.Eisblock nach links blocken
      } else if (xlinks == 750 && (ylinks >= 362 && ylinks <= 449)) {
        xlinks = 751;
        return;
        // 4.Reihe, 8.Eisblock nach links blocken
      } else if (xlinks == 850 && (ylinks >= 362 && ylinks <= 449)) {
        xlinks = 851;
        return;
      }
    }

    // Guin läuft nach oben
    if(key == 87) {

      if (ylinks == 50){
        ylinks -= 0;
      }
      else {
      ylinks -= 1;
      }

      // 1.Reihe, 1.Eisblock nach oben blocken
      if (ylinks == 150 && (xlinks >= 61 && xlinks <= 149)) {
        ylinks = 151;
        return;
        // 1.Reihe, 2.Eisblock nach oben blocken
      } else if (ylinks == 150 && (xlinks >= 161 && xlinks <= 249)) {
        ylinks = 151;
        return;
        // 1.Reihe, 3.Eisblock nach oben blocken
      } else if (ylinks == 150 && (xlinks >= 361 && xlinks <= 449)) {
        ylinks = 151;
        return;
        // 1.Reihe, 4.Eisblock nach oben blocken
      } else if (ylinks == 150 && (xlinks >= 461 && xlinks <= 449)) {
        ylinks = 151;
        return;
        // 1.Reihe, 5.Eisblock nach oben blocken
      } else if (ylinks == 150 && (xlinks >= 561 && xlinks <= 549)) {
        ylinks = 151;
        return;
        // 1.Reihe, 6.Eisblock nach oben blocken
      } else if (ylinks == 150 && (xlinks >= 661 && xlinks <= 649)) {
        ylinks = 151;
        return;
        // 1.Reihe, 7.Eisblock nach oben blocken
      } else if (ylinks == 150 && (xlinks >= 761 && xlinks <= 749)) {
        ylinks = 151;
        return;
        // 1.Reihe, 8.Eisblock nach oben blocken
      } else if (ylinks == 150 && (xlinks >= 861 && xlinks <= 849)) {
        ylinks = 151;
        return;
      }

      // 2.Reihe, 1.Eisblock nach oben blocken
      if (ylinks == 250 && (xlinks >= 61 && xlinks <= 149)) {
        ylinks = 251;
        return;
        // 2.Reihe, 2.Eisblock nach oben blocken
      } else if (ylinks == 250 && (xlinks >= 161 && xlinks <= 249)) {
        ylinks = 251;
        return;
        // 2.Reihe, 3.Eisblock nach oben blocken
      } else if (ylinks == 250 && (xlinks >= 261 && xlinks <= 349)) {
        ylinks = 251;
        return;
        // 2.Reihe, 4.Eisblock nach oben blocken
      } else if (ylinks == 250 && (xlinks >= 361 && xlinks <= 449)) {
        ylinks = 251;
        return;
        // 2.Reihe, 5.Eisblock nach oben blocken
      } else if (ylinks == 250 && (xlinks >= 461 && xlinks <= 549)) {
        ylinks = 251;
        return;
        // 2.Reihe, 6.Eisblock nach oben blocken
      } else if (ylinks == 250 && (xlinks >= 561 && xlinks <= 649)) {
        ylinks = 251;
        return;
        // 2.Reihe, 7.Eisblock nach oben blocken
      } else if (ylinks == 250 && (xlinks >= 661 && xlinks <= 749)) {
        ylinks = 251;
        return;
        // 2.Reihe, 8.Eisblock nach oben blocken
      } else if (ylinks == 250 && (xlinks >= 761 && xlinks <= 849)) {
        ylinks = 251;
        return;
      }

      // 3.Reihe, 1.Eisblock nach oben blocken
      if (ylinks == 350 && (xlinks >= 61 && xlinks <= 149)) {
        ylinks = 351;
        return;
        // 3.Reihe, 2.Eisblock nach oben blocken
      } else if (ylinks == 350 && (xlinks >= 161 && xlinks <= 249)) {
        ylinks = 351;
        return;
        // 3.Reihe, 3.Eisblock nach oben blocken
      } else if (ylinks == 350 && (xlinks >= 261 && xlinks <= 349)) {
        ylinks = 351;
        return;
        // 3.Reihe, 4.Eisblock nach oben blocken
      } else if (ylinks == 350 && (xlinks >= 361 && xlinks <= 449)) {
        ylinks = 351;
        return;
        // 3.Reihe, 5.Eisblock nach oben blocken
      } else if (ylinks == 350 && (xlinks >= 461 && xlinks <= 549)) {
        ylinks = 351;
        return;
        // 3.Reihe, 6.Eisblock nach oben blocken
      } else if (ylinks == 350 && (xlinks >= 561 && xlinks <= 649)) {
        ylinks = 351;
        return;
        // 3.Reihe, 7.Eisblock nach oben blocken
      } else if (ylinks == 350 && (xlinks >= 661 && xlinks <= 749)) {
        ylinks = 351;
        return;
        // 3.Reihe, 8.Eisblock nach oben blocken
      } else if (ylinks == 350 && (xlinks >= 761 && xlinks <= 849)) {
        ylinks = 351;
        return;
      }

      // 4.Reihe, 1.Eisblock nach oben blocken
      if (ylinks == 450 && (xlinks >= 61 && xlinks <= 149)) {
        ylinks = 451;
        return;
        // 4.Reihe, 2.Eisblock nach oben blocken
      } else if (ylinks == 450 && (xlinks >= 161 && xlinks <= 249)) {
        ylinks = 451;
        return;
        // 4.Reihe, 3.Eisblock nach oben blocken
      } else if (ylinks == 450 && (xlinks >= 261 && xlinks <= 349)) {
        ylinks = 451;
        return;
        // 4.Reihe, 4.Eisblock nach oben blocken
      } else if (ylinks == 450 && (xlinks >= 361 && xlinks <= 449)) {
        ylinks = 451;
        return;
        // 4.Reihe, 5.Eisblock nach oben blocken
      } else if (ylinks == 450 && (xlinks >= 461 && xlinks <= 549)) {
        ylinks = 451;
        return;
        // 4.Reihe, 6.Eisblock nach oben blocken
      } else if (ylinks == 450 && (xlinks >= 561 && xlinks <= 649)) {
        ylinks = 451;
        return;
        // 4.Reihe, 7.Eisblock nach oben blocken
      } else if (ylinks == 450 && (xlinks >= 661 && xlinks <= 749)) {
        ylinks = 451;
        return;
        // 4.Reihe, 8.Eisblock nach oben blocken
      } else if (ylinks == 450 && (xlinks >= 761 && xlinks <= 849)) {
        ylinks = 451;
        return;
      }
    }

    // Guin löuft nach rechts
    if(key == 68) {
      if (xlinks == 860){
        xlinks += 0;
      }
      else {
      xlinks +=1;
      }
      // 1.Reihe, 1.Eisblock nach rechts blocken
      if ((xlinks + 50) == 111 && (ylinks >= 61 && ylinks <= 149)) {
        xlinks = 60;
        return;
        // 1.Reihe, 2.Eisblock nach rechts blocken
      } else if ((xlinks + 50) == 211 && (ylinks >= 61 && ylinks <= 149)) {
        xlinks = 160;
        return;
        // 1.Reihe, 3.Eisblock nach rechts blocken
      } else if ((xlinks + 50) == 311 && (ylinks >= 61 && ylinks <= 149)) {
        xlinks = 260;
        return;
        // 1.Reihe, 4.Eisblock nach rechts blocken
      } else if ((xlinks + 50) == 411 && (ylinks >= 61 && ylinks <= 149)) {
        xlinks = 360;
        return;
        // 1.Reihe, 5.Eisblock nach rechts blocken
      } else if ((xlinks + 50) == 511 && (ylinks >= 61 && ylinks <= 149)) {
        xlinks = 460;
        return;
        // 1.Reihe, 6.Eisblock nach rechts blocken
      } else if ((xlinks + 50) == 611 && (ylinks >= 61 && ylinks <= 149)) {
        xlinks = 560;
        return;
        // 1.Reihe, 7.Eisblock nach rechts blocken
      } else if ((xlinks + 50) == 711 && (ylinks >= 61 && ylinks <= 149)) {
        xlinks = 660;
        return;
        // 1.Reihe, 8.Eisblock nach rechts blocken
      } else if ((xlinks + 50) == 811 && (ylinks >= 61 && ylinks <= 149)) {
        xlinks = 760;
        return;
      }

      // 2.Reihe, 1.Eisblock nach rechts blocken
      if ((xlinks + 50) == 111 && (ylinks >= 161 && ylinks <= 249)) {
        xlinks = 60;
        return;
        // 2.Reihe, 2.Eisblock nach rechts blocken
      } else if ((xlinks + 50) == 211 && (ylinks >= 161 && ylinks <= 249)) {
        xlinks = 160;
        return;
        // 2.Reihe, 3.Eisblock nach rechts blocken
      } else if ((xlinks + 50) == 311 && (ylinks >= 161 && ylinks <= 249)) {
        xlinks = 260;
        return;
        // 2.Reihe, 4.Eisblock nach rechts blocken
      } else if ((xlinks + 50) == 411 && (ylinks >= 161 && ylinks <= 249)) {
        xlinks = 360;
        return;
        // 2.Reihe, 5.Eisblock nach rechts blocken
      } else if ((xlinks + 50) == 511 && (ylinks >= 161 && ylinks <= 249)) {
        xlinks = 460;
        return;
        // 2.Reihe, 6.Eisblock nach rechts blocken
      } else if ((xlinks + 50) == 611 && (ylinks >= 161 && ylinks <= 249)) {
        xlinks = 560;
        return;
        // 2.Reihe, 7.Eisblock nach rechts blocken
      } else if ((xlinks + 50) == 711 && (ylinks >= 161 && ylinks <= 249)) {
        xlinks = 660;
        return;
        // 2.Reihe, 8.Eisblock nach rechts blocken
      } else if ((xlinks + 50) == 811 && (ylinks >= 161 && ylinks <= 249)) {
        xlinks = 760;
        return;
      }

      // 3.Reihe, 1.Eisblock nach rechts blocken
      if ((xlinks + 50) == 111 && (ylinks >= 262 && ylinks <= 349)) {
        xlinks = 60;
        return;
        // 3.Reihe, 2.Eisblock nach rechts blocken
      } else if ((xlinks + 50) == 211 && (ylinks >= 262 && ylinks <= 349)) {
        xlinks = 160;
        return;
        // 3.Reihe, 3.Eisblock nach rechts blocken
      } else if ((xlinks + 50) == 311 && (ylinks >= 262 && ylinks <= 349)) {
        xlinks = 260;
        return;
        // 3.Reihe, 4.Eisblock nach rechts blocken
      } else if ((xlinks + 50) == 411 && (ylinks >= 262 && ylinks <= 349)) {
        xlinks = 360;
        return;
        // 3.Reihe, 5.Eisblock nach rechts blocken
      } else if ((xlinks + 50) == 511 && (ylinks >= 262 && ylinks <= 349)) {
        xlinks = 460;
        return;
        // 3.Reihe, 6.Eisblock nach rechts blocken
      } else if ((xlinks + 50) == 611 && (ylinks >= 262 && ylinks <= 349)) {
        xlinks = 560;
        return;
        // 3.Reihe, 7.Eisblock nach rechts blocken
      } else if ((xlinks + 50) == 711 && (ylinks >= 262 && ylinks <= 349)) {
        xlinks = 660;
        return;
        // 3.Reihe, 8.Eisblock nach rechts blocken
      } else if ((xlinks + 50) == 811 && (ylinks >= 262 && ylinks <= 349)) {
        xlinks = 760;
        return;
      }

      // 4.Reihe, 1.Eisblock nach rechts blocken
      if ((xlinks + 50) == 111 && (ylinks >= 362 && ylinks <= 449)) {
        xlinks = 60;
        return;
        // 4.Reihe, 2.Eisblock nach rechts blocken
      } else if ((xlinks + 50) == 211 && (ylinks >= 362 && ylinks <= 449)) {
        xlinks = 160;
        return;
        // 4.Reihe, 3.Eisblock nach rechts blocken
      } else if ((xlinks + 50) == 311 && (ylinks >= 362 && ylinks <= 449)) {
        xlinks = 260;
        return;
        // 4.Reihe, 4.Eisblock nach rechts blocken
      } else if ((xlinks + 50) == 411 && (ylinks >= 362 && ylinks <= 449)) {
        xlinks = 360;
        return;
        // 4.Reihe, 5.Eisblock nach rechts blocken
      } else if ((xlinks + 50) == 511 && (ylinks >= 362 && ylinks <= 449)) {
        xlinks = 460;
        return;
        // 4.Reihe, 6.Eisblock nach rechts blocken
      } else if ((xlinks + 50) == 611 && (ylinks >= 362 && ylinks <= 449)) {
        xlinks = 560;
        return;
        // 4.Reihe, 7.Eisblock nach rechts blocken
      } else if ((xlinks + 50) == 711 && (ylinks >= 362 && ylinks <= 449)) {
        xlinks = 660;
        return;
        // 4.Reihe, 8.Eisblock nach rechts blocken
      } else if ((xlinks + 50) == 811 && (ylinks >= 362 && ylinks <= 449)) {
        xlinks = 760;
        return;
      }
    }

    // Guin läuft nach unten
    if(key == 83) {
      if (ylinks == 460){
        ylinks += 0;
      }
      else {
      ylinks += 1;
      }

      // 1.Reihe, 1.Eisblock nach unten blocken
      if (ylinks == 61 && (xlinks >= 61 && xlinks <= 149)) {
        ylinks = 60;
        return;
        // 1.Reihe, 2.Eisblock nach unten blocken
      } else if (ylinks == 61 && (xlinks >= 161 && xlinks <= 249)) {
        ylinks = 60;
        return;
        // 1.Reihe, 3.Eisblock nach unten blocken
      } else if (ylinks == 61 && (xlinks >= 261 && xlinks <= 349)) {
        ylinks = 60;
        return;
        // 1.Reihe, 4.Eisblock nach unten blocken
      } else if (ylinks == 61 && (xlinks >= 361 && xlinks <= 449)) {
        ylinks = 60;
        return;
        // 1.Reihe, 5.Eisblock nach unten blocken
      } else if (ylinks == 61 && (xlinks >= 461 && xlinks <= 549)) {
        ylinks = 60;
        return;
        // 1.Reihe, 6.Eisblock nach unten blocken
      } else if (ylinks == 61 && (xlinks >= 561 && xlinks <= 649)) {
        ylinks = 60;
        return;
        // 1.Reihe, 7.Eisblock nach unten blocken
      } else if (ylinks == 61 && (xlinks >= 661 && xlinks <= 749)) {
        ylinks = 60;
        return;
        // 1.Reihe, 8.Eisblock nach unten blocken
      } else if (ylinks == 61 && (xlinks >= 761 && xlinks <= 849)) {
        ylinks = 60;
        return;
      }

      // 2.Reihe, 1.Eisblock nach unten blocken
      if (ylinks == 161 && (xlinks >= 61 && xlinks <= 149)) {
        ylinks = 160;
        return;
        // 2.Reihe, 2.Eisblock nach unten blocken
      } else if (ylinks == 161 && (xlinks >= 161 && xlinks <= 249)) {
        ylinks = 160;
        return;
        // 2.Reihe, 3.Eisblock nach unten blocken
      } else if (ylinks == 161 && (xlinks >= 261 && xlinks <= 349)) {
        ylinks = 160;
        return;
        // 2.Reihe, 4.Eisblock nach unten blocken
      } else if (ylinks == 161 && (xlinks >= 361 && xlinks <= 449)) {
        ylinks = 160;
        return;
        // 2.Reihe, 5.Eisblock nach unten blocken
      } else if (ylinks == 161 && (xlinks >= 461 && xlinks <= 549)) {
        ylinks = 160;
        return;
        // 2.Reihe, 6.Eisblock nach unten blocken
      } else if (ylinks == 161 && (xlinks >= 561 && xlinks <= 649)) {
        ylinks = 160;
        return;
        // 2.Reihe, 7.Eisblock nach unten blocken
      } else if (ylinks == 161 && (xlinks >= 661 && xlinks <= 749)) {
        ylinks = 160;
        return;
        // 2.Reihe, 8.Eisblock nach unten blocken
      } else if (ylinks == 161 && (xlinks >= 761 && xlinks <= 849)) {
        ylinks = 160;
        return;
      }

      // 3.Reihe, 1.Eisblock nach unten blocken
      if (ylinks == 261 && (xlinks >= 61 && xlinks <= 149)) {
        ylinks = 260;
        return;
        // 3.Reihe, 2.Eisblock nach unten blocken
      } else if (ylinks == 261 && (xlinks >= 161 && xlinks <= 249)) {
        ylinks = 260;
        return;
        // 3.Reihe, 3.Eisblock nach unten blocken
      } else if (ylinks == 261 && (xlinks >= 261 && xlinks <= 349)) {
        ylinks = 260;
        return;
        // 3.Reihe, 4.Eisblock nach unten blocken
      } else if (ylinks == 261 && (xlinks >= 361 && xlinks <= 449)) {
        ylinks = 260;
        return;
        // 3.Reihe, 5.Eisblock nach unten blocken
      } else if (ylinks == 261 && (xlinks >= 461 && xlinks <= 549)) {
        ylinks = 260;
        return;
        // 3.Reihe, 6.Eisblock nach unten blocken
      } else if (ylinks == 261 && (xlinks >= 561 && xlinks <= 649)) {
        ylinks = 260;
        return;
        // 3.Reihe, 7.Eisblock nach unten blocken
      } else if (ylinks == 261 && (xlinks >= 661 && xlinks <= 749)) {
        ylinks = 260;
        return;
        // 3.Reihe, 8.Eisblock nach unten blocken
      } else if (ylinks == 261 && (xlinks >= 761 && xlinks <= 849)) {
        ylinks = 260;
        return;
      }

      // 4.Reihe, 1.Eisblock nach unten blocken
      if (ylinks == 361 && (xlinks >= 61 && xlinks <= 149)) {
        ylinks = 360;
        return;
        // 4.Reihe, 2.Eisblock nach unten blocken
      } else if (ylinks == 361 && (xlinks >= 161 && xlinks <= 249)) {
        ylinks = 360;
        return;
        // 4.Reihe, 3.Eisblock nach unten blocken
      } else if (ylinks == 361 && (xlinks >= 261 && xlinks <= 349)) {
        ylinks = 360;
        return;
        // 4.Reihe, 4.Eisblock nach unten blocken
      } else if (ylinks == 361 && (xlinks >= 361 && xlinks <= 449)) {
        ylinks = 360;
        return;
        // 4.Reihe, 5.Eisblock nach unten blocken
      } else if (ylinks == 361 && (xlinks >= 461 && xlinks <= 549)) {
        ylinks = 360;
        return;
        // 4.Reihe, 6.Eisblock nach unten blocken
      } else if (ylinks == 361 && (xlinks >= 561 && xlinks <= 649)) {
        ylinks = 360;
        return;
        // 4.Reihe, 7.Eisblock nach unten blocken
      } else if (ylinks == 361 && (xlinks >= 661 && xlinks <= 749)) {
        ylinks = 360;
        return;
        // 4.Reihe, 8.Eisblock nach unten blocken
      } else if (ylinks == 361 && (xlinks >= 761 && xlinks <= 849)) {
        ylinks = 360;
        return;
      }
    }

    ctx.drawImage(penguLinks, xlinks, ylinks, 40, 40);
  }, 5);

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
