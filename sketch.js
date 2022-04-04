///VARIABLES///
let rocket;
let explosion;
let coinIcon;
let lifeIcon1;
let lifeIcon2;
let lifeIcon3;
///VALUES///
let gameState = "serve";
let musicState = 0;
let score = 0;
let gun = "lvl1";
let lifes = 3;
let coins = 0;
let asteroidLife = 3;
let TimeWorld = 0;
let cambio = "0";
///SOUNDS///
let RBAThemeSound;
let explosionSound, coinSound, powerUpSound, laserSound, delaySound, destroySound, lifeUpSound, endSound, gameOverSound;
///IMAGES///
let coinIconImg, lifeIconImg, lifeIcon2xImg, star1Img, star2Img, rocketImg, coinsImg, powerImg, delayImg, lifeUpImg, asteroidImg, asteroidDestroyedImg;
///GROUPS///
let asteroidsGroup, lasersX1Group, starsGroup, coinsGroup, powerGroup, delayGroup, lifeUpGroup;
///BOTTONS///
let title, titleImg; 
let playBotton, playBottonImg;
let optionsBotton, optionsBottonImg;
let overBotton,overBottonImg;
let backBotton, backBottonImg;
let automaticBotton, automaticBottonImg;
let manualBotton, manualBottonImg;
let restartBotton, restartBottonImg;
let quitBotton, quitBottonImg;

function preload(){

  ///IMAGES///
  coinIconImg = loadImage("Coin0.png");
  lifeIconImg = loadImage("Heart.png");
  lifeIcon2xImg = loadImage("Heart2x.png");
  star1Img = loadImage("star01_2D0.png");
  star2Img = loadImage("star02_2D0.png");
  rocketImg = loadImage("rocket2D0.png");
  coinsImg = loadImage("Coin0.png")
  powerImg = loadImage("poder+.png");
  delayImg = loadImage("delay0.png");
  lifeUpImg = loadImage("Life2D0.png");
  asteroidImg = loadImage("asteroide2D.png");
  explosion = loadImage("explosionnn.jpg");
  asteroidDestroyedImg = loadImage("AsteroidDestroyed.png");
  titleImg = loadImage("RBA0.png");
  playBottonImg = loadImage("PlayBotton0.png");
  optionsBottonImg = loadImage("OptionsBotton0.png");
  overBottonImg = loadImage("OverBotton0.png");
  automaticBottonImg = loadImage("AutomaticBotton0.png");
  manualBottonImg = loadImage("ManualBotton0.png");
  backBottonImg = loadImage("BackBotton0.png");
  restartBottonImg = loadImage("RestartBotton0.png");
  quitBottonImg = loadImage("QuitBotton0.png");
  ///SOUNDS///
  RBAThemeSound = loadSound("KakyoinThemeRBA.mp3");
  explosionSound = loadSound("Explosion.mp3");
  coinSound = loadSound("Coin.mp3");
  powerUpSound = loadSound("Item.mp3");
  laserSound = loadSound("Laser.mp3");
  delaySound = loadSound("Delay.mp3");
  destroySound = loadSound("Destroy.mp3");
  lifeUpSound = loadSound("LifeUp.mp3");
  endSound = loadSound("End.mp3");
  gameOverSound = loadSound("GameOver.mp3","ExplosionFinale");
}

