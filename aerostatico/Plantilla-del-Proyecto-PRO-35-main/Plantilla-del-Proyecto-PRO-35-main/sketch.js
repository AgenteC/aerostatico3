var balloon,balloonImage1,balloonImage2;
var balloonPosition
var database
// crea aquí la base de datos y la variable de posición 

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }


//Función para configurar el entorno inicial
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,250,650);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  var balloonPosition=database.ref('balloon/height');
  balloonPosition.on("value",readHeight, showError)

  textSize(20); 
}

// función para mostrar la Interfaz del Usuario (UI por sus siglas en inglés)
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //escribe el código para mover el globo aerostático en dirección hacia la izquierda
    
updateHeight(-10,0)

  }
   if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    updateHeight(10,0)
    //escribe el código para mover el globo aerostático en dirección hacia la derecha
  }
   if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    updateHeight(0,-10)
    balloon.scale=balloon.scale -0.01;
  }
   if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    updateHeight(0,10)
    balloon.scale=balloon.scale +0.01
    //escribe el código para mover el globo aerostático en dirección descendente
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**¡Utiliza las teclas de flecha para mover el globo aerostático!",40,40);
}

function readHeight(data){

height = data.val();
balloon.x = height.x,
balloon.y = height.y

}

function showError(){

console.log("Error in writing to the datebase")

}

function updateHeight(x,y){

database.ref('balloon/height').set({
  'x': height.x + x,
  'y': height.y + y
})

}