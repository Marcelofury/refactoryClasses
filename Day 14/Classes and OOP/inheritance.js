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

let sakeProcurement = new KGLProcurement("Sake", 2000, 5000, "2024-06-15", "USD");
console.log(sakeProcurement.getDetails()); 
// Output: Produce: Sake, Tonnage(kg): 2000, Total Cost: 5000 USD, Sales Date: 2024-06-15   


