"use strict";
var farm;
(function (farm) {
    class Product {
        name;
        currentPrice; // jedes Produkt hat einen Preis
        maxPrice;
        minPrice;
        amount = 0;
        constructor(name, _minPrice, _maxPrice) {
            this.name = name;
            this.minPrice = _minPrice;
            this.maxPrice = _maxPrice;
            this.changePrice();
        }
        changePrice() {
            this.currentPrice = Math.floor(Math.random() * (this.minPrice - this.maxPrice)); // ändert alle Preise auf einmal?
        }
    }
    farm.Product = Product;
})(farm || (farm = {}));
//# sourceMappingURL=Product.js.map