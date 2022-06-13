import React from 'react';
import './App.css';

function App() {
   const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        // We'll work on this next
        setThingsArray(prevThingsArray => {
            return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
        })
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
  return (
    <main>
      <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    </main>
  );
}

export default App;