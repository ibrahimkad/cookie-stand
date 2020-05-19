'use strict';

var totalAll = 0;
var div1 = document.getElementById('cookie');
var tableE1 = document.createElement('table');
div1.appendChild(tableE1);
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var shops = [];

function Shop(name, minCust, maxCust, avgSaleCookie,cookiesales,) {
    this.name = name;
    this.min = minCust;
    this.max = maxCust;
    this.avg = avgSaleCookie;
    this.cookiesSales =cookiesales ;
    shops.push(this);
    // cookiesSales.push(getCookiesPerHour);
    // cookiesSales(this);
    // cookiesSales.push();
    // cookiesSales.push(a);
}


Shop.prototype.numOfCustPerHour = function () {

    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;

}
Shop.prototype.getCookiesPerHour = function () {

    for (var i = 0; i < hours.length; i++) {
        var a = Math.round(this.numOfCustPerHour(this.min, this.max) * this.avg)

        cookiesSales.push(a);
        totalAll += a;
    }
    console.log(totalAll);


};

function renderHeader() {
    var trEl = document.createElement('tr');
    tableE1.appendChild(trEl);
    var thEl = document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent = '     ';
    for (var i = 0; i < hours.length; i++) {
        var thEl = document.createElement('th');
        trEl.appendChild(thEl);
        thEl.textContent = hours[i];

    }


}





Shop.prototype.render = function () {
    var trEl = document.createElement('tr');
    tableE1.appendChild(trEl);
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = this.name;
    for (var j = 0; j < hours.length; j++) {
        var tdEl = document.createElement('td');

        tdEl.textContent = this.cookiesSales[j];
        trEl.appendChild(tdEl);

    };
}


    renderHeader();
    // render();

    // total();
    document.write(`the total is ${totalAll}`);

    var Seattle = new Shop('seattle', 23, 65, 6.3,0);
    var Tokyo = new Shop('Tokyo', 3, 24, 1.2,0);
    var Dubai = new Shop('Dubai', 11, 38, 3.7,0);
    var Paris = new Shop('Paris', 20, 38, 2.3,0);
    var Lima = new Shop('Lima', 2, 16, 4.6,0);



    for (var i = 0; i < shops.length; i++) {
        shops[i].render();
    }


    // getCookiesPerHour(min,max,avg);



    // function total() {
    //     for (var i = 0; i < getCookiesPerHour.length; i++) {
    //         totalAll = totalAll + numOfCookie[i];
    //     }
    //     console.log(totalAll);
    // }


    // Shop.prototype.total = function (custPerHour, avg) {
    //     this.total(min, max);
    // }



















    // // for (var i = 0; i < 5; i++) {
    //     var trEl = document.createElement('tr');
    //     tableE1.appendChild(trEl);
    //     trEl.textContent = shops[i];





// // }

// var ul1 = document.createElement('ul');
// div1.appendChild(ul1);
// for (var i = 0; i < hours.length; i++) {
    //     var li1 = document.createElement('li');
    //     ul1.appendChild(li1);
    //     var a = li1.textContent = hours[i] + ` : ` + numOfCookie[i];
    // } 
    // var tableE1 = document.createElement('table');
    // div1.appendChild(tableE1);

    // 15 column
    // for(vari=0;i<15;i++){
//     var `th+${i}` =document.createElement('th');
//     headerRow.appendChild(`th+${i}`);
// }





//row 2- number of cookie per hour
// for (var j = 0; j <= 5; j++) {
//     // table row creation
//     var row = document.createElement("tr");

//     // var row2 = document.createElement('tr');
//     // tableE1.appendChild(row2);

//     for (var i = 0; i < 6; i++) {
//         // create element <td> and text node 
//         //Make text node the contents of <td> element
//         // put <td> at end of the table row
//         var cell = document.createElement("td");
//         var cellText = document.createTextNode("cell is row " + j + ", column " + i);
//         // var td1 = document.createElement('td');
//         // row2.appendChild(td1);
//         // td1.textContent = this.numberOfCookie;
//         // var td2 = document.createElement('td');
//         // row2.appendChild(td2);
//         // td2.textContent = this.numberOfCookie;
//         // var td3 = document.createElement('td');
//         // row2.appendChild(td3);
//         // td3.textContent = this.numberOfCookie;
//         // var td4 = document.createElement('td');
//         // row2.appendChild(td1);
//         // td4.textContent = this.numberOfCookie;
//     }










// var seattle = {
//     name: 'seattle',
//     minCust: 23,
//     maxCust: 65,
//     avgSaleCookie: 6.3,

// }

// var randomCustPerHour = [];
// function numOfCustPerHour(min, max) {
//     for (var i = 0; i < hours.length; i++) {
//         randomCustPerHour.push(Math.floor(Math.random() * (max - min + 1)) + min);

//     }
//     console.log(randomCustPerHour);

// }
// var numOfCookie = [];
// function numberOfCookie(custPerHour, avg) {
//     for (var i = 0; i < hours.length; i++) {
//         // numberOfCookie.push( randomCustPerHour[i]* this.avgSaleCookie);
//         numOfCookie[i] = Math.round(randomCustPerHour[i] * avg);

//     }
//     console.log(numOfCookie);

// }
// function render() {


// }







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