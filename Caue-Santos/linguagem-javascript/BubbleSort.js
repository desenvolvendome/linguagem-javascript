class BubbleSort{
  static calcula(){  
    console.log("~~~~~ Bubble Sort ~~~~~");
    let aux;
    let vetor = [50, 12, 26, 5, 36, 147, 59, 1, 9];
    let controle = false;   
        
    for(let i = 0; i < vetor.length; i++){
      controle = true;
      for(let j = 0; j < (vetor.length - 1); j++){
        if(vetor[j] > vetor[j+1]){
          aux = vetor[j];
          vetor[j] = vetor[j+1];
          vetor[j+1] = aux;
          controle = false;
        }
      }
            
      if(controle){
        break;
      }
    }   

    for (let i = 0; i < vetor.length; i++) {
      console.log(vetor[i]);
    }
       
  } 
}

module.exports = BubbleSort;