function setup(){

  ///CANVAS///
  createCanvas(windowWidth, windowHeight);
  ///SPRITES///
  edges = createEdgeSprites();
  rocket = createSprite(windowWidth/2-750, windowHeight/2, 20, 20);
  rocket.addImage(rocketImg);
  rocket.scale = 0.25;
  rocket.visible = false;
  //rocket.debug = true;
  coinIcon = createSprite(windowWidth/2+575, windowHeight/2-300, 50, 50);
  coinIcon.addImage(coinIconImg);
  coinIcon.scale = 0.033;
  coinIcon.visible = false;
  lifeIcon1 = createSprite(windowWidth/2-650, windowHeight/2-300, 50, 50);
  lifeIcon1.addImage(lifeIconImg);
  lifeIcon1.scale = 0.025;
  lifeIcon1.visible = false;
  lifeIcon2 = createSprite(windowWidth/2-603, windowHeight/2-300, 50, 50);
  lifeIcon2.addImage(lifeIconImg);
  lifeIcon2.scale = 0.025;
  lifeIcon2.visible = false;
  lifeIcon3 = createSprite(windowWidth/2-556, windowHeight/2-300, 50, 50);
  lifeIcon3.addImage(lifeIconImg);
  lifeIcon3.scale = 0.025;
  lifeIcon3.visible = false;
  title = createSprite(windowWidth - 75, windowHeight/2, 25, 15);
  title.rotation = 90;
  title.scale = windowHeight/2048;
  title.addImage(titleImg);
  playBotton = createSprite(windowWidth/2, windowHeight-200, 25, 15);
  playBotton.scale = 0.115;
  playBotton.addImage(playBottonImg);
  optionsBotton = createSprite(windowWidth/2, windowHeight-100, 25, 15);
  optionsBotton.scale = 0.18;
  optionsBotton.addImage(optionsBottonImg);
  overBotton = createSprite(windowWidth/2, windowHeight/2, 25, 15);
  overBotton.scale = 0.8;
  overBotton.addImage(overBottonImg);
  automaticBotton = createSprite(windowWidth/2, windowHeight/2-75, 25, 15);
  automaticBotton.scale = 1.59;
  automaticBotton.addImage(automaticBottonImg);
  manualBotton = createSprite(windowWidth/2, windowHeight/2+75, 25, 15);
  manualBotton.scale = 1.17;
  manualBotton.addImage(manualBottonImg);
  backBotton = createSprite(windowWidth/2-580, windowHeight/2+275, 25, 15);
  backBotton.scale = 0.8;
  backBotton.addImage(backBottonImg);
  restartBotton = createSprite(windowWidth/2, windowHeight-150, 25, 15);
  restartBotton.scale = 0.195;
  restartBotton.addImage(restartBottonImg);
  quitBotton = createSprite(windowWidth/2+580, windowHeight/2+275, 25, 15);
  quitBotton.scale = 0.65;
  quitBotton.addImage(quitBottonImg);
  
  ///GROUPS///
  asteroidsGroup = new Group();
  starsGroup = new Group();
  coinsGroup = new Group();
  powerGroup = new Group();
  delayGroup = new Group();
  lifeUpGroup = new Group();
  lasersX1Group = new Group();
  lasersX2Group = new Group();
  lasersX4Group = new Group();
  lasersX8Group = new Group();
}

