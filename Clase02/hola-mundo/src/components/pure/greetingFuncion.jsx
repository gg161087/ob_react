import React, { useState } from 'react'
import PropTypes from 'prop-types'

const GreetingFuncion = (props) => {

    const [age, setAge] = useState(29)

    const birthday = () => {
        setAge(age + 1)
    }

    return (
        <div>
            <h1>¡HOLA MUNDO!</h1>
            <h2>Nombre: {props.name}</h2>
            <h2>Apellido: {props.lastname}</h2>
            <h2>edad : { age }</h2>

            <div>
                <button onClick={birthday}>
                    Cumplir años
                </button>
            </div>
        </div>
    )
}

GreetingFuncion.propTypes = {
    name: PropTypes.string,
    lastname: PropTypes.string,
    age: PropTypes.number
}

export default GreetingFuncion