/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<TKey, TValue> {
  key: TKey;
  value: TValue;
}
class Pair <TKey, TValue> implements KeyValuePair<TKey, TValue> {
  key: TKey;
  value: TValue;

  constructor(key: TKey, value: TValue) {
      this.key = key;
      this.value = value;
  }
}

export {};