function draw() {
  
  background(0);
  if(gameState == "serve"){
    //if(frameCount == 1){
    //  RBAThemeSound.play();
    //}
    fill("white");
    textSize(20);
    text("vBeta", windowWidth/2-27, windowHeight/2+325);
    textSize(20);
    fill("white");
    text("v0.8",windowWidth/2+640, windowHeight/2+325);
    TimeWorld = 0;
    spawnSTARS1();
    spawnSTARS2();
    spawnCOINS();
    title.visible = true;
    playBotton.visible = true;
    optionsBotton.visible = true;
    overBotton.visible = false;
    automaticBotton.visible = false;
    manualBotton.visible = false;
    backBotton.visible = false;
    restartBotton.visible = false;
    quitBotton.visible = false;

    if(mousePressedOver(playBotton)){ ////touches(playBotton) > 0 || 
      gameState = "loginStage1";
      RBAThemeSound.stop();
      TimeWorld = 0;
      frameCount = 0;
      title.visible = false;
      playBotton.visible = false;
      optionsBotton.visible = false;
      //touches = [];
    }
    if(mousePressedOver(optionsBotton)){ ////touche(optionsBotton) > 0 || 
      gameState = "options";
      title.visible = false;
      playBotton.visible = false;
      optionsBotton.visible = false;
      overBotton.visible = true;
      //touches = [];
    }
  }
  if(gameState == "options"){
    fill("white");
    textSize(20);
    text("vBeta", windowWidth/2-27, windowHeight/2+325);
    textSize(20);
    fill("white");
    text("v0.8",windowWidth/2+640, windowHeight/2+325);
    TimeWorld = 0;
    spawnSTARS1();
    spawnSTARS2();
    spawnCOINS();
    backBotton.visible = true;
    if(mousePressedOver(overBotton)){
      gameState = "over";
      overBotton.visible = false;
    }
    if(mousePressedOver(backBotton)){
      gameState = "serve";
    }
  }
  if(gameState == "over"){
    fill("white");
    textSize(20);
    text("vBeta", windowWidth/2-27, windowHeight/2+325);
    textSize(20);
    fill("white");
    text("v0.8", windowWidth/2+640, windowHeight/2+325);
    TimeWorld = 0;
    spawnSTARS1();
    spawnSTARS2();
    spawnCOINS();
    automaticBotton.visible = true;
    manualBotton.visible = true;
    if(mousePressedOver(automaticBotton)){
      gameState = "serve";
      cambio = "A";
    }
    if(mousePressedOver(manualBotton)){
      gameState = "serve";
      cambio = "M";
    }
    if(mousePressedOver(backBotton)){
      gameState = "options";
    }
  }
  if(gameState == "loginStage1"){
    TimeWorld = 0;
    spawnSTARS1();
    spawnSTARS2();
    rocket.velocityX = + 7;
    if(rocket.x > windowWidth/2-500){
      rocket.velocityX = 0;
      textSize(30);
      fill("white");
      text("Joseph Joestar: OH NO! Uma chuva de meteoros está vindo em nossa direção!", windowWidth/2-675, windowHeight/2+320);
    }
    textSize(50);
    fill("red");
    text("STAGE 1", windowWidth/2-95, windowHeight/2);
    if(frameCount == 185){
      gameState = "Stage1";
    }
  }
  if(gameState == "Stage1"){
    base();
    spawnASTEROIDS();
    rocket.bounceOff(edges);
    if(rocket.isTouching(asteroidsGroup)){
      explosionSound.play();
      endSound.play();
      rocket.addImage(explosion);
      restartBotton.depth = rocket.depth;
      restartBotton.depth += 1;
      quitBotton.depth = rocket.depth;
      quitBotton.depth += 1;
      lifes = lifes - 1;
      gameState = "end";
      if(lifes === 0){
        gameState = "gameOver";
        gameOverSound.play();
      }
    }
    lasersX1Group.bounceOff(asteroidsGroup,destroyasteroid);
    lasersX2Group.bounceOff(asteroidsGroup,destroyasteroid);
    lasersX4Group.bounceOff(asteroidsGroup,destroyasteroid);
    lasersX8Group.bounceOff(asteroidsGroup,destroyasteroid);
    if(frameCount > 1000){
      gameState = "Stage1Clear";
    }
  }
  if(gameState == "Stage1Clear"){
    spawnSTARS1();
    spawnSTARS2();
    iconsRemove();
    starsGroup.setVelocityXEach(-10);
    asteroidsGroup.setVelocityXEach(-10);
    textSize(50);
    fill("white");
    text("Parabéns, você passou pelo Stage 1!", windowWidth/2-170, windowHeight/2+300);
    rocket.velocityX = + 7;
    //if(rocket.y >= 150){
    //  rocket.velocityY = -3;
    //}
    //if(rocket.y <= 150){
    //  rocket.velocityY = +3;
    //}
    //if(rocket.y === 150){
    //  rocket.velocityY = 0;
    //  rocket.y = 150;
    //}
    if(rocket.x > windowWidth/2+350){
      gameState = "EmBreve";
    }
  }
  if(gameState == "EmBreve"){
    spawnSTARS1();
    spawnSTARS2();
    textSize(50);
    fill("White");
    text("Obrigado por jogar!", windowWidth/2-220, windowHeight/2);
    iconsRemove();
    quitBotton.visible = true;
    if(mousePressedOver(quitBotton)){
      quit();
    }
  }
  if(gameState == "end"){
    iconsRemove();
    starsGroup.setVelocityXEach(0);
    coinsGroup.setVelocityXEach(0);
    powerGroup.setVelocityXEach(0);
    delayGroup.setVelocityXEach(0);
    lifeUpGroup.setVelocityXEach(0);
    asteroidsGroup.setVelocityXEach(0);
    lasersX1Group.setVelocityXEach(0);
    lasersX2Group.setVelocityXEach(0);
    lasersX4Group.setVelocityXEach(0);
    lasersX8Group.setVelocityXEach(0);
    powerGroup.setLifetimeEach(-1);
    coinsGroup.setLifetimeEach(-1);
    delayGroup.setLifetimeEach(-1);
    lifeUpGroup.setLifetimeEach(-1);
    starsGroup.setLifetimeEach(-1);
    asteroidsGroup.setLifetimeEach(-1);
    lasersX1Group.setLifetimeEach(-1);
    lasersX2Group.setLifetimeEach(-1);
    lasersX4Group.setLifetimeEach(-1);
    lasersX8Group.setLifetimeEach(-1);
    rocket.scale = 0.095;
    textSize(45)
    fill("red");
    text("YOU BLEW UP!", windowWidth/2-160, windowHeight/2-50);
    fill("red");
    text("Score: ", windowWidth/2-80, windowHeight/2+25);
    fill("white");
    text(" "+score, windowWidth/2+60, windowHeight/2+25);
    restartBotton.visible = true;
    quitBotton.visible = true;
    if(mousePressedOver(restartBotton)){
      reset();
      quitBotton.visible = false;
    }
    if(mousePressedOver(quitBotton)){
      quit();
      restartBotton.visible = false;
    }
  }
  if(gameState == "gameOver"){
    frameCount = 0;
    TimeWorld = 0;
    iconsRemove();
    starsGroup.setVelocityXEach(0);
    coinsGroup.setVelocityXEach(0);
    powerGroup.setVelocityXEach(0);
    delayGroup.setVelocityXEach(0);
    lifeUpGroup.setVelocityXEach(0);
    asteroidsGroup.setVelocityXEach(0);
    lasersX1Group.setVelocityXEach(0);
    lasersX2Group.setVelocityXEach(0);
    lasersX4Group.setVelocityXEach(0);
    lasersX8Group.setVelocityXEach(0);
    powerGroup.setLifetimeEach(-1);
    coinsGroup.setLifetimeEach(-1);
    delayGroup.setLifetimeEach(-1);
    lifeUpGroup.setLifetimeEach(-1);
    starsGroup.setLifetimeEach(-1);
    asteroidsGroup.setLifetimeEach(-1);
    lasersX1Group.setLifetimeEach(-1);
    lasersX2Group.setLifetimeEach(-1);
    lasersX4Group.setLifetimeEach(-1);
    lasersX8Group.setLifetimeEach(-1);
    rocket.scale = 0.095;
    textSize(45)
    fill("red");
    text("GAME OVER!", windowWidth/2-140, windowHeight/2-50);
    fill("red");
    text("Score: ", windowWidth/2-80, windowHeight/2+25);
    fill("white");
    text(" "+score, windowWidth/2+60, windowHeight/2+25);
    quitBotton.visible = true;
    if(mousePressedOver(quitBotton)){
      explosionSound.stop();
      gameOverSound.stop();
      quit();
    }
  }
  if(frameCount % 10 === 0 ){
    TimeWorld = TimeWorld + 4;
  }

  //textSize(15);
  //text(""+frameCount, 400, 290);
  drawSprites();
  //console.log(gameState);

}

