"use strict";
var garden;
(function (garden) {
    window.addEventListener("load", hndLoad);
    function hndLoad() {
        let start = document.getElementById("start");
        start.addEventListener("click", hideScreen1);
    }
    // hide screen 1 and show screen 2
    function hideScreen1() {
        let screen1 = document.getElementById("Screen1");
        let screen2 = document.getElementById("Screen2");
        screen1.style.display = "none";
        screen2.style.display = "unset";
        createFields();
    }
    // create fields
    function createFields() {
        //iterate through rows
        for (let index = 0; index < 7; index++) { //zählt die felder bis 7, selektiert die reihen 
            document.querySelector("row" + index);
            let rows = document.getElementById("row" + index);
            //erstellt einzelne felder in reihen
            for (let index = 0; index < 9; index++) { // erstellt 7 Reihen
                let field = document.createElement("div");
                field.classList.add("field");
                rows.appendChild(field);
                //erstellt für die fields jeweils eine progessbar, die den state abbilden
                let stateScreen = document.createElement("div");
                stateScreen.classList.add("state");
                field.appendChild(stateScreen);
            }
        }
    }
})(garden || (garden = {})); // namespace klammer
//# sourceMappingURL=main.js.map