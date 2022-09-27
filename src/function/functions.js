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
     point: getRandomVal(2, false)
   }
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
     case 0: return "blue"; 
     case 1: return "red"; 
     case 2: return "green"; 
     case 3: return "black"; 
     case 4: return "white"; 
     default : return "error" 
   }
 }

 function generateCostByRank(rank){
    if ([0,1,2,3].includes(rank)) return [getRandomVal(2, true),getRandomVal(2, true ),getRandomVal(2, true ),getRandomVal(2, true),getRandomVal(2, true)]
    if ([4,5,6,7].includes(rank)) return [getRandomVal(3, false),getRandomVal(3, false ),getRandomVal(3, false ),getRandomVal(3, false),getRandomVal(3, false)]
    if ([8,9,10,11].includes(rank)) return [getRandomVal(5, false),getRandomVal(5, false),getRandomVal(5, false),getRandomVal(5, false),getRandomVal(5, false)]
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
    console.log(arr)
    return arr
    
  }

 function addTwoArray(arr1, arr2){
  let sumarr = arr1.map((element, index) => {
    return element + arr2[index]
  })
  return sumarr
 }

 export {getRandomVal, returnCount, generateCard, generateCardsArray, returnColor, generateCostByRank, checkCost, getCardsCount, addTwoArray} 