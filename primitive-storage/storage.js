import ValidationTool from "./validation-tool.js";

class StorageWithErrorHandling extends ValidationTool {
    constructor(...args) {
        super(...args);

        this.storage = {
            "strings": [],
            "numbers": []
        }
    }

    get getNumbers() { return this.storage["numbers"]; }
    get getStrings() { return this.storage["strings"]; }

    set numbers(value) {
        const container = "numbers";

        if (!value) {
            this.throwEmptyInputError(container);
        } else if (this.isNumber(value) || this.isNumbersArray(value)) {
            this.addToStorage(container, value)
            this.isValidAssignment({ container, value });
        } else {
            this.throwUnexpectedNumberValueError(container, value);
        }
    }

    set strings(value) {
        const container = "strings";

        if (!value) {
            this.throwEmptyInputError(container);
        } else if (this.isString(value) || this.isStringsArray(value)) {
            this.addToStorage(container, value);
            this.isValidAssignment({ container, value });
        } else {
            this.throwUnexpectedStringValueError(container, value);
        }
    }

    addToStorage(container, value) {
        value = this.isArray(value) ? value : [value];
        this.storage[container] = [...this.storage[container], ...value];
    }

    isValidAssignment({ container, value }) {
        this.displayMessage({ container, value });
    }
}

const storage = new StorageWithErrorHandling();

storage.strings = "some random string"; // correct assign
storage.strings = 4; // fails
storage.strings = ["str 1", "43434"]; // correct assign
//
storage.numbers = "awdawd"; // fails
storage.numbers = ["bunica 2"]; // fails
storage.numbers = 323; // correct assign
storage.numbers = [323, 43]; // correct assign
storage.numbers = ""; // fails
//
console.log(storage.getStrings);
console.log(storage.getNumbers);
console.log(storage.getLogHistory);

