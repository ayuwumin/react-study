import React, { useState } from 'react';


const App = () => {
    const[n, setN] = useState(0)
    const[name, setName] = useState('')

    //*FORMULÁRIO
    const [name1, setName1] =useState('')
    const [surname, setSurname] =useState('')
    const [age, setAge] =useState('')

    //* CRIANDO CONTATOR
    const handleMinus = () => {
        setN(n-1)
    }
    const handleMore = () => {
        setN(n+1)
    }
    //*INPUT COM STATE
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName( event.target.value )
    }

    return (
        //* CRIANDO CONTATOR
        <div>
            <div>
            <button onClick={handleMinus}>-</button>
            <div>{n}</div>
            <button onClick={handleMore}>+</button>
            </div>


            //*INPUT COM STATE
            <div> 
            Name:
            <input type='text'value={name} onChange={handleInput}/>
            <hr/>
            Your name is: {name}
            </div>

            //* FORMULÁRIO
            <div>
                <div>
                    Nome:
                    <input type='text' value={name1} onChange={(event) => setName1( event.target.value )}/>
                </div>

                <div>
                    Sobrenome:
                    <input type='text' value={surname} onChange={(event) => setSurname( event.target.value )}/>
                </div>

                <div>
                    Idade:
                    <input type='text' value={age} onChange={(event) => setAge( event.target.value )}/>
                </div>
                <hr/>
                Olá {name1} {surname} tudo bem?
                Você tem {age} anos
            </div>
        </div>
        
    )    
}

export default App;