class Item{
    constructor(name, price){   
        this.name = name;
        this.price = price;
    }

    getPrice(){
        return this.price;
    }
}

class PerishableItem extends Item{
    constructor(name, price,dayUntilExpiry){
        super(name, price);
        this.dayUntilExpiry = dayUntilExpiry;
    }
    PerishableItem(dayUntilExpiry){

    }

    getPrice(){
        if(this.dayUntilExpiry >= 5){
            return this.price * 0.05; // 5% discount

        }
        

    }
}


let regularItem = new Item("Laptop", 1000);
let perishableItem1 = new PerishableItem("Milk", 50, 5);

console.log(`Regular Item Price: $${regularItem.getPrice()}`); // Output: Regular Item Price: $
console.log(`Perishable Item Price (5 days to expiry): $${perishableItem1.getPrice()}`); // Output: Perishable Item Price (5 days to expiry): $40