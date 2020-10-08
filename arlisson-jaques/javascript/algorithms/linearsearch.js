module.exports = function linearsearch (theList, wanted){
    cont = 0;

    while(cont < theList.length){
        
        if (theList[cont] == wanted){
            return "Position: "+cont+"º";
        }
        cont++;
    }

    console.log("This item is not in the list");

}