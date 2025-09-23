/*
    1. Liczenie wystąpień słów
    Napisz funkcję countWords(text), która przyjmuje string i zwraca obiekt, gdzie kluczami są słowa, a wartościami – liczba ich wystąpień.
    Przykład:
    countWords("ala ma kota ala lubi psa");
    // { ala: 2, ma: 1, kota: 1, lubi: 1, psa: 1 }

 */

const example = "ala ma kota ala lubi psa";

function countWords(text) {
    const wordsDict = {};
    text.split(" ").forEach((word) => {
        wordsDict[word] = (wordsDict[word] || 0) + 1;
    })

    return wordsDict
}

console.log(countWords(example))

/*
    2. Słownik synonimów
    Stwórz program, który przechowuje słownik synonimów w obiekcie. Napisz funkcję getSynonyms(word), która zwróci tablicę synonimów danego słowa.
    Przykład:
    getSynonyms("szybki");
    ["prędki", "żwawy", "błyskawiczny"]
*/

const synonyms = {
    szybki: ["prędki", "żwawy", "błyskawiczny"],
    ładny: ["piękny", "uroczy", "atrakcyjny"],
    mądry: ["inteligentny", "bystry", "rozumny"]
};

function getSynonyms(word) {
    return synonyms[word] || [];
}

console.log(getSynonyms("szybki"));
console.log(getSynonyms("ładny"));
console.log(getSynonyms("kot"));

/*
    3. Unikalne znaki w napisie
    Napisz funkcję uniqueChars(str), która sprawdzi, czy w napisie wszystkie znaki są unikalne. Najlepiej zrobić to przy użyciu słownika, w którym oznaczysz, czy dany znak już wystąpił.
    Przykład:
    uniqueChars("kot"); // true
    uniqueChars("kotek"); // false
*/

function uniqueChars(str) {
    const charsDictionary = {};

    for (const char of str) {
        if (charsDictionary[char]) {
            return false;
        }
        charsDictionary[char] = true;
    }
    return true;
}

console.log(uniqueChars('kotek')); // false

/*
    4. Grupowanie ludzi wg wieku
    Masz tablicę obiektów:
        const people = [
            { name: "Ala", age: 20 },
            { name: "Ola", age: 20 },
            { name: "Jan", age: 30 },
            { name: "Adam", age: 30 },
            { name: "Ewa", age: 40 }
        ];

    Napisz funkcję groupByAge(people), która zwróci obiekt, gdzie kluczem będzie wiek, a wartością – lista imion.
        Przykład:
    groupByAge(people);
    {
      20: ["Ala", "Ola"],
      30: ["Jan", "Adam"],
      40: ["Ewa"]
    }
*/

function groupByAge(peopleArray) {
    const peopleAgeDict = {};
    for (const person of people) {
        const {age, name} = person;

        if (!peopleAgeDict[age]) {
            peopleAgeDict[age] = [name];
        } else {
            peopleAgeDict[age].push(name);
        }
    }
    return peopleAgeDict;
}

console.log(groupByAge(people))

/*
    5. Anagramy
    Napisz funkcję areAnagrams(word1, word2), która sprawdzi, czy dwa słowa są anagramami (mają te same litery w tej samej liczbie).
     Do tego użyj słownika, aby policzyć wystąpienia liter.
     Przykład:
    areAnagrams("listen", "silent"); // true
    areAnagrams("kot", "tok"); // true
    areAnagrams("kot", "pies"); // false
 */

function areAnagrams(word1, word2) {
    wordCountDict = {};
    for (const letter of word1) {
        if (!wordCountDict[letter]) {
            wordCountDict[letter] = 1;
        } else {
            wordCountDict[letter] += 1;
        }
    }
    for (const letter of word2) {
        if (!wordCountDict[letter]) {
            return false;
        } else {
            wordCountDict[letter] -= 1;
        }
    }
    const sum = Object.values(wordCountDict).reduce((sum, val) => sum + val, 0);
    if (!sum) {
        return true;
    }
}

// function areAnagrams(word1, word2) {
//     if (word1.length !== word2.length) return false;
//     return word1.split("").sort().join("") === word2.split("").sort().join("");
// }


areAnagrams("listen", "silent")
areAnagrams("kot", "tok");
areAnagrams("kot", "pies");

/*
    6. Najczęściej używany znak
    Napisz funkcję mostFrequentChar(str), która zwróci znak najczęściej występujący w napisie (użyj słownika do zliczania).
     Przykład:
    mostFrequentChar("programowanie");
// "a"
 */

function mostFrequentChar(str) {
    const charDict = {};
    for (const char of str) {
        charDict[char] = (charDict[char] || 0) + 1;
    }
    let maxChar = null;
    let maxCount = 0;

    for (const char in charDict) {
        const count = charDict[char];
        if (count > maxCount) {
            maxCount = count;
            maxChar = char;
        }
    }
    return maxChar;
}

// function mostFrequentChar(str) {
//     const charDict = {};
//     for (const char of str) {
//         charDict[char] = (charDict[char] || 0) + 1;
//     }
//
//     const maxCount = Math.max(...Object.values(charDict));
//
//     const winners = Object.keys(charDict).filter(char => charDict[char] === maxCount);
//
//     return { chars: winners, count: maxCount };
// }
//
// console.log(mostFrequentChar("programowanie"));
// // { chars: [ "r", "a" ], count: 3 }


/*
7. Indeksowanie produktów
Masz tablicę produktów:
const products = [
  { id: 1, name: "Mleko" },
  { id: 2, name: "Chleb" },
  { id: 3, name: "Masło" }
];

Napisz funkcję indexProducts(products), która zwróci obiekt/dictionary, gdzie kluczem będzie id, a wartością cały obiekt produktu.
 Przykład:
indexProducts(products);
// {
//   1: { id: 1, name: "Mleko" },
//   2: { id: 2, name: "Chleb" },
//   3: { id: 3, name: "Masło" }
// }

 */

const products = [
    { id: 1, name: "Mleko" },
    { id: 2, name: "Chleb" },
    { id: 3, name: "Masło" }
];

function indexProducts(productsArray) {
    const productsDict = {};

    for (product of productsArray) {
        const {id} = product;
        productsDict[id] = product
    }
    return productsDict
}

console.log(indexProducts(products));
