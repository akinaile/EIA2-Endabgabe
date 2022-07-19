"use strict";
/*
Gemüsegarten-Simulator
Aileen Akin, 266826, MKB2
In Zusammenarbeit mit Vanja Katharina Rau, 262452, MKB6
Teilweise Zusammenarbeit mit Ronja Burger, Joscha Reuther
*/
var farm;
(function (farm) {
    class Garlic extends farm.Plant {
        constructor() {
            super("Garlic", 300, 5, 3, "<img src=Emojis/Garlic.png class=fieldImage>");
        }
    }
    farm.Garlic = Garlic;
})(farm || (farm = {}));
//# sourceMappingURL=Garlic.js.map