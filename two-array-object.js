// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    let obj = {};
    keys.forEach((key, index) => {
        obj[key] = index < values.length ? values[index] : null;
    });
    return obj;
}
