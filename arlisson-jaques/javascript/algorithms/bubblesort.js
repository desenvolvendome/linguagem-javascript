module.exports = function bubblesort (theList){

    console.log("Cluttered list: " + theList);
    let aux;

    while (true){
        let sw = false;
  
        for(let i = 0; i < theList.length-1; i++){

            if(theList[i] > theList[i+1]){
                aux = theList[i];
                theList[i] = theList[i+1];
                theList[i+1] = aux;
                sw = true;
            }
        }
        if (sw != true){
            break;
        }
    }

    return "Ordered list: " + theList;
}
