class KGLProcurement {
    constructor(nameOfProduce, tonnageInkgs,totalCost,salesDate,currency){
        this.nameOfProduce = nameOfProduce;
        this.tonnageInkgs = tonnageInkgs;
        this.totalCost = totalCost;
        this.salesDate = salesDate;
        this.currency = currency;

        getDetails(){
            return `Produce: ${this.nameOfProduce}, Tonnage(kg): ${this.tonnageInkgs}, Total Cost: ${this.totalCost} ${this.currency}, Sales Date: ${this.salesDate}`;
        }
    }
}

class KGLCreditSale extends KGLProcurement {
    constructor(nameOfProduce, tonnageInkgs,totalCost,salesDate,currency, isCreditSale,dueDate){
        //calls the parent class constructor
        super(nameOfProduce, tonnageInkgs,totalCost,salesDate,currency);
        //additional properties for the child class
        this.isCreditSale = true;
        this.dueDate = dueDate;

    }
}


let sakeProcurement = new KGLProcurement("Sake", 2000, 5000, "2024-06-15", "USD");
console.log(sakeProcurement.getDetails()); 
// Output: Produce: Sake, Tonnage(kg): 2000, Total Cost: 5000 USD, Sales Date: 2024-06-15   

let creditSale = new KGLCreditSale("Coffee", 1500, 3000, "2024-06-20", "USD", true, "2024-07-20");
console.log(creditSale.getDetails()); 
// Output: Produce: Coffee, Tonnage(kg): 1500, Total Cost: 3000 USD, Sales Date: 2024-06-20 

