import './App.css'
import { Home } from './Home.jsx'


//componente es una factoria de elementos
//los elementos son los que renderiza react
//los props son inmutables y reasignarle algo es evitar
//que react s}tenga la seguridad d elo que est eusando
// solamente debes crear otra constante
//Puedes crear componentes dentro de otros componentes
//owo es el uso de children en react

export function App() {
  const formatUserName = (userName)  => `@${userName}`

  return (
    <div className='App'>
    
    <Home 
    formatUserName={formatUserName} 
    isFollowing 
    userName="midudev"
    name="Miguel Ángel Durán">
    owo
    owo
    owo

    </Home>
    <Home formatUserName = {formatUserName} isFollowing={false}userName="elon musk" name="Elon Musk"> 

    </Home>
    </div>
    
  )
}

