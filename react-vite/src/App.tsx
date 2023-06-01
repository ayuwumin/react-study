import React, { useState } from 'react';
import { Person } from './components/Person';

const App = () => {
    const[show, setShow]= useState(false)
    const handleClick = () => {
        if(show) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    let list = [
        {name: 'yae', age:'400'},
        {name: 'miko', age:'400'},
        {name: 'raiden', age:'1000'},
        {name: 'ayaka', age:'16'},
    ]

    const [name1, setName1] =useState('')
    const [surname, setSurname] =useState('')
    const [age, setAge] =useState('')

    return (

        <div className="ml-10 justify-center space-y-14 font-sans">
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

            <div className='flex justify-center w-32 px-6 h-10 rounded hover:rounded-lg bg-sky-500 text-white' >
                <button onClick={handleClick}>{show ? 'Ocultar' : 'Mostrar'}</button>
            </div>

            {show == true && 
                <div className='text-base font-semibold leading-7 text-gray-900'>
                    <h2>Lista de presença</h2>
                    <ul className='list-disc'>
                        {list.map((item, index) =>(
                        <Person key={index} data={item}/>
                        ))}
                    </ul>
                </div>
            }
        </div> 
    )    
}

export default App;