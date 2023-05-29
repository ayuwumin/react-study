//import React from 'react'
import { Header } from './components/Header'
import { Photo } from './components/Photo';

// const App = () => {
// return React.createElement('a',{
//  href: 'https://github.com/ayuwumin'
// },'Clique aqui')
// }

//or 
//<a href='https://github.com/ayuwumin'>clique aqui</a>

const App = () => {

    const handleButtonClick = () => {
        alert('Click')
    }

    return(
        <div>
            <Header title='Welcome'/>
            <Header title='Welcome 2.0'/>

            
            <Photo legend="Google" >
                <img src="https://www.google.com.br/google.jpg"/>
            </Photo>

            <button onClick={handleButtonClick}>Click Here!</button>
        </div>
    )
}

export default App;