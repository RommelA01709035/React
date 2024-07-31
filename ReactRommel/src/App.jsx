import { useState } from 'react';
import './App.css';
import { Home } from './Home.jsx';


//componente es una factoria de elementos
//los elementos son los que renderiza react
//los props son inmutables y reasignarle algo es evitar
//que react s}tenga la seguridad d elo que est eusando
// solamente debes crear otra constante
//Puedes crear componentes dentro de otros componentes
//owo es el uso de children en react

//doom virtual es actualizar el componente 
// pero se renderiza lo mismo aunque no lo veas en el doom
//userstae es un hug
//debemos generar valores initiliazeVariable y despues en el archivo 
//de componente mandarlos como prop

export function App() {
  const formatUserName = (userName) => `@${userName}`;
  const [name, setName] = useState('midudev');
  
  return (
    <div className='App'>
      <Home 
        formatUserName={formatUserName} 
        isFollowing={true} 
        userName="midudev"
        name="Miguel Ángel Durán"
      >
        owo owo owo
      </Home>

      <Home 
        formatUserName={formatUserName} 
        isFollowing={false} 
        userName="elon_musk"
        name="Elon Musk"
      /> 

      <Home 
        userName={name}
        formatUserName={formatUserName} 
        isFollowing={false} 
      /> 

      <button onClick={() => setName('pedromichel')}>
        Cambiar Nombre
      </button>
    </div>
  );
}
