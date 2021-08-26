
function totalSales(shirtQuantity , pantsQuantity , shoesQuantity ) {
    const pershirtPrice = 100;
    const perpantsPrice = 200;
    const pershoesPrice = 500;
 
    // error throw started
     if (typeof shirtQuantity != "number" || shirtQuantity < 0){
         return 'Please give a number of shirtQuantity';
     }
    else if (typeof pantsQuantity != "number" || pantsQuantity < 0) {
        return 'Please give a number of pantsQuantity';
    }
    else if (typeof shoesQuantity != "number" || shoesQuantity < 0) {
        return 'Please give a number of shoesQuantity';
    }

    else {
    const totalPriceOfShirt = pershirtPrice * shirtQuantity;
    const totalPriceOfPants = perpantsPrice * pantsQuantity;
    const totalPriceOfShoes = pershoesPrice * shoesQuantity;
    const totalSalesOfDaily =totalPriceOfShirt + totalPriceOfPants + totalPriceOfShoes ;
    return totalSalesOfDaily;
    }

} 

console.log(totalSales(2,2,2));