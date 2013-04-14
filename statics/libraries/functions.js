/**
 * Created with JetBrains WebStorm.
 * User: irvin
 * Date: 4/7/13
 * Time: 8:48 PM
 * To change this template use File | Settings | File Templates.
 */

// Success Functions

function successPostTag(data, status, xhr){
    "use strict";
    console.log(data);
    console.log(status);
}

function successGetTag(data, status, xhr){
    "use strict";
    console.log(data);
    console.log(status);
    clearResults();
    for(var i in data){
            var resItem = document.createElement("tr");
            var resContain = document.getElementById("containRows");
            var name = document.createElement("td");
            var number = document.createElement("td");
            var lastLoc = document.createElement("td");
            name.innerText = data[i].name;
            number.innerText = data[i].number;
            lastLoc.innerText = data[i].lastLoc;

            resItem.appendChild(name);
            resItem.appendChild(number);
            resItem.appendChild(lastLoc);
            resContain.appendChild(resItem);
    }
}

function successPutTag(data, status, xhr){
    "use strict";
    console.log(data);
    console.log(status);
}

function successDelTag(data, status, xhr){
    "use strict";
    console.log(data);
    console.log(status);
}


// Other Functions!

function clearResults(){
    "use strict";
    var resultTable = document.getElementById("containRows").children;
    var lenResultTable = resultTable.length;

    for(var i = lenResultTable - 1; i >= 0; --i){
            resultTable[i].remove();
    }

}