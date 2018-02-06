exports.generateRunicWords = length => {
  const runes = [
    { rune: 'El', power: 28, without: 'Ort' },
    { rune: 'Eld', power: 33, without: 'Sur' },
    { rune: 'Tir', power: 9, without: 'Eth' },
    { rune: 'Nef', power: 7, without: 'Ist' },
    { rune: 'Eth', power: 31, without: 'Tir' },
    { rune: 'Ith', power: 22, without: 'Pul' },
    { rune: 'Tal', power: 8, without: 'Io' },
    { rune: 'Ral', power: 25, without: 'Um' },
    { rune: 'Ort', power: 18, without: 'El' },
    { rune: 'Thul', power: 13, without: 'Sol' },
    { rune: 'Amn', power: 6, without: 'Fal' },
    { rune: 'Sol', power: 10, without: 'Thul' },
    { rune: 'Shael', power: 17, without: 'Lem' },
    { rune: 'Dol', power: 11, without: 'Hel' },
    { rune: 'Hel', power: 12, without: 'Dol' },
    { rune: 'Io', power: 20, without: 'Tal' },
    { rune: 'Lum', power: 32, without: 'Gul' },
    { rune: 'Ko', power: 27, without: 'Mal' },
    { rune: 'Fal', power: 14, without: 'Amn' },
    { rune: 'Lem', power: 26, without: 'Shall' },
    { rune: 'Pul', power: 15, without: 'Ith' },
    { rune: 'Um', power: 16, without: 'Ral' },
    { rune: 'Mal', power: 21, without: 'Ko' },
    { rune: 'Ist', power: 4, without: 'Nef' },
    { rune: 'Gul', power: 23, without: 'Lum' },
    { rune: 'Vex', power: 24, without: 'Ohm' },
    { rune: 'Ohm', power: 1, without: 'Vex' },
    { rune: 'Lo', power: 2, without: 'Cham' },
    { rune: 'Sur', power: 30, without: 'Eld' },
    { rune: 'Ber', power: 3, without: '' },
    { rune: 'Jah', power: 5, without: 'Zod' },
    { rune: 'Cham', power: 29, without: 'Lo' },
    { rune: 'Zod', power: 19, without: 'Jah' }
  ];

  // checking if the input (length) is empty or if input is less than 0 oraz greater than the length of runes set (runes)

  if (!length) {
    return 'Input can not be empty';
  } else if (length < 0 || length > runes.length) {
    return 'Input should be a number greater than 0 and less than number of runes.';
  } else if (isNaN(length)) {
    console.log('input should be a number');
    return 'Input should be a number.';
  }

  const runicWords = [];

  //pushing runes to runic words

  do {
    let runicWordsArr = [];

    let withoutArr = [];

    for (j = 0; j < length; j++) {
      let max = 0;
      let maxRun = '';
      let without = '';
      let index = 0;

      for (let i = 0; i < runes.length; i++) {
        if (runes[i].power > max && withoutArr.indexOf(runes[i].rune) === -1) {
          max = runes[i].power;
          without = runes[i].without;
          maxRun = runes[i];
          index = i;
        } else {
          max = max;
          maxRun = maxRun;
          without = without;
          index = runes.indexOf(maxRun);
        }
      }

      withoutArr.push(without);

      runicWordsArr.push(maxRun);
      runes.splice(index, 1);
    }

    let word = '';
    let powerSum = 0;
    for (let k = 0; k < runicWordsArr.length; k++) {
      if (k === runicWordsArr.length - 1) {
        word += runicWordsArr[k].rune;
        powerSum += runicWordsArr[k].power;
      } else {
        word += runicWordsArr[k].rune + '-';
        powerSum += runicWordsArr[k].power;
      }
    }

    //pushing runic words to array of objects - words are always sorted by power

    runicWords.push({ word: word, power: powerSum });
  } while (runes.length > length && runicWords.length < 10);
  console.log('runic words result', runicWords);
  return runicWords;
};

