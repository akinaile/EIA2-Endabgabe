"use strict";
/*
Gemüsegarten-Simulator
Aileen Akin, 266826, MKB2
In Zusammenarbeit mit Vanja Katharina Rau, 262452, MKB6
Teilweise Zusammenarbeit mit Ronja Burger, Joscha Reuther
*/
var farm;
(function (farm) {
    class Plant {
        name;
        growthTime;
        waterNeed;
        waterNeedTime = 60;
        dungNeed;
        dungNeedTime = 70;
        image;
        constructor(name, _growthTime, _waterNeed, _dungNeed, _image) {
            this.name = name;
            this.growthTime = _growthTime;
            this.waterNeed = _waterNeed;
            this.waterNeedTime = 60;
            this.dungNeed = _dungNeed;
            this.dungNeedTime = 70;
            this.image = _image;
        }
    }
    farm.Plant = Plant;
})(farm || (farm = {}));
//# sourceMappingURL=Plant.js.map