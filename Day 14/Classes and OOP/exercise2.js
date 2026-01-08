class KGLProcurement {
    constructor(nameOfProduce, tonnageInkgs,dealerName){
        this.nameOfProduce = nameOfProduce;
        this.tonnageInkgs = tonnageInkgs;
        this.dealerName = dealerName;
    }

    isValidTonnage(){
        if (this.tonnageInkgs >= 1000){
            return true;
        } else {
            return false;
        }
    }
}

let procurement1 = new KGLProcurement("Bananas", 1500, "FreshFruits Ltd");
console.log(procurement1); 
console.log(procurement1.isValidTonnage()); // Output: true