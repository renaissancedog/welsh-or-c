import { cData, welshData } from './data.js';
const wLength = Object.keys(welshData).length;
const cLength = Object.keys(cData).length;
let isWelsh = false;
let cor = 0;
let wr = 0;
let total = 0;
let streak = 0;
let longestStreak = 0;
let percent = 0;
function run() {
    let key = Math.random() > 0.5 ? true : false;
    let chosen = 'This is an error.';
    if (key) {
        chosen = cData[Math.floor(Math.random() * cLength)];
        isWelsh = false;
    } else {
        chosen = welshData[Math.floor(Math.random() * wLength)];
        isWelsh = true;
    }
    $('#word').html(chosen);
}

$('#welsh').on('click', function () {
    if (isWelsh) {
        correct();
    } else {
        wrong();
    }
    run();
});
$('#c').on('click', function () {
    if (isWelsh) {
        wrong();
    } else {
        correct();
    }
    run();
});
function wrong() {
    wr++;
    streak = 0;
    update();
}
function correct() {
    cor++;
    streak++;
    update();
}
function update() {
    total++;
    if (streak > longestStreak) {
        longestStreak = streak;
    }
    percent = Math.round((cor / (cor + wr)) * 100) + '%';
    $('#wrong .stat').html(wr);
    $('#correct .stat').html(cor);
    $('#total .stat').html(total);
    $('#percent .stat').html(percent);
    $('#streak .stat').html(streak);
    $('#longestStreak .stat').html(longestStreak);
}
$(function () {
    run();
});
