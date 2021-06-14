"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0)
        return Error("0으로 나눌수 없습니다");
    return a / b;
}
exports.default = {
    sum,
    sub,
    multiply,
    divide
};
