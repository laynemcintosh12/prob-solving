function countPairs(arr, num) {
    let count = 0;
    let seen = new Set();

    for (let i = 0; i < arr.length; i++) {
        let diff = num - arr[i];
        if (seen.has(diff)) {
            count++;
        }
        seen.add(arr[i]);
    }

    return count;
}
