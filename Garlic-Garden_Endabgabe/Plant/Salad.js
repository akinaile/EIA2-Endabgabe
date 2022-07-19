"use strict";
/*
Gemüsegarten-Simulator
Aileen Akin, 266826, MKB2
In Zusammenarbeit mit Vanja Katharina Rau, 262452, MKB6
Teilweise Zusammenarbeit mit Ronja Burger, Joscha Reuther
*/
var farm;
(function (farm) {
    class Salad extends farm.Plant {
        constructor() {
            super("Salad", 90, 1, 1, "<img src=Emojis/Salad.png class=fieldImage>");
        }
    }
    farm.Salad = Salad;
})(farm || (farm = {}));
//# sourceMappingURL=Salad.js.map