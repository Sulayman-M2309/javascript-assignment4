// Problem solving-1 start (seer to mon)

function seerToMon(number) {

    const oneMon = 40;

   // error throw started
    if (typeof number != 'number') {
        return "Please give a valid number!";
    } 
    
    else if (number <= 0) {
        return "Must input positive number!";

    } 
    // main task
    else{
        // formula
        let convert = number / oneMon;
        return convert;
       
    } 

}

console.log(seerToMon(550));

// Problem solving-1 end









//2nd problem steart /

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

// Problem solving-2  nd







// 3rd probelm strt !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function deliveryCost(quantity){

    const firstHundredSinglequantityCost =100;
    const oneHundredMoreSinglequantityCost =80;
    const twoHundredMaxSinglequantityCost = 50;

    // error throw 
    if (typeof quantity != 'number'|| quantity == 0) {
        return "Please give a valid number of quantity";
    } 
    
    else if (quantity <0) {
        return "Please enter positive number!";

    }    
   // main task 
    // First 1 to 100 quantity delivery cost.

    else if (quantity <= 100) {
       const firstHundredquantityTotalCost = quantity * firstHundredSinglequantityCost;
       return firstHundredquantityTotalCost;
    }
    // First 1 to 100 quantity delivery cost and 101 to 200 quantity delivery cost.

    else if (quantity <=200 ) {
       const firstHundredquantityTotalCost = 100 * firstHundredSinglequantityCost;
       const onehundredMoreQunatity = quantity - 100;
       const onehundredMoreQunatityCost = onehundredMoreQunatity * oneHundredMoreSinglequantityCost;
       const totalCost =firstHundredquantityTotalCost + onehundredMoreQunatityCost;
       return totalCost;
    }

    // First 1 to 100 quantity  , 101 to 200 quantity and 201 more quantity delivery cost.

    else {
        const firstHundredquantityTotalCost = 100 * firstHundredSinglequantityCost;
        const onehundredMoreQunatityCost = 100 * oneHundredMoreSinglequantityCost ;
        const twoHundredMaxquantity = quantity - 200;
        const twoHundredMaxquantityCost = twoHundredMaxquantity * twoHundredMaxSinglequantityCost ;
        const totalCost =firstHundredquantityTotalCost + onehundredMoreQunatityCost + twoHundredMaxquantityCost ;
        return totalCost;


    }
}

console.log(deliveryCost(200));
// ------------------------------------------------------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!







// 4th pblm strt111!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function perfectFriend(friendName){
    let largest = friendName[0];
    for(let i = 0; i < friendName.length; i++){
    // error throw
    if(typeof friendName[i] != "string") {
    return "Please enter valid name!";
    }
    // main task
    else if(friendName[i].length == 5) {
    largest = friendName[i];
    return largest;
    }
    }
    // error throw
    return "All name are the same length";
    }
    console.log(perfectFriend(["abir", "mahi", "sulayman", "zahid", "tamim", "hasan", "rony"]));
    
    // ---------------------------The End-------------------------------------------------
