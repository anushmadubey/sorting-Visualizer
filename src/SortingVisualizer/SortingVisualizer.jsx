import React from 'react';
import './SortingVisualizer.css';


export default class SortingVisualizer extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            array: [],
        }

        this.resetArray = this.resetArray.bind(this);

    }
    resetArray() {
        const array = [];
        for (var i = 0; i < 310; i++) {
            array.push(generateRandomNumber(5, 730));
        }
        this.setState({array: array});
    }

    componentDidMount(){
        this.resetArray();
    }

  
    render() {
  
        return (
            <div>
                <div className="container">
                    {this.state.array.map((number) => <div className="array-bar" style={{ height: `${number}px` }} />)}
                </div>
                <div>
                    <button onClick={this.resetArray}>Reset Array</button>
                </div>
            </div>
        );

    }
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}