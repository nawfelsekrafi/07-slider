import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [value, setValue] = useState(0);
  const [persons, setPersons] = useState(data);
  const [position, setPostion] = useState();

  const { id, image, name, title, quote } = persons[value];

  const showNext = () => {
    if (value < data.length - 1) {
      setValue((value) => {
        return (value = value + 1);
      });
    } else {
      setValue(0);
    }
  };

  const showPrevious = () => {
    if (value > 0) {
      setValue((value) => {
        return (value = value - 1);
      });
    } else {
      setValue(data.length - 1);
    }
  };

  useEffect(() => {
    const slider = setInterval(showNext, 4000);
    return () => {
      clearInterval(slider);
    };
  }, [value]);
 

  return (
    <div className="section" key={id}>
      <header className="title">
        <h2>
          <span>/</span> Reviews
        </h2>
      </header>
      <section className="section-center">
        
        <article>
          <img src={image} alt={name} className="person-img" />
          <h4>{name}</h4>
          <span className="title">{title}</span>
          <div className="text">{quote}</div>
          <FaQuoteRight className="icon" />
        </article>
        <FiChevronRight className="next" onClick={showNext} />
        <FiChevronLeft className="prev" onClick={showPrevious} />
      </section>
    </div>
  );
}

export default App;
