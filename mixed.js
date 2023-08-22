/*function randomNumber() {
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return numbers[Math.floor(Math.random() * 10)]
}

//console.log(randomNumber());*/

function randomEarth() {
    let earthSigns = ['Capricorn', 'Taurus', 'Virgo'];
    return earthSigns[Math.floor(Math.random() * 3)]
}
//console.log(randomEarth())

function randomFire() {
    let fireSigns = ['Saggitarius', 'Leo', 'Aries'];
    return fireSigns[Math.floor(Math.random() * 3)]
}

//console.log(randomFire())

function randomAnswer() {
    let answer = ['Good', 'Bad'];
    return answer[Math.floor(Math.random() * 2)];
}

//console.log(randomAnswer());

function randomMessage() {
    let output = '';
    output = `The ${randomEarth()} sign and the ${randomFire()} sign are ${randomAnswer()}`;
    return output;
}

console.log(randomMessage());