function spawnSTARS1(){
  if(frameCount % 8 === 0){
    let star1 = createSprite(500, 150, 10, 10);
    star1.addImage(star1Img);
    star1.velocityX = -(6 + TimeWorld * 2/100);
    star1.lifetime = star1.velocityX/windowWidth;
    star1.y = Math.round(random(windowHeight-1, windowHeight-663));
    star1.x = Math.round(random(windowWidth-1, windowWidth-1366));
    rocket.depth = star1.depth;
    rocket.depth += 1;
    title.depth = star1.depth;
    title.depth += 1;
    coinIcon.depth = star1.depth;
    coinIcon.depth += 1;
    lifeIcon1.depth = star1.depth;
    lifeIcon1.depth += 1;
    lifeIcon2.depth = star1.depth;
    lifeIcon2.depth += 1;
    lifeIcon3.depth = star1.depth;
    lifeIcon3.depth += 1;
    playBotton.depth = star1.depth;
    playBotton.depth += 1;
    optionsBotton.depth = star1.depth;
    optionsBotton.depth += 1;
    overBotton.depth = star1.depth;
    overBotton.depth += 1;
    automaticBotton.depth = star1.depth;
    automaticBotton.depth += 1;
    manualBotton.depth = star1.depth;
    manualBotton.depth += 1;
    backBotton.depth = star1.depth;
    backBotton.depth += 1;
    restartBotton.depth = star1.depth;
    restartBotton.depth += 1;
    quitBotton.depth = star1.depth;
    quitBotton.depth += 1;
    starsGroup.add(star1);
  }
}

