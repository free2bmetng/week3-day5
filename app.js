"use strict";

const tags = ["js", "week3"];
const scores = [10, 25, 18, 30];

let totalScore = 0;

for (let i = 0; i < scores.length; i++) {
  totalScore += scores[i];
}

console.log(totalScore);

tags.forEach(tag);
function tag(words) {
  console.log(words + " 2026");
}

const doubledScores = scores.map((score) => {
  return score * 2;
});
console.log(scores);

console.log(doubledScores);
