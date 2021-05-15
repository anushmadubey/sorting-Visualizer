import React from 'react';
import './SortingVisualizer.scss';
import { getMergeSortAnimations } from '../sortingAlgorithm/mergeSort.js';
import { getBubbleSortAnimations } from '../sortingAlgorithm/bubbleSort';


export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            array: [],
        }

        this.resetArray = this.resetArray.bind(this);
        this.mergeSort = this.mergeSort.bind(this);
        this.bubbleSort = this.bubbleSort.bind(this);
    }

    bubbleSort(){
        console.log(this.state.array);
        const animations = getBubbleSortAnimations(this.state.array);
        console.log(animations);
        for (let i = 0; i < animations.length; i++) {
            const isChangeColour = !(i % 4 >= 2);
            const arrayBars = document.getElementsByClassName('array-bar');
            if (isChangeColour) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 4 === 0 ? 'red' : 'pink';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 3);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 3);
            }

        }

        
    }

    resetArray() {
        const array = [];
        for (var i = 0; i < 100; i++) {
            array.push(generateRandomNumber(5, 730));
        }
        this.setState({ array: array });
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);

        for (let i = 0; i < animations.length; i++) {
            const isChangeColour = i % 3 !== 2;
            const arrayBars = document.getElementsByClassName('array-bar');
            if (isChangeColour) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? 'red' : 'pink';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 3);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 3);
            }

        }
    }

    componentDidMount() {
        this.resetArray();
    }


    render() {
        const { array } = this.state;
        return (
            <div className="container">
                {array.map((number, index) =>
                    <div className="array-bar"
                        key={index}
                        style={{ height: `${number}px` }} />
                )}

                <button onClick={this.resetArray}>Reset Array</button>
                <button onClick={this.mergeSort}>Merge Sort</button>
                <button onClick={this.bubbleSort}>Bubble Sort</button>
            </div>

        );

    }
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }
  