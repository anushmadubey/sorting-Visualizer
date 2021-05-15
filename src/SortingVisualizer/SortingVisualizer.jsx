import React from 'react';
import './SortingVisualizer.scss';
import { getMergeSortAnimations } from '../sortingAlgorithm/mergeSort.js';


export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            array: [],
        }

        this.resetArray = this.resetArray.bind(this);
        this.mergeSort = this.mergeSort.bind(this);
    }
    resetArray() {
        const array = [];
        for (var i = 0; i < 310; i++) {
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

            </div>

        );

    }
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}