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
    return(
        <div>
            <Header title='Welcome'/>
            <Header title='Welcome 2.0'/>

            
            <Photo legend="Google" >
                <img src="https://google.com.br/google.jpg"/>
            </Photo>
        </div>
    )
}

export default App;