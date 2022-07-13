namespace farm {

    export class Product {

        name: string;
        currentPrice: number; // jedes Produkt hat einen Preis
        maxPrice: number; 
        minPrice: number; 
        amount: number = 0;

        constructor(name: string, _minPrice: number, _maxPrice: number) {
            this.name = name;
            this.minPrice = _minPrice;
            this.maxPrice = _maxPrice;
            this.changePrice();
        }
 
        changePrice(): void {
            this.currentPrice = Math.floor(Math.random() * (this.minPrice - this.maxPrice)); // ändert alle Preise auf einmal?
        }

    }
}
