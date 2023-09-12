import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Greeting extends Component {

    constructor(props) {
        super(props)
        this.state = {
            age : 35
        }
    }

    render() {
        return (
            <div>
                <h1>¡HOLA MUNDO!</h1>
                <h2>Nombre: {this.props.name}</h2>
                <h2>Apellido: {this.props.lastname}</h2>
                <h2>edad : {this.state.age}</h2>

                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        )
    }

    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age +1
            }
        ))
    }
    /* static propTypes = { second: third } */
}
Greeting.propTypes = {
    name: PropTypes.string,
}
