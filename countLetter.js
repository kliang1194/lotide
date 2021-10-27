const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const results = {};
  for (const letter of sentence) {
      if (letter !== " ") {
        if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    } 
  } console.log(results);
  return results;
}

countLetters("Hello");