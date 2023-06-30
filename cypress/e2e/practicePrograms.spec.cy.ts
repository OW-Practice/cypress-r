function swapNumbersUsingThirdVariable() {
    let a = 15, b = 7;
    let temp = a;
    a = b
    b = temp
    function swapNumbersUsingThirdVariable() {
        let a = 15, b = 7;
        let temp = a;
        a = b
        b = temp
        console.log(a)
        console.log(b)
    }
}

swapNumbersUsingThirdVariable()

function swapNumbersWithoutUsingThirdVariable() {
    let a = 15, b = 7;
    a = a + b;
    a = a - b
    b = a - b
    console.log("a value is" + a)
    console.log("b value is" + b)
}

swapNumbersWithoutUsingThirdVariable()

function toPrintRAlla() {
    let name = "Ramya Alla"
    let splitName = name.split(" ")
    let secondname = splitName[1]
    let firstletter = name.charAt(0);
    let finaloutput = firstletter.concat(secondname)
    console.log(finaloutput)
}

toPrintRAlla()

function primeNumber() {
    let n = 21;
    let m = n / 2
    let flag = 0;

    for (let i = 2; i <= m; i++) {
        if (n % i == 0) {
            flag = 1
            console.log("Not a prime")
            break;
        }
    }

    if (flag == 0) {
        console.log("Prime")
    }
}

primeNumber()

function toprintreversename() {

    let name = "Ramya Alla"
    let reverseString = ""
    for (let i = name.length - 1; i >= 0; i--) {
        reverseString += name[i]
    }
    console.log(reverseString)
}
toprintreversename()

function printInitialCharsOfName(){
    let name = "Ramya Reddy Alla"
    let splitname = name.split(" ")
    console.log(splitname)
    let result = ""
    for(let i=0;i<splitname.length;i++){
      result += splitname[i].charAt(0)
    }
    console.log(result)
}
printInitialCharsOfName()
