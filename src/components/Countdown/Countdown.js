import React, {Component} from 'react';
import './Countdown.css';

class Countdown extends Component {


    constructor(props) {
        super(props);
        this.state = {
            counter: 40,
            color: "blue",
            ...props
        }
    }

    componentDidMount() {
        setInterval(this.decrementValue.bind(this), 1000);
    }

    decrementValue() {
        this.setState(({counter}) => {

            const newVal = counter - 1;
            switch (true) {
                case newVal > 20 && newVal <= 40:
                    return {counter: newVal, color: "blue"};
                case newVal > 12 && newVal <= 20 :
                    return {counter: newVal, color: "orange"};
                case newVal >= 0 && newVal <= 12:
                    if (newVal < 10) return {counter: `0${newVal}`, color: "red"};
                    return {counter: newVal, color: "red"};
                case newVal <= 0:
                    return {counter: `00`, color: "red"};
                default:
                    return {counter: newVal};
            }
        });
    }

    render() {
        return (
            <div className={"counter"} style={{backgroundColor: this.state.color}}>
                <span className={"value"}>{this.state.counter}</span>
            </div>

        );
    }
}


export default Countdown;
