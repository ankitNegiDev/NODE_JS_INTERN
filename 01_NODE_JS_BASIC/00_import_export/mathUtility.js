export function add(num1, num2) {
    return num1 + num2;
}

export function square(num1, num2) {
    return {
        num1Square: num1 * num1,
        num2Square: num2 * num2
    }
}

// export{ add, square}  named export ... 
let vari="ankit";
export default vari;