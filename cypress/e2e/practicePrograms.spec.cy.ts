
function swapNumbersUsingThirdVariable(){
    let a=15, b=7;
    let temp=a;
    a=b
    b=temp
    console.log(a)
    console.log(b)
}

swapNumbersUsingThirdVariable()

function swapNumbersWithoutUsingThirdVariable(){
    let a=15, b=7;
    a=a+b;
    a=a-b
    b=a-b
    console.log("a value is" + a)
    console.log("b value is" + b)
}

swapNumbersWithoutUsingThirdVariable()

function ToPrintRAlla(){
    let name = "Ramya Alla"
//    let splitName = name.split(" ")
//    let secondname = splitName[1]
//    let firstletter = name.charAt(0);
  // let finaloutput = firstletter.concat(secondname)
 // let finaloutput = firstletter+secondname
 let finaloutput = name.charAt(0) + name.split(" ")[1]

   console.log(finaloutput)
}

ToPrintRAlla()