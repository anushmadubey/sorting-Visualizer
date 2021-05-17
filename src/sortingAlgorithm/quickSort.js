export function getQuickSortAnimations(array) {
    const animations = [];
    quickSort(array, 0, array.length - 1, animations);
    return animations;
}

function quickSort(mainArray, low, high, animations) {
    if (low < high) {
        let partition = getPartition(mainArray, low, high, animations);
        quickSort(mainArray, low, partition - 1, animations);
        quickSort(mainArray, partition + 1, high, animations);
    }
}

function getPartition(mainArray, low, high, animations) {
    let pointer = low - 1;
    let pivot = mainArray[high];
    for (let j = low; j < high; j++) {
        // entering the 2 comparing values, twice
        
        animations.push([j, high]);
        animations.push([j, high]);

        if (mainArray[j] <= pivot) {
            pointer++;
            swap(mainArray, pointer, j);
            animations.push([pointer, mainArray[j]]);
        }else{
            animations.push([j, mainArray[j]]);
        }
    }
    swap(mainArray, pointer + 1, high)
    // the last comparision
    animations.push([pointer + 1, high]);
    animations.push([pointer + 1, high]);
    animations.push([pointer + 1, mainArray[high]]);
    return pointer + 1;

}

function swap(mainArray, firstIdx, secondIdx) {
    let temp = mainArray[firstIdx];
    mainArray[firstIdx] = mainArray[secondIdx];
    mainArray[secondIdx] = temp;
}