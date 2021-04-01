import CustomErrorHandler from "./error-handler.js";

export default class ValidationTool extends CustomErrorHandler {
    isArray(value) {
        return Array.isArray(value);
    }
    isNumber(value) {
        return !isNaN(value);
    }

    isNumbersArray(value) {
        return (this.isArray(value) && value.length) ? !value.some(isNaN) : false;
    }

    isString(value) {
        return typeof value === "string" || value instanceof String;
    }

    isStringsArray(value) {
        return (this.isArray(value) && value.length) ? value.some(this.isString) : false;
    }

    // ...other validations
}

// make a decision if you allow this to happen or you add extra layers of validation
// ! console.log(validate.isStringsArray(["4", "5"])); //true
// ! console.log(validate.isNumbersArray(["4", "5"])); //true


