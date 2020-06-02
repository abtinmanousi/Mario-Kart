/// Event Listeners
document.getElementById('button').addEventListener('click', Calculate);

/// Global Variables
let numbanana = 0;
let numgreenshell = 0;
let numbulletbill = 0;
let numstar = 0;
let numgoldenmushroom = 0;
let input = Number(document.getElementById('input').value);


function Calculate() {
    randNum = Math.random();
    console.log(randNum);
    //// General if statement
    if (input <= 6) {

        //// Secondary if statements
        if (randNum <= 0.45) {
            document.getElementById('prize').innerHTML = 'Banana';
            numbanana++;
            document.getElementById('Banana').innerHTML = numbanana;
        } else if (randNum <= 0.8) {
            document.getElementById('prize').innerHTML = 'Green Shell'
            numgreenshell++;
            document.getElementById('GreenShell').innerHTML = numgreenshell;
        } else if (randNum <= 0.95) {
            document.getElementById('prize').innerHTML = 'Star'
            numstar++;
            document.getElementById('star').innerHTML = numstar;
        } else if (randNum <= 0.99) {
            document.getElementById('prize').innerHTML = 'Golden Mushroom'
            numgoldenmushroom++;
            document.getElementById('GoldenMushroom').innerHTML = numgoldenmushroom;
        } else {
            document.getElementById('prize').innerHTML = 'Bullet Bill'
            numbulletbill++;
            document.getElementById('BulletBill').innerHTML = numbulletbill;
        }
    } else if (input <= 12) {
        if (randNum <= 0.05) {
            document.getElementById('prize').innerHTML = 'Banana';
            numbanana++;
            document.getElementById('Banana').innerHTML = numbanana;
        } else if (randNum <= 0.1) {
            document.getElementById('prize').innerHTML = 'Green Shell'
            numgreenshell++;
            document.getElementById('GreenShell').innerHTML = numgreenshell;
        } else if (randNum <= 0.35) {
            document.getElementById('prize').innerHTML = 'Star'
            numstar++;
            document.getElementById('star').innerHTML = numstar;
        } else if (randNum <= 0.7) {
            document.getElementById('prize').innerHTML = 'Golden Mushroom'
            numgoldenmushroom++;
            document.getElementById('GoldenMushroom').innerHTML = numgoldenmushroom;
        } else {
            document.getElementById('prize').innerHTML = 'Bullet Bill'
            numbulletbill++;
            document.getElementById('BulletBill').innerHTML = numbulletbill;
        }

    }
}
