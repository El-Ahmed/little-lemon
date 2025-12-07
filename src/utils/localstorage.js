
function writeObjectToLocalStorage(name, obj) {
    localStorage.setItem(name, JSON.stringify(obj))
}
function readObjectfromLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name))
}

export { writeObjectToLocalStorage, readObjectfromLocalStorage }