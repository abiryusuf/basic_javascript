var scores = [24, 32, 18];
var arrayLength = scores.length;
var roundNumber = 0;

var smg  = "";



for (var i = 0; i<arrayLength; i ++){
    roundNumber = (i + 1);

    smg = "Round " + roundNumber +  " : "; 

    smg += scores[i];
    console.log(smg)
}