import React from 'react';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    add = () => {
        this.setState((previousState) => {
            return {
                ...previousState,
                count: previousState.count + 1
            }
        });
    }

    subtract = () => {
        this.setState((previousState) => {
            return {
                ...previousState,
                count: previousState.count - 1
            }
        });
    }

    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={this.add}>SUM</button>
                <button onClick={this.subtract}>SUBTRACT</button>
            </div>
        );
    }
}

export default Counter;
