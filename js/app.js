'use strict';
var seattle1=[];
var seattle ={
    minCust: 23 ,
    maxCust:65,
    avgSaleCookie:6.3,
    
    randomCust:function() {
        return  Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust / 14 ;
    }
    
    
}

//console.log(seattle);

var purPerHour=[];
function randomCust(minCust,maxCust){
        for (var i=0;i<15;i++){
            //Math.floor(Math.random() * (seattle.maxCust - seattle.minCust)) + seattle.minCust;
           var rand=Math.floor(Math.random() * (seattle.maxCust - seattle.minCust)) + seattle.minCust;
           
           purPerHour[i]=6.3*rand
           
           //console.log(rand);
            seattle1[i]=rand ;
            
        }
        
        
        return rand;
    }
    
    //console.log(purPerHour);
// for(var j=0;j<15;j++){
//     var sea =parseInt(seattle1[j]);
//     console.log(sea);

// }
//console.log(seattle1);
var div1=document.getElementById('cookie');
var ul1=document.createElement('ul');
div1.appendChild(ul1);

for(var i=0;i<15;i++){
    var li1 =document.createElement('li');
    ul1.appendChild(li1);
    li1.textContent=seattle1[i];

}

randomCust();