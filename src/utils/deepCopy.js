export const deepCopy = (original) => {
    if (original === null || typeof original !== 'object') {
        return original;
    }

    if (Array.isArray(original)) {
        const newArray = [];
        for (let i = 0; i < original.length; i++) {
            newArray[i] = deepCopy(original[i]);
        }
        return newArray;
    }

    const newObj = {};
    for (const key in original) {
            newObj[key] = deepCopy(original[key]);
    }

    return newObj;
}