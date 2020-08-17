import React, { useState, useEffect, useRef, } from 'react';
import Toggle from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';

const App = () => {
  const [name, setName] = useTitleInput('');
  const ref = useRef();
  const [dishes, setDishes] = useState([]);

  const fetchDishes = async () => {
    console.log("fetching dishes...")
    const rest = await fetch(
      'https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes'
    );
    const data = await rest.json();
    setDishes(data);
  }

  useEffect(() => {
    fetchDishes();
  }, [])

  return (
    <div className="main-wrapper" ref={ref}>
      <h1 onClick={() => ref.current.classList.toggle('active')}>Level Up Dishes</h1>
      <Toggle/>
      
      <form onSubmit={e => { e.preventDefault(); }}>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
        <button>Submit</button>
      </form>
      {dishes.map((dish, index) => (
        <article className="dish-card dish-card--withImage" key={index}>
          <h3>{dish.title}</h3>
          <p>{dish.desc}</p>
          <div className="ingredients">
            {dish.ingredients.map((ingredient, index) => (
              <span key={index}>{ingredient}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};


export default App;
