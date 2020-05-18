'use strict';
var seattle1 = [];
var purPerHour = [];
var seattle = {
    minCust: 23,
    maxCust: 65,
    avgSaleCookie: 6.3,

    randomCust: function () {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust / 14;
    }
    render: function () {
        var div1 = document.getElementById('cookie');
        var ul1 = document.createElement('ul');
        div1.appendChild(ul1);

        for (var i = 0; i < 15; i++) {
            var li1 = document.createElement('li');
            ul1.appendChild(li1);
            var a = li1.textContent = seattle1[i];
        }
        return a
    }
    purPerHour: function () {

        for (var i = 0; i < 15; i++) {
            //Math.floor(Math.random() * (seattle.maxCust - seattle.minCust)) + seattle.minCust;
            var rand = Math.floor(Math.random() * (seattle.maxCust - seattle.minCust)) + seattle.minCust;

            purPerHour[i] = 6.3 * rand;

            //console.log(rand);
            seattle1[i] = rand;

        }


        return rand;
    }


}

//console.log(seattle);



//console.log(purPerHour);
// for(var j=0;j<15;j++){
//     var sea =parseInt(seattle1[j]);
//     console.log(sea);
// }
//console.log(seattle1);
seattle1.randomCust();
seattle1.render();
seattle1.purPerHour();