function spawnSTARS2(){
  if(frameCount % 8 === 0){
    let star2 = createSprite(500, 150, 10, 10);
    star2.addImage(star2Img);
    star2.scale = 5;
    star2.velocityX = -(6 + TimeWorld * 2/100);
    star2.lifetime = star2.velocityX/windowWidth;
    star2.y = Math.round(random(windowHeight-1, windowHeight-663));
    star2.x = Math.round(random(windowWidth-1, windowWidth-1366));
    rocket.depth = star2.depth;
    rocket.depth += 1;
    title.depth = star2.depth;
    title.depth += 1;
    coinIcon.depth = star2.depth;
    coinIcon.depth += 1;
    lifeIcon1.depth = star2.depth;
    lifeIcon1.depth += 1;
    lifeIcon2.depth = star2.depth;
    lifeIcon2.depth += 1;
    lifeIcon3.depth = star2.depth;
    lifeIcon3.depth += 1;
    playBotton.depth = star2.depth;
    playBotton.depth += 1;
    optionsBotton.depth = star2.depth;
    optionsBotton.depth += 1;
    overBotton.depth = star2.depth;
    overBotton.depth += 1;
    automaticBotton.depth = star2.depth;
    automaticBotton.depth += 1;
    manualBotton.depth = star2.depth;
    manualBotton.depth += 1;
    backBotton.depth = star2.depth;
    backBotton.depth += 1;
    restartBotton.depth = star2.depth;
    restartBotton.depth += 1;
    quitBotton.depth = star2.depth;
    quitBotton.depth += 1;
    starsGroup.add(star2);
  }
}

function spawnASTEROIDS(){
  if(frameCount % 12 === 0){
    let asteroid = createSprite(500, 150, 10, 10);
    asteroid.addImage(asteroidImg);
    asteroid.scale = (random(0.08, 0.14));
    asteroid.rotation = Math.round(random(1, 360));
    asteroid.velocityX = Math.round(random(-(4 + TimeWorld * 2/100), -(7 + TimeWorld * 2/100)));
    asteroid.lifetime = windowWidth/asteroid.velocityX;
    asteroid.y = Math.round(random(windowHeight-1, windowHeight-663));
    asteroid.x = windowWidth;
    rocket.depth = asteroid.depth;
    rocket.depth += 1;
    coinIcon.depth = asteroid.depth;
    coinIcon.depth += 1;
    lifeIcon1.depth = asteroid.depth;
    lifeIcon1.depth += 1;
    lifeIcon2.depth = asteroid.depth;
    lifeIcon2.depth += 1;
    lifeIcon3.depth = asteroid.depth;
    lifeIcon3.depth += 1;
    restartBotton.depth = asteroid.depth;
    restartBotton.depth += 1;
    quitBotton.depth = asteroid.depth;
    quitBotton.depth += 1;
    //asteroid.debug = true;
    asteroid.setCollider("circle", 0, 0, 230);
    asteroidsGroup.add(asteroid);
  }
}

function spawnCOINS(){
  if(frameCount % 50 === 0){
    let coins = createSprite(500, 150, 10, 10);
    coins.addImage(coinsImg);
    coins.scale = 0.025;
    coins.velocityX = Math.round(random(-(4 + TimeWorld * 2/100), -(7 + TimeWorld * 2/100)));
    coins.lifetime = windowWidth/coins.velocityX;
    coins.y = Math.round(random(windowHeight-1, windowHeight-663));
    coins.x = windowWidth;
    rocket.depth = coins.depth;
    rocket.depth += 1;
    coinsGroup.add(coins);
  }
}

function spawnPOWERS(){
  if(frameCount % 400 === 0){
    let powerUp = createSprite(500, 150, 10, 10);
    powerUp.addImage(powerImg);
    powerUp.scale = 0.12;
    powerUp.velocityX = Math.round(random(-(4 + TimeWorld * 2/100), -(7 + TimeWorld * 2/100)));
    powerUp.lifetime = windowWidth/powerUp.velocityX;
    powerUp.y = Math.round(random(windowHeight-1, windowHeight-663));
    powerUp.x = windowWidth;
    rocket.depth = powerUp.depth;
    rocket.depth += 1;
    //powerUp.debug = true;
    powerGroup.add(powerUp);
  }
}

