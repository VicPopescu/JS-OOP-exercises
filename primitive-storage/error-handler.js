import LoggingTool from "./logging-tool.js";

export default class CustomErrorHandler extends LoggingTool {
    throwUnexpectedNumberValueError(container, value) {
        this.displayMessage({
            logType: "error",
            messageType: "unexpectedEntry",
            container,
            value,
            expected: "number"
        });

        return false;
    }

    throwUnexpectedStringValueError(container, value) {
        this.displayMessage({
            logType: "error",
            messageType: "unexpectedEntry",
            container,
            value,
            expected: "string"
        });
        return false;
    }

    throwEmptyInputError(container) {
        this.displayMessage({
            logType: "warn",
            messageType: "noEntry",
            container
        });
        return false;
    }

    //...throwUnexpected...()
    //...
}
