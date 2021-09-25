// index.js
var rand, sum,rand1;
function createRand() {
  rand = []; 
  sum = 0;
  rand1 = []; 
for(var i = 0 ; ; i++){ 
  if(rand.length<6){ 
        generateRandom(6);
  }else{ 
    break; 
 } 
} 

for(var i = 0 ; i < rand.length; i++){ 
} 

function generateRandom(count){ 
   var rand2 = parseInt(Math.random()*31*1); 
   for(var i = 0 ; i < rand.length; i++){ 
        if(rand[i] == rand2){ 
             return false; 
        }    
   } 
   rand.push(rand2); 
   console.log(rand[i]); 
} 
    var m = (Math.random() * 13).toFixed(0) * 1; 
    rand1.push(m); 
    console.log(rand1[0]); 
};

Page({
  onLoad: function() {
    createRand(); 
    this.setData({
      rand: rand,
      rand1: rand1
    })
  },
  newRand: function() {
    createRand(); 
    this.setData({
      rand: rand,
      rand1: rand1
    })
  }
})