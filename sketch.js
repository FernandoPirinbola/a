var starImg,bgImg;
var star, starBody;
var fairy, fairy1;
var fairy2, starryNight;
var starImg1, fairyImg;
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    fairyImg = loadImage("images/fairy.png");
    fairy1 = loadImage("images/fairyImage1.png");
    fairy1 = loadImage("images/fairyImage2.png");
    starryNight = loadImage("images/starryNight.jpg");
    starImg1 = loadImage("images/starImage.png");
    

    
    //carregar animação de fada 
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada

    //criar sprite de fada e adicionar animação para fada

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    fairy = createSprite(650,30);
	fairy.addImage(fairyImg);
	fairy.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
 function draw() {
    background("purple");
    drawSprites();
 }