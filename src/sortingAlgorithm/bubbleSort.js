export function getBubbleSortAnimations(array){
    const animations = [];

    bubbleSortHelper(array, animations);
    return animations;
}

function bubbleSortHelper(array, animations){
  
    for (let i =0; i<array.length; i++){
        let k = 0;
        for(let j = 0; j < array.length - i - 1; j++){
            // pushing the comparision value twice
            animations.push([j,j+1]);
            animations.push([j,j+1]);
            /////////////////////////////////

            if (array[j] > array[j+1]){
                animations.push([j, array[j+1]]);
                animations.push([j+1, array[j]]);
                var temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
                k++;
            }else{
                animations.push([j,array[j]]);
                animations.push([j,array[j]]);
                k++;
            }
        }
    }
}


