import { readObjectfromLocalStorage, writeObjectToLocalStorage } from "../utils/localstorage";

test('can write and retrieve object from local storage', () => {
    const object = { date: '2025-10-07', guests: 2 };
    writeObjectToLocalStorage('reservation', object);
    const result = readObjectfromLocalStorage('reservation');
    expect(result).toEqual(object);
});
