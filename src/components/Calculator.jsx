import React from 'react';
import Inputfunction from './input';

const Calculator = () => (
  <section>
    <Inputfunction />
    <div className="minus1margin">
      <button className="clearSquare" type="button">A/C</button>
      <button className="clearSquare" type="button">+/-</button>
      <button className="clearSquare" type="button">%</button>
      <button className="orangeSquare" type="button">÷</button>
    </div>
    <div className="minus1margin">
      <button className="clearSquare" type="button">7</button>
      <button className="clearSquare" type="button">8</button>
      <button className="clearSquare" type="button">9</button>
      <button className="orangeSquare" type="button">x</button>
    </div>
    <div className="minus1margin">
      <button className="clearSquare" type="button">4</button>
      <button className="clearSquare" type="button">5</button>
      <button className="clearSquare" type="button">6</button>
      <button className="orangeSquare" type="button">-</button>
    </div>
    <div className="minus1margin">
      <button className="clearSquare" type="button">1</button>
      <button className="clearSquare" type="button">2</button>
      <button className="clearSquare" type="button">3</button>
      <button className="orangeSquare" type="button">+</button>
    </div>
    <div>
      <button className="clearSquare2" type="button">0</button>
      <button className="clearSquare" type="button">.</button>
      <button className="orangeSquare" type="button">=</button>
    </div>
  </section>
);

export default Calculator;
