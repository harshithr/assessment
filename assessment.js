console.log('NOTE: Removed comma ( , ) and ( ! ) from the given string, to meet the accuracy from assessment sample output');

// input string
let input = 'Here at Word tips we want to put you in the world of HEX, and transport you to the world of JAM, WAX, and ZEK! Confused?';

let mInput = input.replace(/,/g, '');
let modifiedInput = mInput.replace('!', '');
console.log(modifiedInput);

splitStringBySpaces = (text) => {
  let wordsArray = text.split(/\s+/);
  return wordsArray;
}

let seperatedString;
seperatedString = splitStringBySpaces(modifiedInput);

//console.log(seperatedString);

// counting frequency of each word

createWordMap = (sepString) => {
  let map = {};
  sepString.forEach(element => {
    if (map.hasOwnProperty(element)) {
      map[element]++;
    } else {
      map[element] = 1;
    }
  });
  return map;
}

let wordsMap = createWordMap(seperatedString)

function sortByCount (wordsMap) {

  // sort by count in descending order
  var finalWordsArray = [];
  finalWordsArray = Object.keys(wordsMap).map(function(key) {
    return {
      name: key,
      total: wordsMap[key]
    };
  });

  finalWordsArray.sort(function(a, b) {
    return b.total - a.total;
  });

  return finalWordsArray;

}

let sortingString = sortByCount(wordsMap);

for(let i=0; i<sortingString.length; i++) {
  if (sortingString[i].name.length <= 5) {
    sortingString[i].chars = sortingString[i].name.length;
  }
}

//console.log(sortingString);

let five = [];
let four = [];
let three = [];
let two = [];

for(let i=0; i<sortingString.length; i++) {
  if (sortingString[i].chars == 5) {
    five.push(sortingString[i]);
  } 
  if (sortingString[i].chars == 4) {
    four.push(sortingString[i]);
  } 
  if (sortingString[i].chars == 3) {
    three.push(sortingString[i]);
  } 
  if (sortingString[i].chars == 2) {
    two.push(sortingString[i]);
  }
}

// console.log(five);
// console.log(four);
// console.log(three);
// console.log(two);

displayFive = () => {
  console.log(`${five[0].chars}`);
  five.forEach(element => {
    console.log(`${element.name} : ${element.total}\n`);
  });
}

displayFour = () => {
  console.log(`${four[0].chars}`);
  four.forEach(element => {
    console.log(`${element.name} : ${element.total}\n`);
  });
}

displayThree = () => {
  console.log(`${three[0].chars}`);
  three.forEach(element => {
    console.log(`${element.name} : ${element.total}\n`);
  });
}

displayTwo = () => {
  console.log(`${two[0].chars}`);
  two.forEach(element => {
    console.log(`${element.name} : ${element.total}\n`);
  });
}

displayFive();
displayFour();
displayThree();
displayTwo();
