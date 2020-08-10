import React, { useState, useEffect, useRef, createContext } from 'react';
import Toggle from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';

export const UserContext = createContext();

const App = () => {
  const [name, setName] = useTitleInput('');
  const ref = useRef();
  console.log(ref);
  return (
    <UserContext.Provider
      value={{
        usert: true
      }}
    >

      <div className="main-wrapper" ref={ref}>
        <h1 onClick={() => console.log(ref.current.classList.toggle('active'))}>Level Up Dishes</h1>
        <Toggle/>
        <form onSubmit={e => {
          e.preventDefault();
        }
        
      }>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
          <button>Submit</button>
        </form>
      </div>
    </UserContext.Provider>
  );
};


export default App;
