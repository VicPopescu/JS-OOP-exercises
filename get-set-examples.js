// Getter
class Coordinates {
    constructor({ lat, long }) {
        this.private_lat = lat;
        this.private_long = long;
    }

    set lat(value) {
        this.private_lat = value;
        console.log("set lat to " + value);
    }

    set long(value) {
        this.private_long = value;
        console.log("set long to " + value);
    }
}

class City extends Coordinates {
    get position() {
        return { lat: this.private_lat, long: this.private_long }
    }
}

const cluj = new City({ long: "23.6236° E", lat: "46.7712° N" });

// cluj.lat = "46.7712° N";
// cluj.long = "23.6236° E";
// console.log(cluj.position);


// ? ------------------------------------------- ?


// Custom log
class CustomLoggingTool {
    constructor() {
        this.logHistory = [];
    }

    set log(value) {
        this.logHistory.push(value);
        this.printLogHistory();
        // .. do other things
    }

    get log() {
        return this.logHistory.map((log, index) => {
            return { ["log" + index]: log };
        });
    }

    printLogHistory() {
        console.log(this.logHistory);
    }
}

const loggingTool = new CustomLoggingTool();
// loggingTool.log = "Warning message 1";
// loggingTool.log = "Alert message 2";
// loggingTool.log = "Info message 1";
// console.log(loggingTool.log);
