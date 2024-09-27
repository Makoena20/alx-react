const { Map, fromJS } = require('immutable');

function mergeDeeplyElements(page1, page2) {
    // Convert the objects to Immutable Maps
    const map1 = fromJS(page1);
    const map2 = fromJS(page2);

    // Define a recursive function to merge Maps
    function mergeMaps(mapA, mapB) {
        return mapA.mergeDeep(mapB, (a, b) => {
            // If both values are Maps, merge them recursively
            if (Map.isMap(a) && Map.isMap(b)) {
                return mergeMaps(a, b);
            }
            // If the values are the same, keep one of them (in this case, keep a)
            return a;
        });
    }

    // Merge the two Maps deeply
    const merged = mergeMaps(map1, map2);
    
    // Return the merged object as a plain JavaScript object
    return merged.toJS();
}

// Example usage:
const page1 = {
    'user-1': {
        id: 1,
        name: 'test',
        likes: {
            1: {
                uid: 1234,
            }
        }
    },
};

const page2 = {
    'user-1': {
        likes: {
            2: {
                uid: 134,
            }
        }
    },
};

const mergedResult = mergeDeeplyElements(page1, page2);
console.log(mergedResult);

