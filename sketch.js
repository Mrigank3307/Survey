var canvas , playerCount , database , responderCount , index


function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
database = firebase.database();
count1 = new count();

form1 = new Form();
}

function draw() {
  background(255); 

 // if (keyDown("SPACE")) {
  //  ke()
    //updateCount(responderCount)

    //if (responderCount !== undefined){
      //console.log(responderCount);
      //}
  //}

  getCount();
 


count1.display();
form1.display();

  drawSprites();
}

function ke () {
  responderCount = responderCount + 1;
//updateCount(responderCount)
}

function getCount () {
  var playerCountRef = database.ref('respondersCount');
  playerCountRef.on("value",function (data){
    responderCount = data.val();
  }) 
}

function updateCount(count){
  database.ref('/').update({
    respondersCount: count
  });
}

