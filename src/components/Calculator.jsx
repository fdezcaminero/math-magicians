import React from 'react';

const Calculator = () => (
  <section>
    <div>
      <input placeholder="0"></input>
    </div>
    <div>
      <button type="button">A/C</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button className="orangeSquare" type="button">÷</button>
    </div>
    <div>
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button className="orangeSquare" type="button">x</button>
    </div>
    <div>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button className="orangeSquare" type="button">-</button>
    </div>
    <div>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button className="orangeSquare" type="button">+</button>
    </div>
    <div>
      <button type="button">0</button>
      <button type="button">.</button>
      <button className="orangeSquare" type="button">=</button>
    </div>
  </section>
);

export default Calculator;
