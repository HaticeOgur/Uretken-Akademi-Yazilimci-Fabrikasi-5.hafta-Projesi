import React, { Component } from "react";

class Kelvin extends Component {
    render() {
        const sıcaklık = this.props.sıcaklık;
        const kelvin = (sıcaklık+273.15);

        return (
            <div>
                <h4>Kelvin:{kelvin} </h4>
            </div>
        );

    }
}
export default Kelvin;