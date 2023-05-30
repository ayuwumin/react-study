import React, { useState } from 'react';


const App = () => {
    // const[n, setN] = useState(0)
    // const[name, setName] = useState('')


    const [name1, setName1] =useState('')
    const [surname, setSurname] =useState('')
    const [age, setAge] =useState('')


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

        <div className="flex justify-center space-y-14">
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
                <label className="block text-sm font-medium leading-6 text-gray-900">Sobrenome:</label>
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
        </div>
        
    )    
}

export default App;