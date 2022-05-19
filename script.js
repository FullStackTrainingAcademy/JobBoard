"use strict";
var start = new Date().getTime()

$.ajax({
    url: "https://random-names-api.herokuapp.com/random",
    method: "GET",
    success: function(result) {
        var end = new Date().getTime();
        document.querySelector('#stopwatch').textContent = `Loaded in ${(end-start)/1000} seconds`
        document.querySelector("#word").textContent = result.body.name
    },
    error: function(error) {
        console.log(error)
        document.querySelector('#stopwatch').textContent = `Loaded in ${(end-start)/1000} seconds`
    }
});


start = new Date().getTime()

$.ajax({
    url: "https://random-data-api.com/api/beer/random_beer",
    method: "GET",
    success: function (result){
        var end = new Date().getTime();
        document.querySelector('#loadtime').textContent = `Loaded in ${(end-start)/1000} seconds`
        console.log(result)
        document.querySelector("#word2").textContent = result.name
    },
    error: function(error){
        console.log("It failed")
        console.log(error)
        document.querySelector('#loadtime').textContent = `Loaded in ${(end-start)/1000} seconds`
    }
})




// var before_loadtime = new Date().getTime();  
// window.onload = Pageloadtime;  
// function Pageloadtime() {  
//     var aftr_loadtime = new Date().getTime();  
//     // Time calculating in seconds  
//     pgloadtime = (aftr_loadtime - before_loadtime) / 1000  

//     document.getElementById("loadtime").innerHTML = "Page load time is <font color='red'><b>" + pgloadtime + "</b></font> Seconds";  
// }  


