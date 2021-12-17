import React, {useState} from 'react';
import Reactmarkdown from 'react-markdown';
import logo from './logo.svg';
import './App.css';


function App() {

  const [markdown, setMarkdown] = useState('## markdown preview')
  return <main>
    <section className="markdown">
      <textarea className="input" 
      value={markdown}
      onChange={(e) => setMarkdown(e.target.value)}></textarea>
      <article className='result'>
        <Reactmarkdown>
        {markdown}
        </Reactmarkdown>
      </article>

    </section>
    </main>
}

export default App;
