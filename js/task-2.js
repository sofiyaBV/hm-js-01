const findLongestWord = function (string) {
  const arrayWord = string.split(" ");
  let findWord = arrayWord[0];
  for (const word of arrayWord) {
    if (findWord.length < word.length) {
      findWord = word;
    }
  }
  return findWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
