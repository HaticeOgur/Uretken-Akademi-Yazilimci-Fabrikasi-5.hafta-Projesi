import React, { Component } from "react";

class Celcius extends Component {
    render() {
        const sıcaklık = this.props.sıcaklık;
        const celcius = sıcaklık;

        return (
            <div>
                <h4>Celcius:{celcius} </h4>
            </div>
        );

    }
}

export default Celcius;