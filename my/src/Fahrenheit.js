import React, { Component } from "react";

class Fahrenheit extends Component {
    render() {
        const sıcaklık = this.props.sıcaklık;
        const fahrenheit = ((sıcaklık*9)/5+32);

        return (
            <div>
                <h4>Fahrenheit:{fahrenheit} </h4>
            </div>
        );

    }
}

export default Fahrenheit;