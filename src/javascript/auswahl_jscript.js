
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
  var auswahl = new Image();
  var spielerEins = new Image();
  var spielerZwei = new Image();
  var rotNachRechts = new Image();
  var blauNachRechts = new Image();
  var rosaNachRechts = new Image();
  var gelbNachRechts = new Image();
  var pinkNachRechts = new Image();
  var gruenNachRechts = new Image();
  var blauNachLinks = new Image();
  var rotNachLinks = new Image();
  var gelbNachLinks = new Image();
  var rosaNachLinks = new Image();
  var gruenNachLinks = new Image();
  var pinkNachLinks = new Image();

  zweispieler.src = 'images/zweispielerModus.jpg';
  auswahl.src = 'images/Farbenauswahl.jpg';
  spielerEins.src = 'images/SpielerEins.jpg';
  spielerZwei.src = 'images/SpielerZwei.jpg';
  rotNachRechts.src = 'images/pengu_nachRechts_Rot.png';
  blauNachRechts.src = 'images/pengu_nachRechts_Blau.png';
  rosaNachRechts.src = 'images/pengu_nachRechts_Rosa.png';
  gelbNachRechts.src = 'images/pengu_nachRechts_Gelb.png';
  pinkNachRechts.src = 'images/pengu_nachRechts_Pink.png';
  gruenNachRechts.src = 'images/pengu_nachRechts_Gruen.png';
  blauNachLinks.src = 'images/pengu_nachLinks_Blau.png';
  rotNachLinks.src = 'images/pengu_nachLinks_Rot.png';
  gelbNachLinks.src = 'images/pengu_nachLinks_Gelb.png';
  rosaNachLinks.src = 'images/pengu_nachLinks_Rosa.png';
  gruenNachLinks.src = 'images/pengu_nachLinks_Gruen.png';
  pinkNachLinks.src = 'images/pengu_nachLinks_Pink.png';


  ctx.drawImage(zweispieler, 350, 550, 250, 50);
  ctx.drawImage(auswahl, 300, 50, 350, 50);
  ctx.drawImage(spielerEins, 55, 55, 150, 50);
  ctx.drawImage(spielerZwei, 745, 55, 150, 50);
  ctx.drawImage(rotNachRechts, 100, 100, 50, 50);
  ctx.drawImage(blauNachRechts, 100, 165, 50, 50);
  ctx.drawImage(rosaNachRechts, 100, 230, 50, 50);
  ctx.drawImage(gelbNachRechts, 100, 295, 50, 50);
  ctx.drawImage(pinkNachRechts, 100, 360, 50, 50);
  ctx.drawImage(gruenNachRechts, 100, 425, 50, 50);
  ctx.drawImage(blauNachLinks, 800, 100, 50, 50);
  ctx.drawImage(rotNachLinks, 800, 165, 50, 50);
  ctx.drawImage(gelbNachLinks, 800, 230, 50, 50);
  ctx.drawImage(rosaNachLinks, 800, 295, 50, 50);
  ctx.drawImage(gruenNachLinks, 800, 360, 50, 50);
  ctx.drawImage(pinkNachLinks, 800, 425, 50, 50);
