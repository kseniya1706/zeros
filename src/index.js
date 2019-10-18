module.exports = function zeros(expression) {
  // your solution
    let quantity = 0;
    let quantity2 = 0;
    let quantity5 = 0;
    let temp_number ='';
    let multipliersArray = [];


    for (let i = 0; i < expression.length; i++) {

        if (expression[i] != '*' && expression[i] != "!") {
            temp_number += expression[i]
            if (expression[i+1] != '*' && expression[i+1] != "!") {
                temp_number += expression[i+1]
                i++;
            }
        }
        
        if (expression[i] == '!') {
            if (expression[i+1] == '!') {
                getMultipliers (temp_number, 2);
            }
            else {
                getMultipliers (temp_number, 1);
            }
            
            temp_number = '';
        }

        if (expression[i] == '*') {
            temp_number = '';
        }
    }

    function getMultipliers (base, step) { 
        if ((base%2) != 0){
            for (let k = 1; k <= base; k+=step ) {
              multipliersArray.push(k);
            }
        }
        else {
            for (let k = 2; k <= base; k+=step ) {
            multipliersArray.push(k);
            }
        }
    }


    for (let l = 0; l < multipliersArray.length; l++) {
      if ((multipliersArray[l] % 5) == 0){
          if ((multipliersArray[l] % 25) == 0) {
              quantity5 += 2;
          }
          else {
              quantity5++;
          }
      }
      else {
          if ((multipliersArray[l] % 2) == 0) {
              quantity2++;
          }
      }
  }
        
    if (quantity5 != 0 && quantity2 != 0){
        if (quantity5 < quantity2) {
            quantity = quantity5;
        }
        else {
            quantity = quantity2;
        }
    }

    return quantity;
}
