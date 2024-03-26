function fizzbuzz()
{

    for (let i = 1; i <= 151; i++) {
        switch (true) {
            case i % 5 == 0 && i % 3 == 0:
                console.log(i + ": FizzBuzz");
                break;
                
            case i % 3 == 0:
                console.log( i + ": Fizz");
                break;
            case i % 5 == 0:
                console.log(i + ": Buzz");
                break
            
            default:
                console.log(i);
                break;
        }
        
    }
    }



fizzbuzz();

