"use strict";
var garden;
(function (garden) {
    window.addEventListener("load", hndLoad);
    function hndLoad() {
        let start = document.getElementById("start");
        start.addEventListener("click", hideScreen1);
        //img click 
        /*let img: HTMLImageElement = <HTMLImageElement>document.getElementById("img");
        img.addEventListener("click", hideScreen1);
        console.log("click");*/
    }
    // hide screen 1 and show screen 2
    function hideScreen1() {
        let screen1 = document.getElementById("Screen1");
        let screen2 = document.getElementById("Screen2");
        screen1.style.display = "none";
        screen2.style.display = "unset";
    }
})(garden || (garden = {})); // namespace klammer
//# sourceMappingURL=main.js.map