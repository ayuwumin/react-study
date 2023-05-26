//import React from 'react'
import { Header } from './components/Header'

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
        </div>
    )
}

export default App;