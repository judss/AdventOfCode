import * as fs from 'fs';
import { YouPlays } from './constants';

var outcomes: {[key: string]: number} = {
    "A X": 3,
    "A Y": 6,
    "A Z": 0,

    "B Y": 3,
    "B Z": 6,
    "B X": 0,

    "C Z": 3,
    "C X": 6,
    "C Y": 0,
}

const puzzleInput = fs.readFileSync('puzzle-input.txt', 'utf8');
const games = puzzleInput.split("\r\n");

var scores:number[] = [];

games.forEach(game => {
    
    const players = game.split(" ");
    var you = players[1];

    // get the initial score based on what you played
    var score = getPayScore(you);

    // get the score for the outcome of the match
    score += outcomes[game];

    // push the score to the totals
    scores.push(score);
});

const result = scores.reduce((accumulator, current) => {
    return accumulator + current;
  }, 0);

console.log(result);

function getPayScore(play:string):number{
    switch(play){
        case YouPlays.rock:
            return 1;
        case YouPlays.paper:
            return 2;
        case YouPlays.sissors:
            return 3;
        default:
            throw new Error(`Incorrect You Play: ${play}`);
    }
}