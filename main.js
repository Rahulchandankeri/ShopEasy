var eventdate = new Date("Apr 20, 2021 13:00:00").getTime();

var x = setInterval(function(){

    var now = new Date().getTime();
    
    var path = eventdate - now;


    var seconds  =  Math.floor(path % (1000 * 60) / (1000)); // Calculation to get ms in a seconds (In 60min)

    var minutes  =  Math.floor(path % (1000 * 60 * 60) / (1000 * 60)); // Calculation to get ms in a minute (In 60 Mins)

    var hours    =  Math.floor(path % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));  // Calculation to get ms  in a hour 

    var days     =  Math.floor(path  / (1000 * 60 * 60 * 24)); // Calculation to get Milliseconds in a day 

    document.getElementById("current").innerHTML = days + "d" + " " + hours + "h"  + " " +  minutes + "m"  + " " +  seconds + "s";

    if (path < 0) {
        clearInterval(x);
        document.getElementById("durrent").innerHTML = "Product is live";
    }
} ,1000);

   