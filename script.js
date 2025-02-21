var isDate = function (input) {
  if (input instanceof Date && !isNaN(input)) {
        return true; // Valid Date object
    }

    if (typeof input === "string" || typeof input === "number") {
        let parsedDate = new Date(input);
        return !isNaN(parsedDate.getTime()); // Check if it is a valid date
    }

    return false; // Not a valid date
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
