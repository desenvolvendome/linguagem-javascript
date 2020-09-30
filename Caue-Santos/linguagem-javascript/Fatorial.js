class Fatorial{
	
	static calcula(){
		console.log("~~~~~ Fatorial ~~~~~");

		let numero = 5;
		let fatorial = 1;

		for(let i = 1; i <= numero; i++){
			fatorial *= i;
		}

		console.log(fatorial);
  }
}

module.exports = Fatorial;