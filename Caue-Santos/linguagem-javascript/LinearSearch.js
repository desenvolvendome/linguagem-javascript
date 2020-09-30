class LinearSearch{

	static calcula(){
		console.log("~~~~~ LinearSearch ~~~~~");

		let elemento = 11;
		let array = [25, 104, 10, 88, 74, 99, 26, 11, 3, 0];
		let indice = -1;

		for(let i=0;i<array.length;i++){    
			if(array[i] == elemento){    
				indice = i;
			}    
		}   

		console.log("Indíce do elemento desejado: " + indice);

	}       
}

module.exports = LinearSearch;