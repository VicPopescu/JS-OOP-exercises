const messages = {
    "unexpectedEntry": "The input you provided: [[${val}]], is not of type [[${expected}]]. We expect a [[${expected}]] for the [[${container}]] container!",
    "successEntry": "The input you provided: [[${val}]], was successfully saved to the [[${container}]] container!",
    "noEntry": "Please provide a valid entry for [[${container}]] container!"
};

// Log tool
export default class LoggingTool {
    constructor() {
        this.history = [];
    }

    get getLogHistory() {
        return this.history;
    }

    addLogToHistory({ logType, messageType, logMessage }) {
        this.history.push({
            createdAt: new Date,
            logMessage,
            logType,
            messageType
        });
    }

    displayMessage({ logType = "log", messageType = "successEntry", container = "", value = "", expected = "" }) {
        const logTemplate = messages[messageType];
        const logMessage = logTemplate
            .replace(/\${container}/g, container)
            .replace(/\${val}/g, value)
            .replace(/\${expected}/g, expected);

        console[logType](logMessage);
        this.addLogToHistory({ logType, messageType, logMessage });
    }
}
