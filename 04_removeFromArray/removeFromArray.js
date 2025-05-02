const removeFromArray = function(array, ...otherAruments) {
    let result = []
    let shouldRemove
    
    for (i = 0; i < array.length; i++) {
        shouldRemove = false

        for (j = 0; j < otherAruments.length; j++) {
            if (array[i] === otherAruments[j]) {
                shouldRemove = true
                break
            }
        }

        if (!shouldRemove) {
            result.push(array[i])
        }
    }

    return result
};

// Do not edit below this line
module.exports = removeFromArray;
