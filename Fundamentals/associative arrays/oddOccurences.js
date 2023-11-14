// Write a function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive).

// The input comes as a single string. The words will be separated by a single space.

function oddOccurrences(str) {
    let words = str.toLowerCase().split(' ');
    let object = {};
   
    for (let word of words) {
      if (word in object) {
        object[word]++;
      } else {
        object[word] = 1;
      }
    }
    let oddOccur = Object.keys(object)
      .filter((word) => object[word] % 2 === 1)
      .sort((a, b) => a.localeCompare.b)
   
    console.log(oddOccur.join(' '));
  }

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')