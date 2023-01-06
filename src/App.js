import React, {useState} from 'react';

import Header from './components/Header';
import Definition from './components/Definition';

function App() {

  const[word, setWord] = useState("");

  function changeWord(text) {
    setWord(text);
  }
  return (
    <div className="container">
    <main>
      <Header onChange={changeWord}/>
      <Definition word={word}/>
    </main>
  </div>
  );
}

export default App;
