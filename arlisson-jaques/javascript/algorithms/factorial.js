class Factorial{

    factorial(number){

        if (number == 1){
            return 1;
        }

        return number * this.factorial(number - 1);
    }
}