class Car {
    color='red';
    model='2020';
    engine='V6';
    topSpeed=200;
}


//create an object with a class sale and show how to use a constructor to initialize the properties
class Sale {
    constructor(item, price, quantity) {
        this.item = item;
        this.price = price;
        this.quantity = quantity;
    }
    totalCost() {
        return this.price * this.quantity;
    }
}