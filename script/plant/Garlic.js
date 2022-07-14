"use strict";
var garden;
(function (garden) {
    class Garlic extends garden.Plant {
        name = "Garlic";
        growthTime = 300;
        waterNeed = 5;
        dungNeed = 3;
    }
    garden.Garlic = Garlic;
})(garden || (garden = {}));
//# sourceMappingURL=Garlic.js.map