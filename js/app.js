'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
var randomCustPerHour = [];
var numOfCookie = [];


var seattle = {
    name: 'seattle',
    minCust: 23,
    maxCust: 65,
    avgSaleCookie: 6.3,
   
}

    function numOfCustPerHour(min, max) {
        for (var i = 0; i < hours.length; i++) {
            randomCustPerHour.push(Math.floor(Math.random() * (max - min + 1)) + min);

        }
        console.log(randomCustPerHour);

    }
     function numberOfCookie(custPerHour, avg) {
        for (var i = 0; i < hours.length; i++) {
            // numberOfCookie.push( randomCustPerHour[i]* this.avgSaleCookie);
            numOfCookie[i] = Math.round(custPerHour[i] * avg);

        }
        console.log(numOfCookie);

    }
         function render() {
            var div1 = document.getElementById('cookie');
            var ul1 = document.createElement('ul');
            div1.appendChild(ul1);
            for (var i = 0; i <hours.length; i++) {
                var li1 = document.createElement('li');
                ul1.appendChild(li1);
                var a = li1.textContent =hours[i]+` : `+ numOfCookie[i];
            }

        }
        var totalAll = 0;
        function total(){
            for(var i = 0; i < numOfCookie.length; i++){
               totalAll = totalAll + numOfCookie[i];
            }
            console.log(totalAll);
        }
        



    

numOfCustPerHour(seattle.minCust, seattle.maxCust);
numberOfCookie(randomCustPerHour, seattle.avgSaleCookie);
render();
total();
document.write(`the total is ${totalAll}`);


 // numOfCustPerHour: function (min, max) {
    //     for (var i = 0; i < hours.length; i++) {
    //         randomCustPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);

    //     }
    //     console.log(randomCustPerHour);

    // },
    // numberOfCookie: function (min, max) {
    //     for (var i = 0; i < hours.length; i++) {
    //         // numberOfCookie.push( randomCustPerHour[i]* this.avgSaleCookie);
    //         numOfCookie[i] = this.randomCustPerHour[i] * this.avgSaleCookie;

    //     }
    //     console.log(numOfCookie);


    //     render: function () {
    //         var div1 = document.getElementById('cookie');
    //         var ul1 = document.createElement('ul');
    //         div1.appendChild(ul1);
    //         for (var i = 0; i < 15; i++) {
    //             var li1 = document.createElement('li');
    //             ul1.appendChild(li1);
    //             var a = li1.textContent = numOfCookie[i];
    //         }

    //     }



    // }

//     randomCust: function () {
    //         return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust / 14;
    //     }
    //        
            //         return a
            //     }
            //          purPerHour: function () {

                //         for (var i = 0; i < 15; i++) {
                    //             //Math.floor(Math.random() * (seattle.maxCust - seattle.minCust)) + seattle.minCust;
//             var rand = Math.floor(Math.random() * (seattle.maxCust - seattle.minCust)) + seattle.minCust;

//             purPerHour[i] = 6.3 * rand;

//             //console.log(rand);
//             seattle1[i] = rand;

//         }



//         return rand;
//     }


// }


//console.log(seattle);



//console.log(purPerHour);
// for(var j=0;j<15;j++){
//     var sea =parseInt(seattle1[j]);
//     console.log(sea);
// }
//console.log(seattle1);

// seattle1.randomCust();
// seattle1.render();
// seattle1.purPerHour();