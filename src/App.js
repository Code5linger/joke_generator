import './App.css';
import React, {useState, useEffect} from 'react';

const API_URL = `http://api.icndb.com/jokes/random`;

function App() {
  const [quote, setQuote] = useState('');

  const generateQuote = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setQuote(data.value.joke));
  }

  useEffect(() =>{
    generateQuote();
  }, [])

  return (
    <div className="box">
      <h3>Quote</h3>
      <p dangerouslySetInnerHTML={{__html: quote}} />
      <button onClick={generateQuote}>Get New Quote 💭</button>
    </div>
  );
}

export default App;
