import { React, useState } from 'react';
import Inputfunction from './input';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [mathObject, setMathObject] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (thisButton) => {
    setMathObject(calculate(mathObject, thisButton));
  };

  return (
    <section className="dispflex1">
      <h1>Let&apos;s do some math!</h1>
      <div>
        <Inputfunction inputvalue={mathObject.next || mathObject.total || 0} />
        <div className="minus1margin">
          <button onClick={() => handleClick('AC')} className="clearSquare" type="button">AC</button>
          <button onClick={() => handleClick('+/-')} className="clearSquare" type="button">+/-</button>
          <button onClick={() => handleClick('%')} className="clearSquare" type="button">%</button>
          <button onClick={() => handleClick('÷')} className="orangeSquare" type="button">÷</button>
        </div>
        <div className="minus1margin">
          <button onClick={() => handleClick('7')} className="clearSquare" type="button">7</button>
          <button onClick={() => handleClick('8')} className="clearSquare" type="button">8</button>
          <button onClick={() => handleClick('9')} className="clearSquare" type="button">9</button>
          <button onClick={() => handleClick('x')} className="orangeSquare" type="button">x</button>
        </div>
        <div className="minus1margin">
          <button onClick={() => handleClick('4')} className="clearSquare" type="button">4</button>
          <button onClick={() => handleClick('5')} className="clearSquare" type="button">5</button>
          <button onClick={() => handleClick('6')} className="clearSquare" type="button">6</button>
          <button onClick={() => handleClick('-')} className="orangeSquare" type="button">-</button>
        </div>
        <div className="minus1margin">
          <button onClick={() => handleClick('1')} className="clearSquare" type="button">1</button>
          <button onClick={() => handleClick('2')} className="clearSquare" type="button">2</button>
          <button onClick={() => handleClick('3')} className="clearSquare" type="button">3</button>
          <button onClick={() => handleClick('+')} className="orangeSquare" type="button">+</button>
        </div>
        <div>
          <button onClick={() => handleClick('0')} className="clearSquare2" type="button">0</button>
          <button onClick={() => handleClick('.')} className="clearSquare" type="button">.</button>
          <button onClick={() => handleClick('=')} className="orangeSquare" type="button">=</button>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
