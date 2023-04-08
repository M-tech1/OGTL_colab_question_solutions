function countCharacters(words, chars) {
  const charCount = {};
  let count = 0;

  // Count frequency of characters in chars
  for (const ch of chars) {
      charCount[ch] = (charCount[ch] || 0) + 1;
  }

  // Check if each word can be formed from chars
  for (const word of words) {
      const wordCount = {};
      let isValid = true;
      for (const ch of word) {
          wordCount[ch] = (wordCount[ch] || 0) + 1;
          if (!charCount[ch] || wordCount[ch] > charCount[ch]) {
              isValid = false;
              break;
          }
      }
      if (isValid) {
          count += word.length;
      }
  }

  return count;
}

//test 1
// const words = ["cat", "bt", "hat", "tree"];
// const chars = "atach";

//test2
const words = ["hello","world","leetcode"];
const chars = "welldonehoneyr";
console.log(countCharacters(words, chars));
