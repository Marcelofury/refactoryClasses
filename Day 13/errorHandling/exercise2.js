let tonnage = 900

function checkTonnage(tonnage) {
    if (tonnage < 1000) {
        throw new Error("Tonnage is below the minimum required of 1000.");


    }
    else {        return "Tonnage is acceptable.";
}
}
    console.log(checkTonnage(tonnage));