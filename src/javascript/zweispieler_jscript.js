
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

  var zweispieler = new Image();
  zweispieler.src = 'images/zweispielerModus.jpg';
  ctx.drawImage(zweispieler, 350, 550, 250, 50);


 // urs
 // var bgBlau = ctx.getImageData(51, 51, 1, 40);

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
  //überdeckung
  var lightblueBackground = new Image();
  //K.O
  var kO = new Image();



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
  //ueberdeckung
  lightblueBackground.src = 'images/lightblueBackground.jpg';
  //K.O
  kO.src = 'images/KO.jpg';


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
      var functionBCompleted = false;

      setTimeout(function () {
        ctx.drawImage(explosionUntenLinks_Ecke, 50, 450, 50, 50);
        ctx.drawImage(explosionUntenLinks_Rechts, 100, 450, 50, 50);
        ctx.drawImage(explosionUntenLinks_Oben, 50, 400, 50, 50);
        return functionBCompleted = true;
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 50 && xlinks <= 150 && ylinks >= 360) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 50, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 100, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 400, 50, 50);
        }, 1);
        }
      }, 2500);
      }

    //oben links
    if (ylinks <= 75 && xlinks <= 75) {
    ctx.drawImage(bombe, xbomb = 50, ybomb = 50, 50, 50);
    var functionBCompleted = false;

    setTimeout(function() {
      ctx.drawImage(explosionObenLinks_Ecke, 50, 50, 50, 50);
      ctx.drawImage(explosionObenLinks_Rechts, 100, 50, 50, 50);
      ctx.drawImage(explosionObenLinks_Unten, 50, 100, 50, 50);
      return functionBCompleted = true;
    }, 2000);
    setTimeout(function() {
      if ((functionBCompleted = true) && xlinks <= 150 && ylinks <= 160) {
        ctx.drawImage(kO, 50, 50, 850, 450);
      } else {
      setTimeout(function() {
      ctx.drawImage(lightblueBackground, 50, 50, 50, 50);
      ctx.drawImage(lightblueBackground, 100, 50, 50, 50);
      ctx.drawImage(lightblueBackground, 50, 100, 50, 50);
      }, 1);
      }
    }, 2300);
    }
    //oben rechts
    if (ylinks <= 75 && xlinks >= 835) {
    ctx.drawImage(bombe, xbomb = 850, ybomb = 50, 50, 50);
    var functionBCompleted = false;

    setTimeout(function() {
      ctx.drawImage(explosionObenRechts_Ecke, 850, 50, 50, 50);
      ctx.drawImage(explosionObenRechts_Links, 800, 50, 50, 50);
      ctx.drawImage(explosionObenRechts_Unten, 850, 100, 50, 50);
      return functionBCompleted = true;
    }, 2000);
    setTimeout(function() {
      if ((functionBCompleted = true) && xlinks >= 760 && ylinks <= 160) {
        ctx.drawImage(kO, 50, 50, 850, 450);
      } else {
      setTimeout(function() {
      ctx.drawImage(lightblueBackground, 850, 50, 50, 50);
      ctx.drawImage(lightblueBackground, 800, 50, 50, 50);
      ctx.drawImage(lightblueBackground, 850, 100, 50, 50);
      }, 1);
      }
    }, 2300);
    }
    //unten rechts
    if (ylinks >= 435 && xlinks >= 835) {
    ctx.drawImage(bombe, xbomb = 850, ybomb = 450, 50, 50);
    var functionBCompleted = false;

    setTimeout(function() {
      ctx.drawImage(explosionUntenRechts_Ecke, 850, 450, 50, 50);
      ctx.drawImage(explosionUntenRechts_Links, 800, 450, 50, 50);
      ctx.drawImage(explosionUntenRechts_Oben, 850, 400, 50, 50);
      return functionBCompleted = true;
    }, 2000);
    setTimeout(function() {
      if ((functionBCompleted = true) && xlinks >= 760 && ylinks >= 360) {
        ctx.drawImage(kO, 50, 50, 850, 450);
      } else {
      setTimeout(function() {
      ctx.drawImage(lightblueBackground, 850, 450, 50, 50);
      ctx.drawImage(lightblueBackground, 800, 450, 50, 50);
      ctx.drawImage(lightblueBackground, 850, 400, 50, 50);
      }, 1);
      }
    }, 2300);
    }


    //unten oben gerade  oben (1x1)
    if (ylinks <= 75 && xlinks >= 80 && xlinks <= 125) {
    ctx.drawImage(bombe, xbomb = 100, ybomb = 50, 50, 50);
    var functionBCompleted = false;

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, 50, 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, 100, 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, 150, 50, 50, 50);
    }, 2000);
    setTimeout(function() {
      if ((functionBCompleted = true) && xlinks >= 50 && xlinks <= 190 && ylinks <= 100) {
        ctx.drawImage(kO, 50, 50, 850, 450);
      } else {
      setTimeout(function() {
      ctx.drawImage(lightblueBackground, 50, 50, 50, 50);
      ctx.drawImage(lightblueBackground, 100, 50, 50, 50);
      ctx.drawImage(lightblueBackground, 150, 50, 50, 50);
      }, 1);
      }
    }, 2300);
    }
    //unten oben gerade - oben (2x1)
    if (ylinks <= 75 && xlinks >= 180 && xlinks <= 225) {
    ctx.drawImage(bombe, xbomb = 200, ybomb = 50, 50, 50);
    var functionBCompleted = false;

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, 150, 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, 200, 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, 250, 50, 50, 50);
    }, 2000);
    setTimeout(function() {
      if ((functionBCompleted = true) && xlinks >= 110 && xlinks <= 290 && ylinks <= 100) {
        ctx.drawImage(kO, 50, 50, 850, 450);
      } else {
      setTimeout(function() {
      ctx.drawImage(lightblueBackground, 150, 50, 50, 50);
      ctx.drawImage(lightblueBackground, 200, 50, 50, 50);
      ctx.drawImage(lightblueBackground, 250, 50, 50, 50);
      }, 1);
      }
    }, 2300);
    }
    //unten oben gerade - oben (3x1)
    if (ylinks <= 75 && xlinks >= 280 && xlinks <= 325) {
    ctx.drawImage(bombe, xbomb = 300, ybomb = 50, 50, 50);
    var functionBCompleted = false;

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, 250, 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, 300, 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, 350, 50, 50, 50);
    }, 2000);
    setTimeout(function() {
      if ((functionBCompleted = true) && xlinks >= 210 && xlinks <= 390 && ylinks <= 100) {
        ctx.drawImage(kO, 50, 50, 850, 450);
      } else {
      setTimeout(function() {
      ctx.drawImage(lightblueBackground, 250, 50, 50, 50);
      ctx.drawImage(lightblueBackground, 300, 50, 50, 50);
      ctx.drawImage(lightblueBackground, 350, 50, 50, 50);
      }, 1);
      }
    }, 2300);
    }
    //unten oben gerade - oben (4x1)
    if (ylinks <= 75 && xlinks >= 380 && xlinks <= 425) {
    ctx.drawImage(bombe, xbomb = 400, ybomb = 50, 50, 50);
    var functionBCompleted = false;

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, 350,  50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, 400,  50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, 450,  50, 50, 50);
    }, 2000);
    setTimeout(function() {
      if ((functionBCompleted = true) && xlinks >= 310 && xlinks <= 490 && ylinks <= 100) {
        ctx.drawImage(kO, 50, 50, 850, 450);
      } else {
      setTimeout(function() {
      ctx.drawImage(lightblueBackground, 350,  50, 50, 50);
      ctx.drawImage(lightblueBackground, 400,  50, 50, 50);
      ctx.drawImage(lightblueBackground, 450,  50, 50, 50);
      }, 1);
      }
    }, 2300);
    }
    //unten oben gerade - oben (5x1)
    if (ylinks <= 75 && xlinks >= 480 && xlinks <= 525) {
    ctx.drawImage(bombe, xbomb = 500, ybomb = 50, 50, 50);
    var functionBCompleted = false;

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, 450,  50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, 500,  50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, 550,  50, 50, 50);
    }, 2000);
    setTimeout(function() {
      if ((functionBCompleted = true) && xlinks >= 410 && xlinks <= 590 && ylinks <= 100) {
        ctx.drawImage(kO, 50, 50, 850, 450);
      } else {
      setTimeout(function() {
      ctx.drawImage(lightblueBackground, 450,  50, 50, 50);
      ctx.drawImage(lightblueBackground, 500,  50, 50, 50);
      ctx.drawImage(lightblueBackground, 550,  50, 50, 50);
      }, 1);
      }
    }, 2300);
    }
    //unten oben gerade - oben (6x1)
    if (ylinks <= 75 && xlinks >= 580 && xlinks <= 625) {
    ctx.drawImage(bombe, xbomb = 600, ybomb = 50, 50, 50);
    var functionBCompleted = false;

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, 550, 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, 600, 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, 650, 50, 50, 50);
    }, 2000);
    setTimeout(function() {
      if ((functionBCompleted = true) && xlinks >= 510 && xlinks <= 690 && ylinks <= 100) {
        ctx.drawImage(kO, 50, 50, 850, 450);
      } else {
      setTimeout(function() {
      ctx.drawImage(lightblueBackground, 550, 50, 50, 50);
      ctx.drawImage(lightblueBackground, 600, 50, 50, 50);
      ctx.drawImage(lightblueBackground, 650, 50, 50, 50);
      }, 1);
      }
    }, 2300);
    }
    //unten oben gerade - oben (7x1)
    if (ylinks <= 75 && xlinks >= 680 && xlinks <= 725) {
    ctx.drawImage(bombe, xbomb = 700, ybomb = 50, 50, 50);
    var functionBCompleted = false;

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, 650, 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, 700, 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, 750, 50, 50, 50);
    }, 2000);
    setTimeout(function() {
      if ((functionBCompleted = true) && xlinks >= 610 && xlinks <= 790 && ylinks <= 100) {
        ctx.drawImage(kO, 50, 50, 850, 450);
      } else {
      setTimeout(function() {
      ctx.drawImage(lightblueBackground, 650, 50, 50, 50);
      ctx.drawImage(lightblueBackground, 700, 50, 50, 50);
      ctx.drawImage(lightblueBackground, 750, 50, 50, 50);
      }, 1);
      }
    }, 2300);
    }
    //unten oben gerade  oben (8x1)
    if (ylinks <= 75 && xlinks >= 780 && xlinks <= 835) {
      ctx.drawImage(bombe, xbomb = 800, ybomb = 50, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 750, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 800, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 850, 50, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 710 && xlinks <= 890 && ylinks <= 100) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 750, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 800, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 50, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade  (1x2)
      if (ylinks <= 175 && ylinks >= 125 && xlinks >= 80 && xlinks <= 125) {
      ctx.drawImage(bombe, xbomb = 100, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 50, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 100, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 150, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 50 && xlinks <= 190 && ylinks >=  150 && ylinks <= 200) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 50, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 100, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (2x2)
      if (ylinks <= 175 && ylinks >= 125 && xlinks >= 180 && xlinks <= 225) {
      ctx.drawImage(bombe, xbomb = 200, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 150, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 200, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 250, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 150 && xlinks <= 290 && ylinks >=  150 && ylinks <= 200) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 150, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 200, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (3x2)
      if (ylinks <= 175 && ylinks >= 125 && xlinks >= 280 && xlinks <= 325) {
      ctx.drawImage(bombe, xbomb = 300, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 250, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 300, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 350, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 250 && xlinks <= 390 && ylinks >=  150 && ylinks <= 200) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 250, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 300, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (4x2)
      if (ylinks <= 175 && ylinks >= 125 && xlinks >= 380 && xlinks <= 425) {
      ctx.drawImage(bombe, xbomb = 400, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 350, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 400, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 450, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 350 && xlinks <= 490 && ylinks >=  150 && ylinks <= 200) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 350, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 400, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (5x2)
      if (ylinks <= 175 && ylinks >= 125 && xlinks >= 480 && xlinks <= 525) {
      ctx.drawImage(bombe, xbomb = 500, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 450, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 500, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 550, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 450 && xlinks <= 590 && ylinks >=  150 && ylinks <= 200) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 450, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 500, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (6x2)
      if (ylinks <= 175 && ylinks >= 125 && xlinks >= 580 && xlinks <= 625) {
      ctx.drawImage(bombe, xbomb = 600, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 550, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 600, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 650, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 550 && xlinks <= 690 && ylinks >=  150 && ylinks <= 200) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 550, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 600, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (7x2)
      if (ylinks <= 175 && ylinks >= 125 && xlinks >= 680 && xlinks <= 725) {
      ctx.drawImage(bombe, xbomb = 700, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 650, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 700, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 750, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 650 && xlinks <= 790 && ylinks >=  150 && ylinks <= 200) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 650, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 700, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (8x2)
      if (ylinks <= 175 && ylinks >= 125 && xlinks >= 780 && xlinks <= 835) {
      ctx.drawImage(bombe, xbomb = 800, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 750, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 800, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 850, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 750 && xlinks <= 890 && ylinks >=  150 && ylinks <= 200) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 750, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 800, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade  (1x3)
      if (ylinks <= 275 && ylinks >= 225 && xlinks >= 80 && xlinks <= 125) {
      ctx.drawImage(bombe, xbomb = 100, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 50, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 100, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 150, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 50 && xlinks <= 190 && ylinks >=  250 && ylinks <= 300) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 50, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 100, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade(2x3)
      if (ylinks <= 275 && ylinks >= 225 && xlinks >= 180 && xlinks <= 225) {
      ctx.drawImage(bombe, xbomb = 200, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 150, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 200, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 250, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 150 && xlinks <= 290 && ylinks >=  250 && ylinks <= 300) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 150, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 200, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (3x3)
      if (ylinks <= 275 && ylinks >= 225 && xlinks >= 280 && xlinks <= 325) {
      ctx.drawImage(bombe, xbomb = 300, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 250, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 300, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 350, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 250 && xlinks <= 390 && ylinks >=  250 && ylinks <= 300) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 250, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 300, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (4x3)
      if (ylinks <= 275 && ylinks >= 225 && xlinks >= 380 && xlinks <= 425) {
      ctx.drawImage(bombe, xbomb = 400, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 350, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 400, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 450, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 350 && xlinks <= 490 && ylinks >=  250 && ylinks <= 300) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 350, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 400, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (5x3)
      if (ylinks <= 275 && ylinks >= 225 && xlinks >= 480 && xlinks <= 525) {
      ctx.drawImage(bombe, xbomb = 500, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 450, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 500, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 550, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 450 && xlinks <= 590 && ylinks >=  250 && ylinks <= 300) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 450, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 500, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (6x3)
      if (ylinks <= 275 && ylinks >= 225 && xlinks >= 580 && xlinks <= 625) {
      ctx.drawImage(bombe, xbomb = 600, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 550, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 600, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 650, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 550 && xlinks <= 690 && ylinks >=  250 && ylinks <= 300) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 550, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 600, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (7x3)
      if (ylinks <= 275 && ylinks >= 225 && xlinks >= 680 && xlinks <= 725) {
      ctx.drawImage(bombe, xbomb = 700, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 650, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 700, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 750, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 650 && xlinks <= 790 && ylinks >=  250 && ylinks <= 300) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 650, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 700, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade  (8x3)
      if (ylinks <= 275 && ylinks >= 225 && xlinks >= 780 && xlinks <= 835) {
      ctx.drawImage(bombe, xbomb = 800, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 750, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 800, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 850, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 750 && xlinks <= 890 && ylinks >=  250 && ylinks <= 300) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 750, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 800, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade  (1x4)
      if (ylinks <= 375 && ylinks >= 325 && xlinks >= 80 && xlinks <= 125) {
      ctx.drawImage(bombe, xbomb = 100, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 50, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 100, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 150, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 50 && xlinks <= 190 && ylinks >=  350 && ylinks <= 400) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 50, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 100, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade(2x4)
      if (ylinks <= 375 && ylinks >= 325 && xlinks >= 180 && xlinks <= 225) {
      ctx.drawImage(bombe, xbomb = 200, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 150, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 200, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 250, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 150 && xlinks <= 290 && ylinks >=  350 && ylinks <= 400) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 150, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 200, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (3x4)
      if (ylinks <= 375 && ylinks >= 325 && xlinks >= 280 && xlinks <= 325) {
      ctx.drawImage(bombe, xbomb = 300, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 250, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 300, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 350, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 250 && xlinks <= 390 && ylinks >=  350 && ylinks <= 400) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 250, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 300, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (4x4)
      if (ylinks <= 375 && ylinks >= 325 && xlinks >= 380 && xlinks <= 425) {
      ctx.drawImage(bombe, xbomb = 400, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 350, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 400, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 450, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 350 && xlinks <= 490 && ylinks >=  350 && ylinks <= 400) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 350, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 400, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (5x4)
      if (ylinks <= 375 && ylinks >= 325 && xlinks >= 480 && xlinks <= 525) {
      ctx.drawImage(bombe, xbomb = 500, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 450, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 500, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 550, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 450 && xlinks <= 590 && ylinks >=  350 && ylinks <= 400) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 450, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 500, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (6x4)
      if (ylinks <= 375 && ylinks >= 325 && xlinks >= 580 && xlinks <= 625) {
      ctx.drawImage(bombe, xbomb = 600, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 550, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 600, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 650, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 550 && xlinks <= 690 && ylinks >=  350 && ylinks <= 400) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 550, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 600, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (7x4)
      if (ylinks <= 375 && ylinks >= 325 && xlinks >= 680 && xlinks <= 725) {
      ctx.drawImage(bombe, xbomb = 700, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 650, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 700, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 750, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 650 && xlinks <= 790 && ylinks >=  350 && ylinks <= 400) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 650, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 700, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade  (8x4)
      if (ylinks <= 375 && ylinks >= 325 && xlinks >= 780 && xlinks <= 835) {
      ctx.drawImage(bombe, xbomb = 800, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 750, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 800, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 850, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 750 && xlinks <= 890 && ylinks >=  350 && ylinks <= 400) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 750, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 800, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade  (1x5)
      if (ylinks >= 435 && xlinks >= 80 && xlinks <= 125) {
      ctx.drawImage(bombe, xbomb = 100, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 50, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 100, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 150, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 50 && xlinks <= 190 && ylinks >=  450) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 50, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 100, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade  (2x5)
      if (ylinks >= 435 && xlinks >= 180 && xlinks <= 225) {
      ctx.drawImage(bombe, xbomb = 200, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 150, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 200, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 250, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 150 && xlinks <= 290 && ylinks >=  450) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 150, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 200, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade  (3x5)
      if (ylinks >= 435 && xlinks >= 280 && xlinks <= 325) {
      ctx.drawImage(bombe, xbomb = 300, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 250, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 300, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 350, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 250 && xlinks <= 390 && ylinks >=  450) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 250, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 300, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade  (4x5)
      if (ylinks >= 435 && xlinks >= 380 && xlinks <= 425) {
      ctx.drawImage(bombe, xbomb = 400, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 350, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 400, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 450, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 350 && xlinks <= 490 && ylinks >=  450) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 350, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 400, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade  (5x5)
      if (ylinks >= 435 && xlinks >= 480 && xlinks <= 525) {
      ctx.drawImage(bombe, xbomb = 500, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 450, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 500, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 550, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 450 && xlinks <= 590 && ylinks >=  450) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 450, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 500, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade  (6x5)
      if (ylinks >= 435 && xlinks >= 580 && xlinks <= 625) {
      ctx.drawImage(bombe, xbomb = 600, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 550, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 600, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 650, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 550 && xlinks <= 690 && ylinks >=  450) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 550, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 600, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade  (7x5)
      if (ylinks >= 435 && xlinks >= 680 && xlinks <= 725) {
      ctx.drawImage(bombe, xbomb = 700, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 650, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 700, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 750, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 650 && xlinks <= 790 && ylinks >=  450) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 650, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 700, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade  (8x5)
      if (ylinks >= 435 && xlinks >= 780 && xlinks <= 825) {
      ctx.drawImage(bombe, xbomb = 800, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 750, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 800, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 850, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 750 && xlinks <= 890 && ylinks >=  450) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 750, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 800, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }


      //rechts links gerade (1x1)
      if (xlinks <= 75 && ylinks >= 85 && ylinks <= 125) {
      ctx.drawImage(bombe, xbomb = 50, ybomb = 100, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 50, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 50, 100, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 50, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 50 && ylinks <= 190 && xlinks <= 100) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 50, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade  (1x2)
      if (xlinks <= 75 && ylinks >= 185 && ylinks <= 225) {
      ctx.drawImage(bombe, xbomb = 50, ybomb = 200, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 50, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 50, 200, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 50, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 150 && ylinks <= 290 && xlinks <= 100) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 50, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade  (1x3)
      if (xlinks <= 75 && ylinks >= 285 && ylinks <= 325) {
      ctx.drawImage(bombe, xbomb = 50, ybomb = 300, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 50, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 50, 300, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 50, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 250 && ylinks <= 390 && xlinks <= 100) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 50, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade  (1x4)
      if (xlinks <= 75 && ylinks >= 385 && ylinks <= 425) {
      ctx.drawImage(bombe, xbomb = 50, ybomb = 400, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 50, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 50, 400, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 50, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 350 && ylinks <= 490 && xlinks <= 100) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 50, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (2x1)
      if (xlinks <= 175 && xlinks >= 125 && ylinks >= 85 && ylinks <= 125) {
      ctx.drawImage(bombe, xbomb = 150, ybomb = 100, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 150, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 150, 100, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 150, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 50 && ylinks <= 190 && xlinks <= 200) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 150, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (2x2)
      if (xlinks <= 175 && xlinks >= 125 && ylinks >= 185 && ylinks <= 225) {
      ctx.drawImage(bombe, xbomb = 150, ybomb = 200, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 150, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 150, 200, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 150, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 150 && ylinks <= 290 && xlinks <= 200) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 150, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (2x3)
      if (xlinks <= 175 && xlinks >= 125 && ylinks >= 285 && ylinks <= 325) {
      ctx.drawImage(bombe, xbomb = 150, ybomb = 300, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 150, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 150, 300, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 150, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 250 && ylinks <= 390 && xlinks <= 200) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 150, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade  (2x4)
      if (xlinks <= 175 && xlinks >= 125 && ylinks >= 385 && ylinks <= 425) {
      ctx.drawImage(bombe, xbomb = 150, ybomb = 400, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 150, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 150, 400, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 150, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 350 && ylinks <= 490 && xlinks <= 200) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 150, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (3x1)
      if (xlinks <= 275 && xlinks >= 225 && ylinks >= 85 && ylinks <= 125) {
      ctx.drawImage(bombe, xbomb = 250, ybomb = 100, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 250, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 250, 100, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 250, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 50 && ylinks <= 190 && xlinks <= 300) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 250, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (3x2)
      if (xlinks <= 275 && xlinks >= 225 && ylinks >= 185 && ylinks <= 225) {
      ctx.drawImage(bombe, xbomb = 250, ybomb = 200, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 250, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 250, 200, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 250, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 150 && ylinks <= 290 && xlinks <= 300) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 250, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (3x3)
      if (xlinks <= 275 && xlinks >= 225 && ylinks >= 285 && ylinks <= 325) {
      ctx.drawImage(bombe, xbomb = 250, ybomb = 300, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 250, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 250, 300, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 250, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 250 && ylinks <= 390 && xlinks <= 300) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 250, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade  (3x4)
      if (xlinks <= 275 && xlinks >= 225 && ylinks >= 385 && ylinks <= 425) {
      ctx.drawImage(bombe, xbomb = 250, ybomb = 400, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 250, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 250, 400, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 250, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 350 && ylinks <= 490 && xlinks <= 300) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 250, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (4x1)
      if (xlinks <= 375 && xlinks >= 325 && ylinks >= 85 && ylinks <= 125) {
      ctx.drawImage(bombe, xbomb = 350, ybomb = 100, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 350, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 350, 100, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 350, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 50 && ylinks <= 190 && xlinks <= 400) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 350, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (4x2)
      if (xlinks <= 375 && xlinks >= 325 && ylinks >= 185 && ylinks <= 225) {
      ctx.drawImage(bombe, xbomb = 350, ybomb = 200, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 350, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 350, 200, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 350, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 150 && ylinks <= 290 && xlinks <= 400) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 350, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (4x3)
      if (xlinks <= 375 && xlinks >= 325 && ylinks >= 285 && ylinks <= 325) {
      ctx.drawImage(bombe, xbomb = 350, ybomb = 300, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 350, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 350, 300, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 350, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 250 && ylinks <= 390 && xlinks <= 400) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 350, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade  (4x4)
      if (xlinks <= 375 && xlinks >= 325 && ylinks >= 385 && ylinks <= 425) {
      ctx.drawImage(bombe, xbomb = 350, ybomb = 400, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 350, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 350, 400, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 350, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 350 && ylinks <= 490 && xlinks <= 400) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 350, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (5x1)
      if (xlinks <= 475 && xlinks >= 425 && ylinks >= 85 && ylinks <= 125) {
      ctx.drawImage(bombe, xbomb = 450, ybomb = 100, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 450, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 450, 100, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 450, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 50 && ylinks <= 190 && xlinks <= 500) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 450, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (5x2)
      if (xlinks <= 475 && xlinks >= 425 && ylinks >= 185 && ylinks <= 225) {
      ctx.drawImage(bombe, xbomb = 450, ybomb = 200, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 450, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 450, 200, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 450, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 150 && ylinks <= 290 && xlinks <= 500) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 450, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (5x3)
      if (xlinks <= 475 && xlinks >= 425 && ylinks >= 285 && ylinks <= 325) {
      ctx.drawImage(bombe, xbomb = 450, ybomb = 300, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 450, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 450, 300, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 450, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 250 && ylinks <= 390 && xlinks <= 500) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 450, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade  (5x4)
      if (xlinks <= 475 && xlinks >= 425 && ylinks >= 385 && ylinks <= 425) {
      ctx.drawImage(bombe, xbomb = 450, ybomb = 400, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 450, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 450, 400, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 450, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 350 && ylinks <= 490 && xlinks <= 500) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 450, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (6x1)
      if (xlinks <= 575 && xlinks >= 525 && ylinks >= 85 && ylinks <= 125) {
      ctx.drawImage(bombe, xbomb = 550, ybomb = 100, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 550, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 550, 100, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 550, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 50 && ylinks <= 190 && xlinks <= 600) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 550, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (6x2)
      if (xlinks <= 575 && xlinks >= 525 && ylinks >= 185 && ylinks <= 225) {
      ctx.drawImage(bombe, xbomb = 550, ybomb = 200, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 550, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 550, 200, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 550, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 150 && ylinks <= 290 && xlinks <= 600) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 550, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 250, 50, 50);
      }, 1);
      }
    }, 2300);
    }
      //rechts links gerade (6x3)
      if (xlinks <= 575 && xlinks >= 525 && ylinks >= 285 && ylinks <= 325) {
      ctx.drawImage(bombe, xbomb = 550, ybomb = 300, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 550, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 550, 300, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 550, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 250 && ylinks <= 390 && xlinks <= 600) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 550, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade  (6x4)
      if (xlinks <= 575 && xlinks >= 525 && ylinks >= 385 && ylinks <= 425) {
      ctx.drawImage(bombe, xbomb = 550, ybomb = 400, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 550, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 550, 400, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 550, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 350 && ylinks <= 490 && xlinks <= 600) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 550, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (7x1)
      if (xlinks <= 675 && xlinks >= 625 && ylinks >= 85 && ylinks <= 125) {
      ctx.drawImage(bombe, xbomb = 650, ybomb = 100, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 650, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 650, 100, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 650, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 50 && ylinks <= 190 && xlinks <= 700) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 650, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (7x2)
      if (xlinks <= 675 && xlinks >= 625 && ylinks >= 185 && ylinks <= 225) {
      ctx.drawImage(bombe, xbomb = 650, ybomb = 200, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 650, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 650, 200, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 650, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 150 && ylinks <= 290 && xlinks <= 700) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 650, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (7x3)
      if (xlinks <= 675 && xlinks >= 625 && ylinks >= 285 && ylinks <= 325) {
      ctx.drawImage(bombe, xbomb = 650, ybomb = 300, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 650, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 650, 300, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 650, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 250 && ylinks <= 390 && xlinks <= 700) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 650, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade  (7x4)
      if (xlinks <= 675 && xlinks >= 625 && ylinks >= 385 && ylinks <= 425) {
      ctx.drawImage(bombe, xbomb = 650, ybomb = 400, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 650, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 650, 400, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 650, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 350 && ylinks <= 490 && xlinks <= 700) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 650, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (8x1)
      if (xlinks <= 775 && xlinks >= 725 && ylinks >= 85 && ylinks <= 125) {
      ctx.drawImage(bombe, xbomb = 750, ybomb = 100, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 750, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 750, 100, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 750, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 50 && ylinks <= 190 && xlinks <= 800) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 750, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (8x2)
      if (xlinks <= 775 && xlinks >= 725 && ylinks >= 185 && ylinks <= 225) {
      ctx.drawImage(bombe, xbomb = 750, ybomb = 200, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 750, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 750, 200, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 750, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 150 && ylinks <= 290 && xlinks <= 800) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 750, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (8x3)
      if (xlinks <= 775 && xlinks >= 725 && ylinks >= 285 && ylinks <= 325) {
      ctx.drawImage(bombe, xbomb = 750, ybomb = 300, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 750, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 750, 300, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 750, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 250 && ylinks <= 390 && xlinks <= 800) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 750, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade  (8x4)
      if (xlinks <= 775 && xlinks >= 725 && ylinks >= 385 && ylinks <= 425) {
      ctx.drawImage(bombe, xbomb = 750, ybomb = 400, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 750, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 750, 400, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 750, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 350 && ylinks <= 490 && xlinks <= 800) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 750, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (9x1)
      if (xlinks <= 875 && xlinks >= 825 && ylinks >= 85 && ylinks <= 125) {
      ctx.drawImage(bombe, xbomb = 850, ybomb = 100, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 850, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 850, 100, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 850, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 50 && ylinks <= 190 && xlinks <= 900) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 850, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (9x2)
      if (xlinks <= 875 && xlinks >= 825 && ylinks >= 185 && ylinks <= 225) {
      ctx.drawImage(bombe, xbomb = 850, ybomb = 200, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 850, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 850, 200, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 850, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 150 && ylinks <= 290 && xlinks <= 900) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 850, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (9x3)
      if (xlinks <= 875 && xlinks >= 825 && ylinks >= 285 && ylinks <= 325) {
      ctx.drawImage(bombe, xbomb = 850, ybomb = 300, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 850, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 850, 300, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 850, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 250 && ylinks <= 390 && xlinks <= 900) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 850, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade  (9x4)
      if (xlinks <= 875 && xlinks >= 825 && ylinks >= 385 && ylinks <= 425) {
      ctx.drawImage(bombe, xbomb = 850, ybomb = 400, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 850, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 850, 400, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 850, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 350 && ylinks <= 490 && xlinks <= 900) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 850, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }


      //dazwischen oben (1)
      if (ylinks <= 75 && xlinks >= 135 && xlinks <= 185) {
      ctx.drawImage(bombe, xbomb = 150, ybomb = 50, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischen_Mitte, 150, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 200, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 100, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 150, 100, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 100 && xlinks <= 240 && ylinks <= 150) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 150, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 200, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 100, 50, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen oben (2)
      if (ylinks <= 75 && xlinks >= 235 && xlinks <= 285) {
      ctx.drawImage(bombe, xbomb = 250, ybomb = 50, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischen_Mitte, 250, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 300, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 200, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 250, 100, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 200 && xlinks <= 340 && ylinks <= 150) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 250, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 300, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 200, 50, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen oben (3)
      if (ylinks <= 75 && xlinks >= 335 && xlinks <= 385) {
      ctx.drawImage(bombe, xbomb = 350, ybomb = 50, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischen_Mitte, 350, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 400, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 300, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 350, 100, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 300 && xlinks <= 440 && ylinks <= 150) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 350, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 400, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 300, 50, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen oben (4)
      if (ylinks <= 75 && xlinks >= 435 && xlinks <= 485) {
      ctx.drawImage(bombe, xbomb = 450, ybomb = 50, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischen_Mitte, 450, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 500, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 400, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 450, 100, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 400 && xlinks <= 540 && ylinks <= 150) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 450, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 500, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 400, 50, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen oben (5)
      if (ylinks <= 75 && xlinks >= 535 && xlinks <= 585) {
      ctx.drawImage(bombe, xbomb = 550, ybomb = 50, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischen_Mitte, 550, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 600, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 500, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 550, 100, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 500 && xlinks <= 640 && ylinks <= 150) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 550, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 600, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 500, 50, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen oben (6)
      if (ylinks <= 75 && xlinks >= 635 && xlinks <= 685) {
      ctx.drawImage(bombe, xbomb = 650, ybomb = 50, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischen_Mitte, 650, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 700, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 600, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 650, 100, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 600 && xlinks <= 740 && ylinks <= 150) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 650, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 700, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 600, 50, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen oben (7)
      if (ylinks <= 75 && xlinks >= 735 && xlinks <= 785) {
      ctx.drawImage(bombe, xbomb = 750, ybomb = 50, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischen_Mitte, 750, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 800, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 700, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 750, 100, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 700 && xlinks <= 840 && ylinks <= 150) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 750, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 800, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 700, 50, 50, 50);
        }, 1);
        }
      }, 2300);
      }

      //dazwischen unten (1)
      if (ylinks >= 435 && xlinks >= 135 && xlinks <= 185) {
      ctx.drawImage(bombe, xbomb = 150, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenUnten_Mitte, 150, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 200, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 100, 450, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 150, 400, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 60 && xlinks <= 250 && ylinks >= 360) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 150, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 200, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 100, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen unten (2)
      if (ylinks >= 435 && xlinks >= 235 && xlinks <= 285) {
      ctx.drawImage(bombe, xbomb = 250, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenUnten_Mitte, 250, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 300, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 200, 450, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 250, 400, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 160 && xlinks <= 350 && ylinks >= 360) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 250, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 300, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 200, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen unten (3)
      if (ylinks >= 435 && xlinks >= 335 && xlinks <= 385) {
      ctx.drawImage(bombe, xbomb = 350, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenUnten_Mitte, 350, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 400, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 300, 450, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 350, 400, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 260 && xlinks <= 450 && ylinks >= 360) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 350, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 400, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 300, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen unten (4)
      if (ylinks >= 435 && xlinks >= 435 && xlinks <= 485) {
      ctx.drawImage(bombe, xbomb = 450, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenUnten_Mitte, 450, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 500, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 400, 450, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 450, 400, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 360 && xlinks <= 550 && ylinks >= 360) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 450, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 500, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 400, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen unten (5)
      if (ylinks >= 435 && xlinks >= 535 && xlinks <= 585) {
      ctx.drawImage(bombe, xbomb = 550, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenUnten_Mitte, 550, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 600, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 500, 450, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 550, 400, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 460 && xlinks <= 650 && ylinks >= 360) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 550, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 600, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 500, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen unten (6)
      if (ylinks >= 435 && xlinks >= 635 && xlinks <= 685) {
      ctx.drawImage(bombe, xbomb = 650, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenUnten_Mitte, 650, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 700, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 600, 450, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 650, 400, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 560 && xlinks <= 750 && ylinks >= 360) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 650, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 700, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 600, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen unten (7)
      if (ylinks >= 435 && xlinks >= 735 && xlinks <= 785) {
      ctx.drawImage(bombe, xbomb = 750, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenUnten_Mitte, 750, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 800, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 700, 450, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 750, 400, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xlinks >= 660 && xlinks <= 850 && ylinks >= 360) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 750, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 800, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 700, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }

      //dazwischen rechts (1)
      if (xlinks >= 835 && ylinks >= 135 && ylinks <= 185) {
      ctx.drawImage(bombe, xbomb = 850, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenRechts_Mitte, 850, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 850, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 800, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 850, 100, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 60 && ylinks <= 250 && xlinks >= 760) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 850, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 800, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen rechts (2)
      if (xlinks >= 835 && ylinks >= 235 && ylinks <= 285) {
      ctx.drawImage(bombe, xbomb = 850, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenRechts_Mitte, 850, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 850, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 800, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 850, 200, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 160 && ylinks <= 350 && xlinks >= 760) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 850, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 800, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen rechts (3)
      if (xlinks >= 835 && ylinks >= 335 && ylinks <= 385) {
      ctx.drawImage(bombe, xbomb = 850, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenRechts_Mitte, 850, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 850, 400, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 800, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 850, 300, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 260 && ylinks <= 450 && xlinks >= 760) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 850, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 800, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }

      //dazwischen links (1)
      if (xlinks <= 75 && ylinks >= 135 && ylinks <= 185) {
      ctx.drawImage(bombe, xbomb = 50, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenLinks_Mitte, 50, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 50, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 100, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 50, 100, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 60 && ylinks <= 250 && xlinks <= 150) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 50, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 100, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen links (2)
      if (xlinks <= 75 && ylinks >= 235 && ylinks <= 285) {
      ctx.drawImage(bombe, xbomb = 50, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenLinks_Mitte, 50, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 50, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 100, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 50, 200, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 160 && ylinks <= 350 && xlinks <= 150) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 50, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 100, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen links (3)
      if (xlinks <= 75 && ylinks >= 335 && ylinks <= 385) {
      ctx.drawImage(bombe, xbomb = 50, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenLinks_Mitte, 50, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 50, 400, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 100, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 50, 300, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 260 && ylinks <= 450 && xlinks <= 150) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 50, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 100, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }


      //dazwischen (1x1)
      if (xlinks <= 175 && xlinks >= 135 && ylinks >= 135 && ylinks <= 185) {
      ctx.drawImage(bombe, xbomb = 150, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 150, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 150, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 200, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 150, 100, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 100, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 60 && ylinks <= 250 && xlinks >= 60 && xlinks <=  250) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 150, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 100, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 200, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (2x1)
      if (xlinks <= 275 && xlinks >= 235 && ylinks >= 135 && ylinks <= 185) {
      ctx.drawImage(bombe, xbomb = 250, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 250, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 250, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 300, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 250, 100, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 200, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 60 && ylinks <= 250 && xlinks >= 160 && xlinks <=  350) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 250, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 200, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 300, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (3x1)
      if (xlinks <= 375 && xlinks >= 335 && ylinks >= 135 && ylinks <= 185) {
      ctx.drawImage(bombe, xbomb = 350, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 350, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 350, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 400, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 350, 100, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 300, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 60 && ylinks <= 250 && xlinks >= 260 && xlinks <=  450) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 350, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 300, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 400, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (4x1)
      if (xlinks <= 475 && xlinks >= 435 && ylinks >= 135 && ylinks <= 185) {
      ctx.drawImage(bombe, xbomb = 450, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 450, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 450, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 500, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 450, 100, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 400, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 60 && ylinks <= 250 && xlinks >= 460 && xlinks <=  550) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 450, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 400, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 500, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (5x1)
      if (xlinks <= 575 && xlinks >= 535 && ylinks >= 135 && ylinks <= 185) {
      ctx.drawImage(bombe, xbomb = 550, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 550, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 550, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 600, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 550, 100, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 500, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 60 && ylinks <= 250 && xlinks >= 460 && xlinks <=  650) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 550, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 500, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 600, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (6x1)
      if (xlinks <= 675 && xlinks >= 635 && ylinks >= 135 && ylinks <= 185) {
      ctx.drawImage(bombe, xbomb = 650, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 650, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 650, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 700, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 650, 100, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 600, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 60 && ylinks <= 250 && xlinks >= 560 && xlinks <=  750) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 650, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 600, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 700, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (7x1)
      if (xlinks <= 775 && xlinks >= 735 && ylinks >= 135 && ylinks <= 185) {
      ctx.drawImage(bombe, xbomb = 750, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 750, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 750, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 800, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 750, 100, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 700, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 60 && ylinks <= 250 && xlinks >= 660 && xlinks <=  850) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 750, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 700, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 800, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }


      //dazwischen (1x2)
      if (xlinks <= 175 && xlinks >= 135 && ylinks >= 235 && ylinks <= 285) {
      ctx.drawImage(bombe, xbomb = 150, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 150, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 150, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 200, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 150, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 100, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 160 && ylinks <= 350 && xlinks >= 60 && xlinks <=  250) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 150, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 100, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 200, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (2x2)
      if (xlinks <= 275 && xlinks >= 235 && ylinks >= 235 && ylinks <= 285) {
      ctx.drawImage(bombe, xbomb = 250, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 250, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 250, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 300, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 250, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 200, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 160 && ylinks <= 350 && xlinks >= 160 && xlinks <=  350) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 250, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 200, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 300, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (3x2)
      if (xlinks <= 375 && xlinks >= 335 && ylinks >= 235 && ylinks <= 285) {
      ctx.drawImage(bombe, xbomb = 350, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 350, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 350, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 400, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 350, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 300, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 160 && ylinks <= 350 && xlinks >= 260 && xlinks <=  450) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 350, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 300, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 400, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (4x2)
      if (xlinks <= 475 && xlinks >= 435 && ylinks >= 235 && ylinks <= 285) {
      ctx.drawImage(bombe, xbomb = 450, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 450, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 450, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 500, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 450, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 400, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 160 && ylinks <= 350 && xlinks >= 360 && xlinks <=  550) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 450, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 400, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 500, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (5x2)
      if (xlinks <= 575 && xlinks >= 535 && ylinks >= 235 && ylinks <= 285) {
      ctx.drawImage(bombe, xbomb = 550, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 550, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 550, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 600, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 550, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 500, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 160 && ylinks <= 350 && xlinks >= 460 && xlinks <=  650) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 550, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 500, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 600, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (6x2)
      if (xlinks <= 675 && xlinks >= 635 && ylinks >= 235 && ylinks <= 285) {
      ctx.drawImage(bombe, xbomb = 650, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 650, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 650, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 700, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 650, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 600, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 160 && ylinks <= 350 && xlinks >= 560 && xlinks <=  750) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 650, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 600, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 700, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (7x2)
      if (xlinks <= 775 && xlinks >= 735 && ylinks >= 235 && ylinks <= 285) {
      ctx.drawImage(bombe, xbomb = 750, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 750, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 750, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 800, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 750, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 700, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 160 && ylinks <= 350 && xlinks >= 660 && xlinks <=  850) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 750, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 700, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 800, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }


      //dazwischen (1x3)
      if (xlinks <= 175 && xlinks >= 135 && ylinks >= 335 && ylinks <= 385) {
      ctx.drawImage(bombe, xbomb = 150, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 150, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 150, 400, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 200, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 150, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 100, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 260 && ylinks <= 450 && xlinks >= 60 && xlinks <=  250) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 150, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 100, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 200, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (2x3)
      if (xlinks <= 275 && xlinks >= 235 && ylinks >= 335 && ylinks <= 385) {
      ctx.drawImage(bombe, xbomb = 250, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 250, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 250, 400, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 300, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 250, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 200, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 260 && ylinks <= 450 && xlinks >= 160 && xlinks <=  350) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 250, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 200, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 300, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (3x3)
      if (xlinks <= 375 && xlinks >= 335 && ylinks >= 335 && ylinks <= 385) {
      ctx.drawImage(bombe, xbomb = 350, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 350, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 350, 400, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 400, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 350, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 300, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 260 && ylinks <= 450 && xlinks >= 260 && xlinks <=  450) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 350, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 300, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 400, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (4x3)
      if (xlinks <= 475 && xlinks >= 435 && ylinks >= 335 && ylinks <= 385) {
      ctx.drawImage(bombe, xbomb = 450, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 450, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 450, 400, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 500, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 450, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 400, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 260 && ylinks <= 450 && xlinks >= 360 && xlinks <=  550) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 450, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 4100, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 500, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (5x3)
      if (xlinks <= 575 && xlinks >= 535 && ylinks >= 335 && ylinks <= 385) {
      ctx.drawImage(bombe, xbomb = 550, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 550, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 550, 400, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 600, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 550, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 500, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 260 && ylinks <= 450 && xlinks >= 460 && xlinks <=  650) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 550, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 500, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 600, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (6x3)
      if (xlinks <= 675 && xlinks >= 635 && ylinks >= 335 && ylinks <= 385) {
      ctx.drawImage(bombe, xbomb = 650, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 650, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 650, 400, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 700, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 650, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 600, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 260 && ylinks <= 450 && xlinks >= 560 && xlinks <=  750) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 650, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 600, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 700, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (7x3)
      if (xlinks <= 775 && xlinks >= 735 && ylinks >= 335 && ylinks <= 385) {
      ctx.drawImage(bombe, xbomb = 750, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 750, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 750, 400, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 800, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 750, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 700, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && ylinks >= 260 && ylinks <= 450 && xlinks >= 660 && xlinks <=  850) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 750, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 700, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 800, 350, 50, 50);
        }, 1);
        }
      }, 2300);
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
        // Urs
       //  ctx.putImageData(bgBlau, xlinks, ylinks);
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
      //unten links
      if (yrechts >= 435 && xrechts <= 75) {
      ctx.drawImage(bombe, xbomb = 50, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function () {
        ctx.drawImage(explosionUntenLinks_Ecke, 50, 450, 50, 50);
        ctx.drawImage(explosionUntenLinks_Rechts, 100, 450, 50, 50);
        ctx.drawImage(explosionUntenLinks_Oben, 50, 400, 50, 50);
        return functionBCompleted = true;
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 50 && xrechts <= 150 && yrechts >= 360) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 50, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 100, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 400, 50, 50);
        }, 1);
        }
      }, 2500);
      }

    //oben links
    if (yrechts <= 75 && xrechts <= 75) {
    ctx.drawImage(bombe, xbomb = 50, ybomb = 50, 50, 50);
    var functionBCompleted = false;

    setTimeout(function() {
      ctx.drawImage(explosionObenLinks_Ecke, 50, 50, 50, 50);
      ctx.drawImage(explosionObenLinks_Rechts, 100, 50, 50, 50);
      ctx.drawImage(explosionObenLinks_Unten, 50, 100, 50, 50);
      return functionBCompleted = true;
    }, 2000);
    setTimeout(function() {
      if ((functionBCompleted = true) && xrechts <= 150 && yrechts <= 160) {
        ctx.drawImage(kO, 50, 50, 850, 450);
      } else {
      setTimeout(function() {
      ctx.drawImage(lightblueBackground, 50, 50, 50, 50);
      ctx.drawImage(lightblueBackground, 100, 50, 50, 50);
      ctx.drawImage(lightblueBackground, 50, 100, 50, 50);
      }, 1);
      }
    }, 2300);
    }
    //oben rechts
    if (yrechts <= 75 && xrechts >= 835) {
    ctx.drawImage(bombe, xbomb = 850, ybomb = 50, 50, 50);
    var functionBCompleted = false;

    setTimeout(function() {
      ctx.drawImage(explosionObenRechts_Ecke, 850, 50, 50, 50);
      ctx.drawImage(explosionObenRechts_Links, 800, 50, 50, 50);
      ctx.drawImage(explosionObenRechts_Unten, 850, 100, 50, 50);
      return functionBCompleted = true;
    }, 2000);
    setTimeout(function() {
      if ((functionBCompleted = true) && xrechts >= 760 && yrechts <= 160) {
        ctx.drawImage(kO, 50, 50, 850, 450);
      } else {
      setTimeout(function() {
      ctx.drawImage(lightblueBackground, 850, 50, 50, 50);
      ctx.drawImage(lightblueBackground, 800, 50, 50, 50);
      ctx.drawImage(lightblueBackground, 850, 100, 50, 50);
      }, 1);
      }
    }, 2300);
    }
    //unten rechts
    if (yrechts >= 435 && xrechts >= 835) {
    ctx.drawImage(bombe, xbomb = 850, ybomb = 450, 50, 50);
    var functionBCompleted = false;

    setTimeout(function() {
      ctx.drawImage(explosionUntenRechts_Ecke, 850, 450, 50, 50);
      ctx.drawImage(explosionUntenRechts_Links, 800, 450, 50, 50);
      ctx.drawImage(explosionUntenRechts_Oben, 850, 400, 50, 50);
      return functionBCompleted = true;
    }, 2000);
    setTimeout(function() {
      if ((functionBCompleted = true) && xrechts >= 760 && yrechts >= 360) {
        ctx.drawImage(kO, 50, 50, 850, 450);
      } else {
      setTimeout(function() {
      ctx.drawImage(lightblueBackground, 850, 450, 50, 50);
      ctx.drawImage(lightblueBackground, 800, 450, 50, 50);
      ctx.drawImage(lightblueBackground, 850, 400, 50, 50);
      }, 1);
      }
    }, 2300);
    }


    //unten oben gerade  oben (1x1)
    if (yrechts <= 75 && xrechts >= 80 && xrechts <= 125) {
    ctx.drawImage(bombe, xbomb = 100, ybomb = 50, 50, 50);
    var functionBCompleted = false;

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, 50, 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, 100, 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, 150, 50, 50, 50);
    }, 2000);
    setTimeout(function() {
      if ((functionBCompleted = true) && xrechts >= 50 && xrechts <= 190 && yrechts <= 100) {
        ctx.drawImage(kO, 50, 50, 850, 450);
      } else {
      setTimeout(function() {
      ctx.drawImage(lightblueBackground, 50, 50, 50, 50);
      ctx.drawImage(lightblueBackground, 100, 50, 50, 50);
      ctx.drawImage(lightblueBackground, 150, 50, 50, 50);
      }, 1);
      }
    }, 2300);
    }
    //unten oben gerade - oben (2x1)
    if (yrechts <= 75 && xrechts >= 180 && xrechts <= 225) {
    ctx.drawImage(bombe, xbomb = 200, ybomb = 50, 50, 50);
    var functionBCompleted = false;

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, 150, 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, 200, 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, 250, 50, 50, 50);
    }, 2000);
    setTimeout(function() {
      if ((functionBCompleted = true) && xrechts >= 110 && xrechts <= 290 && yrechts <= 100) {
        ctx.drawImage(kO, 50, 50, 850, 450);
      } else {
      setTimeout(function() {
      ctx.drawImage(lightblueBackground, 150, 50, 50, 50);
      ctx.drawImage(lightblueBackground, 200, 50, 50, 50);
      ctx.drawImage(lightblueBackground, 250, 50, 50, 50);
      }, 1);
      }
    }, 2300);
    }
    //unten oben gerade - oben (3x1)
    if (yrechts <= 75 && xrechts >= 280 && xrechts <= 325) {
    ctx.drawImage(bombe, xbomb = 300, ybomb = 50, 50, 50);
    var functionBCompleted = false;

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, 250, 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, 300, 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, 350, 50, 50, 50);
    }, 2000);
    setTimeout(function() {
      if ((functionBCompleted = true) && xrechts >= 210 && xrechts <= 390 && yrechts <= 100) {
        ctx.drawImage(kO, 50, 50, 850, 450);
      } else {
      setTimeout(function() {
      ctx.drawImage(lightblueBackground, 250, 50, 50, 50);
      ctx.drawImage(lightblueBackground, 300, 50, 50, 50);
      ctx.drawImage(lightblueBackground, 350, 50, 50, 50);
      }, 1);
      }
    }, 2300);
    }
    //unten oben gerade - oben (4x1)
    if (yrechts <= 75 && xrechts >= 380 && xrechts <= 425) {
    ctx.drawImage(bombe, xbomb = 400, ybomb = 50, 50, 50);
    var functionBCompleted = false;

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, 350,  50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, 400,  50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, 450,  50, 50, 50);
    }, 2000);
    setTimeout(function() {
      if ((functionBCompleted = true) && xrechts >= 310 && xrechts <= 490 && yrechts <= 100) {
        ctx.drawImage(kO, 50, 50, 850, 450);
      } else {
      setTimeout(function() {
      ctx.drawImage(lightblueBackground, 350,  50, 50, 50);
      ctx.drawImage(lightblueBackground, 400,  50, 50, 50);
      ctx.drawImage(lightblueBackground, 450,  50, 50, 50);
      }, 1);
      }
    }, 2300);
    }
    //unten oben gerade - oben (5x1)
    if (yrechts <= 75 && xrechts >= 480 && xrechts <= 525) {
    ctx.drawImage(bombe, xbomb = 500, ybomb = 50, 50, 50);
    var functionBCompleted = false;

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, 450,  50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, 500,  50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, 550,  50, 50, 50);
    }, 2000);
    setTimeout(function() {
      if ((functionBCompleted = true) && xrechts >= 410 && xrechts <= 590 && yrechts <= 100) {
        ctx.drawImage(kO, 50, 50, 850, 450);
      } else {
      setTimeout(function() {
      ctx.drawImage(lightblueBackground, 450,  50, 50, 50);
      ctx.drawImage(lightblueBackground, 500,  50, 50, 50);
      ctx.drawImage(lightblueBackground, 550,  50, 50, 50);
      }, 1);
      }
    }, 2300);
    }
    //unten oben gerade - oben (6x1)
    if (yrechts <= 75 && xrechts >= 580 && xrechts <= 625) {
    ctx.drawImage(bombe, xbomb = 600, ybomb = 50, 50, 50);
    var functionBCompleted = false;

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, 550, 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, 600, 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, 650, 50, 50, 50);
    }, 2000);
    setTimeout(function() {
      if ((functionBCompleted = true) && xrechts >= 510 && xrechts <= 690 && yrechts <= 100) {
        ctx.drawImage(kO, 50, 50, 850, 450);
      } else {
      setTimeout(function() {
      ctx.drawImage(lightblueBackground, 550, 50, 50, 50);
      ctx.drawImage(lightblueBackground, 600, 50, 50, 50);
      ctx.drawImage(lightblueBackground, 650, 50, 50, 50);
      }, 1);
      }
    }, 2300);
    }
    //unten oben gerade - oben (7x1)
    if (yrechts <= 75 && xrechts >= 680 && xrechts <= 725) {
    ctx.drawImage(bombe, xbomb = 700, ybomb = 50, 50, 50);
    var functionBCompleted = false;

    setTimeout(function() {
      ctx.drawImage(explosionUntenObenGerade_Links, 650, 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Mitte, 700, 50, 50, 50);
      ctx.drawImage(explosionUntenObenGerade_Rechts, 750, 50, 50, 50);
    }, 2000);
    setTimeout(function() {
      if ((functionBCompleted = true) && xrechts >= 610 && xrechts <= 790 && yrechts <= 100) {
        ctx.drawImage(kO, 50, 50, 850, 450);
      } else {
      setTimeout(function() {
      ctx.drawImage(lightblueBackground, 650, 50, 50, 50);
      ctx.drawImage(lightblueBackground, 700, 50, 50, 50);
      ctx.drawImage(lightblueBackground, 750, 50, 50, 50);
      }, 1);
      }
    }, 2300);
    }
    //unten oben gerade  oben (8x1)
    if (yrechts <= 75 && xrechts >= 780 && xrechts <= 835) {
      ctx.drawImage(bombe, xbomb = 800, ybomb = 50, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 750, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 800, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 850, 50, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 710 && xrechts <= 890 && yrechts <= 100) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 750, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 800, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 50, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade  (1x2)
      if (yrechts <= 175 && yrechts >= 125 && xrechts >= 80 && xrechts <= 125) {
      ctx.drawImage(bombe, xbomb = 100, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 50, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 100, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 150, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 50 && xrechts <= 190 && yrechts >=  150 && yrechts <= 200) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 50, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 100, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (2x2)
      if (yrechts <= 175 && yrechts >= 125 && xrechts >= 180 && xrechts <= 225) {
      ctx.drawImage(bombe, xbomb = 200, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 150, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 200, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 250, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 150 && xrechts <= 290 && yrechts >=  150 && yrechts <= 200) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 150, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 200, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (3x2)
      if (yrechts <= 175 && yrechts >= 125 && xrechts >= 280 && xrechts <= 325) {
      ctx.drawImage(bombe, xbomb = 300, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 250, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 300, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 350, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 250 && xrechts <= 390 && yrechts >=  150 && yrechts <= 200) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 250, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 300, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (4x2)
      if (yrechts <= 175 && yrechts >= 125 && xrechts >= 380 && xrechts <= 425) {
      ctx.drawImage(bombe, xbomb = 400, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 350, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 400, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 450, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 350 && xrechts <= 490 && yrechts >=  150 && yrechts <= 200) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 350, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 400, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (5x2)
      if (yrechts <= 175 && yrechts >= 125 && xrechts >= 480 && xrechts <= 525) {
      ctx.drawImage(bombe, xbomb = 500, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 450, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 500, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 550, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 450 && xrechts <= 590 && yrechts >=  150 && yrechts <= 200) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 450, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 500, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (6x2)
      if (yrechts <= 175 && yrechts >= 125 && xrechts >= 580 && xrechts <= 625) {
      ctx.drawImage(bombe, xbomb = 600, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 550, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 600, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 650, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 550 && xrechts <= 690 && yrechts >=  150 && yrechts <= 200) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 550, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 600, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (7x2)
      if (yrechts <= 175 && yrechts >= 125 && xrechts >= 680 && xrechts <= 725) {
      ctx.drawImage(bombe, xbomb = 700, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 650, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 700, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 750, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 650 && xrechts <= 790 && yrechts >=  150 && yrechts <= 200) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 650, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 700, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (8x2)
      if (yrechts <= 175 && yrechts >= 125 && xrechts >= 780 && xrechts <= 835) {
      ctx.drawImage(bombe, xbomb = 800, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 750, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 800, 150, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 850, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 750 && xrechts <= 890 && yrechts >=  150 && yrechts <= 200) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 750, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 800, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade  (1x3)
      if (yrechts <= 275 && yrechts >= 225 && xrechts >= 80 && xrechts <= 125) {
      ctx.drawImage(bombe, xbomb = 100, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 50, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 100, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 150, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 50 && xrechts <= 190 && yrechts >=  250 && yrechts <= 300) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 50, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 100, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade(2x3)
      if (yrechts <= 275 && yrechts >= 225 && xrechts >= 180 && xrechts <= 225) {
      ctx.drawImage(bombe, xbomb = 200, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 150, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 200, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 250, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 150 && xrechts <= 290 && yrechts >=  250 && yrechts <= 300) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 150, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 200, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (3x3)
      if (yrechts <= 275 && yrechts >= 225 && xrechts >= 280 && xrechts <= 325) {
      ctx.drawImage(bombe, xbomb = 300, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 250, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 300, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 350, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 250 && xrechts <= 390 && yrechts >=  250 && yrechts <= 300) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 250, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 300, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (4x3)
      if (yrechts <= 275 && yrechts >= 225 && xrechts >= 380 && xrechts <= 425) {
      ctx.drawImage(bombe, xbomb = 400, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 350, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 400, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 450, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 350 && xrechts <= 490 && yrechts >=  250 && yrechts <= 300) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 350, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 400, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (5x3)
      if (yrechts <= 275 && yrechts >= 225 && xrechts >= 480 && xrechts <= 525) {
      ctx.drawImage(bombe, xbomb = 500, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 450, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 500, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 550, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 450 && xrechts <= 590 && yrechts >=  250 && yrechts <= 300) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 450, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 500, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (6x3)
      if (yrechts <= 275 && yrechts >= 225 && xrechts >= 580 && xrechts <= 625) {
      ctx.drawImage(bombe, xbomb = 600, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 550, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 600, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 650, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 550 && xrechts <= 690 && yrechts >=  250 && yrechts <= 300) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 550, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 600, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (7x3)
      if (yrechts <= 275 && yrechts >= 225 && xrechts >= 680 && xrechts <= 725) {
      ctx.drawImage(bombe, xbomb = 700, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 650, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 700, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 750, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 650 && xrechts <= 790 && yrechts >=  250 && yrechts <= 300) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 650, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 700, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade  (8x3)
      if (yrechts <= 275 && yrechts >= 225 && xrechts >= 780 && xrechts <= 835) {
      ctx.drawImage(bombe, xbomb = 800, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 750, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 800, 250, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 850, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 750 && xrechts <= 890 && yrechts >=  250 && yrechts <= 300) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 750, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 800, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade  (1x4)
      if (yrechts <= 375 && yrechts >= 325 && xrechts >= 80 && xrechts <= 125) {
      ctx.drawImage(bombe, xbomb = 100, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 50, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 100, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 150, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 50 && xrechts <= 190 && yrechts >=  350 && yrechts <= 400) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 50, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 100, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade(2x4)
      if (yrechts <= 375 && yrechts >= 325 && xrechts >= 180 && xrechts <= 225) {
      ctx.drawImage(bombe, xbomb = 200, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 150, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 200, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 250, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 150 && xrechts <= 290 && yrechts >=  350 && yrechts <= 400) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 150, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 200, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (3x4)
      if (yrechts <= 375 && yrechts >= 325 && xrechts >= 280 && xrechts <= 325) {
      ctx.drawImage(bombe, xbomb = 300, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 250, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 300, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 350, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 250 && xrechts <= 390 && yrechts >=  350 && yrechts <= 400) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 250, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 300, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (4x4)
      if (yrechts <= 375 && yrechts >= 325 && xrechts >= 380 && xrechts <= 425) {
      ctx.drawImage(bombe, xbomb = 400, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 350, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 400, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 450, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 350 && xrechts <= 490 && yrechts >=  350 && yrechts <= 400) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 350, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 400, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (5x4)
      if (yrechts <= 375 && yrechts >= 325 && xrechts >= 480 && xrechts <= 525) {
      ctx.drawImage(bombe, xbomb = 500, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 450, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 500, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 550, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 450 && xrechts <= 590 && yrechts >=  350 && yrechts <= 400) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 450, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 500, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (6x4)
      if (yrechts <= 375 && yrechts >= 325 && xrechts >= 580 && xrechts <= 625) {
      ctx.drawImage(bombe, xbomb = 600, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 550, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 600, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 650, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 550 && xrechts <= 690 && yrechts >=  350 && yrechts <= 400) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 550, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 600, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade (7x4)
      if (yrechts <= 375 && yrechts >= 325 && xrechts >= 680 && xrechts <= 725) {
      ctx.drawImage(bombe, xbomb = 700, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 650, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 700, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 750, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 650 && xrechts <= 790 && yrechts >=  350 && yrechts <= 400) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 650, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 700, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade  (8x4)
      if (yrechts <= 375 && yrechts >= 325 && xrechts >= 780 && xrechts <= 835) {
      ctx.drawImage(bombe, xbomb = 800, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 750, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 800, 350, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 850, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 750 && xrechts <= 890 && yrechts >=  350 && yrechts <= 400) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 750, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 800, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade  (1x5)
      if (yrechts >= 435 && xrechts >= 80 && xrechts <= 125) {
      ctx.drawImage(bombe, xbomb = 100, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 50, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 100, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 150, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 50 && xrechts <= 190 && yrechts >=  450) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 50, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 100, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade  (2x5)
      if (yrechts >= 435 && xrechts >= 180 && xrechts <= 225) {
      ctx.drawImage(bombe, xbomb = 200, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 150, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 200, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 250, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 150 && xrechts <= 290 && yrechts >=  450) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 150, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 200, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade  (3x5)
      if (yrechts >= 435 && xrechts >= 280 && xrechts <= 325) {
      ctx.drawImage(bombe, xbomb = 300, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 250, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 300, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 350, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 250 && xrechts <= 390 && yrechts >=  450) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 250, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 300, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade  (4x5)
      if (yrechts >= 435 && xrechts >= 380 && xrechts <= 425) {
      ctx.drawImage(bombe, xbomb = 400, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 350, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 400, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 450, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 350 && xrechts <= 490 && yrechts >=  450) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 350, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 400, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade  (5x5)
      if (yrechts >= 435 && xrechts >= 480 && xrechts <= 525) {
      ctx.drawImage(bombe, xbomb = 500, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 450, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 500, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 550, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 450 && xrechts <= 590 && yrechts >=  450) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 450, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 500, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade  (6x5)
      if (yrechts >= 435 && xrechts >= 580 && xrechts <= 625) {
      ctx.drawImage(bombe, xbomb = 600, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 550, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 600, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 650, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 550 && xrechts <= 690 && yrechts >=  450) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 550, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 600, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade  (7x5)
      if (yrechts >= 435 && xrechts >= 680 && xrechts <= 725) {
      ctx.drawImage(bombe, xbomb = 700, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 650, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 700, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 750, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 650 && xrechts <= 790 && yrechts >=  450) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 650, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 700, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //unten oben gerade  (8x5)
      if (yrechts >= 435 && xrechts >= 780 && xrechts <= 825) {
      ctx.drawImage(bombe, xbomb = 800, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionUntenObenGerade_Links, 750, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Mitte, 800, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 850, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 750 && xrechts <= 890 && yrechts >=  450) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 750, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 800, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }


      //rechts links gerade (1x1)
      if (xrechts <= 75 && yrechts >= 85 && yrechts <= 125) {
      ctx.drawImage(bombe, xbomb = 50, ybomb = 100, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 50, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 50, 100, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 50, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 50 && yrechts <= 190 && xrechts <= 100) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 50, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade  (1x2)
      if (xrechts <= 75 && yrechts >= 185 && yrechts <= 225) {
      ctx.drawImage(bombe, xbomb = 50, ybomb = 200, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 50, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 50, 200, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 50, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 150 && yrechts <= 290 && xrechts <= 100) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 50, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade  (1x3)
      if (xrechts <= 75 && yrechts >= 285 && yrechts <= 325) {
      ctx.drawImage(bombe, xbomb = 50, ybomb = 300, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 50, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 50, 300, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 50, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 250 && yrechts <= 390 && xrechts <= 100) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 50, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade  (1x4)
      if (xrechts <= 75 && yrechts >= 385 && yrechts <= 425) {
      ctx.drawImage(bombe, xbomb = 50, ybomb = 400, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 50, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 50, 400, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 50, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 350 && yrechts <= 490 && xrechts <= 100) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 50, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (2x1)
      if (xrechts <= 175 && xrechts >= 125 && yrechts >= 85 && yrechts <= 125) {
      ctx.drawImage(bombe, xbomb = 150, ybomb = 100, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 150, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 150, 100, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 150, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 50 && yrechts <= 190 && xrechts <= 200) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 150, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (2x2)
      if (xrechts <= 175 && xrechts >= 125 && yrechts >= 185 && yrechts <= 225) {
      ctx.drawImage(bombe, xbomb = 150, ybomb = 200, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 150, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 150, 200, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 150, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 150 && yrechts <= 290 && xrechts <= 200) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 150, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (2x3)
      if (xrechts <= 175 && xrechts >= 125 && yrechts >= 285 && yrechts <= 325) {
      ctx.drawImage(bombe, xbomb = 150, ybomb = 300, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 150, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 150, 300, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 150, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 250 && yrechts <= 390 && xrechts <= 200) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 150, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade  (2x4)
      if (xrechts <= 175 && xrechts >= 125 && yrechts >= 385 && yrechts <= 425) {
      ctx.drawImage(bombe, xbomb = 150, ybomb = 400, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 150, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 150, 400, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 150, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 350 && yrechts <= 490 && xrechts <= 200) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 150, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (3x1)
      if (xrechts <= 275 && xrechts >= 225 && yrechts >= 85 && yrechts <= 125) {
      ctx.drawImage(bombe, xbomb = 250, ybomb = 100, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 250, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 250, 100, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 250, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 50 && yrechts <= 190 && xrechts <= 300) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 250, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (3x2)
      if (xrechts <= 275 && xrechts >= 225 && yrechts >= 185 && yrechts <= 225) {
      ctx.drawImage(bombe, xbomb = 250, ybomb = 200, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 250, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 250, 200, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 250, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 150 && yrechts <= 290 && xrechts <= 300) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 250, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (3x3)
      if (xrechts <= 275 && xrechts >= 225 && yrechts >= 285 && yrechts <= 325) {
      ctx.drawImage(bombe, xbomb = 250, ybomb = 300, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 250, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 250, 300, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 250, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 250 && yrechts <= 390 && xrechts <= 300) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 250, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade  (3x4)
      if (xrechts <= 275 && xrechts >= 225 && yrechts >= 385 && yrechts <= 425) {
      ctx.drawImage(bombe, xbomb = 250, ybomb = 400, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 250, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 250, 400, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 250, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 350 && yrechts <= 490 && xrechts <= 300) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 250, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (4x1)
      if (xrechts <= 375 && xrechts >= 325 && yrechts >= 85 && yrechts <= 125) {
      ctx.drawImage(bombe, xbomb = 350, ybomb = 100, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 350, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 350, 100, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 350, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 50 && yrechts <= 190 && xrechts <= 400) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 350, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (4x2)
      if (xrechts <= 375 && xrechts >= 325 && yrechts >= 185 && yrechts <= 225) {
      ctx.drawImage(bombe, xbomb = 350, ybomb = 200, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 350, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 350, 200, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 350, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 150 && yrechts <= 290 && xrechts <= 400) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 350, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (4x3)
      if (xrechts <= 375 && xrechts >= 325 && yrechts >= 285 && yrechts <= 325) {
      ctx.drawImage(bombe, xbomb = 350, ybomb = 300, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 350, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 350, 300, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 350, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 250 && yrechts <= 390 && xrechts <= 400) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 350, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade  (4x4)
      if (xrechts <= 375 && xrechts >= 325 && yrechts >= 385 && yrechts <= 425) {
      ctx.drawImage(bombe, xbomb = 350, ybomb = 400, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 350, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 350, 400, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 350, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 350 && yrechts <= 490 && xrechts <= 400) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 350, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (5x1)
      if (xrechts <= 475 && xrechts >= 425 && yrechts >= 85 && yrechts <= 125) {
      ctx.drawImage(bombe, xbomb = 450, ybomb = 100, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 450, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 450, 100, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 450, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 50 && yrechts <= 190 && xrechts <= 500) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 450, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (5x2)
      if (xrechts <= 475 && xrechts >= 425 && yrechts >= 185 && yrechts <= 225) {
      ctx.drawImage(bombe, xbomb = 450, ybomb = 200, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 450, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 450, 200, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 450, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 150 && yrechts <= 290 && xrechts <= 500) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 450, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (5x3)
      if (xrechts <= 475 && xrechts >= 425 && yrechts >= 285 && yrechts <= 325) {
      ctx.drawImage(bombe, xbomb = 450, ybomb = 300, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 450, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 450, 300, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 450, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 250 && yrechts <= 390 && xrechts <= 500) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 450, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade  (5x4)
      if (xrechts <= 475 && xrechts >= 425 && yrechts >= 385 && yrechts <= 425) {
      ctx.drawImage(bombe, xbomb = 450, ybomb = 400, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 450, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 450, 400, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 450, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 350 && yrechts <= 490 && xrechts <= 500) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 450, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (6x1)
      if (xrechts <= 575 && xrechts >= 525 && yrechts >= 85 && yrechts <= 125) {
      ctx.drawImage(bombe, xbomb = 550, ybomb = 100, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 550, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 550, 100, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 550, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 50 && yrechts <= 190 && xrechts <= 600) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 550, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (6x2)
      if (xrechts <= 575 && xrechts >= 525 && yrechts >= 185 && yrechts <= 225) {
      ctx.drawImage(bombe, xbomb = 550, ybomb = 200, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 550, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 550, 200, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 550, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 150 && yrechts <= 290 && xrechts <= 600) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 550, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 250, 50, 50);
      }, 1);
      }
    }, 2300);
    }
      //rechts links gerade (6x3)
      if (xrechts <= 575 && xrechts >= 525 && yrechts >= 285 && yrechts <= 325) {
      ctx.drawImage(bombe, xbomb = 550, ybomb = 300, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 550, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 550, 300, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 550, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 250 && yrechts <= 390 && xrechts <= 600) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 550, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade  (6x4)
      if (xrechts <= 575 && xrechts >= 525 && yrechts >= 385 && yrechts <= 425) {
      ctx.drawImage(bombe, xbomb = 550, ybomb = 400, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 550, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 550, 400, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 550, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 350 && yrechts <= 490 && xrechts <= 600) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 550, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (7x1)
      if (xrechts <= 675 && xrechts >= 625 && yrechts >= 85 && yrechts <= 125) {
      ctx.drawImage(bombe, xbomb = 650, ybomb = 100, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 650, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 650, 100, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 650, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 50 && yrechts <= 190 && xrechts <= 700) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 650, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (7x2)
      if (xrechts <= 675 && xrechts >= 625 && yrechts >= 185 && yrechts <= 225) {
      ctx.drawImage(bombe, xbomb = 650, ybomb = 200, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 650, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 650, 200, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 650, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 150 && yrechts <= 290 && xrechts <= 700) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 650, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (7x3)
      if (xrechts <= 675 && xrechts >= 625 && yrechts >= 285 && yrechts <= 325) {
      ctx.drawImage(bombe, xbomb = 650, ybomb = 300, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 650, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 650, 300, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 650, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 250 && yrechts <= 390 && xrechts <= 700) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 650, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade  (7x4)
      if (xrechts <= 675 && xrechts >= 625 && yrechts >= 385 && yrechts <= 425) {
      ctx.drawImage(bombe, xbomb = 650, ybomb = 400, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 650, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 650, 400, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 650, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 350 && yrechts <= 490 && xrechts <= 700) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 650, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (8x1)
      if (xrechts <= 775 && xrechts >= 725 && yrechts >= 85 && yrechts <= 125) {
      ctx.drawImage(bombe, xbomb = 750, ybomb = 100, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 750, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 750, 100, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 750, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 50 && yrechts <= 190 && xrechts <= 800) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 750, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (8x2)
      if (xrechts <= 775 && xrechts >= 725 && yrechts >= 185 && yrechts <= 225) {
      ctx.drawImage(bombe, xbomb = 750, ybomb = 200, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 750, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 750, 200, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 750, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 150 && yrechts <= 290 && xrechts <= 800) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 750, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (8x3)
      if (xrechts <= 775 && xrechts >= 725 && yrechts >= 285 && yrechts <= 325) {
      ctx.drawImage(bombe, xbomb = 750, ybomb = 300, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 750, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 750, 300, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 750, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 250 && yrechts <= 390 && xrechts <= 800) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 750, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade  (8x4)
      if (xrechts <= 775 && xrechts >= 725 && yrechts >= 385 && yrechts <= 425) {
      ctx.drawImage(bombe, xbomb = 750, ybomb = 400, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 750, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 750, 400, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 750, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 350 && yrechts <= 490 && xrechts <= 800) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 750, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (9x1)
      if (xrechts <= 875 && xrechts >= 825 && yrechts >= 85 && yrechts <= 125) {
      ctx.drawImage(bombe, xbomb = 850, ybomb = 100, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 850, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 850, 100, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 850, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 50 && yrechts <= 190 && xrechts <= 900) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 850, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (9x2)
      if (xrechts <= 875 && xrechts >= 825 && yrechts >= 185 && yrechts <= 225) {
      ctx.drawImage(bombe, xbomb = 850, ybomb = 200, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 850, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 850, 200, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 850, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 150 && yrechts <= 290 && xrechts <= 900) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 850, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade (9x3)
      if (xrechts <= 875 && xrechts >= 825 && yrechts >= 285 && yrechts <= 325) {
      ctx.drawImage(bombe, xbomb = 850, ybomb = 300, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 850, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 850, 300, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 850, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 250 && yrechts <= 390 && xrechts <= 900) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 850, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //rechts links gerade  (9x4)
      if (xrechts <= 875 && xrechts >= 825 && yrechts >= 385 && yrechts <= 425) {
      ctx.drawImage(bombe, xbomb = 850, ybomb = 400, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 850, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Mitte, 850, 400, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 850, 450, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 350 && yrechts <= 490 && xrechts <= 900) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 850, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }


      //dazwischen oben (1)
      if (yrechts <= 75 && xrechts >= 135 && xrechts <= 185) {
      ctx.drawImage(bombe, xbomb = 150, ybomb = 50, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischen_Mitte, 150, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 200, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 100, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 150, 100, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 100 && xrechts <= 240 && yrechts <= 150) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 150, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 200, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 100, 50, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen oben (2)
      if (yrechts <= 75 && xrechts >= 235 && xrechts <= 285) {
      ctx.drawImage(bombe, xbomb = 250, ybomb = 50, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischen_Mitte, 250, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 300, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 200, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 250, 100, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 200 && xrechts <= 340 && yrechts <= 150) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 250, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 300, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 200, 50, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen oben (3)
      if (yrechts <= 75 && xrechts >= 335 && xrechts <= 385) {
      ctx.drawImage(bombe, xbomb = 350, ybomb = 50, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischen_Mitte, 350, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 400, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 300, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 350, 100, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 300 && xrechts <= 440 && yrechts <= 150) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 350, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 400, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 300, 50, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen oben (4)
      if (yrechts <= 75 && xrechts >= 435 && xrechts <= 485) {
      ctx.drawImage(bombe, xbomb = 450, ybomb = 50, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischen_Mitte, 450, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 500, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 400, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 450, 100, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 400 && xrechts <= 540 && yrechts <= 150) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 450, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 500, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 400, 50, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen oben (5)
      if (yrechts <= 75 && xrechts >= 535 && xrechts <= 585) {
      ctx.drawImage(bombe, xbomb = 550, ybomb = 50, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischen_Mitte, 550, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 600, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 500, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 550, 100, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 500 && xrechts <= 640 && yrechts <= 150) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 550, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 600, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 500, 50, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen oben (6)
      if (yrechts <= 75 && xrechts >= 635 && xrechts <= 685) {
      ctx.drawImage(bombe, xbomb = 650, ybomb = 50, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischen_Mitte, 650, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 700, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 600, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 650, 100, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 600 && xrechts <= 740 && yrechts <= 150) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 650, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 700, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 600, 50, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen oben (7)
      if (yrechts <= 75 && xrechts >= 735 && xrechts <= 785) {
      ctx.drawImage(bombe, xbomb = 750, ybomb = 50, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischen_Mitte, 750, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 800, 50, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 700, 50, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 750, 100, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 700 && xrechts <= 840 && yrechts <= 150) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 750, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 800, 50, 50, 50);
        ctx.drawImage(lightblueBackground, 700, 50, 50, 50);
        }, 1);
        }
      }, 2300);
      }

      //dazwischen unten (1)
      if (yrechts >= 435 && xrechts >= 135 && xrechts <= 185) {
      ctx.drawImage(bombe, xbomb = 150, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenUnten_Mitte, 150, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 200, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 100, 450, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 150, 400, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 60 && xrechts <= 250 && yrechts >= 360) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 150, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 200, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 100, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen unten (2)
      if (yrechts >= 435 && xrechts >= 235 && xrechts <= 285) {
      ctx.drawImage(bombe, xbomb = 250, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenUnten_Mitte, 250, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 300, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 200, 450, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 250, 400, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 160 && xrechts <= 350 && yrechts >= 360) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 250, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 300, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 200, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen unten (3)
      if (yrechts >= 435 && xrechts >= 335 && xrechts <= 385) {
      ctx.drawImage(bombe, xbomb = 350, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenUnten_Mitte, 350, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 400, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 300, 450, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 350, 400, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 260 && xrechts <= 450 && yrechts >= 360) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 350, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 400, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 300, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen unten (4)
      if (yrechts >= 435 && xrechts >= 435 && xrechts <= 485) {
      ctx.drawImage(bombe, xbomb = 450, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenUnten_Mitte, 450, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 500, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 400, 450, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 450, 400, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 360 && xrechts <= 550 && yrechts >= 360) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 450, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 500, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 400, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen unten (5)
      if (yrechts >= 435 && xrechts >= 535 && xrechts <= 585) {
      ctx.drawImage(bombe, xbomb = 550, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenUnten_Mitte, 550, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 600, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 500, 450, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 550, 400, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 460 && xrechts <= 650 && yrechts >= 360) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 550, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 600, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 500, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen unten (6)
      if (yrechts >= 435 && xrechts >= 635 && xrechts <= 685) {
      ctx.drawImage(bombe, xbomb = 650, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenUnten_Mitte, 650, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 700, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 600, 450, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 650, 400, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 560 && xrechts <= 750 && yrechts >= 360) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 650, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 700, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 600, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen unten (7)
      if (yrechts >= 435 && xrechts >= 735 && xrechts <= 785) {
      ctx.drawImage(bombe, xbomb = 750, ybomb = 450, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenUnten_Mitte, 750, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 800, 450, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 700, 450, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 750, 400, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && xrechts >= 660 && xrechts <= 850 && yrechts >= 360) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 750, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 800, 450, 50, 50);
        ctx.drawImage(lightblueBackground, 700, 450, 50, 50);
        }, 1);
        }
      }, 2300);
      }

      //dazwischen rechts (1)
      if (xrechts >= 835 && yrechts >= 135 && yrechts <= 185) {
      ctx.drawImage(bombe, xbomb = 850, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenRechts_Mitte, 850, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 850, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 800, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 850, 100, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 60 && yrechts <= 250 && xrechts >= 760) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 850, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 800, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen rechts (2)
      if (xrechts >= 835 && yrechts >= 235 && yrechts <= 285) {
      ctx.drawImage(bombe, xbomb = 850, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenRechts_Mitte, 850, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 850, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 800, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 850, 200, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 160 && yrechts <= 350 && xrechts >= 760) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 850, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 800, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen rechts (3)
      if (xrechts >= 835 && yrechts >= 335 && yrechts <= 385) {
      ctx.drawImage(bombe, xbomb = 850, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenRechts_Mitte, 850, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 850, 400, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 800, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 850, 300, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 260 && yrechts <= 450 && xrechts >= 760) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 850, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 850, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 800, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }

      //dazwischen links (1)
      if (xrechts <= 75 && yrechts >= 135 && yrechts <= 185) {
      ctx.drawImage(bombe, xbomb = 50, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenLinks_Mitte, 50, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 50, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 100, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 50, 100, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 60 && yrechts <= 250 && xrechts <= 150) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 50, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 100, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen links (2)
      if (xrechts <= 75 && yrechts >= 235 && yrechts <= 285) {
      ctx.drawImage(bombe, xbomb = 50, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenLinks_Mitte, 50, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 50, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 100, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 50, 200, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 160 && yrechts <= 350 && xrechts <= 150) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 50, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 100, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen links (3)
      if (xrechts <= 75 && yrechts >= 335 && yrechts <= 385) {
      ctx.drawImage(bombe, xbomb = 50, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenLinks_Mitte, 50, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 50, 400, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 100, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 50, 300, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 260 && yrechts <= 450 && xrechts <= 150) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 50, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 50, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 100, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }


      //dazwischen (1x1)
      if (xrechts <= 175 && xrechts >= 135 && yrechts >= 135 && yrechts <= 185) {
      ctx.drawImage(bombe, xbomb = 150, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 150, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 150, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 200, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 150, 100, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 100, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 60 && yrechts <= 250 && xrechts >= 60 && xrechts <=  250) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 150, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 100, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 200, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (2x1)
      if (xrechts <= 275 && xrechts >= 235 && yrechts >= 135 && yrechts <= 185) {
      ctx.drawImage(bombe, xbomb = 250, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 250, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 250, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 300, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 250, 100, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 200, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 60 && yrechts <= 250 && xrechts >= 160 && xrechts <=  350) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 250, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 200, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 300, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (3x1)
      if (xrechts <= 375 && xrechts >= 335 && yrechts >= 135 && yrechts <= 185) {
      ctx.drawImage(bombe, xbomb = 350, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 350, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 350, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 400, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 350, 100, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 300, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 60 && yrechts <= 250 && xrechts >= 260 && xrechts <=  450) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 350, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 300, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 400, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (4x1)
      if (xrechts <= 475 && xrechts >= 435 && yrechts >= 135 && yrechts <= 185) {
      ctx.drawImage(bombe, xbomb = 450, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 450, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 450, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 500, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 450, 100, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 400, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 60 && yrechts <= 250 && xrechts >= 460 && xrechts <=  550) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 450, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 400, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 500, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (5x1)
      if (xrechts <= 575 && xrechts >= 535 && yrechts >= 135 && yrechts <= 185) {
      ctx.drawImage(bombe, xbomb = 550, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 550, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 550, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 600, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 550, 100, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 500, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 60 && yrechts <= 250 && xrechts >= 460 && xrechts <=  650) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 550, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 500, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 600, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (6x1)
      if (xrechts <= 675 && xrechts >= 635 && yrechts >= 135 && yrechts <= 185) {
      ctx.drawImage(bombe, xbomb = 650, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 650, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 650, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 700, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 650, 100, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 600, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 60 && yrechts <= 250 && xrechts >= 560 && xrechts <=  750) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 650, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 600, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 700, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (7x1)
      if (xrechts <= 775 && xrechts >= 735 && yrechts >= 135 && yrechts <= 185) {
      ctx.drawImage(bombe, xbomb = 750, ybomb = 150, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 750, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 750, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 800, 150, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 750, 100, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 700, 150, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 60 && yrechts <= 250 && xrechts >= 660 && xrechts <=  850) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 750, 100, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 700, 150, 50, 50);
        ctx.drawImage(lightblueBackground, 800, 150, 50, 50);
        }, 1);
        }
      }, 2300);
      }


      //dazwischen (1x2)
      if (xrechts <= 175 && xrechts >= 135 && yrechts >= 235 && yrechts <= 285) {
      ctx.drawImage(bombe, xbomb = 150, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 150, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 150, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 200, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 150, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 100, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 160 && yrechts <= 350 && xrechts >= 60 && xrechts <=  250) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 150, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 100, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 200, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (2x2)
      if (xrechts <= 275 && xrechts >= 235 && yrechts >= 235 && yrechts <= 285) {
      ctx.drawImage(bombe, xbomb = 250, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 250, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 250, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 300, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 250, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 200, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 160 && yrechts <= 350 && xrechts >= 160 && xrechts <=  350) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 250, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 200, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 300, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (3x2)
      if (xrechts <= 375 && xrechts >= 335 && yrechts >= 235 && yrechts <= 285) {
      ctx.drawImage(bombe, xbomb = 350, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 350, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 350, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 400, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 350, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 300, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 160 && yrechts <= 350 && xrechts >= 260 && xrechts <=  450) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 350, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 300, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 400, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (4x2)
      if (xrechts <= 475 && xrechts >= 435 && yrechts >= 235 && yrechts <= 285) {
      ctx.drawImage(bombe, xbomb = 450, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 450, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 450, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 500, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 450, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 400, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 160 && yrechts <= 350 && xrechts >= 360 && xrechts <=  550) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 450, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 400, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 500, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (5x2)
      if (xrechts <= 575 && xrechts >= 535 && yrechts >= 235 && yrechts <= 285) {
      ctx.drawImage(bombe, xbomb = 550, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 550, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 550, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 600, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 550, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 500, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 160 && yrechts <= 350 && xrechts >= 460 && xrechts <=  650) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 550, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 500, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 600, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (6x2)
      if (xrechts <= 675 && xrechts >= 635 && yrechts >= 235 && yrechts <= 285) {
      ctx.drawImage(bombe, xbomb = 650, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 650, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 650, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 700, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 650, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 600, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 160 && yrechts <= 350 && xrechts >= 560 && xrechts <=  750) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 650, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 600, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 700, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (7x2)
      if (xrechts <= 775 && xrechts >= 735 && yrechts >= 235 && yrechts <= 285) {
      ctx.drawImage(bombe, xbomb = 750, ybomb = 250, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 750, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 750, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 800, 250, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 750, 200, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 700, 250, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 160 && yrechts <= 350 && xrechts >= 660 && xrechts <=  850) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 750, 200, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 700, 250, 50, 50);
        ctx.drawImage(lightblueBackground, 800, 250, 50, 50);
        }, 1);
        }
      }, 2300);
      }


      //dazwischen (1x3)
      if (xrechts <= 175 && xrechts >= 135 && yrechts >= 335 && yrechts <= 385) {
      ctx.drawImage(bombe, xbomb = 150, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 150, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 150, 400, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 200, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 150, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 100, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 260 && yrechts <= 450 && xrechts >= 60 && xrechts <=  250) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 150, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 150, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 100, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 200, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (2x3)
      if (xrechts <= 275 && xrechts >= 235 && yrechts >= 335 && yrechts <= 385) {
      ctx.drawImage(bombe, xbomb = 250, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 250, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 250, 400, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 300, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 250, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 200, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 260 && yrechts <= 450 && xrechts >= 160 && xrechts <=  350) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 250, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 250, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 200, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 300, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (3x3)
      if (xrechts <= 375 && xrechts >= 335 && yrechts >= 335 && yrechts <= 385) {
      ctx.drawImage(bombe, xbomb = 350, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 350, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 350, 400, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 400, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 350, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 300, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 260 && yrechts <= 450 && xrechts >= 260 && xrechts <=  450) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 350, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 350, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 300, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 400, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (4x3)
      if (xrechts <= 475 && xrechts >= 435 && yrechts >= 335 && yrechts <= 385) {
      ctx.drawImage(bombe, xbomb = 450, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 450, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 450, 400, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 500, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 450, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 400, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 260 && yrechts <= 450 && xrechts >= 360 && xrechts <=  550) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 450, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 450, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 4100, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 500, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (5x3)
      if (xrechts <= 575 && xrechts >= 535 && yrechts >= 335 && yrechts <= 385) {
      ctx.drawImage(bombe, xbomb = 550, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 550, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 550, 400, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 600, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 550, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 500, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 260 && yrechts <= 450 && xrechts >= 460 && xrechts <=  650) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 550, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 550, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 500, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 600, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }
      //dazwischen (6x3)
      if (xrechts <= 675 && xrechts >= 635 && yrechts >= 335 && yrechts <= 385) {
      ctx.drawImage(bombe, xbomb = 650, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 650, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 650, 400, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 700, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 650, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 600, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 260 && yrechts <= 450 && xrechts >= 560 && xrechts <=  750) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 650, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 650, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 600, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 700, 350, 50, 50);
        }, 1);
        }
      }, 2300);


      }
      //dazwischen (7x3)
      if (xrechts <= 775 && xrechts >= 735 && yrechts >= 335 && yrechts <= 385) {
      ctx.drawImage(bombe, xbomb = 750, ybomb = 350, 50, 50);
      var functionBCompleted = false;

      setTimeout(function() {
        ctx.drawImage(explosionDazwischenAlle_Mitte, 750, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Unten, 750, 400, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Rechts, 800, 350, 50, 50);
        ctx.drawImage(explosionRechtsLinksGerade_Oben, 750, 300, 50, 50);
        ctx.drawImage(explosionUntenObenGerade_Links, 700, 350, 50, 50);
      }, 2000);
      setTimeout(function() {
        if ((functionBCompleted = true) && yrechts >= 260 && yrechts <= 450 && xrechts >= 660 && xrechts <=  850) {
          ctx.drawImage(kO, 50, 50, 850, 450);
        } else {
        setTimeout(function() {
        ctx.drawImage(lightblueBackground, 750, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 300, 50, 50);
        ctx.drawImage(lightblueBackground, 750, 400, 50, 50);
        ctx.drawImage(lightblueBackground, 700, 350, 50, 50);
        ctx.drawImage(lightblueBackground, 800, 350, 50, 50);
        }, 1);
        }
      }, 2300);
      }

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
  }, 5);
  }
