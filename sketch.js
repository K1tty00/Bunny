var garden,rabbit;
var gardenImg,rabbitImg;
var Leaf, leaf;
var Apple, apple;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  Leaf = loadImage ("orangeLeaf.png");
  Apple = loadImage ("apple.png");
  var i=0
  
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
  rabbit.setCollider("rectangle", 0,0,600,1200)
  rabbit.debug = true

  Hoja = new Group ();
  Manzana = new Group ();
}


function draw() {
  background(0);
  LEAF();
  APPLE ();
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   
  
  if (Hoja.isTouching(rabbit)){
    rabbit.velocityX = 0
    Hoja.setVelocityYEach(0);
    Hoja.setLifetimeEach(0);
  }
  

  rabbit.x = mouseX;
  rabbit.bounceOff(Manzana,destruir);
  
  drawSprites();
}

function LEAF() {
  if (frameCount % 70 == 0) {
     leaf = createSprite(random(390, 10), 0); 
    leaf.addImage("obstaculo", Leaf);
    leaf.scale = 0.09;
    leaf.velocityY = 4;
    leaf.lifetime = 200;
    
    leaf.debug = false
    Hoja.add(leaf);
  }
}
function APPLE() {
  if (frameCount % 30 == 0) {
     apple = createSprite(random(390, 10), 0); 
    apple.addImage("obstaculo", Apple);
    apple.scale = 0.06;
    apple.velocityY = 4;
    apple.lifetime = 400;
    i=Manzana.minDepth();
    Manzana.add(apple);
  }
}

function destruir(Manzana, apple) {
  apple.destroy();
  //apple.visible=false;
  
}