import React, { useState } from 'react';


const App = () => {
    //* CRIANDO CONTATOR
    const[n, setN] = useState(0)
    const[name, setName] = useState('')

    const handleMinus = () => {
        setN(n-1)
    }

    const handleMore = () => {
        setN(n+1)
    }

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName( event.target.value )
    }

    return (
        <div>
            <button onClick={handleMinus}>-</button>
            <div>{n}</div>
            <button onClick={handleMore}>+</button>

            //*INPUT COM STATE
            Name:
            <input type='text'value={name} onChange={handleInput}/>
            <hr/>
            Your name is: {name}
        </div>
    )    
}

export default App;