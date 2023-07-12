
let loopyLighthouse = function (range, multiples, words) {
  let bothMultiples = multiples[0] * multiples[1];
  let bothWords = words[0] + words[1];

  for (let i = range[0]; i <= range[1]; i++) {
    if (i % bothMultiples === 0) {
      console.log(bothWords);
    } else if (i % multiples[1] === 0) {
      console.log(words[1]);

    } else if (i % multiples[0] === 0) {
      console.log(words[0]);

    } else {
      console.log(i);

    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