function spawnDELAYS(){
  if(frameCount % 750 === 0){
    let delay = createSprite(500, 150, 10, 10);
    delay.addImage(delayImg);
    delay.scale = 0.15;
    delay.velocityX = Math.round(random(-(4 + TimeWorld * 2/100), -(7 + TimeWorld * 2/100)));
    delay.lifetime = windowWidth/delay.velocityX;
    delay.y = Math.round(random(windowHeight-1, windowHeight-663));
    delay.x = windowWidth;
    rocket.depth = delay.depth;
    rocket.depth += 1;
    //delay.debug = true;
    delayGroup.add(delay);
  }
}

function spawnLIFESUP(){
  if(frameCount % 200 === 0){
    let lifeUp = createSprite(500, 150, 10, 10);
    lifeUp.addImage(lifeUpImg);
    lifeUp.scale = 0.12;
    lifeUp.velocityX = Math.round(random(-(4 + TimeWorld * 2/100), -(7 + TimeWorld * 2/100)));
    lifeUp.lifetime = windowWidth/lifeUp.velocityX;
    lifeUp.y = Math.round(random(windowHeight-1, windowHeight-663));
    lifeUp.x = windowWidth;
    rocket.depth = lifeUp.depth;
    rocket.depth += 1;
    //lifeUp.debug = true;
    lifeUpGroup.add(lifeUp);
  }
}

function laser1x(){
  let bala1 = createSprite(200, 200, 19.1, 4.6);
  bala1.shapeColor = "yellow";
  bala1.velocityX = + 10;
  bala1.lifetime = bala1.velocityX / windowWidth;
  bala1.x = rocket.x + 40;
  bala1.y = rocket.y;
  bala1.depth = rocket.depth;
  bala1.depth += 1;
  lasersX1Group.add(bala1);
}

function laser2x(){
  let bala2 = createSprite(200, 200, 18.1, 3.6);
  bala2.shapeColor = "yellow";
  bala2.velocityX = + 10;
  bala2.lifetime = bala2.velocityX / windowWidth;
  bala2.x = rocket.x + 19;
  bala2.y = rocket.y + 11;
  bala2.depth = rocket.depth;
  bala2.depth += 1;
  lasersX2Group.add(bala2);
  let bala3 = createSprite(200, 200, 18.1, 3.6);
  bala3.shapeColor = "yellow";
  bala3.velocityX = + 10;
  bala3.lifetime = bala3.velocityX / windowWidth;
  bala3.x = rocket.x + 19;
  bala3.y = rocket.y - 11;
  bala3.depth = rocket.depth;
  bala3.depth += 1;
  lasersX2Group.add(bala3);
}

function laser4x(){
  let bala4 = createSprite(200, 200, 18.1, 3.6);
  bala4.shapeColor = "yellow";
  bala4.velocityX = + 10;
  bala4.lifetime = bala4.velocityX / windowWidth;
  bala4.x = rocket.x + 19;
  bala4.y = rocket.y + 11;
  bala4.depth = rocket.depth;
  bala4.depth += 1;
  lasersX4Group.add(bala4);
  let bala5 = createSprite(200, 200, 18.1, 3.6);
  bala5.shapeColor = "yellow";
  bala5.velocityX = + 10;
  bala5.lifetime = bala5.velocityX / windowWidth;
  bala5.x = rocket.x + 19;
  bala5.y = rocket.y - 11;
  bala5.depth = rocket.depth;
  bala5.depth += 1;
  lasersX4Group.add(bala5);
  let bala6 = createSprite(200, 200, 18.1, 3.6);
  bala6.shapeColor = "yellow";
  bala6.velocityX = + 10;
  bala6.lifetime = bala6.velocityX / windowWidth;
  bala6.x = rocket.x + 19;
  bala6.y = rocket.y + 16;
  bala6.depth = rocket.depth;
  bala6.depth += 1;
  lasersX4Group.add(bala6);
  let bala7 = createSprite(200, 200, 18.1, 3.6);
  bala7.shapeColor = "yellow";
  bala7.velocityX = + 10;
  bala7.lifetime = bala7.velocityX / windowWidth;
  bala7.x = rocket.x + 19;
  bala7.y = rocket.y - 16;
  bala7.depth = rocket.depth;
  bala7.depth += 1;
  lasersX4Group.add(bala7);
}

