const Phonebook = {
  John: 1239,
  Ann: 606787,
};
const telegramContacts = {
  list: {
    "max gud": undefined,
    "Викуля Бойкова": +79811997891,
    Дашка: +79019981108,
    "Karina Avagyan": +381605599855,
    "Маша Кандинская": +79052032688,
    Игорь: undefined,
    Алиса: +79643343243,
    "Matija Stepanović": +79261346436,
    Ску: +79994417546,
  },
};
const Object1 = {
  contacts: telegramContacts,
  phonebook: Phonebook,
};
const copyPhonebook = structuredClone(Phonebook);
const copyTelegramContacts = structuredClone(telegramContacts);
Phonebook["John"] = 22222;
telegramContacts["Ску"] = 4444;
console.log(telegramContacts);
console.log(copyTelegramContacts);
console.log(Object1);
