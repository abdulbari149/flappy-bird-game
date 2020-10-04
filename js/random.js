function randomNumber(min, max) {
    let range = max - min + 1;
    console.log(range)
    let number = Math.random() * range;
    let random = Math.trunc(number) + min;
    return random;
}
console.log(randomNumber(5, 100));