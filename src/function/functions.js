const colors = ["blue", "red", "green", "black", "white"] 

const getRandomVal = (n, bool) => { 
    var result = Math.floor(Math.random()*(n+1)) ; 
    
    if (!bool && result === 0) return 1
    else return result
   }
 
 
        // return the count of an element in an array 
 
 function returnCount(element, array){
  var count = 0
  if (array.includes(element)) {
   for ( var i = 0 ; i < array.length; i++){
     if (array[i] === element) count += 1 
   }
   return count
  }
  else return 0
 }
 
       // generate card object 
       // index 0: index index 1: couleur index 2: cost, index 3: point
       
 function generateCard(index){
   var couleur =colors[getRandomVal(5, true)];
   if (couleur === undefined){ couleur = colors[getRandomVal(4)] }   
   return {
     index: index , 
     color: couleur , 
     cost : generateCostByRank(index), 
     point: returnPointByIndex(index)
   }
 }

 function returnPointByIndex(index){
  if ([0, 1, 2, 3].includes(index)){return getRandomVal(1, true)}
  if ([4, 5, 6, 7].includes(index)){return getRandomVal(3, false)} 
  if ([8, 9, 10, 11].includes(index)){ return [3, 4, 5][getRandomVal(2, true)]}
  }
 
 
       // generate the card array in useState
 function generateCardsArray(n){
   var arr = []; 
   for (var i = 0; i < n ; i ++ ){
     var carte = generateCard(i)
     arr.push(carte)
   }
   return arr 
 }
 
       // return the array from [0,0,0,0,0] array type 
 function returnColor(num){
   switch(num){
     case 0:  return "blue" ; 
     case 1: return "red" ; 
     case 2: return "green";  
     case 3: return "black" ;  
     case 4: return "white";  
   
 }
 }

  function generateCostByRank(rank){
    var arr = [0, 0, 0, 0, 0]
    var index = 0; 
    var loopCount = 0; 
    // condition ? total - 1 du cout de la carte 
   
    
    if ([0, 1, 2, 3].includes(rank)) {
      while ((arr.reduce( (prev, curr) => 
      prev + curr, 0) < 5) && index <= 4){

        console.log(`voila l'index${index}`)

        if (loopCount === 0 ) {arr[index] = getRandomVal(1, true)}
        else arr[index] = getRandomVal(2, true);
        // pour gerer le cas [0, 0, 0, 0, 0]
        if (index < 4) index += 1
        else if (index === 4) {index = 0; loopCount += 1}
       }
      console.log(arr)
      return arr
      
      }
      
   
    if ([4,5,6,7].includes(rank)) {
      
      while ( (arr.reduce( (prev, curr) => 
      prev + curr, 0) < 8)  && index <= 4){
      
          if (loopCount === 0 ) arr[index] = getRandomVal(2, true);
          else arr[index] = getRandomVal(3, true);
      
         if (index < 4) index += 1
         else if (index === 4) {index = 0; loopCount += 1}
       }
      
      return arr   
      
      }
      
    if ([8,9,10,11].includes(rank)) {
  
      while ( (arr.reduce( (prev, curr) => 
      prev + curr, 0) < 12) && index <= 4){
        if (loopCount === 0 ) arr[index] = getRandomVal(4, true);
        else arr[index] = getRandomVal(7, true);

       if (index < 4) index += 1
       else if (index === 4) {index = 0; loopCount += 1}
       }
        return arr
       
  }
    
  }

  function checkReduceOfArray(arr){
    var redu = (arr.reduce( (prev, curr) => 
      prev + curr, 0)) 
      return redu 
  }

  function checkCost(cardCost, player){
    // player[1] card 
    // player[2] token 
    
    let playerCard = getCardsCount(player[1])
    let playerToken = player[2]

    
    var checkArray = cardCost.map( (element, index) => {
      
      if (element <=  (playerCard[index] + playerToken[index])) return true 
      else return false 
    })
   
    if (checkArray.every( element => element === true))  return true 
    else return false 
  }
  function getCardsCount(playerCards){
    let arr = [0, 0, 0, 0, 0]
    playerCards.map( (element) => {
      switch(element.color){
        case "blue" : arr[0] += 1 ; return arr[0]
        case "red" : arr[1] += 1 ; return arr[1]
        case "green" : arr[2] += 1 ; return arr[2]
        case "black" : arr[3] += 1 ; return arr[3]
        case "white" : arr[4] += 1 ; return arr[4]
      }
    })
 
    return arr
    
  }

 function addTwoArray(arr1, arr2){
  let sumarr = arr1.map((element, index) => {
    return element + arr2[index]
  })
  return sumarr
 }

function canIBuy(arrCard, arrPlayer){
  var arr = arrCard.map( (element, index) => {
    if (element <= arrPlayer[index]) return true 
    else return false 
  })
  return arr
 
}

 function canPlayerBuyCards(cards, player){
    var arr1 = cards.map((element) => {
      return element.cost})
      
     var arrToReturn = arr1.map((element, index) => {
      return canIBuy(element, addTwoArray(getCardsCount(player[1]), player[2])).every(element => element === true)
    })

    return arrToReturn
    
    }    
       
   
   

 
 export {getRandomVal, returnCount, generateCard, generateCardsArray, returnColor, generateCostByRank, checkCost, getCardsCount, addTwoArray, canPlayerBuyCards} 