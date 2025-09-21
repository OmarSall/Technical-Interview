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