//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload()
{
	//load images here
  Dog =loadImage("Dog.png");
  doghappy = loadImage("happydog.png");
}

function setup() {
  database=firebase.database();

	createCanvas(500, 500);

 var foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog = createSprite(400,400,20,20);
  dog.addImage(Dog);
  dog.scale=0.15;
  
 

}


function draw() {  
  background(34,139,34);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(doghappy);
  }

  
  if(keyWentUp(UP_ARROW)){
   
    dog.addImage(Dog);
  }

  drawSprites();
  //add styles here
  textSize(17);
  fill("black");
  text("I am your Puppy 🐶TOMMY..😍 I am Hungry ",100,150);
  fill("black");
  text("Milk Bottles Remaining : "+foodS,170,240);

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x = 0;
  }if(x>0){
    x=x-1
  }


  database.ref('/').update(
    {
      Food:x
    }
  )
}


