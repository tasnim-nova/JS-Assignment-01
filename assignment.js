// Feet To Mile Converting Program

function feetToMIle(feet){
    if(feet<0){
        return "Warnning! Give a Positive Input.";
    }
    else{
        var mile = feet*0.00018939;
        return mile;
    }
}
var result= feetToMIle(-50) ;
console.log("Converting Feet to Mile=",result);

// Wood Calculating Program

function woodCalculator(chair,table,bed){
    if(chair<0 || table<0 || bed<0){
        return "Bad Input.Give a Positive Value!"
    }
    else{ 
    var totalWood = chair*1 + table*3 + bed*5;
    return totalWood;
    }
}
var woodNeeded = woodCalculator(3,6,4);
console.log("Total Wood Calculation :", woodNeeded);

// Brick Calculating Program

function brickCalculator(buildingHeight){
    if(buildingHeight<1){
        return "No Brick ,No Building!";
    }
    else if(buildingHeight<=10){
        totalBrick = buildingHeight*15*1000;
        return totalBrick;
    }
    else if(buildingHeight>10 || buildingHeight<=20){
        totalBrick1 = (buildingHeight-10)*12*1000 + 10*15*1000;
        return totalBrick1
    }
    else{
        totalBrick2 = (buildingHeight-20)*10*1000 + 10*12*1000 + 10*15*1000;
        return totalBrick2;
    }
}
let brickCalc = brickCalculator(50);
console.log("Total Brick Needed:",brickCalc);

// Shortest Name Friend Finding Program

 function tinyFriend(friends){
     if(friends.length<=0){
         return "Give Some NAME!";
     }
     else{
     var min = friends[0];
     for (i=0; i<friends.length; i++){
        element = friends[i];
        if(element<min){
            element = min;
        }
     }
     return min;
    }
 }

 var friends=['nova','subah','mohaimin','tareq','ferdouse','soleiman'];
 var friends1 = [];
 var shortestFriendsName = tinyFriend(friends);
 var shortestFriendsName1 = tinyFriend(friends1);
 console.log("Your Tiny Friend:",shortestFriendsName);
 console.log("Your Tiny Friend:",shortestFriendsName1);