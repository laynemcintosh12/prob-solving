// add whatever parameters you deem necessary
function constructNote(message, letters) {
    const letterCounts = {};

    for (let letter of letters) {
        if (!letterCounts[letter]) {
            letterCounts[letter] = 0;
        }

        letterCounts[letter]++;
    }

    for (let letter of message) {
        if (!letterCounts[letter]) {
            return false;
        }

        letterCounts[letter]--;
    }

    return true;
}
