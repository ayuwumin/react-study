//import React from 'react'
import { Header } from './components/Header'
import { Photo } from './components/Photo';
import { useState } from 'react';

// const App = () => {
// return React.createElement('a',{
//  href: 'https://github.com/ayuwumin'
// },'Clique aqui')
// }

//or 
//<a href='https://github.com/ayuwumin'>clique aqui</a>

const App = () => { 
    const [name, setName] = useState('Yae Miko') // state

    const handleClick = () => {
        setName('Raiden Shogun')
    }

    return(
        <div>
            <Header title='Welcome'/>
            <Header title='Welcome 2.0'/>

            
            <Photo legend="Google" >
                <img src="https://www.google.com.br/google.jpg"/>
            </Photo>

            meu nome é {name}
            <button onClick={handleClick}>Click Here!</button>
        </div>
    )
}

export default App;