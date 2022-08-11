//1. convert radian to degree
function radianToDegree(radian){
    if (typeof (radian) !== "number") {
        return "Please give us a valid input";
    }
    else {
        let pi = Math.PI;
        let degreeConvart = radian * 180 / pi;
        let fixedValue = degreeConvart.toFixed(2);
        let degree = parseFloat(fixedValue);

        return degree;
    }
}
// console.log(radianToDegree(25))

//2.check whether the given file name is javascript file or not

function isJavaScript(fileName){

if(typeof(fileName)!=='string'){
    return 'this is an invalid input,provide us a valid input';
}
else{
    return fileName.endsWith('.js');
}
}

// console.log(isJavaScript('app.js'))
//3. calculate the total oilPrice that i have to pay

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity){
    const perLitreDieselPrice = 114;
    const perLitrePetrolPrice = 130;
    const perLitreOctanePrice = 135;

    const dieselPrice = perLitreDieselPrice * dieselQuantity;
    const petrolPrice = perLitrePetrolPrice * petrolQuantity;
    const octanePrice = perLitreOctanePrice * octaneQuantity;

    const totalPrice= dieselPrice+petrolPrice+octanePrice

   if(typeof(dieselQuantity,petrolQuantity,octaneQuantity)!=='number'){
    return 'provide a valid code'
   }
   else{
    return totalPrice;
   }
    
}
//  console.log(oilPrice(30,20,10))

// 4.publicBusFare 

function publicBusFare(totalPeople){
    const busCapacity= 50;
    const microBusCapacity =11;
    const perTicketPrice=250; 

    const remainingPeopleForMicroBus=totalPeople % busCapacity;
    const restPeopleForPublicBus=remainingPeopleForMicroBus % microBusCapacity;
    
    const totalPriceForPublicBusFare= perTicketPrice * restPeopleForPublicBus;
    
    if(typeof(totalPeople)!=='number'){
        return 'enter a valid input'
    }
    else{
    return totalPriceForPublicBusFare;
    }
}
 
// console.log(publicBusFare(235))
// 5.isBestFriend

 function isBestFriend(friends1,friends2){

if(typeof(friends1,friends2)!='object'){
        return 'provide a valid input'
    }
 else if( friends1.name==friends2.friend && friends2.name== friends1.friend){
  return true;
 }
 else{
    return false;
 }
 }
 const friends1={name:'abul',friend:'babul'}
  
 const friends2= {name:'babul', friend:'abul'}
 const bestFriend=isBestFriend(friends1,friends2);
  console.log(bestFriend);
    

    