function laser8x(){
  let bala8 = createSprite(200, 200, 18.1, 3.6);
  bala8.shapeColor = "cyan";
  bala8.velocityX = + 10;
  bala8.lifetime = bala8.velocityX / windowWidth;
  bala8.x = rocket.x + 19;
  bala8.y = rocket.y + 11;
  bala8.depth = rocket.depth;
  bala8.depth += 1;
  lasersX8Group.add(bala8);
  let bala9 = createSprite(200, 200, 18.1, 3.6);
  bala9.shapeColor = "cyan";
  bala9.velocityX = + 10;
  bala9.lifetime = bala9.velocityX / windowWidth;
  bala9.x = rocket.x + 19;
  bala9.y = rocket.y - 11;
  bala9.depth = rocket.depth;
  bala9.depth += 1;
  lasersX8Group.add(bala9);
  let bala10 = createSprite(200, 200, 18.1, 3.6);
  bala10.shapeColor = "cyan";
  bala10.velocityX = + 10;
  bala10.lifetime = bala10.velocityX / windowWidth;
  bala10.x = rocket.x + 19;
  bala10.y = rocket.y + 16;
  bala10.depth = rocket.depth;
  bala10.depth += 1;
  lasersX8Group.add(bala10);
  let bala11 = createSprite(200, 200, 18.1, 3.6);
  bala11.shapeColor = "cyan";
  bala11.velocityX = + 10;
  bala11.lifetime = bala11.velocityX / windowWidth;
  bala11.x = rocket.x + 19;
  bala11.y = rocket.y - 16;
  bala11.depth = rocket.depth;
  bala11.depth += 1;
  lasersX8Group.add(bala11);
}

function destroyasteroid(laser,asteroid){
  laser.destroy();
  asteroidLife = asteroidLife - 1;
  if(asteroidLife < 0){ 
    destroySound.play();
    asteroid.remove();
    asteroidLife = 3;
    score = score + 5;
    TimeWorld = TimeWorld + 0.5;
    //asteroid.addImage(asteroidDestroyedImg);
  } 
}

function destroyCoin(coin){
  coin.remove();
  coinSound.play();
  coins = coins + 1;
}

function destroyDelay(delay){
  delay.remove();
  delaySound.play();
  TimeWorld = 0;
}

function destroyLifeUp(lifesUp){
  lifesUp.remove();
  lifeUpSound.play();
  lifes = lifes + 1;
  if(lifes > 6){
    lifes = lifes - 1;
  }
}

function destroyPowerUp(powersUp){
  powersUp.remove();
  powerUpSound.play();
}

function reset(){
  lasersX1Group.destroyEach();
  lasersX2Group.destroyEach();
  lasersX4Group.destroyEach();
  lasersX8Group.destroyEach();
  starsGroup.destroyEach();
  asteroidsGroup.destroyEach();
  coinsGroup.destroyEach();
  powerGroup.destroyEach();
  delayGroup.destroyEach();
  lifeUpGroup.destroyEach();
  rocket.addImage(rocketImg);
  rocket.scale = 0.25;
  gameState = "Stage1";
  restartBotton.visible = false;
  gun = "lvl1";
}

function base(){
  rocket.visible = true;
  spawnSTARS1();
  spawnSTARS2();
  spawnCOINS();
  spawnPOWERS();
  spawnDELAYS();
  spawnLIFESUP();
  lifesIcons();
  gunsXP();
  coinIcon.visible = true;
  if(cambio === "A"){
    laserAutomatic();
  }
  if(keyDown("W")){
    rocket.y = rocket.y - 6;
  }
  if(keyDown("S")){
    rocket.y = rocket.y + 6;
  }
  if(keyDown("A")){
    rocket.x = rocket.x - 6;
  }
  if(keyDown("D")){
    rocket.x = rocket.x + 6;
  }
  if(keyDown("UP")){
    rocket.y = rocket.y - 6;
  }
  if(keyDown("DOWN")){
    rocket.y = rocket.y + 6;
  }
  if(keyDown("LEFT")){
    rocket.x = rocket.x - 6;
  }
  if(keyDown("RIGHT")){
    rocket.x = rocket.x + 6;
  }
  textSize(36);
  fill("white");
  text("x" +coins, windowWidth/2+595, windowHeight/2-282);
  textSize(47);
  fill("red");
  text("SCORE: ", windowWidth/2-115, windowHeight/2-290);
  fill("white");
  text(" " +score, windowWidth/2+60, windowHeight/2-290);
  if(gameState == "Stage1"){
    coinsGroup.bounceOff(rocket,destroyCoin);
  }
  delayGroup.bounceOff(rocket,destroyDelay);
  lifeUpGroup.bounceOff(rocket,destroyLifeUp);
}

