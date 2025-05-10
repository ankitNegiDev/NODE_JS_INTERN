function add(num1,num2){
    return num1+num2;
}

function square(num1,num2){
    return {
        num1Square:num1*num1,
        num2Square:num2*num2
    }
}

module.exports={
    add,
    square
}
// if key are value and same then we can ommit the key...