exports.checkRunicWord = runicWord => {
  const runes = [
    { rune: 'El', power: 28, without: 'Ort' },
    { rune: 'Eld', power: 33, without: 'Sur' },
    { rune: 'Tir', power: 9, without: 'Eth' },
    { rune: 'Nef', power: 7, without: 'Ist' },
    { rune: 'Eth', power: 31, without: 'Tir' },
    { rune: 'Ith', power: 22, without: 'Pul' },
    { rune: 'Tal', power: 8, without: 'Io' },
    { rune: 'Ral', power: 25, without: 'Um' },
    { rune: 'Ort', power: 18, without: 'El' },
    { rune: 'Thul', power: 13, without: 'Sol' },
    { rune: 'Amn', power: 6, without: 'Fal' },
    { rune: 'Sol', power: 10, without: 'Thul' },
    { rune: 'Shael', power: 17, without: 'Lem' },
    { rune: 'Dol', power: 11, without: 'Hel' },
    { rune: 'Hel', power: 12, without: 'Dol' },
    { rune: 'Io', power: 20, without: 'Tal' },
    { rune: 'Lum', power: 32, without: 'Gul' },
    { rune: 'Ko', power: 27, without: 'Mal' },
    { rune: 'Fal', power: 14, without: 'Amn' },
    { rune: 'Lem', power: 26, without: 'Shall' },
    { rune: 'Pul', power: 15, without: 'Ith' },
    { rune: 'Um', power: 16, without: 'Ral' },
    { rune: 'Mal', power: 21, without: 'Ko' },
    { rune: 'Ist', power: 4, without: 'Nef' },
    { rune: 'Gul', power: 23, without: 'Lum' },
    { rune: 'Vex', power: 24, without: 'Ohm' },
    { rune: 'Ohm', power: 1, without: 'Vex' },
    { rune: 'Lo', power: 2, without: 'Cham' },
    { rune: 'Sur', power: 30, without: 'Eld' },
    { rune: 'Ber', power: 3, without: '' },
    { rune: 'Jah', power: 5, without: 'Zod' },
    { rune: 'Cham', power: 29, without: 'Lo' },
    { rune: 'Zod', power: 19, without: 'Jah' }
  ];

  // checking if the input value is empty

  if (!runicWord || runicWord.length <= 0) {
    // console.log("The word can't be empty.");
    return "The word can't be empty.";

    // checking if the first or last runic word index is '-' sign
  } else if (runicWord[0] === '-' || runicWord[runicWord.length - 1] === '-') {
    // console.log('The word cant start or finish with -');
    return 'The word cant start or finish with -';
  }

  // creating variables and arrays to check if the runic word is correct

  let powerSum = 0;
  let dashArr = [];
  let withoutArr = [];

  for (let i = 0; i < runicWord.length; i++) {
    if (runicWord[i] === '-') {
      dashArr.push(i);
    }
  }

  const runicWordArr = runicWord.split('-');
  const runicWordArrCheck = [];

  // checking if the rune is repeated in the runic word

  for (let i = 0; i < runicWordArr.length; i++) {
    for (let j = 0; j < runicWordArr.length; j++) {
      if (i !== j && runicWordArr[i] === runicWordArr[j]) {
        // console.log('Words are repeated!');
        return 'Words are repeated!';
      }
    }
  }

  // creating arrays of runes from runic word to check if the word is correct

  for (let i = 0; i < runicWordArr.length; i++) {
    for (let j = 0; j < runes.length; j++) {
      if (runicWordArr[i] === runes[j].rune) {
        runicWordArrCheck.push(runes[j].rune);
        withoutArr.push(runes[j].without);
      }
    }
  }

  // checking if the runes from runic word can be in the same runic word

  for (let i = 0; i < runicWordArr.length; i++) {
    for (let j = 0; j < runicWordArr.length; j++) {
      if (runicWordArr[i] === withoutArr[j]) {
        // console.log('These runes can not appear together in one word!');
        return 'These runes can not appear together in one word!';
      }
    }
  }

  // checking if the amount of '-' in the runic word is less than 1 than the length of the runes in the runic word

  if (dashArr.length !== runicWordArrCheck.length - 1) {
    // console.log('Wrong rune word format or the word has no existing runes!');
    return 'Wrong rune word format or the word has no existing runes!';
  }

  // checking if the runes from runic word are in the set of runes ( const runes)

  if (runicWordArr.length !== runicWordArrCheck.length) {
    // console.log('Wrong rune word format or the word has no existing runes!');
    return 'Wrong rune word format or the word has no existing runes!';
  }

  // calculation of the rune word power

  for (let j = 0; j < runicWordArr.length; j++) {
    for (let i = 0; i < runes.length; i++) {
      if (runes[i].rune === runicWordArr[j]) {
        powerSum += runes[i].power;
      }
    }
  }

  return powerSum;
};
