import React from "react";

export default class DigitalClockface extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        const year = this.state.date.getFullYear();
        const month = this.padNumber(this.state.date.getMonth() + 1);
        const day = this.padNumber(this.state.date.getDate());

        const hour = this.padNumber(this.state.date.getHours());
        const minute = this.padNumber(this.state.date.getMinutes());
        const second = this.padNumber(this.state.date.getSeconds());

        const time = `${hour}:${minute}:${second}`;
        const date = `${year}-${month}-${day}`;

        return (<div>
            <div className="date">{date}</div>
            <div className="time">{time}</div>
        </div>);
    }

    padNumber(number) {
        return `${number}`.padStart(2, '0')
    }
}