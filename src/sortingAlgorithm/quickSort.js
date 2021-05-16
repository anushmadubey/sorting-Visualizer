export function getQuickSortAnimations(array) {
    const animations = [];

    return animations;
}

function quickSort(mainArray, low, high) {

}

function partition(mainArray, low, high) {
    let pointer = low - 1;
    let pivot = mainArray[high];

    for(let j = low; j<=high; j++){
        if(mainArray[j] <= pivot){
            i++;
            swap(mainArray, i, j);
        }
    }
    swap(mainArray, i+1, high)

}

function swap(mainArray, firstIdx, secondIdx){
    let temp = mainArray[firstIdx];
    mainArray[firstIdx] = mainArray[secondIdx];
    mainArray[secondIdx] = temp;
}