/**
 * For cases, where string index has been calculated in Python using `len()`.
 * The issue being that Python counts emojis as 1 character, while JS counts them as 2.
 * https://stackoverflow.com/questions/54369513/how-to-count-the-correct-length-of-a-string-with-emojis-in-javascript
 * https://stackoverflow.com/questions/69584227/javascript-vs-python-emoji-length
 * TODO: Similar issue will likely occur during entity insertion in autocomplete
 */
export function pySlice(text: string, start: number, end: number) {
    return [...text].slice(start, end).join('');
}

export function pyLen(text: string) {
    return [...text].length;
}

