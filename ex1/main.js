
function add(n1, n2) {
    return n1 + n2;
}
;

var sub = function (n1, n2) {
    return n1 - n2;
};

var cb = function (n1, n2, callback) {
    if (!(typeof n1 === "number") && !(typeof n2 === "number") && !(typeof callback === "function")) {
        throw Error("Incorrect input! Input format is ([NUMBER], [NUMBER], [FUNCTION])");
    }
    return "Result from the two numbers: " + n1 + " + " + n2 + " = " + callback(n1, n2);
};

try {
    console.log(add(1, 2));
    console.log(add);
    console.log(add(1, 2, 3));
    console.log(add(1));
    console.log(f1(3, 3, add));
    console.log(f1(4, 3, sub));
    console.log(f1(3, 3, add()));
    console.log(f1(3, "hh", add));
} catch (err) {
    console.log("Error: " + err);
}