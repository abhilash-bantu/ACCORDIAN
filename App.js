import React, { useState } from 'react';
import './App.css';

function App() {
  
  const[selected, setSelected] = useState(null);

  const toggle = (i) =>{
    if (selected === i){
        return setSelected(null);
    }

    setSelected(i);
  }

  return(
    <div className="wrapper">
      <div className="accordian">
        {data.map((item, i)=>(
          <div key={i} className="item">
            <div className="title" onClick={()=> toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={selected === i ? 'content show' : 'content'}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    question: 'Question1',
    answer: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces. The core idea of React is to combine short, independent code fragments into complex UI interfaces. These code fragments are called components'
  },
  {
    question: 'Question2',
    answer: 'Jest was invented by the same teams who designed React, its the most suitable choice for testing. As one of the most critical React developer tools to follow in 2023 and beyond, it can work with a range of adjacent technologies and tools, including Vue JS, Angular, TypeScript, Node JS, and Babel.'
  },
  {
    question: 'Question3',
    answer:   'To run ReactJS we will require Node. js on our system. Node. js is a server which will help us to run the React code.'
  }
];

export default App;