function gunsXP(){
  if(rocket.isTouching(powerGroup) && gun == "lvl1"){
    powerGroup.bounceOff(rocket, destroyPowerUp);
    gun = "lvl2";
  }
  if(rocket.isTouching(powerGroup) && gun == "lvl2"){
    powerGroup.bounceOff(rocket, destroyPowerUp);
    gun = "lvl3";
  }
  if(rocket.isTouching(powerGroup) && gun == "lvl3"){
    powerGroup.bounceOff(rocket, destroyPowerUp);
    gun = "lvl4";
  }
  if(rocket.isTouching(powerGroup) && gun == "lvl4"){
    powerGroup.bounceOff(rocket, destroyPowerUp);
  }
}

function laserAutomatic(){
  gunsXP();
  if(frameCount % 7 === 0){
    if(gun == "lvl1"){
      laser1x();
    }
    if(gun == "lvl2"){
      laser2x();
    }
    if(gun == "lvl3"){
      laser4x();
    }
    if(gun == "lvl4"){
      laser8x();
    }
  }
}

//function laserManual(){
  //gunsXP();
  //if(keyDown("SPACE") && gun == "lvl1"){
  //  laser1x();
  //}
  //if(keyDown("SPACE") && gun == "lvl2"){
  //  laser2x();
  //}
  //if(keyDown("SPACE") && gun == "lvl3"){
  //  laser4x();
  //}
  //if(keyDown("SPACE") && gun == "lvl4"){
  //  laser8x();
  //}
//}

function lifesIcons(){
  if(lifes == 1){
    lifeIcon1.visible = true;
    lifeIcon2.visible = false;
  }
  if(lifes == 2){
    lifeIcon1.visible = true;
    lifeIcon2.visible = true;
    lifeIcon3.visible = false;
  }
  if(lifes >= 3){
    lifeIcon1.visible = true;
    lifeIcon2.visible = true;
    lifeIcon3.visible = true;
  }
  if(lifes == 4){
    lifeIcon1.addImage(lifeIcon2xImg);
  } else {lifeIcon1.addImage(lifeIconImg)}
  if(lifes == 5){
    lifeIcon1.addImage(lifeIcon2xImg);
    lifeIcon2.addImage(lifeIcon2xImg);
  } else {lifeIcon2.addImage(lifeIconImg)}
  if(lifes == 6){
    lifeIcon1.addImage(lifeIcon2xImg);
    lifeIcon2.addImage(lifeIcon2xImg);
    lifeIcon3.addImage(lifeIcon2xImg);
  } else {lifeIcon3.addImage(lifeIconImg)}
}

function iconsRemove(){
  lifeIcon1.visible = false;
  lifeIcon2.visible = false;
  lifeIcon3.visible = false;
  coinIcon.visible = false;
}


function quit(){
  lasersX1Group.destroyEach();
  lasersX2Group.destroyEach();
  lasersX4Group.destroyEach();
  lasersX8Group.destroyEach();
  starsGroup.destroyEach();
  asteroidsGroup.destroyEach();
  coinsGroup.destroyEach();
  powerGroup.destroyEach();
  delayGroup.destroyEach();
  lifeUpGroup.destroyEach();
  rocket.addImage(rocketImg);
  rocket.scale = 0.25;
  rocket.x = windowWidth/2-750;
  rocket.y = windowHeight/2;
  rocket.velocityX = 0;
  quitBotton.visible = false;
  gameState = "serve";
  lifes = 3;
  score = 0;
  TimeWorld = 0;
  frameCount = 0;
  gun = "lvl1";
}
//Jogo em atualização =D...

function keyPressed() {
  if(cambio == "M" && gameState === "Stage1"){
    if(keyCode === 32 && gun == "lvl1"){
      laser1x();
    }
    if(keyCode === 32 && gun == "lvl2"){
      laser2x();
    }
    if(keyCode === 32 && gun == "lvl3"){
      laser4x();
    }
    if(keyCode === 32 && gun == "lvl4"){
      laser8x();
    }
  }
}