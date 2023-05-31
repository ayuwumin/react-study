import React, { useState } from 'react';
import { Button } from './components/button';


const App = () => {
    let textButton = 'Click Here'

    const buttonEventAction = (txt: string) => {
        alert('Frase do app: ' +txt)
    }    

    const [name1, setName1] =useState('')
    const [surname, setSurname] =useState('')
    const [age, setAge] =useState('')

    // const[n, setN] = useState(0)
    // const[name, setName] = useState('')
    // const handleMinus = () => {
    //     setN(n-1)
    // }
    // const handleMore = () => {
    //     setN(n+1)
    // }

    // const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setName( event.target.value )
    // }

    return (

        <div className="flex justify-center space-y-14 font-sans">
            {/* <div>
            <button onClick={handleMinus}>-</button>
            <div>{n}</div>
            <button onClick={handleMore}>+</button>
            </div>
            <div> 
            
            
            <input type='text'value={name} onChange={handleInput}/>
            <hr/>
            Your name is: {name}
            </div> */}

            <div>
                <div>
                <h2 className="text-base font-semibold leading-7 text-gray-900">Form</h2>
                <label className="block text-sm font-medium leading-6 text-gray-900">Name:</label>
                    <input type='text' value={name1} onChange={(event) => setName1( event.target.value )} className='text-gray-900'/>
                </div>

                <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">Surname:</label>
                    <input type='text' value={surname} onChange={(event) => setSurname( event.target.value )} className='text-gray-900'/>
                </div>

                <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">Age:</label>
                    <input type='text' value={age} onChange={(event) => setAge( event.target.value )} className='text-gray-900'/>
                </div>
                <hr/>

                <label className="block text-sm font-medium leading-6 text-gray-900">
                    Olá {name1} {surname}, sua idade é {age} anos.
                </label>
            </div>

            <div className='flex px-6 h-10 rounded hover:rounded-lg bg-sky-500 text-white'>
                <Button text={textButton} clickFn={buttonEventAction}/>
            </div>

        </div>
        
    )    
}

export default App;