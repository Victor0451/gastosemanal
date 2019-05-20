import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Gasto extends Component {
    render() {
        const {cantidadGasto, nombreGasto} = this.props.gasto
    
        return (
            <div className = "gastos">
                <li className="gastos-realizados">
                    <p>
                        {nombreGasto}
                        <span className="gastos-realizados"> {cantidadGasto} </span>
                    </p>
                </li>
            </div>
        );
    }
}

Gasto.porpType = {
    gasto: PropTypes.object.isRequired
}

export default Gasto;