"use strict";
/*
Gemüsegarten-Simulator
Aileen Akin, 266826, MKB2
In Zusammenarbeit mit Vanja Katharina Rau, 262452, MKB6
Teilweise Zusammenarbeit mit Ronja Burger, Joscha Reuther
*/
var farm;
(function (farm) {
    class Potato extends farm.Plant {
        constructor() {
            super("Potato", 120, 2, 1, "<img src=Emojis/Potato.png class=fieldImage>");
        }
    }
    farm.Potato = Potato;
})(farm || (farm = {}));
//# sourceMappingURL=Potato.js.map