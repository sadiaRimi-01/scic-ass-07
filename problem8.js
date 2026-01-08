function capitalizeWords(sentence) {
  let words = sentence.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word =
      words[i][0].toUpperCase() + words[i].slice(1);
    result.push(word);
  }

  return result.join(" ");
}

console.log(capitalizeWords("hello bangladesh")); 
