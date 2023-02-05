import { string } from "yargs";

function capitalize(string) {
    let firstChar = string.charCodeAt(0);
    if (firstChar < 97 || firstChar > 122) {
        let errorMsg = 'invalid first char';
        console.log(errorMsg);
        return errorMsg;
    }
    firstChar = string.slice(0, 1).toUpperCase();
    return firstChar + string.slice(1);
}

function reverse(string) {
    let stringArray = [...string];
    let reversedString = '';
    for (let i = stringArray.length - 1; i >= 0; i--) {
        reversedString += stringArray[i];
    }
    return reversedString;
}

const calc = function (operation, a, b) {
    let validOperations = ['add', '+', 'subtract', '-', 'divide', '/', 'multiply', '*'];
    if (!validOperations.includes(operation)) {
        let errorMsg = 'invalid operation string';
        return errorMsg;
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        let errorMsg = 'invalid input type';
        return errorMsg;
    }

    let result;
    switch(true) {
        case (operation === 'add' || operation ===  '+'):
            result = add(a, b);
            break;
        case (operation === 'subtract' || operation === '-'):
            result = sub(a, b);
            break;
        case (operation === 'divide' || operation === '/'):
            result = div(a, b);
            break;
        case (operation === 'multiply' || operation === '*'):
            result = mul(a, b);
    }
    function add(x, y) {
        return x + y;
    }
    function sub(x, y) {
        return x - y;
    }
    function div(x, y) {
        return x / y;
    }
    function mul(x, y) {
        return x * y;
    }

    return result;
}

function ceasar(str, factor) {
    if (typeof str !== 'string') {
        let errorMsg = 'invalid string';
        return errorMsg;
    }
    if (typeof factor !== 'number') {
        let errorMsg = 'invalid shift factor';
        return errorMsg;
    }

    let strArray = [...str];
    for (let i = 0; i < (strArray.length); i++) {
        let charCode = strArray[i].charCodeAt(0);
        if (isAlphaNum(charCode) === true) {
            let newChar = shiftChar(charCode, factor);
            strArray[i] = newChar;
        }
    }
    str = strArray.join('');
    return str;

    function isAlphaNum(code) {
        if ((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            return true;
        }
    }
    function shiftChar(code, factor) {
        // get new code
        // if new code beyond bounds
            // mode code by range until within bounds
        let newCode = code + factor;
        let bounds = getBounds(code);   // [min, max, range]
        if (newCode < bounds[0]) {
            while (newCode < bounds[0]) {
                newCode += bounds[2];
            }
        } else if (newCode > bounds[1]) {
            while (newCode > bounds[1]) {
                newCode -= bounds[2];
            }
        }
        return String.fromCharCode(newCode);
    }
    function getBounds(code) {
        let boundsArray = [];
        if (code >= 48 && code <= 57) {
            boundsArray[0] = 48;
            boundsArray[1] = 57;
            boundsArray[2] = 10;
        } else if (code >= 65 && code <= 90) {
            boundsArray[0] = 65;
            boundsArray[1] = 90;
            boundsArray[2] = 26
        } else if (code >= 97 && code <= 122) {
            boundsArray[0] = 97;
            boundsArray[1] = 122;
            boundsArray[2] = 26;
        }
        return boundsArray;
    }
}

function analyze(array) {
    verifyInput(array);
    
    try {
        let object = {
            average: getAverage(array),
            min: getMin(array),
            max: getMax(array),
            length: array.length
        }
        return object;

        function getAverage(array) {
            let sum = 0;
            for (let i = 0; i < array.length; i++) {
                sum += array[i];
            }
            let average = sum / array.length;
            return average;
        }
        function getMin(array) {
            let min = array[0];
            for (let i = 1; i < array.length; i++) {
                if (array[i] < min) {
                    min = array[i];
                }
            }
            return min;
        }
        function getMax(array) {
            let max = array[0];
            for (let i = 1; i < array.length; i++) {
                if (array[i] > max) {
                    max = array[i]
                }
            }
            return max;
        }

    } catch (error) {
        return error;
    }

    function verifyInput(input) {
        console.log(input);
        if (Array.isArray(input) === false) {
            throw new Error('input not an array');
        } else {
            for (let i = 0; i < input.length; i++) {
                if (typeof input[i] !== 'number') {
                    throw new Error('array data invalid data');
                }
            }
        }
    }
}

export default analyze;