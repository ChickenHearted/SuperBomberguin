
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
  var ylinks = 50;
  var xrechts = 860;
  var yrechts = 460;
  var key, pos = 0;
  var canvas = document.getElementById("zweispieler_canvas");
  var ctx = canvas.getContext("2d");
  var penguLinks = new Image();
  var penguRechts = new Image();
  var bombe = new Image();
  //unten links
  var explosionUntenLinks_Ecke = new Image();
  var explosionUntenLinks_Rechts = new Image();
  var explosionUntenLinks_RechtsRechts = new Image();
  var explosionUntenLinks_Oben = new Image();
  var explosionUntenLinks_ObenOben = new Image();
  //oben links
  var explosionObenLinks_Ecke = new Image();
  var explosionObenLinks_Rechts = new Image();
  var explosionObenLinks_RechtsRechts = new Image();
  var explosionObenLinks_Unten = new Image();
  var explosionObenLinks_UntenUnten = new Image();
  //oben rechts
  var explosionObenRechts_Ecke = new Image();
  var explosionObenRechts_Links = new Image();
  var explosionObenRechts_LinksLinks = new Image();
  var explosionObenRechts_Unten = new Image();
  var explosionObenRechts_UntenUnten = new Image();
  //unten rechts
  var explosionUntenRechts_Ecke = new Image();
  var explosionUntenRechts_Links = new Image();
  var explosionUntenRechts_LinksLinks = new Image();
  var explosionUntenRechts_Oben = new Image();
  var explosionUntenRechts_ObenOben = new Image();
  //unten oben gerade
  var explosionUntenObenGerade_Mitte = new Image();
  var explosionUntenObenGerade_Links = new Image();
  var explosionUntenObenGerade_Rechts = new Image();
  //rechts links gerade
  var explosionRechtsLinksGerade_Mitte = new Image();
  var explosionRechtsLinksGerade_Unten = new Image();
  var explosionRechtsLinksGerade_Oben = new Image();
  //dazwischen mitte
  var explosionDazwischen_Mitte = new Image();
  var explosionDazwischenUnten_Mitte = new Image();
  var explosionDazwischenRechts_Mitte = new Image();
  var explosionDazwischenLinks_Mitte = new Image();
  var explosionDazwischenAlle_Mitte = new Image();



  penguLinks.onload=function() {
    ctx.drawImage(penguLinks, xlinks, ylinks, 40, 40);
  }

  penguRechts.onload=function() {
    ctx.drawImage(penguRechts, xrechts, yrechts, 40, 40);
  }

  // unten links
  explosionUntenLinks_Ecke.src = 'images/explosion_untenlinks_ecke.png';
  explosionUntenLinks_Rechts.src = 'images/explosion_untenlinks_rechtsrechts.png';
  explosionUntenLinks_Oben.src = 'images/explosion_untenlinks_obenoben.png';
  //oben links
  explosionObenLinks_Ecke.src = 'images/explosion_obenlinks_ecke.png';
  explosionObenLinks_Rechts.src = 'images/explosion_obenlinks_rechtsrechts.png';
  explosionObenLinks_Unten.src = 'images/explosion_obenlinks_untenunten.png';
  //oben rechts
  explosionObenRechts_Ecke.src = 'images/explosion_obenrechts_ecke.png';
  explosionObenRechts_Links.src = 'images/explosion_obenrechts_linkslinks.png';
  explosionObenRechts_Unten.src = 'images/explosion_obenrechts_untenunten.png';
  //unten rechts
  explosionUntenRechts_Ecke.src = 'images/explosion_untenrechts_ecke.png';
  explosionUntenRechts_Links.src = 'images/explosion_untenrechts_linkslinks.png';
  explosionUntenRechts_Oben.src = 'images/explosion_untenrechts_obenoben.png';
  //unten oben gerade
  explosionUntenObenGerade_Mitte.src = 'images/explosion_untenoben_gerade.png';
  explosionUntenObenGerade_Links.src = 'images/explosion_untenoben_geradelinks.png';
  explosionUntenObenGerade_Rechts.src = 'images/explosion_untenoben_geraderechts.png';
  //rechts links gerade
  explosionRechtsLinksGerade_Mitte.src = 'images/explosion_rechtslinks_gerade.png';
  explosionRechtsLinksGerade_Unten.src = 'images/explosion_rechtslinks_geradeunten.png';
  explosionRechtsLinksGerade_Oben.src = 'images/explosion_rechtslinks_geradeoben.png';
  //dazuwischen
  explosionDazwischen_Mitte.src = 'images/explosion_dazwischenOben_mitte.png';
  explosionDazwischenAlle_Mitte.src = 'images/explosion_dazwischenAlle_mitte.png';
  explosionDazwischenUnten_Mitte.src = 'images/explosion_dazwischenUnten_mitte.png';
  explosionDazwischenRechts_Mitte.src = 'images/explosion_dazwischenRechts_mitte.png';
  explosionDazwischenLinks_Mitte.src = 'images/explosion_dazwischenLinks_mitte.png';

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
      //unten links
    if (ylinks >= 435 && xlinks <= 75) {
    ctx.drawImage(bombe, xbomb = 50, ybomb = 450, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenLinks_Ecke, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenLinks_Rechts, xbomb + 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenLinks_Oben, xbomb, ybomb - 50, 50, 50);
    }, 3000);
    }
    ctx.drawImage(penguLinks, xlinks, ylinks, 40, 40);
    //oben links
    if (ylinks <= 75 && xlinks <= 75) {
    ctx.drawImage(bombe, xbomb = 50, ybomb = 50, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionObenLinks_Ecke, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionObenLinks_Rechts, xbomb + 50, ybomb, 50, 50);
      ctx.drawImage(explosionObenLinks_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //oben rechts
    if (ylinks <= 75 && xlinks >= 835) {
    ctx.drawImage(bombe, xbomb = 850, ybomb = 50, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionObenRechts_Ecke, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionObenRechts_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionObenRechts_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //unten rechts
    if (ylinks >= 435 && xlinks >= 835) {
    ctx.drawImage(bombe, xbomb = 850, ybomb = 450, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenRechts_Ecke, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenRechts_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenRechts_Oben, xbomb, ybomb - 50, 50, 50);
    }, 3000);
    }
    //unten oben gerade  oben (1x1)
    if (ylinks <= 75 && xlinks >= 80 && xlinks <= 125) {
    ctx.drawImage(bombe, xbomb = 100, ybomb = 50, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade - oben (2x1)
    if (ylinks <= 75 && xlinks >= 180 && xlinks <= 225) {
    ctx.drawImage(bombe, xbomb = 200, ybomb = 50, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade - oben (3x1)
    if (ylinks <= 75 && xlinks >= 280 && xlinks <= 325) {
    ctx.drawImage(bombe, xbomb = 300, ybomb = 50, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade - oben (4x1)
    if (ylinks <= 75 && xlinks >= 380 && xlinks <= 425) {
    ctx.drawImage(bombe, xbomb = 400, ybomb = 50, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade - oben (5x1)
    if (ylinks <= 75 && xlinks >= 480 && xlinks <= 525) {
    ctx.drawImage(bombe, xbomb = 500, ybomb = 50, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade - oben (6x1)
    if (ylinks <= 75 && xlinks >= 580 && xlinks <= 625) {
    ctx.drawImage(bombe, xbomb = 600, ybomb = 50, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade - oben (7x1)
    if (ylinks <= 75 && xlinks >= 680 && xlinks <= 725) {
    ctx.drawImage(bombe, xbomb = 700, ybomb = 50, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade  oben (8x1)
    if (ylinks <= 75 && xlinks >= 780 && xlinks <= 835) {
    ctx.drawImage(bombe, xbomb = 800, ybomb = 50, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade  (1x2)
    if (ylinks <= 175 && ylinks >= 125 && xlinks >= 80 && xlinks <= 125) {
    ctx.drawImage(bombe, xbomb = 100, ybomb = 150, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade (2x2)
    if (ylinks <= 175 && ylinks >= 125 && xlinks >= 180 && xlinks <= 225) {
    ctx.drawImage(bombe, xbomb = 200, ybomb = 150, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade (3x2)
    if (ylinks <= 175 && ylinks >= 125 && xlinks >= 280 && xlinks <= 325) {
    ctx.drawImage(bombe, xbomb = 300, ybomb = 150, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade (4x2)
    if (ylinks <= 175 && ylinks >= 125 && xlinks >= 380 && xlinks <= 425) {
    ctx.drawImage(bombe, xbomb = 400, ybomb = 150, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade (5x2)
    if (ylinks <= 175 && ylinks >= 125 && xlinks >= 480 && xlinks <= 525) {
    ctx.drawImage(bombe, xbomb = 500, ybomb = 150, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade (6x2)
    if (ylinks <= 175 && ylinks >= 125 && xlinks >= 580 && xlinks <= 625) {
    ctx.drawImage(bombe, xbomb = 600, ybomb = 150, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade (7x2)
    if (ylinks <= 175 && ylinks >= 125 && xlinks >= 680 && xlinks <= 725) {
    ctx.drawImage(bombe, xbomb = 700, ybomb = 150, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade (8x2)
    if (ylinks <= 175 && ylinks >= 125 && xlinks >= 780 && xlinks <= 835) {
    ctx.drawImage(bombe, xbomb = 800, ybomb = 150, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade  (1x3)
    if (ylinks <= 275 && ylinks >= 225 && xlinks >= 80 && xlinks <= 125) {
    ctx.drawImage(bombe, xbomb = 100, ybomb = 250, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade(2x3)
    if (ylinks <= 275 && ylinks >= 225 && xlinks >= 180 && xlinks <= 225) {
    ctx.drawImage(bombe, xbomb = 200, ybomb = 250, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade (3x3)
    if (ylinks <= 275 && ylinks >= 225 && xlinks >= 280 && xlinks <= 325) {
    ctx.drawImage(bombe, xbomb = 300, ybomb = 250, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade (4x3)
    if (ylinks <= 275 && ylinks >= 225 && xlinks >= 380 && xlinks <= 425) {
    ctx.drawImage(bombe, xbomb = 400, ybomb = 250, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade (5x3)
    if (ylinks <= 275 && ylinks >= 225 && xlinks >= 480 && xlinks <= 525) {
    ctx.drawImage(bombe, xbomb = 500, ybomb = 250, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade (6x3)
    if (ylinks <= 275 && ylinks >= 225 && xlinks >= 580 && xlinks <= 625) {
    ctx.drawImage(bombe, xbomb = 600, ybomb = 250, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade (7x3)
    if (ylinks <= 275 && ylinks >= 225 && xlinks >= 680 && xlinks <= 725) {
    ctx.drawImage(bombe, xbomb = 700, ybomb = 250, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade  (8x3)
    if (ylinks <= 275 && ylinks >= 225 && xlinks >= 780 && xlinks <= 835) {
    ctx.drawImage(bombe, xbomb = 800, ybomb = 250, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade  (1x4)
    if (ylinks <= 375 && ylinks >= 325 && xlinks >= 80 && xlinks <= 125) {
    ctx.drawImage(bombe, xbomb = 100, ybomb = 350, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade(2x4)
    if (ylinks <= 375 && ylinks >= 325 && xlinks >= 180 && xlinks <= 225) {
    ctx.drawImage(bombe, xbomb = 200, ybomb = 350, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade (3x4)
    if (ylinks <= 375 && ylinks >= 325 && xlinks >= 280 && xlinks <= 325) {
    ctx.drawImage(bombe, xbomb = 300, ybomb = 350, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade (4x4)
    if (ylinks <= 375 && ylinks >= 325 && xlinks >= 380 && xlinks <= 425) {
    ctx.drawImage(bombe, xbomb = 400, ybomb = 350, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade (5x4)
    if (ylinks <= 375 && ylinks >= 325 && xlinks >= 480 && xlinks <= 525) {
    ctx.drawImage(bombe, xbomb = 500, ybomb = 350, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade (6x4)
    if (ylinks <= 375 && ylinks >= 325 && xlinks >= 580 && xlinks <= 625) {
    ctx.drawImage(bombe, xbomb = 600, ybomb = 350, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade (7x4)
    if (ylinks <= 375 && ylinks >= 325 && xlinks >= 680 && xlinks <= 725) {
    ctx.drawImage(bombe, xbomb = 700, ybomb = 350, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade  (8x4)
    if (ylinks <= 375 && ylinks >= 325 && xlinks >= 780 && xlinks <= 835) {
    ctx.drawImage(bombe, xbomb = 800, ybomb = 350, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade  (1x5)
    if (ylinks >= 435 && xlinks >= 80 && xlinks <= 125) {
    ctx.drawImage(bombe, xbomb = 100, ybomb = 450, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade  (2x5)
    if (ylinks >= 435 && xlinks >= 180 && xlinks <= 225) {
    ctx.drawImage(bombe, xbomb = 200, ybomb = 450, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade  (3x5)
    if (ylinks >= 435 && xlinks >= 280 && xlinks <= 325) {
    ctx.drawImage(bombe, xbomb = 300, ybomb = 450, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade  (4x5)
    if (ylinks >= 435 && xlinks >= 380 && xlinks <= 425) {
    ctx.drawImage(bombe, xbomb = 400, ybomb = 450, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade  (5x5)
    if (ylinks >= 435 && xlinks >= 480 && xlinks <= 525) {
    ctx.drawImage(bombe, xbomb = 500, ybomb = 450, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade  (6x5)
    if (ylinks >= 435 && xlinks >= 580 && xlinks <= 625) {
    ctx.drawImage(bombe, xbomb = 600, ybomb = 450, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade  (7x5)
    if (ylinks >= 435 && xlinks >= 680 && xlinks <= 725) {
    ctx.drawImage(bombe, xbomb = 700, ybomb = 450, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }
    //unten oben gerade  (8x5)
    if (ylinks >= 435 && xlinks >= 780 && xlinks <= 825) {
    ctx.drawImage(bombe, xbomb = 800, ybomb = 450, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
    }, 3000);
    }


    //rechts links gerade (1x1)
    if (xlinks <= 75 && ylinks >= 85 && ylinks <= 125) {
    ctx.drawImage(bombe, xbomb = 100, ybomb = 100, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade  (1x2)
    if (xlinks <= 75 && ylinks >= 185 && ylinks <= 225) {
    ctx.drawImage(bombe, xbomb = 100, ybomb = 200, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade  (1x3)
    if (xlinks <= 75 && ylinks >= 285 && ylinks <= 325) {
    ctx.drawImage(bombe, xbomb = 100, ybomb = 300, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade  (1x4)
    if (xlinks <= 75 && ylinks >= 385 && ylinks <= 425) {
    ctx.drawImage(bombe, xbomb = 100, ybomb = 400, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade (2x1)
    if (xlinks <= 175 && xlinks >= 125 && ylinks >= 85 && ylinks <= 125) {
    ctx.drawImage(bombe, xbomb = 150, ybomb = 100, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade (2x2)
    if (xlinks <= 175 && xlinks >= 125 && ylinks >= 185 && ylinks <= 225) {
    ctx.drawImage(bombe, xbomb = 150, ybomb = 200, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade (2x3)
    if (xlinks <= 175 && xlinks >= 125 && ylinks >= 285 && ylinks <= 325) {
    ctx.drawImage(bombe, xbomb = 150, ybomb = 300, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade  (2x4)
    if (xlinks <= 175 && xlinks >= 125 && ylinks >= 385 && ylinks <= 425) {
    ctx.drawImage(bombe, xbomb = 150, ybomb = 400, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade (3x1)
    if (xlinks <= 275 && xlinks >= 225 && ylinks >= 85 && ylinks <= 125) {
    ctx.drawImage(bombe, xbomb = 250, ybomb = 100, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade (3x2)
    if (xlinks <= 275 && xlinks >= 225 && ylinks >= 185 && ylinks <= 225) {
    ctx.drawImage(bombe, xbomb = 250, ybomb = 200, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade (3x3)
    if (xlinks <= 275 && xlinks >= 225 && ylinks >= 285 && ylinks <= 325) {
    ctx.drawImage(bombe, xbomb = 250, ybomb = 300, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade  (3x4)
    if (xlinks <= 275 && xlinks >= 225 && ylinks >= 385 && ylinks <= 425) {
    ctx.drawImage(bombe, xbomb = 250, ybomb = 400, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade (4x1)
    if (xlinks <= 375 && xlinks >= 325 && ylinks >= 85 && ylinks <= 125) {
    ctx.drawImage(bombe, xbomb = 350, ybomb = 100, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade (4x2)
    if (xlinks <= 375 && xlinks >= 325 && ylinks >= 185 && ylinks <= 225) {
    ctx.drawImage(bombe, xbomb = 350, ybomb = 200, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade (4x3)
    if (xlinks <= 375 && xlinks >= 325 && ylinks >= 285 && ylinks <= 325) {
    ctx.drawImage(bombe, xbomb = 350, ybomb = 300, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade  (4x4)
    if (xlinks <= 375 && xlinks >= 325 && ylinks >= 385 && ylinks <= 425) {
    ctx.drawImage(bombe, xbomb = 350, ybomb = 400, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade (5x1)
    if (xlinks <= 475 && xlinks >= 425 && ylinks >= 85 && ylinks <= 125) {
    ctx.drawImage(bombe, xbomb = 450, ybomb = 100, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade (5x2)
    if (xlinks <= 475 && xlinks >= 425 && ylinks >= 185 && ylinks <= 225) {
    ctx.drawImage(bombe, xbomb = 450, ybomb = 200, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade (5x3)
    if (xlinks <= 475 && xlinks >= 425 && ylinks >= 285 && ylinks <= 325) {
    ctx.drawImage(bombe, xbomb = 450, ybomb = 300, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade  (5x4)
    if (xlinks <= 475 && xlinks >= 425 && ylinks >= 385 && ylinks <= 425) {
    ctx.drawImage(bombe, xbomb = 450, ybomb = 400, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade (6x1)
    if (xlinks <= 575 && xlinks >= 525 && ylinks >= 85 && ylinks <= 125) {
    ctx.drawImage(bombe, xbomb = 550, ybomb = 100, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade (6x2)
    if (xlinks <= 575 && xlinks >= 525 && ylinks >= 185 && ylinks <= 225) {
    ctx.drawImage(bombe, xbomb = 550, ybomb = 200, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade (6x3)
    if (xlinks <= 575 && xlinks >= 525 && ylinks >= 285 && ylinks <= 325) {
    ctx.drawImage(bombe, xbomb = 550, ybomb = 300, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade  (6x4)
    if (xlinks <= 575 && xlinks >= 525 && ylinks >= 385 && ylinks <= 425) {
    ctx.drawImage(bombe, xbomb = 550, ybomb = 400, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade (7x1)
    if (xlinks <= 675 && xlinks >= 625 && ylinks >= 85 && ylinks <= 125) {
    ctx.drawImage(bombe, xbomb = 650, ybomb = 100, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade (7x2)
    if (xlinks <= 675 && xlinks >= 625 && ylinks >= 185 && ylinks <= 225) {
    ctx.drawImage(bombe, xbomb = 650, ybomb = 200, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade (7x3)
    if (xlinks <= 675 && xlinks >= 625 && ylinks >= 285 && ylinks <= 325) {
    ctx.drawImage(bombe, xbomb = 650, ybomb = 300, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade  (7x4)
    if (xlinks <= 675 && xlinks >= 625 && ylinks >= 385 && ylinks <= 425) {
    ctx.drawImage(bombe, xbomb = 650, ybomb = 400, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade (8x1)
    if (xlinks <= 775 && xlinks >= 725 && ylinks >= 85 && ylinks <= 125) {
    ctx.drawImage(bombe, xbomb = 750, ybomb = 100, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade (8x2)
    if (xlinks <= 775 && xlinks >= 725 && ylinks >= 185 && ylinks <= 225) {
    ctx.drawImage(bombe, xbomb = 750, ybomb = 200, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade (8x3)
    if (xlinks <= 775 && xlinks >= 725 && ylinks >= 285 && ylinks <= 325) {
    ctx.drawImage(bombe, xbomb = 750, ybomb = 300, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade  (8x4)
    if (xlinks <= 775 && xlinks >= 725 && ylinks >= 385 && ylinks <= 425) {
    ctx.drawImage(bombe, xbomb = 750, ybomb = 400, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade (9x1)
    if (xlinks <= 875 && xlinks >= 825 && ylinks >= 85 && ylinks <= 125) {
    ctx.drawImage(bombe, xbomb = 850, ybomb = 100, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade (9x2)
    if (xlinks <= 875 && xlinks >= 825 && ylinks >= 185 && ylinks <= 225) {
    ctx.drawImage(bombe, xbomb = 850, ybomb = 200, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade (9x3)
    if (xlinks <= 875 && xlinks >= 825 && ylinks >= 285 && ylinks <= 325) {
    ctx.drawImage(bombe, xbomb = 850, ybomb = 300, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //rechts links gerade  (9x4)
    if (xlinks <= 875 && xlinks >= 825 && ylinks >= 385 && ylinks <= 425) {
    ctx.drawImage(bombe, xbomb = 850, ybomb = 400, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }


    //dazwischen oben (1)
    if (ylinks <= 75 && xlinks >= 135 && xlinks <= 185) {
    ctx.drawImage(bombe, xbomb = 150, ybomb = 50, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionDazwischen_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //dazwischen oben (2)
    if (ylinks <= 75 && xlinks >= 235 && xlinks <= 285) {
    ctx.drawImage(bombe, xbomb = 250, ybomb = 50, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionDazwischen_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //dazwischen oben (3)
    if (ylinks <= 75 && xlinks >= 335 && xlinks <= 385) {
    ctx.drawImage(bombe, xbomb = 350, ybomb = 50, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionDazwischen_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //dazwischen oben (4)
    if (ylinks <= 75 && xlinks >= 435 && xlinks <= 485) {
    ctx.drawImage(bombe, xbomb = 450, ybomb = 50, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionDazwischen_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //dazwischen oben (5)
    if (ylinks <= 75 && xlinks >= 535 && xlinks <= 585) {
    ctx.drawImage(bombe, xbomb = 550, ybomb = 50, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionDazwischen_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //dazwischen oben (6)
    if (ylinks <= 75 && xlinks >= 635 && xlinks <= 685) {
    ctx.drawImage(bombe, xbomb = 650, ybomb = 50, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionDazwischen_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }
    //dazwischen oben (7)
    if (ylinks <= 75 && xlinks >= 735 && xlinks <= 785) {
    ctx.drawImage(bombe, xbomb = 750, ybomb = 50, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionDazwischen_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
    }, 3000);
    }

    //dazwischen unten (1)
    if (ylinks >= 435 && xlinks >= 135 && xlinks <= 185) {
    ctx.drawImage(bombe, xbomb = 150, ybomb = 450, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionDazwischenUnten_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
    }, 3000);
    }
    //dazwischen unten (2)
    if (ylinks >= 435 && xlinks >= 235 && xlinks <= 285) {
    ctx.drawImage(bombe, xbomb = 250, ybomb = 450, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionDazwischenUnten_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
    }, 3000);
    }
    //dazwischen unten (3)
    if (ylinks >= 435 && xlinks >= 335 && xlinks <= 385) {
    ctx.drawImage(bombe, xbomb = 350, ybomb = 450, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionDazwischenUnten_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
    }, 3000);
    }
    //dazwischen unten (4)
    if (ylinks >= 435 && xlinks >= 435 && xlinks <= 485) {
    ctx.drawImage(bombe, xbomb = 450, ybomb = 450, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionDazwischenUnten_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
    }, 3000);
    }
    //dazwischen unten (5)
    if (ylinks >= 435 && xlinks >= 535 && xlinks <= 585) {
    ctx.drawImage(bombe, xbomb = 550, ybomb = 450, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionDazwischenUnten_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
    }, 3000);
    }
    //dazwischen unten (6)
    if (ylinks >= 435 && xlinks >= 635 && xlinks <= 685) {
    ctx.drawImage(bombe, xbomb = 650, ybomb = 450, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionDazwischenUnten_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
    }, 3000);
    }
    //dazwischen unten (7)
    if (ylinks >= 435 && xlinks >= 735 && xlinks <= 785) {
    ctx.drawImage(bombe, xbomb = 750, ybomb = 450, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionDazwischenUnten_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
    }, 3000);
    }

    //dazwischen rechts (1)
    if (xlinks >= 835 && ylinks >= 135 && ylinks <= 185) {
    ctx.drawImage(bombe, xbomb = 850, ybomb = 150, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionDazwischenRechts_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
    }, 3000);
    }
    //dazwischen rechts (2)
    if (xlinks >= 835 && ylinks >= 235 && ylinks <= 285) {
    ctx.drawImage(bombe, xbomb = 850, ybomb = 250, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionDazwischenRechts_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
    }, 3000);
    }
    //dazwischen rechts (3)
    if (xlinks >= 835 && ylinks >= 335 && ylinks <= 385) {
    ctx.drawImage(bombe, xbomb = 850, ybomb = 350, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionDazwischenRechts_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
    }, 3000);
    }

    //dazwischen links (1)
    if (xlinks <= 75 && ylinks >= 135 && ylinks <= 185) {
    ctx.drawImage(bombe, xbomb = 50, ybomb = 150, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionDazwischenLinks_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
    }, 3000);
    }
    //dazwischen links (2)
    if (xlinks <= 75 && ylinks >= 235 && ylinks <= 285) {
    ctx.drawImage(bombe, xbomb = 50, ybomb = 250, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionDazwischenLinks_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
    }, 3000);
    }
    //dazwischen links (3)
    if (xlinks <= 75 && ylinks >= 335 && ylinks <= 385) {
    ctx.drawImage(bombe, xbomb = 50, ybomb = 350, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionDazwischenLinks_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
    }, 3000);
    }

    //dazwischen (1x1)
    if (xlinks <= 175 && xlinks >= 135 && ylinks >= 135 && ylinks <= 185) {
    ctx.drawImage(bombe, xbomb = 150, ybomb = 150, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionDazwischenAlle_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
    }, 3000);
    }
    //dazwischen (2x1)
    if (xlinks <= 275 && xlinks >= 235 && ylinks >= 135 && ylinks <= 185) {
    ctx.drawImage(bombe, xbomb = 250, ybomb = 150, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionDazwischenAlle_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
    }, 3000);
    }
    //dazwischen (3x1)
    if (xlinks <= 375 && xlinks >= 335 && ylinks >= 135 && ylinks <= 185) {
    ctx.drawImage(bombe, xbomb = 350, ybomb = 150, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionDazwischenAlle_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
    }, 3000);
    }
    //dazwischen (4x1)
    if (xlinks <= 475 && xlinks >= 435 && ylinks >= 135 && ylinks <= 185) {
    ctx.drawImage(bombe, xbomb = 450, ybomb = 150, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionDazwischenAlle_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
    }, 3000);
    }
    //dazwischen (5x1)
    if (xlinks <= 575 && xlinks >= 535 && ylinks >= 135 && ylinks <= 185) {
    ctx.drawImage(bombe, xbomb = 550, ybomb = 150, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionDazwischenAlle_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
    }, 3000);
    }
    //dazwischen (6x1)
    if (xlinks <= 675 && xlinks >= 635 && ylinks >= 135 && ylinks <= 185) {
    ctx.drawImage(bombe, xbomb = 650, ybomb = 150, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionDazwischenAlle_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
    }, 3000);
    }
    //dazwischen (7x1)
    if (xlinks <= 775 && xlinks >= 735 && ylinks >= 135 && ylinks <= 185) {
    ctx.drawImage(bombe, xbomb = 750, ybomb = 150, 50, 50);

    setTimeout(function() {
      ctx.drawImage(explosionDazwischenAlle_Mitte, xbomb, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Unten, xbomb, ybomb + 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, xbomb + 50, ybomb, 50, 50);
      ctx.drawImage(explosionRechtsLinksGerade_Oben, xbomb, ybomb - 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Links, xbomb - 50, ybomb, 50, 50);
    }, 3000);
    }









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
      } else if (ylinks == 150 && (xlinks >= 261 && xlinks <= 349)) {
        ylinks = 151;
        return;
        // 1.Reihe, 4.Eisblock nach oben blocken
      } else if (ylinks == 150 && (xlinks >= 361 && xlinks <= 449)) {
        ylinks = 151;
        return;
        // 1.Reihe, 5.Eisblock nach oben blocken
      } else if (ylinks == 150 && (xlinks >= 461 && xlinks <= 549)) {
        ylinks = 151;
        return;
        // 1.Reihe, 6.Eisblock nach oben blocken
      } else if (ylinks == 150 && (xlinks >= 561 && xlinks <= 649)) {
        ylinks = 151;
        return;
        // 1.Reihe, 7.Eisblock nach oben blocken
      } else if (ylinks == 150 && (xlinks >= 661 && xlinks <= 749)) {
        ylinks = 151;
        return;
        // 1.Reihe, 8.Eisblock nach oben blocken
      } else if (ylinks == 150 && (xlinks >= 761 && xlinks <= 849)) {
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
      ctx.drawImage(bombe, xrechts, yrechts, 40, 40);
      ctx.drawImage(penguRechts, xrechts, yrechts, 40, 40);
    }
    if(pos == 0) return;

    // Guin läuft nach links
    if(key == 37) {
      if (xrechts == 50){
        xrechts -= 0;
      }
      else {
      xrechts -= 1;
      }
      // 1.Reihe, 1.Eisblock nach links blocken
      if (xrechts == 150 && (yrechts >= 61 && yrechts <= 149)) {
        xrechts = 151;
        return;
        // 1.Reihe, 2.Eisblock nach links blocken
      } else if (xrechts == 250 && (yrechts >= 61 && yrechts <= 149)) {
        xrechts = 251;
        return;
        // 1.Reihe, 3.Eisblock nach links blocken
      } else if (xrechts == 350 && (ylrechts >= 61 && yrechts <= 149)) {
        xrechts = 351;
        return;
        // 1.Reihe, 4.Eisblock nach links blocken
      } else if (xrechts == 450 && (yrechts >= 61 && yrechts <= 149)) {
        xrechts = 451;
        return;
        // 1.Reihe, 5.Eisblock nach links blocken
      } else if (xrechts == 550 && (yrechts >= 61 && yrechts <= 149)) {
        xrechts = 551;
        return;
        // 1.Reihe, 6.Eisblock nach links blocken
      } else if (xrechts == 650 && (yrechts >= 61 && yrechts <= 149)) {
        xrechts = 651;
        return;
        // 1.Reihe, 7.Eisblock nach links blocken
      } else if (xrechts == 750 && (yrechts >= 61 && yrechts <= 149)) {
        xrechts = 751;
        return;
        // 1.Reihe, 8.Eisblock nach links blocken
      } else if (xrechts == 849 && (yrechts >= 61 && yrechts <= 150)) {
        xrechts = 850;
        return;
      }

      // 2.Reihe, 1.Eisblock nach links blocken
      if (xrechts == 150 && (yrechts >= 161 && yrechts <= 249)) {
        xrechts = 151;
        return;
        // 2.Reihe, 2.Eisblock nach links blocken
      } else if (xrechts == 250 && (yrechts >= 161 && yrechts <= 249)) {
        xrechts = 251;
        return;
        // 2.Reihe, 3.Eisblock nach links blocken
      } else if (xrechts == 350 && (yrechts >= 161 && yrechts <= 249)) {
        xrechts = 351;
        return;
        // 2.Reihe, 4.Eisblock nach links blocken
      } else if (xrechts == 450 && (yrechts >= 161 && yrechts <= 249)) {
        xrechts = 451;
        return;
        // 2.Reihe, 5.Eisblock nach links blocken
      } else if (xrechts == 550 && (yrechts >= 161 && yrechts <= 249)) {
        xrechts = 551;
        return;
        // 2.Reihe, 6.Eisblock nach links blocken
      } else if (xrechts == 650 && (yrechts >= 161 && yrechts <= 249)) {
        xrechts = 651;
        return;
        // 2.Reihe, 7.Eisblock nach links blocken
      } else if (xrechts == 750 && (yrechts >= 161 && yrechts <= 249)) {
        xrechts = 751;
        return;
        // 2.Reihe, 8.Eisblock nach links blocken
      } else if (xrechts == 849 && (yrechts >= 161 && yrechts <= 250)) {
        xrechts = 850;
        return;
      }

      // 3.Reihe, 1.Eisblock nach links blocken
      if (xrechts == 150 && (yrechts >= 262 && yrechts <= 349)) {
        xrechts = 151;
        return;
        // 3.Reihe, 2.Eisblock nach links blocken
      } else if (xrechts == 250 && (yrechts >= 262 && yrechts <= 349)) {
        xrechts = 251;
        return;
        // 3.Reihe, 3.Eisblock nach links blocken
      } else if (xrechts == 350 && (yrechts >= 262 && yrechts <= 349)) {
        xrechts = 351;
        return;
        // 3.Reihe, 4.Eisblock nach links blocken
      } else if (xrechts == 450 && (yrechts >= 262 && yrechts <= 349)) {
        xrechts = 451;
        return;
        // 3.Reihe, 5.Eisblock nach links blocken
      } else if (xrechts == 550 && (yrechts >= 262 && yrechts <= 349)) {
        xrechts = 551;
        return;
        // 3.Reihe, 6.Eisblock nach links blocken
      } else if (xrechts == 650 && (yrechts >= 262 && yrechts <= 349)) {
        xrechts = 651;
        return;
        // 3.Reihe, 7.Eisblock nach links blocken
      } else if (xrechts == 750 && (yrechts >= 262 && yrechts <= 349)) {
        xrechts = 751;
        return;
        // 3.Reihe, 8.Eisblock nach links blocken
      } else if (xrechts == 849 && (yrechts >= 262 && yrechts <= 350)) {
        xrechts = 850;
        return;
      }

      // 4.Reihe, 1.Eisblock nach links blocken
      if (xrechts == 150 && (yrechts >= 362 && yrechts <= 449)) {
        xrechts = 151;
        return;
        // 4.Reihe, 2.Eisblock nach links blocken
      } else if (xrechts == 250 && (yrechts >= 362 && yrechts <= 449)) {
        xrechts = 251;
        return;
        // 4.Reihe, 3.Eisblock nach links blocken
      } else if (xrechts == 350 && (yrechts >= 362 && yrechts <= 449)) {
        xrechts = 351;
        return;
        // 4.Reihe, 4.Eisblock nach links blocken
      } else if (xrechts == 450 && (yrechts >= 362 && yrechts <= 449)) {
        xrechts = 451;
        return;
        // 4.Reihe, 5.Eisblock nach links blocken
      } else if (xrechts == 550 && (yrechts >= 362 && yrechts <= 449)) {
        xrechts = 551;
        return;
        // 4.Reihe, 6.Eisblock nach links blocken
      } else if (xrechts == 650 && (yrechts >= 362 && yrechts <= 449)) {
        xrechts = 651;
        return;
        // 4.Reihe, 7.Eisblock nach links blocken
      } else if (xrechts == 750 && (yrechts >= 362 && yrechts <= 449)) {
        xrechts = 751;
        return;
        // 4.Reihe, 8.Eisblock nach links blocken
      } else if (xrechts == 849 && (yrechts >= 362 && yrechts <= 450)) {
        xrechts = 850;
        return;
      }
    }

    // Guin läuft nach oben
    if(key == 38 && y > 50) {
      if (yrechts == 50){
        yrechts -= 0;
      }
      else {
      yrechts -= 1;
      }
      // 1.Reihe, 1.Eisblock nach oben blocken
      if (yrechts == 150 && (xrechts >= 61 && xrechts <= 149)) {
        yrechts = 151;
        return;
        // 1.Reihe, 2.Eisblock nach oben blocken
      } else if (yrechts == 150 && (xrechts >= 161 && xrechts <= 249)) {
        yrechts = 151;
        return;
        // 1.Reihe, 3.Eisblock nach oben blocken
      } else if (yrechts == 150 && (xrechts >= 261 && xrechts <= 349)) {
        yrechts = 151;
        return;
        // 1.Reihe, 4.Eisblock nach oben blocken
      } else if (yrechts == 150 && (xrechts >= 361 && xrechts <= 449)) {
        yrechts = 151;
        return;
        // 1.Reihe, 5.Eisblock nach oben blocken
      } else if (yrechts == 150 && (xrechts >= 461 && xrechts <= 549)) {
        yrechts = 151;
        return;
        // 1.Reihe, 6.Eisblock nach oben blocken
      } else if (yrechts == 150 && (xrechts >= 561 && xrechts <= 649)) {
        yrechts = 151;
        return;
        // 1.Reihe, 7.Eisblock nach oben blocken
      } else if (yrechts == 150 && (xrechts >= 661 && xrechts <= 749)) {
        yrechts = 151;
        return;
        // 1.Reihe, 8.Eisblock nach oben blocken
      } else if (yrechts == 150 && (xrechts >= 761 && xrechts <= 849)) {
        yrechts = 151;
        return;
      }

      // 2.Reihe, 1.Eisblock nach oben blocken
      if (yrechts == 250 && (xrechts >= 61 && xrechts <= 149)) {
        yrechts = 251;
        return;
        // 2.Reihe, 2.Eisblock nach oben blocken
      } else if (yrechts == 250 && (xrechts >= 161 && xrechts <= 249)) {
        yrechts = 251;
        return;
        // 2.Reihe, 3.Eisblock nach oben blocken
      } else if (yrechts == 250 && (xrechts >= 261 && xrechts <= 349)) {
        yrechts = 251;
        return;
        // 2.Reihe, 4.Eisblock nach oben blocken
      } else if (yrechts == 250 && (xrechts >= 361 && xrechts <= 449)) {
        yrechts = 251;
        return;
        // 2.Reihe, 5.Eisblock nach oben blocken
      } else if (yrechts == 250 && (xrechts >= 461 && xrechts <= 549)) {
        yrechts = 251;
        return;
        // 2.Reihe, 6.Eisblock nach oben blocken
      } else if (yrechts == 250 && (xrechts >= 561 && xrechts <= 649)) {
        yrechts = 251;
        return;
        // 2.Reihe, 7.Eisblock nach oben blocken
      } else if (yrechts == 250 && (xrechts >= 661 && xrechts <= 749)) {
        yrechts = 251;
        return;
        // 2.Reihe, 8.Eisblock nach oben blocken
      } else if (yrechts == 250 && (xrechts >= 761 && xrechts <= 849)) {
        yrechts = 251;
        return;
      }

      // 3.Reihe, 1.Eisblock nach oben blocken
      if (yrechts == 350 && (xrechts >= 61 && xrechts <= 149)) {
        yrechts = 351;
        return;
        // 3.Reihe, 2.Eisblock nach oben blocken
      } else if (yrechts == 350 && (xrechts >= 161 && xrechts <= 249)) {
        yrechts = 351;
        return;
        // 3.Reihe, 3.Eisblock nach oben blocken
      } else if (yrechts == 350 && (xrechts >= 261 && xrechts <= 349)) {
        yrechts = 351;
        return;
        // 3.Reihe, 4.Eisblock nach oben blocken
      } else if (yrechts == 350 && (xrechts >= 361 && xrechts <= 449)) {
        yrechts = 351;
        return;
        // 3.Reihe, 5.Eisblock nach oben blocken
      } else if (yrechts == 350 && (xrechts >= 461 && xrechts <= 549)) {
        yrechts = 351;
        return;
        // 3.Reihe, 6.Eisblock nach oben blocken
      } else if (yrechts == 350 && (xrechts >= 561 && xrechts <= 649)) {
        yrechts = 351;
        return;
        // 3.Reihe, 7.Eisblock nach oben blocken
      } else if (yrechts == 350 && (xrechts >= 661 && xrechts <= 749)) {
        yrechts = 351;
        return;
        // 3.Reihe, 8.Eisblock nach oben blocken
      } else if (yrechts == 350 && (xrechts >= 761 && xrechts <= 849)) {
        yrechts = 351;
        return;
      }

      // 4.Reihe, 1.Eisblock nach oben blocken
      if (yrechts == 450 && (xrechts >= 61 && xrechts <= 149)) {
        yrechts = 451;
        return;
        // 4.Reihe, 2.Eisblock nach oben blocken
      } else if (yrechts == 450 && (xrechts >= 161 && xrechts <= 249)) {
        yrechts = 451;
        return;
        // 4.Reihe, 3.Eisblock nach oben blocken
      } else if (yrechts == 450 && (xrechts >= 261 && xrechts <= 349)) {
        yrechts = 451;
        return;
        // 4.Reihe, 4.Eisblock nach oben blocken
      } else if (yrechts == 450 && (xrechts >= 361 && xrechts <= 449)) {
        yrechts = 451;
        return;
        // 4.Reihe, 5.Eisblock nach oben blocken
      } else if (yrechts == 450 && (xrechts >= 461 && xrechts <= 549)) {
        yrechts = 451;
        return;
        // 4.Reihe, 6.Eisblock nach oben blocken
      } else if (yrechts == 450 && (xrechts >= 561 && xrechts <= 649)) {
        yrechts = 451;
        return;
        // 4.Reihe, 7.Eisblock nach oben blocken
      } else if (yrechts == 450 && (xrechts >= 661 && xrechts <= 749)) {
        yrechts = 451;
        return;
        // 4.Reihe, 8.Eisblock nach oben blocken
      } else if (yrechts == 450 && (xrechts >= 761 && xrechts <= 849)) {
        yrechts = 451;
        return;
      }
    }

    // Guin läuft nach rechts
    if(key == 39) {
      if (xrechts == 860){
        xrechts += 0;
      }
      else {
      xrechts += 1;
      }
      // 1.Reihe, 1.Eisblock nach rechts blocken
      if ((xrechts + 50) == 111 && (yrechts >= 61 && yrechts <= 149)) {
        xrechts = 60;
        return;
        // 1.Reihe, 2.Eisblock nach rechts blocken
      } else if ((xrechts + 50) == 211 && (yrechts >= 61 && yrechts <= 149)) {
        xrechts = 160;
        return;
        // 1.Reihe, 3.Eisblock nach rechts blocken
      } else if ((xrechts + 50) == 311 && (yrechts >= 61 && yrechts <= 149)) {
        xrechts = 260;
        return;
        // 1.Reihe, 4.Eisblock nach rechts blocken
      } else if ((xrechts + 50) == 411 && (yrechts >= 61 && yrechts <= 149)) {
        xrechts = 360;
        return;
        // 1.Reihe, 5.Eisblock nach rechts blocken
      } else if ((xrechts + 50) == 511 && (yrechts >= 61 && yrechts <= 149)) {
        xrechts = 460;
        return;
        // 1.Reihe, 6.Eisblock nach rechts blocken
      } else if ((xrechts + 50) == 611 && (yrechts >= 61 && yrechts <= 149)) {
        xrechts = 560;
        return;
        // 1.Reihe, 7.Eisblock nach rechts blocken
      } else if ((xrechts + 50) == 711 && (yrechts >= 61 && yrechts <= 149)) {
        xrechts = 660;
        return;
        // 1.Reihe, 8.Eisblock nach rechts blocken
      } else if ((xrechts + 50) == 811 && (yrechts >= 61 && yrechts <= 149)) {
        xrechts = 760;
        return;
      }

      // 2.Reihe, 1.Eisblock nach rechts blocken
      if ((xrechts + 50) == 111 && (yrechts >= 161 && yrechts <= 249)) {
        xrechts = 60;
        return;
        // 2.Reihe, 2.Eisblock nach rechts blocken
      } else if ((xrechts + 50) == 211 && (yrechts >= 161 && yrechts <= 249)) {
        xrechts = 160;
        return;
        // 2.Reihe, 3.Eisblock nach rechts blocken
      } else if ((xrechts + 50) == 311 && (yrechts >= 161 && yrechts <= 249)) {
        xrechts = 260;
        return;
        // 2.Reihe, 4.Eisblock nach rechts blocken
      } else if ((xrechts + 50) == 411 && (yrechts >= 161 && yrechts <= 249)) {
        xrechts = 360;
        return;
        // 2.Reihe, 5.Eisblock nach rechts blocken
      } else if ((xrechts + 50) == 511 && (yrechts >= 161 && yrechts <= 249)) {
        xrechts = 460;
        return;
        // 2.Reihe, 6.Eisblock nach rechts blocken
      } else if ((xrechts + 50) == 611 && (yrechts >= 161 && yrechts <= 249)) {
        xrechts = 560;
        return;
        // 2.Reihe, 7.Eisblock nach rechts blocken
      } else if ((xrechts + 50) == 711 && (yrechts >= 161 && yrechts <= 249)) {
        xrechts = 660;
        return;
        // 2.Reihe, 8.Eisblock nach rechts blocken
      } else if ((xrechts + 50) == 811 && (yrechts >= 161 && yrechts <= 249)) {
        xrechts = 760;
        return;
      }

      // 3.Reihe, 1.Eisblock nach rechts blocken
      if ((xrechts + 50) == 111 && (yrechts >= 262 && yrechts <= 349)) {
        xrechts = 60;
        return;
        // 3.Reihe, 2.Eisblock nach rechts blocken
      } else if ((xrechts + 50) == 211 && (yrechts >= 262 && yrechts <= 349)) {
        xrechts = 160;
        return;
        // 3.Reihe, 3.Eisblock nach rechts blocken
      } else if ((xrechts + 50) == 311 && (yrechts >= 262 && yrechts <= 349)) {
        xrechts = 260;
        return;
        // 3.Reihe, 4.Eisblock nach rechts blocken
      } else if ((xrechts + 50) == 411 && (yrechts >= 262 && yrechts <= 349)) {
        xrechts = 360;
        return;
        // 3.Reihe, 5.Eisblock nach rechts blocken
      } else if ((xrechts + 50) == 511 && (yrechts >= 262 && yrechts <= 349)) {
        xrechts = 460;
        return;
        // 3.Reihe, 6.Eisblock nach rechts blocken
      } else if ((xrechts + 50) == 611 && (yrechts >= 262 && yrechts <= 349)) {
        xrechts = 560;
        return;
        // 3.Reihe, 7.Eisblock nach rechts blocken
      } else if ((xrechts + 50) == 711 && (yrechts >= 262 && yrechts <= 349)) {
        xrechts = 660;
        return;
        // 3.Reihe, 8.Eisblock nach rechts blocken
      } else if ((xrechts + 50) == 811 && (yrechts >= 262 && yrechts <= 349)) {
        xrechts = 760;
        return;
      }

      // 4.Reihe, 1.Eisblock nach rechts blocken
      if ((xrechts + 50) == 111 && (yrechts >= 362 && yrechts <= 449)) {
        xrechts = 60;
        return;
        // 4.Reihe, 2.Eisblock nach rechts blocken
      } else if ((xrechts + 50) == 211 && (yrechts >= 362 && yrechts <= 449)) {
        xrechts = 160;
        return;
        // 4.Reihe, 3.Eisblock nach rechts blocken
      } else if ((xrechts + 50) == 311 && (yrechts >= 362 && yrechts <= 449)) {
        xrechts = 260;
        return;
        // 4.Reihe, 4.Eisblock nach rechts blocken
      } else if ((xrechts + 50) == 411 && (yrechts >= 362 && yrechts <= 449)) {
        xrechts = 360;
        return;
        // 4.Reihe, 5.Eisblock nach rechts blocken
      } else if ((xrechts + 50) == 511 && (yrechts >= 362 && yrechts <= 449)) {
        xrechts = 460;
        return;
        // 4.Reihe, 6.Eisblock nach rechts blocken
      } else if ((xrechts + 50) == 611 && (yrechts >= 362 && yrechts <= 449)) {
        xrechts = 560;
        return;
        // 4.Reihe, 7.Eisblock nach rechts blocken
      } else if ((xrechts + 50) == 711 && (yrechts >= 362 && yrechts <= 449)) {
        xrechts = 660;
        return;
        // 4.Reihe, 8.Eisblock nach rechts blocken
      } else if ((xrechts + 50) == 811 && (yrechts >= 362 && yrechts <= 449)) {
        xrechts = 760;
        return;
      }
    }

    // Guin läuft nach unten
    if(key == 40) {
      if (yrechts == 460){
        yrechts += 0;
      }
      else {
      yrechts += 1;
      }
      // 1.Reihe, 1.Eisblock nach unten blocken
      if (yrechts == 61 && (xrechts >= 61 && xrechts <= 149)) {
        yrechts = 60;
        return;
        // 1.Reihe, 2.Eisblock nach unten blocken
      } else if (yrechts == 61 && (xrechts >= 161 && xrechts <= 249)) {
        yrechts = 60;
        return;
        // 1.Reihe, 3.Eisblock nach unten blocken
      } else if (yrechts == 61 && (xrechts >= 261 && xrechts <= 349)) {
        yrechts = 60;
        return;
        // 1.Reihe, 4.Eisblock nach unten blocken
      } else if (yrechts == 61 && (xrechts >= 361 && xrechts <= 449)) {
        yrechts = 60;
        return;
        // 1.Reihe, 5.Eisblock nach unten blocken
      } else if (yrechts == 61 && (xrechts >= 461 && xrechts <= 549)) {
        yrechts = 60;
        return;
        // 1.Reihe, 6.Eisblock nach unten blocken
      } else if (yrechts == 61 && (xrechts >= 561 && xrechts <= 649)) {
        yrechts = 60;
        return;
        // 1.Reihe, 7.Eisblock nach unten blocken
      } else if (yrechts == 61 && (xrechts >= 661 && xrechts <= 749)) {
        yrechts = 60;
        return;
        // 1.Reihe, 8.Eisblock nach unten blocken
      } else if (yrechts == 61 && (xrechts >= 761 && xrechts <= 849)) {
        yrechts = 60;
        return;
      }

      // 2.Reihe, 1.Eisblock nach unten blocken
      if (yrechts == 161 && (xrechts >= 61 && xrechts <= 149)) {
        yrechts = 160;
        return;
        // 2.Reihe, 2.Eisblock nach unten blocken
      } else if (yrechts == 161 && (xrechts >= 161 && xrechts <= 249)) {
        yrechts = 160;
        return;
        // 2.Reihe, 3.Eisblock nach unten blocken
      } else if (yrechts == 161 && (xrechts >= 261 && xrechts <= 349)) {
        yrechts = 160;
        return;
        // 2.Reihe, 4.Eisblock nach unten blocken
      } else if (yrechts == 161 && (xrechts >= 361 && xrechts <= 449)) {
        yrechts = 160;
        return;
        // 2.Reihe, 5.Eisblock nach unten blocken
      } else if (yrechts == 161 && (xrechts >= 461 && xrechts <= 549)) {
        yrechts = 160;
        return;
        // 2.Reihe, 6.Eisblock nach unten blocken
      } else if (yrechts == 161 && (xrechts >= 561 && xrechts <= 649)) {
        yrechts = 160;
        return;
        // 2.Reihe, 7.Eisblock nach unten blocken
      } else if (yrechts == 161 && (xrechts >= 661 && xrechts <= 749)) {
        yrechts = 160;
        return;
        // 2.Reihe, 8.Eisblock nach unten blocken
      } else if (yrechts == 161 && (xrechts >= 761 && xrechts <= 849)) {
        yrechts = 160;
        return;
      }

      // 3.Reihe, 1.Eisblock nach unten blocken
      if (yrechts == 261 && (xrechts >= 61 && xrechts <= 149)) {
        yrechts = 260;
        return;
        // 3.Reihe, 2.Eisblock nach unten blocken
      } else if (yrechts == 261 && (xrechts >= 161 && xrechts <= 249)) {
        yrechts = 260;
        return;
        // 3.Reihe, 3.Eisblock nach unten blocken
      } else if (yrechts == 261 && (xrechts >= 261 && xrechts <= 349)) {
        yrechts = 260;
        return;
        // 3.Reihe, 4.Eisblock nach unten blocken
      } else if (yrechts == 261 && (xrechts >= 361 && xrechts <= 449)) {
        yrechts = 260;
        return;
        // 3.Reihe, 5.Eisblock nach unten blocken
      } else if (yrechts == 261 && (xrechts >= 461 && xrechts <= 549)) {
        yrechts = 260;
        return;
        // 3.Reihe, 6.Eisblock nach unten blocken
      } else if (yrechts == 261 && (xrechts >= 561 && xrechts <= 649)) {
        yrechts = 260;
        return;
        // 3.Reihe, 7.Eisblock nach unten blocken
      } else if (yrechts == 261 && (xrechts >= 661 && xrechts <= 749)) {
        yrechts = 260;
        return;
        // 3.Reihe, 8.Eisblock nach unten blocken
      } else if (yrechts == 261 && (xrechts >= 761 && xrechts <= 849)) {
        yrechts = 260;
        return;
      }

      // 4.Reihe, 1.Eisblock nach unten blocken
      if (yrechts == 361 && (xrechts >= 61 && xrechts <= 149)) {
        yrechts = 360;
        return;
        // 4.Reihe, 2.Eisblock nach unten blocken
      } else if (yrechts == 361 && (xrechts >= 161 && xrechts <= 249)) {
        yrechts = 360;
        return;
        // 4.Reihe, 3.Eisblock nach unten blocken
      } else if (yrechts == 361 && (xrechts >= 261 && xrechts <= 349)) {
        yrechts = 360;
        return;
        // 4.Reihe, 4.Eisblock nach unten blocken
      } else if (yrechts == 361 && (xrechts >= 361 && xrechts <= 449)) {
        yrechts = 360;
        return;
        // 4.Reihe, 5.Eisblock nach unten blocken
      } else if (yrechts == 361 && (xrechts >= 461 && xrechts <= 549)) {
        yrechts = 360;
        return;
        // 4.Reihe, 6.Eisblock nach unten blocken
      } else if (yrechts == 361 && (xrechts >= 561 && xrechts <= 649)) {
        yrechts = 360;
        return;
        // 4.Reihe, 7.Eisblock nach unten blocken
      } else if (yrechts == 361 && (xrechts >= 661 && xrechts <= 749)) {
        yrechts = 360;
        return;
        // 4.Reihe, 8.Eisblock nach unten blocken
      } else if (yrechts == 361 && (xrechts >= 761 && xrechts <= 849)) {
        yrechts = 360;
        return;
      }
    }

    ctx.drawImage(penguRechts, xrechts, yrechts, 40, 40);
  }, 15);
  }
