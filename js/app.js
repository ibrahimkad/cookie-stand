'use strict';

var totalAll = 0;
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

function Shop(name, minCust, maxCust, avgSaleCookie) {
    this.name = name;
    this.min = minCust;
    this.max = maxCust;
    this.avg = avgSaleCookie;
}


Shop.prototype.numOfCustPerHour = function (min, max) {
    this.numOfCustPerHour(min, max);

}
Shop.prototype.numOfCookie = function (custPerHour, avg) {
    this.numOfCookie(min, max);
}
Shop.prototype.render = function () {
    var div1 = document.getElementById('cookie');
    // var ul1 = document.createElement('ul');
    // div1.appendChild(ul1);
    // for (var i = 0; i < hours.length; i++) {
    //     var li1 = document.createElement('li');
    //     ul1.appendChild(li1);
    //     var a = li1.textContent = hours[i] + ` : ` + numOfCookie[i];
    // } 
    var tableE1 = document.createElement('table');
    div1.appendChild(tableE1);

    var headerRow = document.createElement('tr');
    tableE1.appendChild(headerRow);
    // 15 column
    // for(vari=0;i<15;i++){
    //     var `th+${i}` =document.createElement('th');
    //     headerRow.appendChild(`th+${i}`);
    // }

    var th1 = document.createElement('th');
    headerRow.appendChild(th1);
    var th2 = document.createElement('th');
    headerRow.appendChild(th2);
    var th3 = document.createElement('th');
    headerRow.appendChild(th3);
    var th4 = document.createElement('th');
    headerRow.appendChild(th4);
    var th5 = document.createElement('th');
    headerRow.appendChild(th5);
    var th6 = document.createElement('th');
    headerRow.appendChild(th6);
    var th7 = document.createElement('th');
    headerRow.appendChild(th7);
    var th8 = document.createElement('th');
    headerRow.appendChild(th8);
    var th9 = document.createElement('th');
    headerRow.appendChild(th9);
    var th10 = document.createElement('th');
    headerRow.appendChild(th10);
    var th11 = document.createElement('th');
    headerRow.appendChild(th11);
    var th12 = document.createElement('th');
    headerRow.appendChild(th12);
    var th13 = document.createElement('th');
    headerRow.appendChild(th13);
    var th14 = document.createElement('th');
    headerRow.appendChild(th14);
    var th15 = document.createElement('th');
    headerRow.appendChild(th15);



    //row 2- number of cookie per hour
    for (var j = 0; j <= 5; j++) {
        // table row creation
        var row = document.createElement("tr");

        // var row2 = document.createElement('tr');
        // tableE1.appendChild(row2);

        for (var i = 0; i < 6; i++) {
            // create element <td> and text node 
            //Make text node the contents of <td> element
            // put <td> at end of the table row
            var cell = document.createElement("td");
            var cellText = document.createTextNode("cell is row " + j + ", column " + i);
            // var td1 = document.createElement('td');
            // row2.appendChild(td1);
            // td1.textContent = this.numberOfCookie;
            // var td2 = document.createElement('td');
            // row2.appendChild(td2);
            // td2.textContent = this.numberOfCookie;
            // var td3 = document.createElement('td');
            // row2.appendChild(td3);
            // td3.textContent = this.numberOfCookie;
            // var td4 = document.createElement('td');
            // row2.appendChild(td1);
            // td4.textContent = this.numberOfCookie;
        }



    }

    Shop.prototype.total = function (custPerHour, avg) {
        this.total(min, max);
    }
}



    // var seattle = {
    //     name: 'seattle',
    //     minCust: 23,
    //     maxCust: 65,
    //     avgSaleCookie: 6.3,

    // }

    function numOfCustPerHour(min, max) {
        var randomCustPerHour = [];
        for (var i = 0; i < hours.length; i++) {
            randomCustPerHour.push(Math.floor(Math.random() * (max - min + 1)) + min);

        }
        console.log(randomCustPerHour);

    }
    function numberOfCookie(custPerHour, avg) {
        var numOfCookie = [];
        for (var i = 0; i < hours.length; i++) {
            // numberOfCookie.push( randomCustPerHour[i]* this.avgSaleCookie);
            numOfCookie[i] = Math.round(custPerHour[i] * avg);

        }
        console.log(numOfCookie);

    }
    // function render() {


    // }
    function total() {
        for (var i = 0; i < numOfCookie.length; i++) {
            totalAll = totalAll + numOfCookie[i];
        }
        console.log(totalAll);
    }






    // numOfCustPerHour();
    // numberOfCookie();
    // render();
    // total();
    document.write(`the total is ${totalAll}`);

    var seattle = new Shop('seattle', 23, 65, 6.3);
    console.log(seattle);

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
//gggg

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